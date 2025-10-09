"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const PRICE_DRIVERS = [
    "Session format",
    "Speed / SLA",
    "Expert seniority / rarity",
    "Volume & cadence",
    "Assets & rights",
    "Compliance"
] as const;

export function PriceDrivers() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-8 text-foreground">
                        What shapes your price
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {PRICE_DRIVERS.map((driver, index) => (
                            <motion.div
                                key={driver}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Badge
                                    variant="secondary"
                                    className="text-base px-4 py-2 rounded-full bg-background border border-border hover:bg-accent transition-colors"
                                >
                                    {driver}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
