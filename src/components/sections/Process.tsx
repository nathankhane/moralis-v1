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
    <section id="process" className="py-8 sm:py-12 lg:py-16">
      <div className="container-mobile-optimized px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our process
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to principled growth and automation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm font-bold px-2 sm:px-3 py-1">
                      {step.number}
                    </Badge>
                  </div>
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-primary/10 rounded-full w-fit mt-3 sm:mt-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-semibold">{step.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
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
