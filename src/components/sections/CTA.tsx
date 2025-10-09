import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact-cta" className="section-mobile-optimized bg-primary/5">
      <div className="container-mobile-optimized">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to build responsibly?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Book a no-pressure intro. We&apos;ll be candid either way.
          </p>
          
          <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-[1.03] shadow-lg transition-all">
            <Link href="/contact">
              Book intro call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
