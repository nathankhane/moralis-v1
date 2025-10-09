"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Hero } from "@/components/pricing/Hero";
import { PriceDrivers } from "@/components/pricing/PriceDrivers";
import { ScopeCards } from "@/components/pricing/ScopeCards";
import { WhyUs } from "@/components/pricing/WhyUs";
import { Steps } from "@/components/pricing/Steps";
import { Scheduler } from "@/components/pricing/Scheduler";
import { FAQ } from "@/components/pricing/FAQ";

export default function PricingPage() {
  const schedulerRef = useRef<HTMLDivElement>(null);
  const [showMobileCTA, setShowMobileCTA] = useState(true);

  const scrollToScheduler = () => {
    schedulerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setShowMobileCTA(false);
  };

  return (
    <>
      {/* Hero */}
      <Hero onCTAClick={scrollToScheduler} />

      {/* What shapes price */}
      <PriceDrivers />

      {/* Example scopes */}
      <ScopeCards />

      {/* Why Bridge */}
      <WhyUs />

      {/* How it works */}
      <Steps />

      {/* Book Discovery Call */}
      <section className="py-16 bg-background" id="quote-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div ref={schedulerRef}>
            <Scheduler />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Mobile Sticky CTA */}
      {showMobileCTA && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t lg:hidden z-50"
        >
          <Button
            onClick={scrollToScheduler}
            className="w-full text-lg py-6 rounded-full"
            size="lg"
          >
            Book discovery call →
          </Button>
        </motion.div>
      )}
    </>
  );
}