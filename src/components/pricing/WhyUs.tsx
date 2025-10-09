"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, CreditCard } from "lucide-react";

const WHY_US_POINTS = [
    {
        icon: CheckCircle,
        title: "Verified operators, not generic panels",
        description: "Real users with proven expertise in your tools and industry"
    },
    {
        icon: Clock,
        title: "≤48h matching on eligible scopes",
        description: "Fast turnaround when you need insights quickly"
    },
    {
        icon: CreditCard,
        title: "Pay on acceptance: credits return if a deliverable misses your brief",
        description: "Risk-free research with satisfaction guarantee"
    }
] as const;

export function WhyUs() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                        Why teams choose Bridge
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {WHY_US_POINTS.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                                <point.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-foreground">
                                    {point.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
