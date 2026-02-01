const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 82 },
  { name: "PostgreSQL / MongoDB", level: 85 },
  { name: "AWS / Cloud Services", level: 78 },
];

const technologies = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "Docker",
  "AWS", "Git", "GraphQL", "REST APIs", "Tailwind CSS", "Figma"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(165_80%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm tracking-wider">
            // My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            that power exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Progress Bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full glow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
