
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "ECOVERSE",
    description: "EcoVerse is a comprehensive platform designed to empower citizens, businesses, and local governments to collaborate on building sustainable, eco-friendly cities. Through data-driven insights, community engagement, and innovative tools, we're creating a greener future together.",
    tags: ["Sustainability", "Community", "Data Analytics"]
  },
  {
    title: "PAWS AND PLACES",
    description: "A tech-based initiative to support stray dog and cat rescues using mapping, reporting tools, and volunteer coordination.",
    tags: ["Animal Welfare", "Mapping", "Community Volunteer"]
  },
  {
    title: "ACADSMART",
    description: "A centralized academic publication management platform for faculty to store and showcase their research output.",
    tags: ["Academic", "Research", "Management"]
  },
  {
    title: "BILLING SOFTWARE",
    description: "Lightweight invoicing and billing software designed for startups and local businesses, includes GST handling and inventory support.",
    tags: ["Invoicing", "GST", "Inventory"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-muted-foreground">
                Explore our latest work and see how we've helped our clients achieve their goals.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="overflow-hidden glass-card border-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
