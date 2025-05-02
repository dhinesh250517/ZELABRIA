
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                We'd love to hear from you. Reach out to us for any questions, collaborations, or project inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  details: "contact.zelabria@gmail.com",
                  description: "For general inquiries and information"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  details: "+91 9025420055",
                  description: "Monday-Friday, 9:00 AM - 6:00 PM IST"
                },
                {
                  icon: MapPin,
                  title: "Address",
                  details: "Chennai, Tamil Nadu, India",
                  description: "Our headquarters location"
                }
              ].map((item) => (
                <Card key={item.title} className="glass-card border-none">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-zelabria-600/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-zelabria-600 dark:text-zelabria-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="font-medium mb-2">{item.details}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <ContactSection />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Location</h2>
              <p className="text-muted-foreground">
                Visit us at Saveetha Engineering college Chennai, India.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto h-96 rounded-xl overflow-hidden border border-border glass-card">
            <iframe
              className="w-full h-full"
              src="https://maps.app.goo.gl/cGgYd6XjfjQnnftS6"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
             />

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our services and processes.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What services does Zelabria offer?",
                  answer: "Zelabria offers a comprehensive range of technology services including web development, mobile app development, cloud services, data analytics, AI and machine learning solutions, and more."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise solution could take several months. We provide detailed timelines during the project planning phase."
                },
                {
                  question: "Do you offer ongoing support after project completion?",
                  answer: "Yes, we offer various maintenance and support packages to ensure your solution continues to run smoothly after launch. These can be tailored to your specific needs and budget."
                },
                {
                  question: "How do you handle project pricing?",
                  answer: "We offer flexible pricing models including fixed price, time and materials, and retainer arrangements. After understanding your requirements, we'll recommend the most suitable option for your project."
                }
              ].map((faq, index) => (
                <Card key={index} className="glass-card border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-zelabria-600/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageCircle className="h-4 w-4 text-zelabria-600 dark:text-zelabria-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
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

export default Contact;
