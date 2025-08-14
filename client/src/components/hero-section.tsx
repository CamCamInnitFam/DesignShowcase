export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mb-6 animate-float">
              <span className="text-white font-bold text-4xl">CC</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Cameron Crook</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary dark:text-slate-400 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Game Developer & Software Developer
          </p>
          
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
            Recent Computer Science graduate with experience in game development, software engineering, and a passion for creating engaging digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
