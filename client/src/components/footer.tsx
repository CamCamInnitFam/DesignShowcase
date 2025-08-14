import { Github, Linkedin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-semibold text-lg text-white">Cameron Crook</span>
          </div>
          <p className="text-gray-400 mb-6">Game Developer & Software Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="footer-github"
            >
              <Github className="text-xl h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="text-xl h-6 w-6" />
            </a>
            <a 
              href="https://cc1501.brighton.domains/blog/my-portfolio/" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-portfolio"
            >
              <Globe className="text-xl h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Cameron Crook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
