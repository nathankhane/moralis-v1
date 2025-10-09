import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Search, Hammer, GraduationCap } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Discovery",
      description: "45-min intro via Cal.com; goals, constraints, success criteria.",
      details: "We start with a candid conversation about your challenges and aspirations."
    },
    {
      number: "02",
      icon: Search,
      title: "Diagnostic",
      description: "1–2 week deep dive; deliver insights + roadmap with ethical guardrails.",
      details: "Comprehensive analysis with clear recommendations and ethical considerations."
    },
    {
      number: "03",
      icon: Hammer,
      title: "Build",
      description: "Execute sprints on the chosen track(s); weekly standups, clear artifacts.",
      details: "Focused execution with regular check-ins and transparent progress tracking."
    },
    {
      number: "04",
      icon: GraduationCap,
      title: "Enable",
      description: "Train team, handover docs, instrument metrics for compounding.",
      details: "Knowledge transfer and sustainable implementation for long-term success."
    }
  ];

  return (
    <section id="process" className="section-mobile-optimized">
      <div className="container-mobile-optimized">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to principled growth and automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1">
                      {step.number}
                    </Badge>
                  </div>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit mt-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
