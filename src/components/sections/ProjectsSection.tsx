
import { useState } from "react";
import { Code, ExternalLink, Github, FileText, Image, Play, BookOpen, Server } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  docLink?: string;
  details: string;
}

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Fire Detection System",
      description: "Edge-optimized deep learning system for real-time wildfire detection",
      image: "bg-gradient-to-br from-red-500/30 to-orange-500/30",
      tags: ["Computer Vision", "PyTorch", "Jetson Nano", "Edge AI", "TensorRT"],
      demoLink: "#",
      githubLink: "#",
      docLink: "https://www.linkedin.com/in/bourahlaamayas/details/projects/1635545889822/single-media-viewer?type=DOCUMENT&profileId=ACoAACu7YMsBiU34CWQjRYks3TRVETuBSP_iIyE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BNM7X4VcHS%2FCJ4mwgxQu9dA%3D%3D",
      details: "Developed a real-time fire detection system using deep learning models optimized for edge devices. The system processes video streams from drones and fixed cameras to detect wildfires in their early stages. Implemented with PyTorch and optimized with TensorRT for deployment on Jetson Nano devices. Achieved 94% detection accuracy with a low false positive rate of 0.02%."
    },
    {
      id: 2,
      title: "Neural Document Understanding",
      description: "AI system for extracting structured information from unstructured documents",
      image: "bg-gradient-to-br from-blue-500/30 to-indigo-500/30",
      tags: ["NLP", "OCR", "PyTorch", "Transformers", "Document AI"],
      demoLink: "https://drive.google.com/file/d/1GChvPTcL4GUY79ye9G-FnzumLw3VPhWB/view?usp=drive_link",
      details: "Created an advanced document understanding system that combines OCR, layout analysis, and NLP to extract structured information from unstructured documents. Built using PyTorch and Hugging Face Transformers, the system can process various document types including invoices, receipts, and contracts. Implemented a novel approach to handle document structure that improved information extraction accuracy by 23% compared to baseline methods."
    },
    {
      id: 3,
      title: "Building a chess engine in python",
      description: "AI-based chess engine built using Python and reinforcement learning techniques",
      image: "bg-gradient-to-br from-tech-purple/30 to-tech-blue/30",
      tags: ["Chess Engine", "AI", "Reinforcement Learning", "Python"],
      githubLink: "https://github.com/BMLSAA22/chess-engine",
      details: "Built a basic chess engine in Python leveraging reinforcement learning concepts to simulate intelligent move selection. The engine uses minimax search enhanced with evaluation heuristics and self-play training to improve over time. Offers CLI-based gameplay with move legality and checkmate detection features."
    },
    {
      id: 4,
      title: "F1 Dashboard",
      description: "Interactive dashboard for real-time Formula 1 race analytics",
      image: "bg-gradient-to-br from-green-500/30 to-emerald-500/30",
      tags: ["Data Visualization", "ReactJS", "Flask", "F1 Analytics"],
      demoLink: "#",
      githubLink: "#",
      details: "Built a responsive web dashboard that visualizes real-time Formula 1 telemetry data including lap times, speed traps, tire choices, and position tracking. Backend built with Flask, frontend with ReactJS. Integrated APIs and live data feeds for an engaging race analysis experience."
    },
    {
      id: 5,
      title: "Protein-protein interaction prediction",
      description: "Deep learning framework for predicting protein-protein interactions",
      image: "bg-gradient-to-br from-yellow-500/30 to-amber-500/30",
      tags: ["Bioinformatics", "GNN", "Protein Modeling", "Python"],
      githubLink: "#",
      docLink: "#",
      details: "Developed a graph-based neural network model to predict protein-protein interactions using structural and sequence features. Trained on curated biological datasets and benchmarked against state-of-the-art PPI prediction tools. Used for drug discovery and protein function annotation tasks."
    },
    {
      id: 6,
      title: "Agent RL to simulate3D MuJoCo",
      description: "Reinforcement learning agents trained in 3D MuJoCo environments",
      image: "bg-gradient-to-br from-tech-blue/30 to-cyan-500/30",
      tags: ["Reinforcement Learning", "MuJoCo", "Simulation", "Python"],
      demoLink: "#",
      githubLink: "#",
      details: "Trained reinforcement learning agents to perform locomotion and control tasks in 3D MuJoCo simulations. Implemented policy gradients and PPO algorithms for training. Focused on sim-to-real transfer and fine-tuning policy robustness across dynamic environments."
    },
  ];


  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A selection of research and development projects showcasing AI applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="rounded-xl overflow-hidden card-border bg-card shadow-lg card-hover animate-fade-in opacity-0 cursor-pointer"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
              onClick={() => openProjectModal(project)}
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-background/30 backdrop-blur-sm flex-center">
                  {project.id === 1 ? (
                    <Image size={28} className="text-foreground/80" />
                  ) : project.id === 2 ? (
                    <FileText size={28} className="text-foreground/80" />
                  ) : project.id === 3 ? (
                    <Code size={28} className="text-foreground/80" />
                  ) : project.id === 4 ? (
                    <BookOpen size={28} className="text-foreground/80" />
                  ) : project.id === 5 ? (
                    <Play size={28} className="text-foreground/80" />
                  ) : (
                    <Server size={28} className="text-foreground/80" />
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <button className="w-full text-sm text-primary hover:text-tech-purple transition-colors mt-2">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeProjectModal}
        >
          <div 
            className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-48 ${activeProject.image} flex items-center justify-center relative`}>
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/30 backdrop-blur-sm flex-center text-foreground"
                onClick={closeProjectModal}
              >
                ✕
              </button>
              <div className="w-16 h-16 rounded-full bg-background/30 backdrop-blur-sm flex-center">
                {activeProject.id === 1 ? (
                  <Image size={28} className="text-foreground/80" />
                ) : activeProject.id === 2 ? (
                  <FileText size={28} className="text-foreground/80" />
                ) : activeProject.id === 3 ? (
                  <Code size={28} className="text-foreground/80" />
                ) : activeProject.id === 4 ? (
                  <BookOpen size={28} className="text-foreground/80" />
                ) : activeProject.id === 5 ? (
                  <Play size={28} className="text-foreground/80" />
                ) : (
                  <Server size={28} className="text-foreground/80" />
                )}
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {activeProject.details}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {activeProject.demoLink && (
                  <a 
                    href={activeProject.demoLink} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
                
                {activeProject.githubLink && (
                  <a 
                    href={activeProject.githubLink} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                )}
                
                {activeProject.docLink && (
                  <a 
                    href={activeProject.docLink} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText size={16} />
                    <span>Documentation</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
