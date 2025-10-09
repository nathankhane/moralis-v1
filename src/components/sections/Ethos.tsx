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
    <section id="ethos" className="py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="container-mobile-optimized px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Our ethos
          </h2>
          
          {/* Values chips */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium"
                >
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {value.name}
                </Badge>
              );
            })}
          </div>
          
          {/* Main promise */}
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12">
              We operate on four promises: <strong>Ethics first</strong>, <strong>Outcomes over vanity</strong>, 
              <strong> Clear documentation</strong>, and <strong>Sustainable automation</strong>. If we can&apos;t help, 
              we&apos;ll tell you quickly and point you to someone who can.
            </p>
          </div>
        </div>
        
        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-primary/10 rounded-full w-fit">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
