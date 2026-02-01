import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, payments, and admin dashboard built with Next.js and Stripe.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Management App",
    description: "Collaborative task management tool with real-time updates, team features, and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform leveraging AI to generate marketing copy, blog posts, and social media content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with advanced search, maps integration, and virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Google Maps", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(165_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm tracking-wider">
            // My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for 
            creating impactful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <Badge key={j} variant="secondary" className="bg-primary/10 text-primary border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="glow">
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-border hover:border-primary">
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
