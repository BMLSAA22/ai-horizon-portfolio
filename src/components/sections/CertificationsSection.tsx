import { useState, useEffect } from "react";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  badge: string;
  badgeImage: string;
}

const CertificationsSection = () => {
  const [animated, setAnimated] = useState(false);

  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      badge: "SAA-C03",
      badgeImage: "/badges/aws-saa.png",
    },
    {
      id: 2,
      name: "AWS Data Engineer Associate",
      issuer: "Amazon Web Services",
      badge: "DEA-C01",
      badgeImage: "/badges/aws-dea.png",
    },
    {
      id: 3,
      name: "HashiCorp Terraform Associate",
      issuer: "HashiCorp",
      badge: "TA-003",
      badgeImage: "/badges/terraform-associate.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("certifications");
      if (!element) return;

      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight * 0.75 && !animated) {
        setAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animated]);

  return (
    <section id="certifications" className="section-padding bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Professional certifications validating my expertise in cloud architecture, data engineering, and infrastructure as code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`bg-card card-border rounded-xl p-8 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                animated ? "animate-fade-in opacity-0" : "opacity-0"
              }`}
              style={{
                animationDelay: `${0.2 + index * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={cert.badgeImage}
                  alt={`${cert.name} badge`}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>

              <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>

              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {cert.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
