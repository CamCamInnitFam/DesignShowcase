import { useQuery } from "@tanstack/react-query";
import { type Skill } from "@shared/schema";

export function SkillsSection() {
  const { data: skills, isLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-secondary dark:text-slate-400">Loading skills...</p>
          </div>
        </div>
      </section>
    );
  }

  const skillColors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-green-500 to-green-600",
    "from-orange-500 to-orange-600",
    "from-pink-500 to-pink-600",
    "from-red-500 to-red-600"
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Proficient in multiple programming languages, frameworks, and development environments gained through academic projects and professional experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills?.map((skill, index) => (
            <div key={skill.id} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${skillColors[index % skillColors.length]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`${skill.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-secondary dark:text-slate-400 text-sm mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
