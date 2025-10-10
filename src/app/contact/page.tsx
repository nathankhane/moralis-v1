"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container-mobile-optimized px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a 30-minute intro call to discuss your goals and see if we&apos;re a good fit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <Cal 
              namespace="30min"
              calLink="moralis.studio/30min"
              style={{
                width: "100%", 
                height: "100%", 
                overflow: "scroll"
              }}
              config={{
                layout: "month_view"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
