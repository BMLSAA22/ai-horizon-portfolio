
import { Code, Database, Server, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      
      // If skills section is in viewport and animation hasn't run yet
      if (position.top < window.innerHeight * 0.75 && !animated) {
        setAnimated(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animated]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "C++", level: 80 },
        { name: "Java", level: 70 },
        { name: "Go", level: 65 },
      ],
    },
    {
      title: "AI & ML Frameworks",
      icon: <Cpu size={24} />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 95 },
        { name: "Scikit-Learn", level: 85 },
        { name: "Hugging Face", level: 80 },
        { name: "ONNX", level: 75 },
      ],
    },
    {
      title: "Data & Cloud",
      icon: <Database size={24} />,
      skills: [
        { name: "SQL/NoSQL", level: 85 },
        { name: "AWS", level: 80 },
        { name: "GCP", level: 75 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 80 },
      ],
    },
    {
      title: "Edge Computing",
      icon: <Server size={24} />,
      skills: [
        { name: "Jetson Nano", level: 85 },
        { name: "Raspberry Pi", level: 90 },
        { name: "TensorRT", level: 80 },
        { name: "Edge TPU", level: 75 },
        { name: "Arduino", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A collection of technical skills developed over years of research and practical development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-card card-border rounded-xl p-6 shadow-lg card-hover animate-slide-up opacity-0"
              style={{ 
                animationDelay: `${0.2 + categoryIndex * 0.1}s`, 
                animationFillMode: "forwards",
                animationPlayState: animated ? "running" : "paused" 
              }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: animated ? `${skill.level}%` : "0%",
                          transitionDelay: `${0.3 + categoryIndex * 0.1 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Node.js", "FastAPI", "Flask", "Pandas", "NumPy", 
              "OpenCV", "Matplotlib", "Seaborn", "Kafka", "Redis", "GraphQL",
              "Spark", "ROS", "PyQt", "REST APIs", "Git", "CI/CD", "Linux"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors text-sm animate-fade-in opacity-0"
                style={{ 
                  animationDelay: `${0.8 + index * 0.05}s`,
                  animationFillMode: "forwards",
                  animationPlayState: animated ? "running" : "paused"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
