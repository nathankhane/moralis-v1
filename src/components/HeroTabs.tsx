'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatedGroup } from './ui/animated-group';
import { TextEffect } from './ui/text-effect';
import { PillToggle } from './ui/pill-toggle';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import RevenueCalculator from './RevenueCalculator';
import FloatingTabsPill from './FloatingTabsPill';
import BenefitsSection from '@/components/BenefitsSection';
import { UserCheck, MessageSquare, DollarSign, FileText, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const personas = {
    expert: {
        h1: 'Turn expertise into recurring revenue.',
        sub: 'Bridge matches you with providers who\'ll pay for your product feedback, content, and discovery calls.',
        cta: { label: 'Sign up as Expert', href: 'https://cal.com/bridgenow/discoverycall' },
        why: [
            {
                title: 'Turn knowledge into income',
                desc: 'Earn recurring revenue by talking about the tools you already love and use every day.',
            },
            {
                title: 'Curated brand offers',
                desc: 'Get invitations from VC-backed SaaS teams—no generic "influencer" spam, ever.',
            },
            {
                title: 'Own your schedule',
                desc: 'Pick live calls, async video, or written reviews; 15 minutes can fund your coffee habit for a week.',
            },
        ],
        howItWorks: {
            subtitle: 'Apply once → Accept gigs → Cash in on repeat',
            steps: [
                {
                    icon: UserCheck,
                    title: 'Apply & Get Verified',
                    desc: 'Two‑minute form + LinkedIn/Google. We green‑light you in under 24 h—no paperwork parade.',
                    cta: { label: 'Start Application', href: '/experts/apply' }
                },
                {
                    icon: MessageSquare,
                    title: 'Choose Gigs, Share Insight',
                    desc: 'Browse live briefs, accept what fits, and drop your know‑how via call, survey, or video.',
                    cta: { label: 'View Offers', href: '/experts/offers' }
                },
                {
                    icon: DollarSign,
                    title: 'Instant + Recurring Payouts',
                    desc: 'Stripe drops cash within 48 h—then pays royalties any time your content gets reused.',
                    cta: { label: 'Learn More', href: '/experts/payouts' }
                }
            ]
        }
    },
    company: {
        h1: 'Book insights from users who live in your product.',
        sub: 'Instantly schedule calls, surveys, and content sessions with vetted power-users — zero recruiting overhead.',
        cta: { label: 'Start as Company', href: 'https://cal.com/bridgenow/discoverycall' },
        why: [
            {
                title: 'Ship the right features—fast',
                desc: 'Make confident roadmap calls with insights from the power-users who push your product to its limits.',
            },
            {
                title: 'Zero recruiting overhead',
                desc: 'Book calls, async videos, or surveys in two clicks—no chasing calendars or cold DMs.',
            },
            {
                title: 'Pay only for actionable insight',
                desc: 'Credits are charged only when a session is delivered, so every dollar traces back to a datapoint you can use.',
            },
        ],
        howItWorks: {
            subtitle: 'Post a brief → Meet your match → Own every deliverable',
            steps: [
                {
                    icon: FileText,
                    title: 'Post a Brief',
                    desc: 'Tell us the question, we polish the brief, so experts know exactly how to deliver.',
                    cta: { label: 'Start Request', href: '/companies/request' }
                },
                {
                    icon: Users,
                    title: 'Match & Meet',
                    desc: 'Get a vetted shortlist in minutes, then book a call or async video in two clicks.',
                    cta: { label: 'See Experts', href: '/companies/experts' }
                },
                {
                    icon: TrendingUp,
                    title: 'Own the Content & Data',
                    desc: 'Recordings, notes, and AI summaries are yours to slice, share, and reuse—forever.',
                    cta: { label: 'View Pricing', href: '/companies/pricing' }
                }
            ]
        }
    },
} as const;

const heroGradient = 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent';

const PILL_OPTIONS = [
    { value: "expert" as const, label: "Experts" },
        { value: "company" as const, label: "Companies" },
];

export default function HeroTabs() {
    const router = useRouter();
    const search = useSearchParams();
    const shouldReduceMotion = useReducedMotion() ?? false;

    const [active, setActive] = useState<'expert' | 'company'>(
        (search.get('persona') as 'expert' | 'company') ?? 'expert'
    );
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Debounce rapid persona changes to prevent blank states
        const timeoutId = setTimeout(() => {
            router.replace(`/?persona=${active}`, { scroll: false });
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [active, router]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const data = personas[active];

    // Performance-optimized animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 40,
            scale: shouldReduceMotion ? 1 : 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: shouldReduceMotion ? 0.1 : 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
                delayChildren: shouldReduceMotion ? 0 : 0.1
            }
        }
    };

    return (
        <>
            {/* Floating Tabs Pill - only show when scrolled */}
            {isScrolled && (
                <FloatingTabsPill
                    active={active}
                    onActiveChange={setActive}
                    isScrolled={isScrolled}
                />
            )}

            <div className="relative">
                {/* Hero Section */}
                <section
                    className="relative flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[70vh] lg:min-h-screen pt-4 sm:pt-2 lg:-mt-4 pb-2 sm:pb-8 lg:pb-12 overflow-hidden px-4 sm:px-6 lg:px-8"
                    data-animate
                >

                    <div className="relative z-10 flex flex-col w-full">
                        {/* Tabs */}
                        <div className="flex justify-center mb-6 sm:mb-5 lg:mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
                            >
                                <PillToggle
                                    options={PILL_OPTIONS}
                                    active={active}
                                    onActiveChange={setActive}
                                    size="lg"
                                    className="shadow-lg backdrop-blur-sm"
                                />
                            </motion.div>
                        </div>

                        <AnimatedGroup className="w-full text-center" key={active}>
                            <motion.h1
                                key={`h1-${active}`}
                                className="mx-auto text-center font-bold leading-[1.1] tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl gradient-text mb-4 sm:mb-6 lg:mb-8 max-w-5xl px-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{ willChange: shouldReduceMotion ? "auto" : "transform" }}
                            >
                                {data.h1}
                            </motion.h1>
                            <div
                                key={`subtitle-${active}`}
                                className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 lg:mb-14 max-w-2xl mx-auto px-4 leading-relaxed"
                            >
                                {active === 'expert' ? (
                                    <TextEffect
                                        key="expert-text"
                                        preset={shouldReduceMotion ? "fade" : "fade-in-blur"}
                                        speedSegment={shouldReduceMotion ? 1 : 0.3}
                                        delay={shouldReduceMotion ? 0 : 0.2}
                                    >
                                        Bridge matches you with companies who&apos;ll pay for your product feedback, content, and discovery calls.
                                    </TextEffect>
                                ) : (
                                    <TextEffect
                                        key="provider-text"
                                        preset={shouldReduceMotion ? "fade" : "fade-in-blur"}
                                        speedSegment={shouldReduceMotion ? 1 : 0.3}
                                        delay={shouldReduceMotion ? 0 : 0.2}
                                    >
                                        {data.sub}
                                    </TextEffect>
                                )}
                            </div>
                        </AnimatedGroup>

                        {/* CTA Buttons */}
                        <motion.div
                            key={`cta-${active}`}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
                        >
                            <motion.a
                                href={data.cta.href}
                                className={cn(
                                    "group relative inline-flex items-center justify-center",
                                    "rounded-full bg-white border-2 border-gray-200",
                                    "px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold text-gray-900",
                                    "transition-all duration-300 ease-out",
                                    "hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500",
                                    "hover:text-white hover:border-transparent",
                                    "hover:shadow-2xl hover:shadow-purple-500/25",
                                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500/50",
                                    "active:scale-95 transform-gpu",
                                    "touch-target"
                                )}
                                whileHover={shouldReduceMotion ? {} : {
                                    scale: 1.03,
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                whileTap={shouldReduceMotion ? {} : {
                                    scale: 0.97,
                                    transition: { duration: 0.1 }
                                }}
                                style={{ willChange: shouldReduceMotion ? "auto" : "transform" }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {data.cta.label}
                                    <motion.span
                                        className="inline-block"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        →
                                    </motion.span>
                                </span>

                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                <BenefitsSection persona={active === 'expert' ? 'expert' : 'company'} />

                {/* How it Works Section */}
                <section className="py-4 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            key={`how-it-works-header-${active}`}
                            className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                                How it Works
                            </span>
                        </motion.h2>
                        <motion.p
                            key={`how-it-works-subtitle-${active}`}
                            className="text-center text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        >
                            {data.howItWorks.subtitle}
                        </motion.p>

                        <div className="relative">
                            {/* decorative halo */}
                            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial" />

                            <motion.div
                                key={`how-it-works-steps-${active}`}
                                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.1,
                                    }
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {data.howItWorks.steps.map((step, i) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{
                                            opacity: 0,
                                            y: 30,
                                            scale: 0.95,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: {
                                                duration: 0.6,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                            },
                                        }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="group relative rounded-3xl bg-indigo-50 p-8 ring-1 ring-gray-200 dark:bg-indigo-950/30 dark:ring-indigo-900/60 text-center overflow-hidden"
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                        }}
                                    >
                                        {/* Hover glow effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 rounded-3xl opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Shimmer effect */}
                                        {!shouldReduceMotion && (
                                            <motion.div
                                                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-900/20 dark:via-white/20 to-transparent"
                                                animate={{
                                                    translateX: ["0%", "200%"],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    delay: i * 0.5 + 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 12,
                                                }}
                                            />
                                        )}

                                        <div className="relative z-10 flex flex-col items-center h-full">
                                            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-indigo-500/20">
                                                <step.icon size={40} className="text-indigo-500" />
                                            </div>

                                            <motion.h3
                                                className="mb-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-lg font-semibold text-transparent text-center"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {step.title}
                                            </motion.h3>

                                            <motion.p
                                                className="mx-auto max-w-prose text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-center mb-6 flex-grow"
                                                initial={{ opacity: 0.8 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {step.desc}
                                            </motion.p>

                                            <motion.button
                                                className={cn(
                                                    "group relative inline-flex items-center justify-center",
                                                    "px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm sm:text-base",
                                                    "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white",
                                                    "transition-all duration-300 ease-out",
                                                    "hover:shadow-lg hover:shadow-indigo-500/25",
                                                    "focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
                                                    "active:scale-95 transform-gpu"
                                                )}
                                                whileHover={shouldReduceMotion ? {} : {
                                                    scale: 1.03,
                                                    transition: { duration: 0.2 }
                                                }}
                                                whileTap={shouldReduceMotion ? {} : {
                                                    scale: 0.97,
                                                    transition: { duration: 0.1 }
                                                }}
                                            >
                                                <span className="relative z-10">{step.cta.label}</span>
                                            </motion.button>
                                        </div>

                                        {/* Enhanced sliding underline */}
                                        <motion.span
                                            className="absolute bottom-6 left-1/2 h-px bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                                            initial={{ width: 0, x: "-50%" }}
                                            whileHover={{
                                                width: "60px",
                                                transition: { duration: 0.4, ease: "easeOut" }
                                            }}
                                        />

                                        {/* Corner accent */}
                                        <motion.div
                                            className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-tr-3xl opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Revenue Calculator Section - Only for Experts */}
                {active === 'expert' && (
                    <section className="relative py-4 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                key={`revenue-header-${active}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-8 sm:mb-12"
                            >
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    Estimate Your Revenue
                                </h2>
                                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                                    See what your expertise could earn on Bridge
                                </p>
                            </motion.div>

                            <motion.div
                                key={`revenue-calculator-${active}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <RevenueCalculator />
                            </motion.div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
} 