"use client";

import Cal from "@calcom/embed-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-mobile-optimized px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a 45-minute intro call to discuss your goals and see if we&apos;re a good fit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Cal
            calLink={process.env.NEXT_PUBLIC_CAL_LINK ?? "moralis/intro"}
            style={{
              height: "600px",
              width: "100%",
              minHeight: "400px"
            }}
            config={{
              layout: "month_view",
              theme: "light"
            }}
          />
        </div>
      </div>
    </div>
  );
}
