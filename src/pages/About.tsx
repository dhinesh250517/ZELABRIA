
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, LineChart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zelabria</h1>
              <p className="text-xl text-muted-foreground">
                We're building the next generation of digital solutions, helping businesses adapt and thrive in a rapidly evolving technological landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  We, Aravinth & Dhinesh led the way for the innovation for our web development and Python development problem-solving solutions from initial concept to final delivery.
                </p>
                <p className="text-muted-foreground mb-6">
                  We provide full cycle product development for global clients, small businesses, growing startups, and established enterprises while delivering mission-critical solutions to help clients establish a dynamic presence online. 
                </p>
                <p className="text-muted-foreground">
                  We've forged a specialist team that all share the passion to help out clients overachieve their business objectives and solve problems that matter. We're all driven by innovation, continual improvement, and service!  
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-zelabria-600 to-zelabria-800 opacity-30 blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden border border-border glass-card">
                  <div className="aspect-video w-full bg-secondary/50 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                      alt="Zelabria Technology" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do at Zelabria.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Innovation",
                  description: "We embrace new technologies and creative approaches to solve complex problems."
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We work closely with our clients as partners to achieve shared success."
                },
                {
                  icon: Globe,
                  title: "Impact",
                  description: "We measure our success by the tangible value we create for our clients."
                },
                {
                  icon: LineChart,
                  title: "Excellence",
                  description: "We hold ourselves to the highest standards in everything we do."
                },
                {
                  icon: Database,
                  title: "Integrity",
                  description: "We believe in transparency, honesty, and ethical business practices."
                }
              ].map((value, index) => (
                <Card 
                  key={value.title}
                  className="glass-card border-none transition-all duration-300 hover:shadow-purple-500/10 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
