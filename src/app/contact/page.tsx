"use client";

import Cal from "@calcom/embed-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-mobile-optimized py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a 45-minute intro call to discuss your goals and see if we&apos;re a good fit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Cal
            calLink={process.env.NEXT_PUBLIC_CAL_LINK ?? "moralis/intro"}
            style={{ height: "700px", width: "100%" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
}
