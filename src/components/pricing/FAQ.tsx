"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "Can we pilot first?",
        answer: "Yes. Start with a one-off or a 2-week sprint."
    },
    {
        question: "What if outputs aren't useful?",
        answer: "You don't pay; credits return."
    },
    {
        question: "Security/compliance?",
        answer: "NDAs, SSO, and DPA/MSA supported."
    },
    {
        question: "How fast to first insight?",
        answer: "Matching ≤48h; async outputs commonly within 72h."
    }
] as const;

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Common questions about our process
                    </p>
                </motion.div>

                <div className="mx-auto mt-8 max-w-xl">
                    <div className="space-y-6">
                        {FAQ_ITEMS.map((item, idx) => (
                            <motion.details
                                key={item.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                whileHover={{ scale: 1.02 }}
                                className={`group transition-all duration-300 bg-card border rounded-xl px-6 py-4 ${openIndex === idx ? "ring-2 ring-primary" : ""}`}
                                open={openIndex === idx}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenIndex(openIndex === idx ? null : idx);
                                }}
                            >
                                <summary
                                    className="cursor-pointer text-base font-semibold group-hover:text-primary transition-colors flex items-center justify-between outline-none text-card-foreground"
                                >
                                    <span>{item.question}</span>
                                    <ChevronRight
                                        className={`ml-2 h-4 w-4 transition-all duration-300 ${openIndex === idx
                                            ? "rotate-90 text-primary"
                                            : "rotate-0 text-muted-foreground"
                                            }`}
                                    />
                                </summary>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "opacity-100 max-h-[500px] translate-y-0" : "opacity-0 max-h-0 -translate-y-2"}`}
                                >
                                    <div className="mt-2 text-sm sm:text-base text-muted-foreground animate-fade-in leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
