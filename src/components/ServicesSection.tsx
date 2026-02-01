import { Globe, Smartphone, Server, Palette, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that provide seamless experiences across all devices and screen sizes.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable server-side solutions with robust APIs and efficient database architecture.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces with attention to user experience and modern design principles.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization and code refactoring to ensure lightning-fast load times.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Implementation of security best practices to protect your applications and data.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm tracking-wider">
            // What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Services <span className="gradient-text">I Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services tailored to bring your digital 
            vision to life with precision and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow transition-all duration-300">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
