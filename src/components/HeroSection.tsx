
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  
  const handleGetStartedClick = () => {
    navigate("/contact");
  };
  
  const handleServicesClick = () => {
    navigate("/services");
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container pt-20 pb-32 relative z-10">
        <div className="max-w-3xl opacity-0 animate-fade-in">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm mb-6 bg-background/80 backdrop-blur-sm">
            <span className="bg-zelabria-600 text-white px-2 py-0.5 rounded-full text-xs mr-2">New</span> 
            <span className="text-muted-foreground">Introducing our AI-powered solutions</span>
            <ArrowRight className="h-4 w-4 ml-2 text-zelabria-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zelabria-600 to-zelabria-800 dark:from-zelabria-400 dark:to-zelabria-600">
              Building digital products
            </span>
            <br />
            <span className="text-foreground">
              that people{" "}
              <span className="inline-block bg-zelabria-500 dark:bg-zelabria-600 px-2 text-white">
                love
              </span>
              {" "}to use
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl">
            We create innovative solutions that transform ideas into high-performance software and applications that solve complex business challenges.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-zelabria-600 hover:bg-zelabria-700 transform transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={handleGetStartedClick}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transform transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={handleServicesClick}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}
