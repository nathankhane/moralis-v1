"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EXAMPLE_SCOPES = [
    {
        title: "Launch validation sprint",
        description: "6–10 expert sessions in 2 weeks, clips + topline report."
    },
    {
        title: "Competitive win/loss pulse",
        description: "4–6 calls per month, quarterly findings."
    },
    {
        title: "Persona deep dive",
        description: "Async video briefs + 3 live calls; PMM-ready quotes."
    },
    {
        title: "Sales assist pack",
        description: "Ask an operator within 48h on blockers and objections."
    }
] as const;

export function ScopeCards() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                        Example scopes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Common research patterns our teams run
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {EXAMPLE_SCOPES.map((scope, index) => (
                        <motion.div
                            key={scope.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl text-foreground">
                                        {scope.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {scope.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
