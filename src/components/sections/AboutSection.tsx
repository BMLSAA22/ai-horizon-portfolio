
import { Award, BookOpen, Briefcase, User } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Engineering Experience", value: "2+ Years" },
    { label: "AI Projects Completed", value: "15+" },
    { label: "Research Papers Started", value: "1 year" },
    { label: "Tech Stack Expertise", value: "10+ Tools" },
  ];

  return (
    <section id="about" className="section-padding bg-background dark:bg-gradient-to-b dark:from-tech-deep-blue dark:to-tech-deep-blue/90">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            AI engineer and researcher passionate about solving complex problems with intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-muted-foreground">
                  I'm an AI Engineer with a passion for developing intelligent systems that solve real-world problems.2 years of experience in AI development, research, and deployment across various industries.Also working with international clients to deliver cutting-edge AI solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">My Education</h3>
                <p className="text-muted-foreground">
                  Master & Graduate Program in Artificial Intelligence from the University paris est Creteil.Engineering degree from Computer Science high school in AI & Data science.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">My Experience</h3>
                <p className="text-muted-foreground">
                  Over 2years of experience developing AI solutions for various domains including computer vision, natural language processing, and edge computing. Worked with leading tech companies and research institutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                <p className="text-muted-foreground">
                I am an AI Engineer and Data Scientist with a strong foundation in image processing, NLP, OCR, and graph neural networks. Throughout my academic and professional journey, I’ve consistently worked at the intersection of research and practical AI applications.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="rounded-2xl overflow-hidden shadow-xl card-border p-1">
              <div className="bg-background dark:bg-tech-deep-blue rounded-2xl overflow-hidden p-8">
                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center overflow-hidden relative">
                  {/* Profile Image */}
                  <img 
                    src="/profile.jpg" 
                    alt="Amayas Bourahla" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Abstract decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-tech-purple/10 animate-float" style={{ animationDelay: "0s" }}></div>
                  <div className="absolute bottom-4 -left-6 w-16 h-16 rounded-full bg-tech-blue/10 animate-float" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute top-1/2 -right-4 w-12 h-12 rounded-full bg-tech-neon/10 animate-float" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center p-4 rounded-xl card-border bg-background dark:bg-tech-deep-blue animate-fade-in opacity-0" 
                  style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="text-2xl font-bold text-gradient-static">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
