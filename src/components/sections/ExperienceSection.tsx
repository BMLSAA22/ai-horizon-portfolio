
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
      id: 1,
      company: "University of BOUMERDES",
      position: "PhD Student",
      location: "Boumerdes , algeria",
      period: "JAN 2025 - present ",
      description: [
        "Conducted research on novel graph neural network architectures for routing in dynamic networks, resulting in 2 patents and 3 peer-reviewed publications.",
        "Developed a simulation framework for testing UAV networking algorithms that is now used by multiple research groups.",
        "Collaborated with interdisciplinary teams to apply ML techniques to solve complex routing problems in aerospace systems."
      ],
      logo: "https://www.bing.com/images/search?view=detailV2&ccid=O5pAkoAl&id=4377D3C5766D516E065582E707DEC62F0CB50ED7&thid=OIP.O5pAkoAlCSbH-DDkss8W4AHaHa&mediaurl=https%3a%2f%2fyt3.ggpht.com%2fa%2fAATXAJxzbG5G8HFG8-9wolCTN-5ZNMnggDXjA_4x9QKj%3ds900-c-k-c0xffffffff-no-rj-mo&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3b9a409280250926c7f830e4b2cf16e0%3frik%3d1w61DC%252fG3gfngg%26pid%3dImgRaw%26r%3d0&exph=900&expw=900&q=universit%c3%a9+boumerdes+logo&simid=608022453682245269&FORM=IRPRST&ck=36139EF0643D89BA84A330D13BB84BC7&selectedIndex=0&itb=0"
    },
    {
      id: 2,
      company: "CASNOS",
      position: "AI Engineer",
      location: "Algiers",
      period: "May 2024 - Present",
      description: [
        "Leading the development of a computer vision system for autonomous drones that can detect and respond to environmental hazards in real-time.",
        "Designed and implemented a distributed ML pipeline that improved model training time by 45% and reduced inference latency by 30%.",
        "Mentoring junior engineers and interns on best practices in AI development and deployment."
      ],
      logo: "bg-gradient-to-br from-purple-500/20 to-purple-700/20"
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
      logo: "bg-gradient-to-br from-green-500/20 to-green-700/20"
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
      logo: "bg-gradient-to-br from-green-500/20 to-green-700/20"
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
                  <div className={`w-12 h-12 rounded-lg ${exp.logo} shrink-0 flex-center mr-4`}>
                    <span className="font-bold text-foreground">{exp.company.charAt(0)}</span>
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
