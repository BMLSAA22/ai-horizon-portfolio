
import { FileText, Users, Cpu, Database, Eye, ShieldCheck } from "lucide-react";

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Research</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Combining OCR, deep learning, and medical knowledge to build intelligent healthcare document processing systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="sticky top-24">
              <h3 className="text-2xl font-semibold mb-4">Research Focus</h3>
              <p className="text-muted-foreground mb-6">
                My research focuses on building an end-to-end system called <strong className="text-foreground">Wassfa</strong> that combines Optical Character Recognition with expert validation models to extract and verify key information from medical prescriptions. The system addresses challenges of handwritten text, multilingual content, and the complexity of medical documents to support safer, more automated prescription workflows.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card card-border">
                  <FileText size={18} className="text-primary" />
                  <span>Published Paper: Wassfa</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Collaborators</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex-center text-primary font-bold">
                      K
                    </div>
                    <div>
                      <p className="font-medium">Kadi Amir Khalid</p>
                      <p className="text-sm text-muted-foreground">Co-Author</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex-center text-primary font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-medium">Mr. Malki Abdelhamid</p>
                      <p className="text-sm text-muted-foreground">Supervisor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-10">
            {/* System Architecture Diagram */}
            <div className="card-border rounded-xl p-6 bg-card animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <h3 className="text-xl font-semibold mb-4">Wassfa System Architecture</h3>
              
              <div className="rounded-lg overflow-hidden bg-muted/30 p-6">
                {/* Pipeline flow diagram */}
                <div className="flex flex-col gap-4">
                  {/* Step 1: Input */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                      <FileText size={24} className="text-orange-500" />
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-background/60 border border-border">
                      <p className="font-medium text-sm">Medical Prescription Input</p>
                      <p className="text-xs text-muted-foreground">Scanned documents, handwritten or printed</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-primary/40"></div>
                  </div>

                  {/* Step 2: YOLOv5 */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Eye size={24} className="text-blue-500" />
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-background/60 border border-border">
                      <p className="font-medium text-sm">YOLOv5 — Region Localization</p>
                      <p className="text-xs text-muted-foreground">Detects and segments prescription fields (drug name, dosage, patient info)</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-primary/40"></div>
                  </div>

                  {/* Step 3: TrOCR */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Cpu size={24} className="text-purple-500" />
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-background/60 border border-border">
                      <p className="font-medium text-sm">TrOCR — Text Recognition</p>
                      <p className="text-xs text-muted-foreground">Transformer-based OCR for handwritten and printed text extraction</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-primary/40"></div>
                  </div>

                  {/* Step 4: BERT Validation */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                      <ShieldCheck size={24} className="text-green-500" />
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-background/60 border border-border">
                      <p className="font-medium text-sm">BERT — Medical Rule Validation</p>
                      <p className="text-xs text-muted-foreground">Validates extracted data against medical knowledge base and drug interactions</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-primary/40"></div>
                  </div>

                  {/* Step 5: EHR Output */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0">
                      <Database size={24} className="text-teal-500" />
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-background/60 border border-border">
                      <p className="font-medium text-sm">Structured EHR Output</p>
                      <p className="text-xs text-muted-foreground">Clean, validated data ready for Electronic Health Record integration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                End-to-end pipeline: from raw prescription scan to validated, structured data for EHR systems.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Key Contributions</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">1</div>
                <div>
                  <h4 className="font-medium mb-1">End-to-End Prescription Processing</h4>
                  <p className="text-muted-foreground text-sm">
                    Designed Wassfa, a complete system that handles the full pipeline from prescription image input to structured, validated medical data output.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">2</div>
                <div>
                  <h4 className="font-medium mb-1">YOLOv5 for Medical Document Localization</h4>
                  <p className="text-muted-foreground text-sm">
                    Applied YOLOv5 object detection to accurately locate and segment prescription fields including drug names, dosages, and patient information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">3</div>
                <div>
                  <h4 className="font-medium mb-1">TrOCR for Handwritten Medical Text</h4>
                  <p className="text-muted-foreground text-sm">
                    Leveraged the TrOCR transformer model to handle both handwritten and printed text in multilingual medical prescriptions with high accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex-center text-primary font-bold">4</div>
                <div>
                  <h4 className="font-medium mb-1">BERT-Based Expert Validation</h4>
                  <p className="text-muted-foreground text-sm">
                    Integrated a BERT-based validation module that checks extracted prescriptions against medical rules, ensuring reliable data before EHR integration.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="card-border rounded-xl p-6 bg-card animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <h3 className="text-xl font-semibold mb-4">Publications</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <p className="font-medium mb-1">Wassfa: An End-to-End OCR System for Medical Prescription Extraction and Validation</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Proposes an end-to-end system combining TrOCR for text recognition, YOLOv5 for localization, and a BERT-based module for medical rule validation to extract and verify key prescription information for EHR integration.
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={14} className="text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      Amayas Bourahla, Kadi Amir Khalid, Malki Abdelhamid
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">OCR</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">TrOCR</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">YOLOv5</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">BERT</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">EHR</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Healthcare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
