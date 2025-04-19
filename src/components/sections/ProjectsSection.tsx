
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
      description: "Real-time wildfire detection using computer vision and edge computing",
      image: "bg-gradient-to-br from-red-500/30 to-orange-500/30",
      tags: ["Computer Vision", "PyTorch", "Jetson Nano", "Edge AI"],
      demoLink: "#",
      githubLink: "#",
      docLink: "#",
      details: "Developed a real-time fire detection system using deep learning models optimized for edge devices. The system processes video streams from drones and fixed cameras to detect wildfires in their early stages. Implemented with PyTorch and optimized with TensorRT for deployment on Jetson Nano devices. Achieved 94% detection accuracy with a low false positive rate of 0.02%."
    },
    {
      id: 2,
      title: "Neural Document Understanding",
      description: "End-to-end document processing pipeline with OCR and NLP",
      image: "bg-gradient-to-br from-blue-500/30 to-indigo-500/30",
      tags: ["NLP", "OCR", "PyTorch", "Transformers"],
      demoLink: "#",
      githubLink: "#",
      details: "Created an advanced document understanding system that combines OCR, layout analysis, and NLP to extract structured information from unstructured documents. Built using PyTorch and Hugging Face Transformers, the system can process various document types including invoices, receipts, and contracts. Implemented a novel approach to handle document structure that improved information extraction accuracy by 23% compared to baseline methods."
    },
    {
      id: 3,
      title: "UAV Route Optimization",
      description: "Graph neural networks for strategic routing in UAV ad hoc networks",
      image: "bg-gradient-to-br from-tech-purple/30 to-tech-blue/30",
      tags: ["GNN", "Reinforcement Learning", "TensorFlow", "Python"],
      githubLink: "#",
      docLink: "#",
      details: "Developed a novel routing algorithm for UAV ad hoc networks using graph neural networks and reinforcement learning. The algorithm dynamically adapts to changing network conditions and optimizes for multiple objectives including latency, throughput, and energy consumption. Published in IEEE Transactions on Networking with experimental validation showing 35% improvement in network reliability and 28% reduction in latency compared to state-of-the-art approaches."
    },
    {
      id: 4,
      title: "AI Research Assistant",
      description: "NLP-based tool for academic literature review and synthesis",
      image: "bg-gradient-to-br from-green-500/30 to-emerald-500/30",
      tags: ["NLP", "BERT", "Flask", "ReactJS"],
      demoLink: "#",
      githubLink: "#",
      details: "Built an AI-powered research assistant that helps researchers discover, organize, and synthesize academic literature. The system uses BERT-based models for semantic search and summarization, allowing users to quickly find relevant papers and extract key information. Features include automated literature reviews, citation network analysis, and personalized paper recommendations. Used by over 500 researchers across multiple universities."
    },
    {
      id: 5,
      title: "Multi-Agent Simulation Framework",
      description: "Scalable environment for testing distributed AI algorithms",
      image: "bg-gradient-to-br from-yellow-500/30 to-amber-500/30",
      tags: ["Multi-Agent Systems", "Reinforcement Learning", "Python", "Ray"],
      githubLink: "#",
      docLink: "#",
      details: "Designed and implemented a scalable simulation framework for multi-agent systems research. The framework supports thousands of concurrent agents and provides tools for implementing and evaluating distributed AI algorithms. Built with Python and Ray for distributed computing, it features customizable environments, visualization tools, and benchmarking utilities. Used in my PhD research to evaluate novel routing algorithms for UAV networks."
    },
    {
      id: 6,
      title: "Edge AI Deployment Pipeline",
      description: "CI/CD pipeline for deploying ML models to edge devices",
      image: "bg-gradient-to-br from-tech-blue/30 to-cyan-500/30",
      tags: ["MLOps", "Docker", "Kubernetes", "TensorRT"],
      demoLink: "#",
      githubLink: "#",
      details: "Created an end-to-end pipeline for automatically deploying and updating machine learning models on edge devices. The system handles model optimization (including quantization and pruning), packaging, deployment, monitoring, and updates. Implemented using Docker, Kubernetes, and custom deployment tools. Reduced deployment time from days to hours and enabled consistent updates across a fleet of edge devices."
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
