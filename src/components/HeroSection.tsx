import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(165_80%_50%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(165_80%_50%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider">
                &lt;Hello World /&gt;
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'm <span className="gradient-text glow-text">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Crafting digital experiences with clean code and innovative solutions. 
              Specialized in building scalable web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent p-1 glow-strong">
                <div className="w-full h-full rounded-full bg-secondary overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center glow">
                <span className="text-2xl font-bold text-primary">5+</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-secondary rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" />
        </div>
      </div>
    </section>
  );
}
