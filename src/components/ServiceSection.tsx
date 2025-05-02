
import { ArrowRight, Cloud, Code, Database, Layout, LineChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ServiceSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      name: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements."
    },
    {
      icon: Layout,
      name: "Web & Mobile App Development",
      description: "Responsive web applications and mobile apps for iOS and Android platforms."
    },
    {
      icon: Cloud,
      name: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure setup, migration and management."
    },
    {
      icon: Database,
      name: "Data Analytics & AI",
      description: "Transform your raw data into actionable insights with advanced analytics and AI."
    },
    {
      icon: Shield,
      name: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets."
    },
    {
      icon: LineChart,
      name: "Digital Transformation",
      description: "Strategic consulting to help your business embrace digital innovation."
    }
  ];

  const handleServicesClick = () => {
    navigate("/services");
  };

  return (
    <section className="py-20 bg-secondary/50 dark:bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-muted-foreground mb-8">
          உங்கள் தொழிலுக்கு தேவையான அனைத்து தொழில்நுட்ப சேவைகளையும் நாங்கள் வழங்குகிறோம்..
          </p>
          <Button 
            onClick={handleServicesClick}
            className="transform transition-transform hover:scale-105 active:scale-95"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.name} 
              className="p-6 border border-border rounded-lg bg-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-zelabria-600/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-zelabria-600 dark:text-zelabria-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
