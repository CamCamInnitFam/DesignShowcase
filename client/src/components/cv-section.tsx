import { useQuery } from "@tanstack/react-query";
import { type Document } from "@shared/schema";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CVSection() {
  const { data: cvDocs, isLoading } = useQuery<Document[]>({
    queryKey: ["/api/documents/type/cv"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Curriculum Vitae</h2>
            <p className="text-lg text-secondary dark:text-slate-400">Loading CV...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Curriculum Vitae</h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Download my comprehensive CV highlighting education, technical skills, professional experience, and achievements.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {cvDocs?.map((doc) => (
            <div 
              key={doc.id}
              className="bg-gray-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white text-2xl h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{doc.title}</h3>
                  <p className="text-secondary dark:text-slate-400 mb-6">{doc.description}</p>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => window.open(doc.fileUrl, '_blank')}
                      className="bg-primary hover:bg-blue-700 text-white flex items-center space-x-2"
                      data-testid="download-cv-button"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download CV</span>
                    </Button>
                    <span className="text-sm text-secondary dark:text-slate-400">
                      PDF • {doc.filename}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}