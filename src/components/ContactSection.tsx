
import { useState } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-secondary/50 dark:bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? We'd love to hear about it. Drop us a mail and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div className="opacity-0 animate-fade-in">
            <Card className="glass-card border-none p-1">
              <CardContent className="space-y-4 p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-zelabria-600 hover:bg-zelabria-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending... <MessageCircle className="animate-spin ml-2 h-4 w-4" /></>
                      ) : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-zelabria-600 to-zelabria-800 opacity-30 blur-xl"></div>
              <div className="relative space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Fill out the form or reach out to us directly using the information below.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-zelabria-600/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-zelabria-600 dark:text-zelabria-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:contact.zelabria@gmail.com" className="text-muted-foreground hover:text-zelabria-600 dark:hover:text-zelabria-400">
                        contact.zelabria@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-zelabria-600/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-zelabria-600 dark:text-zelabria-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href="tel:+919025420055" className="text-muted-foreground hover:text-zelabria-600 dark:hover:text-zelabria-400">
                        +91 9025420055
              
                      </a>
                      <a href="tel:+919025420055" className="text-muted-foreground hover:text-zelabria-600 dark:hover:text-zelabria-400">
                        +91 9150231058
              
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-zelabria-600 dark:text-zelabria-400 hover:underline">
                      privacy policy
                    </a>
                    {" "}and{" "}
                    <a href="/terms" className="text-zelabria-600 dark:text-zelabria-400 hover:underline">
                      terms of service
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
