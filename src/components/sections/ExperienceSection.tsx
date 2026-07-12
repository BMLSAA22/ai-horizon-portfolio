
import { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  logo: string; // In a real app, this would be the path to the logo
}

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  const experiences: Experience[] = [
    {
      id: 0,
      company: "Devoteam",
      position: "Cloud & AI Consultant",
      location: "France",
      period: "2025 - present",
      description: [
        "Architected and developed a self-healing cloud infrastructure that automatically detects, diagnoses, and remediates system failures without human intervention.",
        "Designing and implementing scalable cloud-native applications using Infrastructure as Code (Terraform) and CI/CD best practices.",
        "Delivering cloud architecture and AI solutions for enterprise clients, leveraging AWS and modern data engineering practices."
      ],
      logo: "/devoteam.jpg"
    },
    {
      id: 10,
      company: "Veolia (via Devoteam)",
      position: "Cloud & Data Engineer",
      location: "France",
      period: "2025 - present",
      description: [
        "Designed and implemented a self-healing architecture for Veolia's cloud platform, enabling automatic detection and recovery from infrastructure failures and performance degradation.",
        "Built intelligent monitoring and auto-remediation pipelines that reduced incident response time and improved overall system availability.",
        "Developed scalable AWS-based data pipelines for processing environmental and operational data with automated failover mechanisms."
      ],
      logo: "/veolia.png"
    },
    {
      id: 1,
      company: "Université Paris-Est Créteil (UPEC)",
      position: "Master's Student in AI & Data Science",
      location: "Créteil, France",
      period: "SEP 2025 - present",
      description: [
        "Pursuing Master 2 in Artificial Intelligence, Data Science & Cyber-Physical Systems with focus on MLOps and distributed systems.",
        "Specializing in deep learning architectures, computer vision, and natural language processing for real-world applications.",
        "Working on research projects involving Physics-Informed Neural Networks and advanced numerical methods for computational mechanics."
      ],
      logo: "upec.jfif"
    },

    {
      id: 1,
      company: "University of BOUMERDES",
      position: "Researcher",
      location: "Boumerdes, Algeria",
      period: "JAN 2025 - present",
      description: [
        "Conducting research on intelligent routing algorithms for UAV Ad Hoc Networks using Graph Neural Networks and Reinforcement Learning.",
        "Developing simulation frameworks for testing UAV networking algorithms in dynamic environments.",
        "Collaborating with interdisciplinary teams to apply ML techniques to solve complex routing problems in aerospace systems."
      ],
      logo: "/umbb.png"
    },
    {
      id: 2,
      company: "CASNOS",
      position: "AI Engineer",
      location: "Algiers",
      period: "May 2024 - Sep 2025",
      description: [
        "Leading the development of a computer vision system for autonomous drones that can detect and respond to environmental hazards in real-time.",
        "Designed and implemented a distributed ML pipeline that improved model training time by 45% and reduced inference latency by 30%.",
        "Mentoring junior engineers and interns on best practices in AI development and deployment."
      ],
      logo: "casnos.png"
    },
    {
      id: 3,
      company: "CASNOS",
      position: "AI Intern",
      location: "Algiers",
      period: "JAN 2024 - MAY 2024",
      description: [
        "Built and deployed production machine learning models for natural language processing and recommendation systems.",
        "Optimized deep learning models for edge deployment, achieving 4x speedup while maintaining accuracy.",
        "Implemented CI/CD pipelines for ML models, ensuring consistent quality and performance across deployments."
      ],
      logo: "casnos.png"
    },
    {
      id: 4,
      company: "NAFTAL spa",
      position: "AI Intern",
      location: "Tizi ouzou",
      period: "sept 2022",
      description: [
        "Built and deployed production machine learning models for natural language processing and recommendation systems.",
        "Optimized deep learning models for edge deployment, achieving 4x speedup while maintaining accuracy.",
        "Implemented CI/CD pipelines for ML models, ensuring consistent quality and performance across deployments."
      ],
      logo: "naftal.webp"
    },
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("experience");
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      
      // If experience section is in viewport and animation hasn't run yet
      if (position.top < window.innerHeight * 0.75 && !animated) {
        setAnimated(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animated]);

  return (
    <section id="experience" className="section-padding bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My professional journey in AI research and development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-4">
            <div ref={timelineRef} className="space-y-4 sticky top-24">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`flex cursor-pointer transition-all duration-300 p-4 rounded-lg relative
                    ${activeIndex === index 
                      ? 'bg-card card-border shadow-md' 
                      : 'hover:bg-card/50'}
                    ${animated ? 'animate-fade-in opacity-0' : 'opacity-0'}
                  `}
                  style={{ 
                    animationDelay: `${0.2 + index * 0.1}s`, 
                    animationFillMode: "forwards" 
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center mr-4 bg-background dark:bg-tech-deep-blue overflow-hidden">
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="font-bold text-lg text-primary">{exp.company.charAt(0)}</span>
                    )}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className={`font-medium ${activeIndex === index ? 'text-primary' : 'text-foreground'}`}>
                      {exp.position}
                    </span>
                    <span className="text-sm text-muted-foreground">{exp.company}</span>
                    <span className="text-xs text-muted-foreground mt-1">{exp.period}</span>
                  </div>
                  
                  {activeIndex === index && (
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary lg:block hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Details */}
          <div className="lg:col-span-8">
            <div className="bg-card card-border rounded-xl p-8 shadow-lg animate-slide-in-right">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{experiences[activeIndex].position}</h3>
                
                <div className={`w-16 h-16 rounded-xl ${experiences[activeIndex].logo} flex-center`}>
                  <span className="font-bold text-xl">{experiences[activeIndex].company.charAt(0)}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center text-muted-foreground mb-2">
                  <Briefcase size={16} className="mr-2" />
                  <span>{experiences[activeIndex].company}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span>{experiences[activeIndex].location}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Calendar size={16} className="mr-2" />
                  <span>{experiences[activeIndex].period}</span>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-4">Key Responsibilities & Achievements</h4>
              
              <ul className="space-y-4">
                {experiences[activeIndex].description.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary shrink-0 flex-center mr-3 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
