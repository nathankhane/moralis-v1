import { Badge } from "@/components/ui/badge";
import { Heart, Target, FileText, Zap } from "lucide-react";

export function Ethos() {
  const values = [
    { name: "Ethics", icon: Heart },
    { name: "Virtuous", icon: Heart },
    { name: "Principled", icon: Heart },
    { name: "Customary", icon: Heart }
  ];

  const pillars = [
    {
      icon: Heart,
      title: "Ethics First",
      description: "Every decision is evaluated through an ethical lens"
    },
    {
      icon: Target,
      title: "Outcomes over Vanity",
      description: "We prioritize measurable results over impressive presentations"
    },
    {
      icon: FileText,
      title: "Clear Documentation",
      description: "Transparent processes and comprehensive knowledge transfer"
    },
    {
      icon: Zap,
      title: "Sustainable Automation",
      description: "Build systems that compound value over time"
    }
  ];

  return (
    <section id="ethos" className="section-mobile-optimized bg-muted/30">
      <div className="container-mobile-optimized">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our ethos
          </h2>
          
          {/* Values chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {value.name}
                </Badge>
              );
            })}
          </div>
          
          {/* Main promise */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12">
              We operate on four promises: <strong>Ethics first</strong>, <strong>Outcomes over vanity</strong>, 
              <strong> Clear documentation</strong>, and <strong>Sustainable automation</strong>. If we can&apos;t help, 
              we&apos;ll tell you quickly and point you to someone who can.
            </p>
          </div>
        </div>
        
        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
