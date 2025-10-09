import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-4 sm:pt-16 sm:pb-12 lg:py-20">
      <div className="container-mobile-optimized text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-8 lg:mb-12 leading-tight">
            Automation with a{" "}
            <span className="text-primary">conscience</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-10 lg:mb-14 max-w-3xl mx-auto leading-relaxed">
            We help founders and teams make principled decisions that scale. Morális blends investment readiness,
            brand positioning, and AI-powered automation—without compromising ethics.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover:scale-[1.03] shadow-lg transition-all min-h-[44px]">
              <Link href="/contact">
                Book intro call
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 min-h-[44px]">
              <Link href="#services">
                Our services
              </Link>
            </Button>
          </div>

          {/* Etymology note */}
          <div className="text-xs sm:text-sm text-muted-foreground italic max-w-2xl mx-auto">
            <p>&ldquo;&apos;of or pertaining to manners, morals, or ethics&apos; — morálís&rdquo;</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
