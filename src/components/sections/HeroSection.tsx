
import { ArrowDown, Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create a simple particle system
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    
    particlesRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const particles: Particle[] = [];
    const particleCount = 50;
    
    type Particle = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    };
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: `rgba(139, 92, 246, ${Math.random() * 0.5})`, // Tech purple with random opacity
      });
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      if (particlesRef.current && canvas.parentNode === particlesRef.current) {
        particlesRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section id="home" className="hero-gradient relative min-h-screen flex-center pt-16">
      <div ref={particlesRef} className="particles-bg"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Hello, I'm </span>
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
            >
              Amayas
            </motion.span>
          </h1>
          
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            AI Engineer | PhD Researcher
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Building Intelligent Systems for a Smarter Future
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <motion.a 
              href="https://drive.google.com/file/d/1Q0xctTBFyDow-XoWusluDgQXwhI31ut6/view?usp=drive_link" 
              className="button-gradient px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <motion.a 
            href="#about" 
            className="text-muted-foreground hover:text-foreground transition-colors block"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
