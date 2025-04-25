
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding hero-gradient relative">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out for collaborations, speaking engagements, or just to say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="bg-card card-border rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="flex-center w-12 h-12 mx-auto rounded-full bg-green-500/20 text-green-500 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Message Sent Successfully!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-gradient w-full py-3 rounded-lg flex-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card card-border rounded-xl p-8 shadow-xl animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Email Address</h4>
                    <a href="mailto:alex@example.com" className="text-foreground hover:text-primary transition-colors">
                      amayasbourahla46@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone Number</h4>
                    <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                      +213 (549) 893-705
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                    <p className="text-foreground">
                     Ain Naadja ,Algiers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card card-border rounded-xl p-8 shadow-xl animate-slide-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/BMLSAA22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
                
                <a
                  href="mailto:amayasbourahla46@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <div className="p-6 rounded-xl overflow-hidden bg-muted/20 relative">
                <div className="font-mono text-sm text-muted-foreground">Scan to download my vCard</div>
                <div className="h-48 w-48 m-auto mt-2 bg-white p-2 rounded-xl flex items-center justify-center">
                  {/* Placeholder for QR code */}
                  <div className="w-full h-full grid grid-cols-6 grid-rows-6 gap-1">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${Math.random() > 0.7 ? "bg-black" : "bg-transparent"} ${
                          // Always render the position markers at corners
                          (i === 0 || i === 5 || i === 30 || i === 35) ? "bg-black" : ""
                        }`}
                      ></div>
                    ))}
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

export default ContactSection;
