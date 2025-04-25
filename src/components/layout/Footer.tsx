
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 dark:bg-tech-deep-blue py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gradient-static font-bold text-xl">Amayas</span>
            <p className="text-muted-foreground mt-2">
              Building Intelligent Systems for a Smarter Future
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/bmslaa22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-tech-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/bourahlaamayas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-tech-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-tech-purple transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:amayasbourahla46@gmail.com" 
              className="text-foreground/70 hover:text-tech-purple transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BOURAHLA Amayas. All rights reserved.</p>
          <p className="mt-1">AI Engineer & PhD Researcher in Strategic Routing for UAV Ad Hoc Networks</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
