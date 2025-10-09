"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
    onCTAClick: () => void;
}

const HERO_COPY = {
    title: "Pricing built around your research needs",
    subtitle: "Tell us what you need; get a fast, transparent quote in 24 hours. Pay only when insights meet your brief.",
    cta: "Book discovery call"
} as const;

export function Hero({ onCTAClick }: HeroProps) {
    return (
        <section className="pt-24 pb-32 min-h-[90vh] flex items-center bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        {HERO_COPY.title}
                    </h1>
                    <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                        {HERO_COPY.subtitle}
                    </p>
                    <Button
                        size="lg"
                        onClick={onCTAClick}
                        className="text-lg px-8 py-6 rounded-full"
                    >
                        {HERO_COPY.cta}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
