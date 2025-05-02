
import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with Zelabria transformed our business. Their innovative solutions helped us streamline operations and increase customer satisfaction by 40%.",
    author: "ARAVINDH",
    position: "FOUNDER",
    company: "NAVIIGOO"
  },
  {
    quote: "The team at Zelabria delivered our mobile app ahead of schedule with exceptional quality. Their attention to detail and technical expertise is unmatched.",
    author: "ARUN",
    position: "MANAGER",
    company: "Innovate Inc."
  },
  {
    quote: "Zelabria's data analytics solution provided us with actionable insights that have directly contributed to a 25% increase in our revenue.",
    author: "Priya",
    position: "Director of Operations",
    company: "DataDrive Solutions"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 border-none opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="h-8 w-8 text-zelabria-500 mb-4" />
              <p className="text-foreground mb-6">"{testimonial.quote}"</p>
              <Separator className="my-4" />
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
