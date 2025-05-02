
import { NavigationMenu } from "@/components/NavigationMenu";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is transforming the software development process and what it means for developers and businesses.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "May 15, 2023",
    readTime: "5 min read",
    author: "Aravinth",
    category: "Technology"
  },
  {
    title: "Building Scalable Web Applications with Modern Architecture",
    excerpt: "Learn best practices for designing and implementing scalable web applications that can handle growth and changing requirements.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "April 28, 2023",
    readTime: "8 min read",
    author: "Dhinesh",
    category: "Development"
  },
  {
    title: "The Rise of Serverless Computing",
    excerpt: "Discover how serverless architecture is changing the way we build and deploy applications in the cloud.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "March 12, 2023",
    readTime: "6 min read",
    author: "Aravinth",
    category: "Cloud"
  },
  {
    title: "Optimizing Database Performance for High-Traffic Applications",
    excerpt: "Tips and techniques for improving database performance and handling large volumes of data efficiently.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "February 20, 2023",
    readTime: "7 min read",
    author: "Dhinesh",
    category: "Database"
  },
  {
    title: "The Impact of Web3 on Traditional Business Models",
    excerpt: "An analysis of how blockchain and decentralized technologies are disrupting conventional business approaches.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "January 8, 2023",
    readTime: "9 min read",
    author: "Aravinth",
    category: "Blockchain"
  },
  {
    title: "UX Design Principles for Enterprise Applications",
    excerpt: "How to create user-friendly interfaces for complex enterprise software that improve productivity and user satisfaction.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "December 15, 2022",
    readTime: "5 min read",
    author: "Dhinesh",
    category: "Design"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl text-muted-foreground">
                Insights, perspectives, and expertise from our team on technology, innovation, and industry trends.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container">
            <Card className="overflow-hidden glass-card border-none shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto w-full h-full bg-secondary/50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                    alt="Featured Post" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 inline-flex bg-zelabria-600 hover:bg-zelabria-700">Featured</Badge>
                  <h2 className="text-3xl font-bold mb-4">
                    How AI is Revolutionizing Software Testing and Quality Assurance
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Artificial intelligence is transforming how we approach software testing, making it more efficient, accurate, and comprehensive than ever before. Learn about the latest tools and techniques.
                  </p>
                  <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>June 10, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>Aravinth</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>10 min read</span>
                    </div>
                  </div>
                  <Button>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-secondary/50 dark:bg-secondary/20">
          <div className="container">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">All</Button>
                <Button variant="ghost" size="sm">Technology</Button>
                <Button variant="ghost" size="sm">Development</Button>
                <Button variant="ghost" size="sm">Design</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.title}
                  className="overflow-hidden glass-card border-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video w-full bg-secondary/50 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm">
                        <div className="w-8 h-8 rounded-full bg-zelabria-600/10 flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-zelabria-600 dark:text-zelabria-400" />
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-zelabria-600/10 dark:bg-zelabria-800/20 border border-zelabria-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Stay updated with the latest insights and news from our experts. We promise not to spam your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button className="bg-zelabria-600 hover:bg-zelabria-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
