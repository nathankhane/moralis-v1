"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        number: 1,
        title: "Share goals",
        description: "3–5 min brief"
    },
    {
        number: 2,
        title: "Quote in ≤24h",
        description: "Transparent pricing for your scope"
    },
    {
        number: 3,
        title: "Approve → we match experts",
        description: "≤48h to find the right operators"
    },
    {
        number: 4,
        title: "Choose format: async video, survey, live call",
        description: "Pick what works best for your timeline"
    },
    {
        number: 5,
        title: "Accept deliverables → payout triggers",
        description: "Pay only when insights meet your brief"
    }
] as const;

export function Steps() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                        How it works
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-6"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">
                                    {step.number}
                                </span>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
