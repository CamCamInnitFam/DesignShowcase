import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:slug");
  const projectSlug = params?.slug;

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">Loading project...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find project by converting title to slug
  const project = projects?.find(p => 
    p.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') === projectSlug
  );

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
              <a href="/" className="text-primary hover:underline">Return to Portfolio</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button
                onClick={() => window.history.back()}
                variant="ghost"
                className="mb-6 flex items-center space-x-2"
                data-testid="back-button"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Portfolio</span>
              </Button>
              
              {project.imageUrl && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              )}

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "completed" 
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      : project.status === "in-progress"
                      ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                      : "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  }`}>
                    {project.status === "completed" ? "Completed" : 
                     project.status === "in-progress" ? "In Development" : "Coming Soon"}
                  </span>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p className="text-lg text-secondary dark:text-slate-400 mb-8">
                {project.description}
              </p>

              {project.status === "completed" ? (
                <div className="space-y-6">
                  <div>
                    <h3>Key Features</h3>
                    <ul>
                      <li>Detailed technical implementation showcasing {project.technologies.join(", ")}</li>
                      <li>Professional development practices and code organization</li>
                      <li>Comprehensive testing and optimization</li>
                      <li>User-focused design and experience</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Technical Highlights</h3>
                    <p>
                      This project demonstrates proficiency in {project.technologies.join(", ")} through 
                      practical application and problem-solving. The implementation showcases understanding 
                      of software engineering principles and best practices.
                    </p>
                  </div>

                  <div>
                    <h3>Development Process</h3>
                    <p>
                      Developed as part of academic coursework and personal learning, this project 
                      represents hands-on experience with {project.category.toLowerCase()} development. 
                      The process involved planning, implementation, testing, and iterative improvement.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3>Project Status</h3>
                    <p>
                      This project is currently {project.status === "in-progress" ? "in development" : "planned for future development"}. 
                      It will showcase skills in {project.technologies.join(", ")} and demonstrate 
                      capabilities in {project.category.toLowerCase()}.
                    </p>
                  </div>

                  <div>
                    <h3>Planned Features</h3>
                    <ul>
                      <li>Implementation using {project.technologies.join(", ")}</li>
                      <li>Modern development practices and methodologies</li>
                      <li>Comprehensive documentation and testing</li>
                      <li>Portfolio-quality presentation and user experience</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                <div className="flex space-x-4">
                  {project.projectUrl && project.status === "completed" && (
                    <Button
                      onClick={() => window.open(project.projectUrl, '_blank')}
                      className="bg-primary hover:bg-blue-700 text-white flex items-center space-x-2"
                      data-testid="view-live-project"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Live Project</span>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      variant="outline"
                      className="flex items-center space-x-2"
                      data-testid="view-source-code"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Source Code</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}