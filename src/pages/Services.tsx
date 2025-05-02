
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { ServiceSection } from "@/components/ServiceSection";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layers, Lightbulb, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                We offer a comprehensive range of technology solutions like websites,softwares,apps to help your business thrive in the digital era.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <ServiceSection />

        {/* Process Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Process</h2>
              <p className="text-muted-foreground">
              
              We create websites that look good and work well on all devices.
    
              </p>
            
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-border"></div>
                
                {[
                  {
                    step: 1  ,
                    icon: Lightbulb,
                    title: "Discovery",
                    description: "We start by understanding your business goals, challenges, and requirements through in-depth consultations."
                  },
                  {
                    step: 2  ,
                    icon: Layers,
                    title: "Planning",
                    description: "We create a comprehensive roadmap outlining the scope, timeline, resources, and deliverables for your project."
                  },
                  {
                    step: 3  ,
                    icon: Rocket,
                    title: "Execution",
                    description: "Our experienced team develops your solution using agile methodologies, with regular updates and feedback loops."
                  },
                  {
                    step: 4  ,
                    icon: Target,
                    title: "Delivery & Support",
                    description: "We deploy your solution and provide ongoing maintenance and support to ensure long-term success."
                  }
                ].map((process, index) => (
                  <div key={process.title} className={`relative ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className={`hidden md:block absolute top-0 ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} w-8 h-8 rounded-full bg-zelabria-600 text-white flex items-center justify-center z-10`}>
                      {process.step}
                    </div>
                    <Card className="glass-card border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : ""} mb-4`}>
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <process.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                        <p className="text-muted-foreground">{process.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Technologies We Use</h2>
              <p className="text-muted-foreground">
                We leverage cutting-edge technologies to build high-performance solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {[
                "React", "Node.js", "Python", "AWS", "MongoDB", "Docker",
                "Kubernetes", "GraphQL", "Next.js", "Flutter", "TensorFlow", "PostgreSQL"
              ].map((tech) => (
                <div key={tech} className="flex flex-col items-center justify-center p-4 glass-card rounded-xl h-24">
                  <p className="font-medium text-center">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-zelabria-600/10 dark:bg-zelabria-800/20 border border-zelabria-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how we can help you achieve your business goals with our tailored technology solutions.
              </p>
              <Button size="lg" className="bg-zelabria-600 hover:bg-zelabria-700">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
