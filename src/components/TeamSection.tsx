
import { Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const coreTeam: TeamMember[] = [
  {
    name: "Dhinesh",
    role: "Founder",
    bio: "Expert in software architecture and emerging technologies, overseeing technical direction.",
    image: "/lovable-uploads/07f1ce7d-1815-461c-b408-a437b1e72658.png",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/dhinesh-s-55820a2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com"
    }
  },
  {
    name: "Aravinth",
    role: "Co-founder and CEO",
    bio: "Passionate about technology and innovation, leading Zelabria's vision and strategy.",
    image: "/lovable-uploads/1accd3cd-fd2e-45b3-9362-be79e2cc805e.png",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/aravinth-n-005085290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com"
    }
  }
];

const extendedTeam: TeamMember[] = [
  {
    name: "Lakshya S",
    role: "Project Head & Operations Manager"
  },
  {
    name: "Kumar G",
    role: "Technology and Security Head"
  },
  {
    name: "Janani V",
    role: "Innovation and Digital Content Head"
  },
  {
    name: "Shivas M",
    role: "Portal Manager"
  }
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Leadership</h2>
          <p className="text-muted-foreground">
            The talented minds behind Zelabria's vision and success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {coreTeam.map((member, index) => (
            <div 
              key={member.name}
              className="flex flex-col items-center text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-zelabria-500 to-zelabria-700 opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full border-4 border-border"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    {member.social?.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zelabria-100">
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                    {member.social?.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zelabria-100">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {member.social?.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zelabria-100">
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-zelabria-600 dark:text-zelabria-400 mb-2">{member.role}</p>
              <p className="text-muted-foreground max-w-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-10">Our Strong Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {extendedTeam.map((member, index) => (
              <Card 
                key={member.name}
                className="glass-card border-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-medium mb-2">{member.name}</h4>
                  <p className="text-sm text-zelabria-600 dark:text-zelabria-400">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
