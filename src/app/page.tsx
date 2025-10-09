import ErrorBoundary from "@/components/ErrorBoundary";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Ethos } from "@/components/sections/Ethos";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary>
          <Services />
        </ErrorBoundary>

        <ErrorBoundary>
          <Process />
        </ErrorBoundary>

        <ErrorBoundary>
          <Ethos />
        </ErrorBoundary>

        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>

        <ErrorBoundary>
          <Team />
        </ErrorBoundary>

        <ErrorBoundary>
          <CTA />
        </ErrorBoundary>
      </main>
    </div>
  );
}
