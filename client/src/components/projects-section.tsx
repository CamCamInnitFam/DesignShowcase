import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import { useState } from "react";
import { ExternalLink, Code2, Calendar } from "lucide-react";
import { Link } from "wouter";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
              Loading projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

  const allTechnologies = ["all", "cpp", "unity", "unreal", "javascript", "java", "twine"];
  
  const techFilterMap: { [key: string]: string } = {
    "all": "all",
    "cpp": "C++",
    "unity": "Unity",
    "unreal": "Unreal Engine",
    "javascript": "JavaScript",
    "java": "Java",
    "twine": "Twine"
  };

  const filteredProjects = projects?.filter(project => {
    if (activeFilter === "all") return true;
    const filterTech = techFilterMap[activeFilter];
    return project.technologies.some(tech => 
      tech.toLowerCase().includes(filterTech.toLowerCase()) ||
      (filterTech === "Unreal Engine" && tech.includes("Unreal"))
    );
  }) || [];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "in-progress":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      case "coming-soon":
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Development";
      case "coming-soon":
        return "Coming Soon";
      default:
        return status;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            A collection of my game development and software engineering projects from university coursework, personal learning, and professional experience.
          </p>
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`tech-badge px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === tech
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600"
              }`}
              data-testid={`filter-${tech}`}
            >
              {tech === "all" ? "All Projects" : techFilterMap[tech] || tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
              style={{ opacity: project.status === "coming-soon" || project.status === "in-progress" ? 0.75 : 1 }}
              data-testid={`project-card-${project.id}`}
            >
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                  <Code2 className="h-12 w-12 text-gray-400 dark:text-slate-500" />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
                
                <p className="text-secondary dark:text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>
                
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
                
                <div className="flex space-x-2">
                  {project.projectUrl && (
                    <Link 
                      href={project.projectUrl}
                      className="flex items-center space-x-1 text-primary hover:underline text-sm font-medium"
                      data-testid={`project-link-${project.id}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>View Project</span>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-secondary hover:underline text-sm"
                      data-testid={`github-link-${project.id}`}
                    >
                      <Code2 className="h-3 w-3" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.status !== "completed" && (
                    <div className="flex items-center space-x-1 text-secondary text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{getStatusText(project.status)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
