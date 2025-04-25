
import { Download, Link } from "lucide-react";

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My PhD <span className="text-gradient">Research</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Exploring Strategic Routing in UAV Ad Hoc Networks through AI and Graph Neural Networks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="sticky top-24">
              <h3 className="text-2xl font-semibold mb-4">Research Focus</h3>
              <p className="text-muted-foreground mb-6">
                My doctoral research focuses on developing intelligent routing algorithms for Unmanned Aerial Vehicle (UAV) Ad Hoc Networks using Graph Neural Networks and Reinforcement Learning. This work addresses critical challenges in communication reliability, adaptive routing, and resource optimization for drone swarms operating in dynamic environments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card card-border">
                  <Download size={18} className="text-primary" />
                  <span>Download Research Summary</span>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card card-border">
                  <Link size={18} className="text-primary" />
                  <span>View Publications</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Research Advisors</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex-center text-primary font-bold">
                      P
                    </div>
                    <div>
                      <p className="font-medium">Prof. xxxx</p>
                      <p className="text-sm text-muted-foreground">Primary Advisor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex-center text-primary font-bold">
                      C
                    </div>
                    <div>
                      <p className="font-medium">Dr xxxx</p>
                      <p className="text-sm text-muted-foreground">Co-Advisor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-10">
            <div className="card-border rounded-xl p-6 bg-card animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <h3 className="text-xl font-semibold mb-4">Research Diagram</h3>
              
              <div className="aspect-video rounded-lg overflow-hidden bg-muted/30 p-4 flex items-center justify-center mb-4">
                {/* This would be replaced with an actual SVG diagram */}
                <div className="w-full h-full bg-grid-pattern bg-[length:20px_20px] relative">
                  {/* Simulated UAV network diagram with interactive elements */}
                  <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-tech-purple/40 flex-center animate-pulse-slow">
                    <div className="w-4 h-4 rounded-full bg-tech-purple"></div>
                  </div>
                  <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-tech-purple/40 flex-center animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
                    <div className="w-4 h-4 rounded-full bg-tech-purple"></div>
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-tech-purple/40 flex-center animate-pulse-slow" style={{ animationDelay: "1s" }}>
                    <div className="w-4 h-4 rounded-full bg-tech-purple"></div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-tech-purple/40 flex-center animate-pulse-slow" style={{ animationDelay: "1.5s" }}>
                    <div className="w-4 h-4 rounded-full bg-tech-purple"></div>
                  </div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <line x1="25%" y1="25%" x2="66.67%" y2="33.33%" className="stroke-tech-purple/60 stroke-[2]" />
                    <line x1="66.67%" y1="33.33%" x2="75%" y2="75%" className="stroke-tech-purple/60 stroke-[2]" />
                    <line x1="75%" y1="75%" x2="33.33%" y2="66.67%" className="stroke-tech-purple/60 stroke-[2]" />
                    <line x1="33.33%" y1="66.67%" x2="25%" y2="25%" className="stroke-tech-purple/60 stroke-[2]" />
                  </svg>
                  
                  {/* Central node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-tech-blue/40 flex-center animate-pulse-slow" style={{ animationDelay: "0.75s" }}>
                    <div className="w-6 h-6 rounded-full bg-tech-blue"></div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Visualization of a UAV Ad Hoc Network with dynamic routing paths determined by our Graph Neural Network algorithm. The nodes represent UAVs, while edges show communication links with their signal strength.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Research Highlights</h3>

<div className="space-y-6">
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">1</div>
    <div>
      <h4 className="font-medium mb-1">Exploratory Design of GNN Architecture</h4>
      <p className="text-muted-foreground text-sm">
        Currently designing a specialized GNN architecture tailored for modeling UAV network topologies and mobility patterns.
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">2</div>
    <div>
      <h4 className="font-medium mb-1">Multi-Objective Framework</h4>
      <p className="text-muted-foreground text-sm">
        Developing a framework that considers key performance indicators such as latency, energy usage, and connectivity stability.
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">3</div>
    <div>
      <h4 className="font-medium mb-1">Simulation-based Validation</h4>
      <p className="text-muted-foreground text-sm">
        Planning to conduct extensive simulations using tools like NS-3 or custom environments to validate the proposed models.
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">4</div>
    <div>
      <h4 className="font-medium mb-1">Theoretical Foundations</h4>
      <p className="text-muted-foreground text-sm">
        Working on building the theoretical foundation for learning-based routing performance in dynamic, decentralized networks.
      </p>
    </div>
  </div>
</div>

            
            <div className="card-border rounded-xl p-6 bg-card animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <h3 className="text-xl font-semibold mb-4">Upcoming Publications</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="font-medium mb-1">Information Extraction from medical documents</p>
                  <p className="text-sm text-muted-foreground mb-2">Following my master thesis i am preparing to publish a research paper to document out innovative approach</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">OCR</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Documents</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Transformers</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="font-medium mb-1">Comparative Survey about the state of the art in the field of routing in ad hoc networks</p>
                  <p className="text-sm text-muted-foreground mb-2">In the cadre of my phD thesis </p>
                  <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">FANET</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Routing</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">UAV</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Ad hoc</span>
                  </div>
                </div>
                

              </div>
              
              <button className="w-full mt-4 py-2 text-primary hover:text-primary/80 transition-colors text-sm">
                View All Publications →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
