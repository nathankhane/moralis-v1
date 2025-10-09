import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container-mobile-optimized text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Automation with a{" "}
            <span className="text-primary">conscience</span>.
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We help founders and teams make principled decisions that scale. Morálís blends investment readiness, 
            brand positioning, and AI-powered automation—without compromising ethics.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-[1.03] shadow-lg transition-all">
              <Link href="/contact">
                Book intro call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="#services">
                Our services
              </Link>
            </Button>
          </div>
          
          {/* Etymology note */}
          <div className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            <p>&ldquo;&apos;of or pertaining to manners, morals, or ethics&apos; — morálís&rdquo;</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
