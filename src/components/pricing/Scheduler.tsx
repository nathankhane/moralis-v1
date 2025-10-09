"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { track } from "@/lib/analytics";

declare global {
    interface Window {
        Cal?: any;
    }
}

interface SchedulerProps {
    calUrl?: string;
}

export function Scheduler({ calUrl }: SchedulerProps) {
    const defaultCalUrl = "https://cal.com/bridgenow/discoverycall";
    const [isLoading, setIsLoading] = useState(true);
    const isMountedRef = useRef(true);

    useEffect(() => {
        // Simple, reliable Cal.com initialization
        const initCal = () => {
            if (typeof window === 'undefined') return;

            // Use the exact Cal.com embed code provided
            (function (C: any, A: string, L: string) {
                let p = function (a: any, ar: any) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                    let cal = C.Cal;
                    let ar = arguments;
                    if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = cal.q || [];
                        d.head.appendChild(d.createElement("script")).src = A;
                        cal.loaded = true;
                    }
                    if (ar[0] === L) {
                        const api: any = function () { p(api, arguments); };
                        const namespace = ar[1];
                        api.q = api.q || [];
                        if (typeof namespace === "string") {
                            cal.ns[namespace] = cal.ns[namespace] || api;
                            p(cal.ns[namespace], ar);
                            p(cal, ["initNamespace", namespace]);
                        } else p(cal, ar);
                        return;
                    }
                    p(cal, ar);
                };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            window.Cal("init", "discoverycall", { origin: "https://app.cal.com" });

            window.Cal.ns.discoverycall("inline", {
                elementOrSelector: "#my-cal-inline-discoverycall",
                config: { "layout": "month_view" },
                calLink: "bridgenow/discoverycall",
            });

            window.Cal.ns.discoverycall("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

            // Hide loading state
            setTimeout(() => setIsLoading(false), 1500);
        };

        // Single initialization attempt
        const timer = setTimeout(initCal, 100);

        // Listen for booking confirmations
        const handleMessage = (event: MessageEvent) => {
            if (event.origin.includes('cal.com') && event.data?.type === 'booking_confirmed') {
                track('pricing_call_booked');
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const handleBookedClick = () => {
        track('pricing_call_booked');
    };

    return (
        <Card className="rounded-2xl shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Book a discovery call</CardTitle>
                <p className="text-muted-foreground">
                    Let&apos;s align on scope and timeline.
                </p>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {/* Cal.com inline embed */}
                    <div className="relative">
                        <div
                            style={{ width: '100%', height: '600px', overflow: 'scroll' }}
                            id="my-cal-inline-discoverycall"
                            className="rounded-lg border"
                        />

                        {/* Loading overlay */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-2" />
                                    <p className="text-sm text-muted-foreground">Loading calendar...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
