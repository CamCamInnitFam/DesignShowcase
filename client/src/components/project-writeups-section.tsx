import { useQuery } from "@tanstack/react-query";
import { type Document } from "@shared/schema";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectWriteupsSection() {
  const { data: writeups, isLoading } = useQuery<Document[]>({
    queryKey: ["/api/documents/type/project-writeup"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Documentation</h2>
            <p className="text-lg text-secondary dark:text-slate-400">Loading project writeups...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Project Documentation</h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Detailed technical documentation, design documents, and research papers from my key projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {writeups?.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700"
              data-testid={`writeup-card-${doc.id}`}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white text-2xl h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{doc.title}</h3>
                  <p className="text-secondary dark:text-slate-400 mb-6">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={() => window.open(doc.fileUrl, '_blank')}
                        className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                        data-testid={`download-writeup-${doc.id}`}
                      >
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </Button>
                      <span className="text-sm text-secondary dark:text-slate-400">
                        PDF • {doc.filename}
                      </span>
                    </div>
                    {doc.projectId && (
                      <button
                        onClick={() => {
                          const element = document.getElementById('projects');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-primary hover:text-blue-700 flex items-center space-x-1 text-sm font-medium transition-colors"
                        data-testid={`view-project-${doc.projectId}`}
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>View Project</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {(!writeups || writeups.length === 0) && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 dark:text-slate-400 mb-2">
                Project Documentation Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-slate-500">
                Technical writeups and research papers will be added here as projects are completed.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}