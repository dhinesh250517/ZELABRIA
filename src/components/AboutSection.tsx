
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight mb-6">About Zelabria</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2024, Zelabria is a forward-thinking technology company specializing in innovative software solutions. We believe in transforming ideas into high-performance digital products that solve complex business challenges.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of experienced developers, designers, and product managers work collaboratively to deliver exceptional results for our clients across various industries.
            </p>
            <div className="grid grid-cols-2 gap-6 my-8">
              <div>
                <p className="text-3xl font-bold text-zelabria-600 dark:text-zelabria-500">50+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zelabria-600 dark:text-zelabria-500">50+</p>
                <p className="text-sm text-muted-foreground">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zelabria-600 dark:text-zelabria-500">15+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zelabria-600 dark:text-zelabria-500">2+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
            <Button className="mt-4">Learn More About Us</Button>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-zelabria-600 to-zelabria-800 opacity-30 blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden border border-border glass-card">
                <div className="aspect-video w-full bg-secondary/50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Zelabria Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-zelabria-500 animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-zelabria-800 dark:bg-zelabria-600 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
