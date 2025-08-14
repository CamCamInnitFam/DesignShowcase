import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-secondary dark:text-slate-400">
                <p>
                  I'm a recent Computer Science graduate with a passion for game development and software engineering. My journey through university has equipped me with a solid foundation in programming, algorithms, and software design principles.
                </p>
                <p>
                  During my placement year at Clarksons Research, I gained valuable professional experience developing maritime industry software using C#, XAML, VBA, and SQL. This experience taught me the importance of creating robust, user-friendly applications that solve real-world problems.
                </p>
                <p>
                  My portfolio demonstrates proficiency across multiple platforms and technologies, from low-level C++ game engines to web-based interactive experiences. I'm particularly interested in the intersection of technology and creativity, whether that's through game development, algorithm design, or innovative software solutions.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating applications that provide exceptional user experiences. I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Professional developer workspace" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-secondary dark:text-slate-400">Computer Science Graduate</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-secondary dark:text-slate-400">Brighton, United Kingdom</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="text-secondary dark:text-slate-400">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
