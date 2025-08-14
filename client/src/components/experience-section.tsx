import { useQuery } from "@tanstack/react-query";
import { type Experience } from "@shared/schema";
import { Building } from "lucide-react";

export function ExperienceSection() {
  const { data: experience, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experience"],
  });

  if (isLoading) {
    return (
      <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-secondary dark:text-slate-400">Loading experience...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Real-world application of software development skills in professional environments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience?.map((exp) => (
            <div key={exp.id} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-secondary dark:text-slate-400 mb-6">{exp.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                      <ul className="text-secondary dark:text-slate-400 text-sm space-y-1">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
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
