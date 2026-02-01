import { Code2, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Rocket, value: "5+", label: "Years Experience" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Workspace"
                className="rounded-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-3xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider">
                // About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Passionate about creating{" "}
                <span className="gradient-text">digital solutions</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant, 
              efficient, and user-friendly web applications. With over 5 years 
              of experience, I've worked with startups and enterprises to bring 
              their digital visions to life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical expertise with creative problem-solving, 
              ensuring that every project not only functions flawlessly but also 
              delivers an exceptional user experience. I believe in clean code, 
              continuous learning, and staying ahead of technology trends.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
