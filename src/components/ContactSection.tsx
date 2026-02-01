import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@johndoe.dev" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm tracking-wider">
            // Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your 
            ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="pt-6">
              <p className="text-muted-foreground mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    placeholder="Project inquiry"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button size="lg" className="w-full glow">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
