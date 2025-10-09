import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Bot } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment",
      description: "Narrative & data prep (decks, KPI runway, metrics hygiene)",
      features: [
        "Fundraise readiness sprints & mock Q&A",
        "Light diligence, GTM & ops modeling",
        "Investor deck optimization"
      ]
    },
    {
      icon: Target,
      title: "Brand Positioning",
      description: "Positioning & messaging workshops",
      features: [
        "Identity system direction (wordmark, palette, voice)",
        "Website storytelling & launch plan",
        "Market positioning strategy"
      ]
    },
    {
      icon: Bot,
      title: "Automation (AI)",
      description: "Ops audit & automation roadmap",
      features: [
        "Agentic workflows (CRM, support, research)",
        "Compliance-minded implementation & training",
        "AI integration consulting"
      ]
    }
  ];

  return (
    <section id="services" className="section-mobile-optimized bg-muted/30">
      <div className="container-mobile-optimized">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How we help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three focused tracks to accelerate your growth with principled automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Badge variant="secondary" className="mt-0.5 text-xs px-2 py-0.5">
                          ✓
                        </Badge>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
