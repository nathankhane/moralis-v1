import Link from "next/link";
import type { Metadata } from "next";

const LAST_UPDATED = "September 25, 2025";

export const metadata: Metadata = {
    title: "Privacy Policy — Bridge",
    description: "Your privacy powers our platform. Here's the short, clear version of what we collect, why, and how we protect it.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <div className="pb-16 px-6 pt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Privacy Policy</span>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Your privacy powers our platform. Here&apos;s the short, clear version of what we collect, why, and how we protect it.
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Last Updated on {LAST_UPDATED}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">

                        {/* Header */}
                        <div className="bg-card rounded-xl p-8 shadow-sm mb-8">
                            <div className="mb-8">
                                <h1 className="text-4xl font-bold text-foreground mb-6">Bridge Privacy Policy</h1>
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    Last updated: {LAST_UPDATED}
                                </p>
                                <p className="text-card-foreground mb-2">
                                    Only Founders, Inc. d/b/a &quot;Bridge&quot; (&quot;Bridge,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
                                </p>
                                <p className="text-card-foreground mb-2">
                                    380 C Street, Hayward, CA 94541, USA
                                </p>
                                <p className="text-card-foreground mb-4">
                                    Contact: <a href="mailto:nate@bridgenow.co" className="text-primary hover:text-primary-foreground underline">nate@bridgenow.co</a>
                                </p>
                            </div>
                        </div>

                        {/* 1) Scope */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                1) Scope
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>This Privacy Policy explains how we collect, use, disclose, and retain personal data when you use Bridge websites and services that link to this Policy (the &quot;Services&quot;). By using the Services, you agree to this Policy.</p>
                                </div>
                            </div>
                        </section>

                        {/* 2) Roles & responsibility */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                2) Roles & responsibility (controller vs. processor)
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Controller (most of the time).</strong> We act as an independent controller for account data, profiles, usage logs, product communications, payments and payouts administration, safety/abuse prevention, and analytics.</p>

                                    <p><strong>Processor / joint controller (some research).</strong> When a Provider commissions interviews/calls/surveys and we process Expert deliverables to fulfill that engagement, we may act as a processor (or joint controller) for that narrow purpose under our Data Processing Addendum (DPA) (available on request).</p>

                                    <p>If anything here conflicts with a signed DPA, the DPA governs for processor-mode activities.</p>
                                </div>
                            </div>
                        </section>

                        {/* 3) What we collect */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                3) What we collect
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Account & Auth.</strong> Name, email, password hash, role (Expert/Provider), and optional SSO identifiers (e.g., LinkedIn, Google if enabled).</p>
                                    <p><strong>Profile.</strong> Title, company, bio, skills/domain expertise, location region, LinkedIn URL, profile photo.</p>
                                    <p><strong>Verification.</strong> Phone number for OTP; LinkedIn URL for profile verification; payout/KYC data handled by our payments partner (we don&apos;t store full card/bank numbers).</p>
                                    <p><strong>Transactions.</strong> Bookings, invoices, payout status, tax/VAT IDs (where applicable).</p>
                                    <p><strong>Usage & Device.</strong> IP address, approximate location, device/browser type, timestamps, feature interactions, logs.</p>
                                    <p><strong>Session Content (optional).</strong> Call recordings, transcripts, notes, surveys, attachments you submit.</p>
                                    <p><strong>Marketing (optional).</strong> UTM parameters, email engagement if you opt in.</p>
                                    <p><strong>Sources.</strong> You; your device; Providers; public sources; integrated services you connect (e.g., LinkedIn OAuth); optional business enrichment.</p>

                                    <p className="text-muted-foreground text-sm mt-4">
                                        We do not intentionally collect sensitive categories such as precise geolocation, health data, or government IDs unless required for compliance by a payments/KYC provider.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 4) Why we use data */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                4) Why we use data (and legal bases for EEA/UK)
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Provide the Services.</strong> Account creation, authentication, matching, scheduling, payments/payouts, and support. (Contract; Legitimate interests.)</p>

                                    <p><strong>Safety & integrity.</strong> Prevent abuse, fraud, spam; secure accounts and infrastructure. (Legitimate interests; Legal obligation.)</p>

                                    <p><strong>Automated matching (AI).</strong> We use LLM-assisted ranking to help Providers discover relevant Experts. Providers make final selections. You may opt out of AI ranking (manual matching may be slower). (Legitimate interests; opt-out available.)</p>

                                    <p><strong>Communications.</strong> Transactional emails/SMS (e.g., OTP, receipts, policy updates) and product updates if you subscribe. (Contract; Consent.)</p>

                                    <p><strong>Improvement & analytics.</strong> Diagnose performance, enhance accuracy, and improve workflows. We train internal models on aggregate/de-identified data only. We do not use your personal data to train third-party foundation models. (Legitimate interests.)</p>

                                    <p><strong>Compliance.</strong> Tax, accounting, auditing, lawful requests, and enforcing terms. (Legal obligation.)</p>
                                </div>
                            </div>
                        </section>

                        {/* 5) Notice at Collection */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                5) &quot;Notice at Collection&quot; (CPRA)
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-muted">
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Category</th>
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Examples</th>
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Purpose(s)</th>
                                                <th className="text-left py-3 text-primary font-semibold">Retention</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-card-foreground">
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Identifiers</td>
                                                <td className="py-4 pr-6">Name, email, phone (OTP), SSO IDs</td>
                                                <td className="py-4 pr-6">Auth, account, security, communications</td>
                                                <td className="py-4">Account lifetime + 24 months inactivity, then delete/anonymize</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Commercial info</td>
                                                <td className="py-4 pr-6">Bookings, invoices, payout records</td>
                                                <td className="py-4 pr-6">Provide Services, accounting</td>
                                                <td className="py-4">7 years (tax/audit)</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Internet/activity</td>
                                                <td className="py-4 pr-6">IP, device/browser, logs, usage</td>
                                                <td className="py-4 pr-6">Security, analytics, improvement</td>
                                                <td className="py-4">≤ 30 days for logs; analytics per Section 13</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Professional info</td>
                                                <td className="py-4 pr-6">Title, company, expertise</td>
                                                <td className="py-4 pr-6">Matching, profiles, discovery</td>
                                                <td className="py-4">Account lifetime + 24 months inactivity</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Audio/visual</td>
                                                <td className="py-4 pr-6">Call recordings, transcripts</td>
                                                <td className="py-4 pr-6">Research engagements (optional)</td>
                                                <td className="py-4">36 months or earlier on request</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pr-6 font-medium">Inferences (limited)</td>
                                                <td className="py-4 pr-6">Match scores/tags</td>
                                                <td className="py-4 pr-6">Suggest relevant matches</td>
                                                <td className="py-4">Account lifetime or until opt-out</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-card-foreground leading-relaxed mt-4">
                                    We do not sell personal information. We may &quot;share&quot; personal information for cross-context behavioral advertising only if you opt-in to non-essential cookies/pixels; you can opt out at any time (see Section 11).
                                </p>
                            </div>
                        </section>

                        {/* 6) Phone numbers, messaging & OTP */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                6) Phone numbers, messaging & OTP
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>We process your phone number and messaging metadata (timestamps, country/carrier codes, delivery status, error codes) for authentication, fraud prevention, and account-security notifications.</p>

                                    <p><strong>Processor</strong>: Twilio (USA/EU regions as configured). We share only what&apos;s needed to send and deliver the message.</p>

                                    <p><strong>Content</strong>: OTP codes and brief transactional text (e.g., &quot;Bridge code 123-456&quot;). We don&apos;t use phone numbers for marketing without your separate opt-in.</p>

                                    <p><strong>Retention</strong>: We keep phone numbers for your active account and minimal messaging metadata for a limited period to investigate abuse/disputes, then delete or de-identify. (Twilio retains its own logs per its policy.)</p>

                                    <p><strong>Your controls</strong>: You can opt out by replying STOP (or disable phone verification where supported). You can also email us to delete your number; note this may disable SMS login.</p>

                                    <p><strong>Legal bases (EEA/UK)</strong>: contract (account security) and legitimate interests (fraud/abuse prevention).</p>

                                    <p><strong>International transfers</strong>: safeguarded by vendor transfer mechanisms (see &quot;International transfers&quot;).</p>
                                </div>
                            </div>
                        </section>

                        {/* 7) Cookies & similar tech */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                7) Cookies & similar tech
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Essential</strong> (auth, security, payments) — always on.</p>

                                    <p><strong>Analytics</strong> (e.g., privacy-centric tools; or Google Analytics if enabled) — to measure usage and improve performance.</p>

                                    <p><strong>Marketing pixels</strong> — load only if you opt-in; we honor your choices.</p>

                                    <p>Manage preferences anytime via &quot;Cookie Settings&quot; in the footer. We currently do not respond to DNT signals but respect your in-product cookie choices.</p>
                                </div>
                            </div>
                        </section>

                        {/* 8) Recordings, transcripts, and content */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    </svg>
                                </div>
                                8) Recordings, transcripts, and content
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>Recording a session requires the consent of all participants. You may request deletion of a specific recording/transcript (subject to legal/audit constraints and any Provider&apos;s lawful needs). If you do not want to be recorded, decline recording or leave the session.</p>
                                </div>
                            </div>
                        </section>

                        {/* 9) How we disclose information */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </div>
                                9) How we disclose information (processors & recipients)
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>We disclose personal data to service providers under contracts with confidentiality, security, and use restrictions. Typical processors include:</p>

                                    <div className="grid gap-2">
                                        <p><strong>Payments & Payouts:</strong> Stripe (incl. Connect/KYC)</p>
                                        <p><strong>Hosting/Infra:</strong> Vercel (on AWS)</p>
                                        <p><strong>Auth & Database:</strong> Supabase</p>
                                        <p><strong>Email:</strong> Resend</p>
                                        <p><strong>SMS/voice verification & transactional messaging:</strong> Twilio Inc.</p>
                                        <p><strong>Scheduling:</strong> Cal.com</p>
                                        <p><strong>Search:</strong> Algolia</p>
                                        <p><strong>Business Enrichment (optional):</strong> Clearbit</p>
                                        <p><strong>Analytics:</strong> Privacy-centric analytics; Google Analytics only with consent</p>
                                        <p><strong>Single Sign-On:</strong> LinkedIn; Google (if enabled)</p>
                                    </div>

                                    <p><strong>Legal & safety.</strong> We may disclose data to comply with law, protect rights/safety, or in a merger/acquisition.</p>

                                    <p><strong>Sub-processors page.</strong> We maintain a current list at <a href="https://www.bridgenow.co/subprocessors" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground underline">https://www.bridgenow.co/subprocessors</a>.</p>
                                </div>
                            </div>
                        </section>

                        {/* Google OAuth – Product-Specific Disclosures */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Google OAuth – Product-Specific Disclosures
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Scopes we request</h3>
                                        <p>We use Google Sign-In for authentication only and request these scopes:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li><code>openid</code> – verify your Google account</li>
                                            <li><code>email</code> – read your Google email address</li>
                                            <li><code>profile</code> – read your display name and profile photo URL (if available)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Data accessed (from Google)</h3>
                                        <p>Google Account ID, email address, display name, and profile photo URL. We do not access Gmail, Calendar, Drive, or other Google content.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">How we use it (Data Usage)</h3>
                                        <p>Solely to authenticate you, prefill your Bridge profile (name/avatar), and protect your account (fraud/abuse prevention). We do not use Google user data for advertising or to train third-party foundation models. Our use complies with the Google API Services User Data Policy (Limited Use).</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Sharing (Data Sharing)</h3>
                                        <p>We do not sell Google user data. We share it only with service providers under contract (e.g., hosting, authentication, and databases) to operate Bridge and only according to our documented instructions.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Storage & protection (Data Storage & Protection)</h3>
                                        <p>We store only the minimal tokens necessary for sign-in, encrypted at rest, with least-privilege access and rotation. We do not request offline access (no refresh tokens) for Google Sign-In. If a future feature requires offline access, we will update this section before launch.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Retention & deletion (Data Retention & Deletion)</h3>
                                        <p>Google-derived identifiers (Account ID, email, name, avatar URL) are retained for the life of your account and deleted or de-identified when your account is deleted, subject to legal/audit holds. You can revoke Bridge’s access anytime at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground underline">https://myaccount.google.com/permissions</a>.</p>
                                        <p>To delete your Bridge account or request deletion of Google-derived data, email <a href="mailto:nate@bridgenow.co" className="text-primary hover:text-primary-foreground underline">nate@bridgenow.co</a> with subject “Delete My Account.”</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* LinkedIn OAuth – Sign-In, Profile Prefill, and Expert Verification */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 11-12 0 6 6 0 0112 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m-3-3h6" />
                                    </svg>
                                </div>
                                LinkedIn OAuth – Sign-In, Profile Prefill, and Expert Verification
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Scopes we request</h3>
                                        <p>We use LinkedIn OAuth for sign-in and verification and request the minimum necessary scopes, currently:</p>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li><code>r_liteprofile</code> – basic profile (name, profile photo URL)</li>
                                            <li><code>r_emailaddress</code> – email address</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Data accessed</h3>
                                        <p>LinkedIn member ID, basic profile (display name, profile photo URL), and email address. We may store your public LinkedIn profile URL if you choose to link it to your Bridge profile.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">How we use it (Data Usage)</h3>
                                        <p>To authenticate you, prefill your Bridge profile, verify expert identity/credentials, and prevent fraud/abuse. If you choose to publish an expert profile, your LinkedIn URL may be displayed on your public profile.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Sharing (Data Sharing)</h3>
                                        <p>We do not sell LinkedIn data. We share it only with service providers under contract to operate Bridge and only for our documented instructions.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Storage & protection</h3>
                                        <p>Minimal tokens/identifiers only, encrypted at rest, and least-privilege access. We do not request offline access (no long-lived refresh tokens) for LinkedIn Sign-In.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Retention & deletion</h3>
                                        <p>LinkedIn-derived identifiers follow the same retention as your account and are deleted or de-identified when your account is deleted, subject to legal/audit holds. You can revoke Bridge’s access in your LinkedIn account settings (Permitted Services). For deletion requests, email <a href="mailto:nate@bridgenow.co" className="text-primary hover:text-primary-foreground underline">nate@bridgenow.co</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Twilio / SMS & Phone Communications */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                Twilio / SMS & Phone Communications
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">What we collect</h3>
                                        <p>Your phone number and limited messaging metadata (e.g., verification attempt timestamps, delivery status, carrier info) necessary to send/receive messages and prevent abuse. One-time verification codes are ephemeral and retained only for the time needed to complete verification.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">How we use it (Data Usage)</h3>
                                        <ul className="list-disc pl-6 mt-2 space-y-1">
                                            <li><strong>Account security:</strong> one-time passcodes (OTP) and identity verification</li>
                                            <li><strong>Transactional notifications:</strong> booking confirmations, reminders, and updates related to sessions you schedule or join</li>
                                        </ul>
                                        <p>We do not use SMS for marketing without your explicit opt-in.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Sharing (Data Sharing)</h3>
                                        <p>We use Twilio and similar messaging providers as processors to deliver SMS/voice. We do not sell your phone number or SMS metadata.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Storage & protection</h3>
                                        <p>Numbers and minimal logs are stored securely with encryption at rest and least-privilege access. Verification codes expire quickly and are not stored after validation.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Opt-in / Opt-out</h3>
                                        <p>By providing your number, you agree to receive transactional texts from Bridge. Msg & Data rates may apply.</p>
                                        <p>Reply STOP to opt-out of non-essential texts; reply HELP for help. Opting out of security texts (e.g., OTP) may limit access to certain features. Carriers are not liable for delayed or undelivered messages. Message frequency varies by activity.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Retention & deletion</h3>
                                        <p>We retain your phone number for the life of your account and delete or de-identify it upon account deletion, subject to legal/audit holds. You can request deletion by emailing <a href="mailto:nate@bridgenow.co" className="text-primary hover:text-primary-foreground underline">nate@bridgenow.co</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 10) International transfers */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                10) International transfers
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>Where required, we rely on Standard Contractual Clauses (SCCs) and vendor technical/organizational measures for cross-border transfers.</p>
                                </div>
                            </div>
                        </section>

                        {/* 11) Your choices */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                11) Your choices
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>AI matching opt-out.</strong> Ask us to exclude your profile from LLM-assisted ranking.</p>

                                    <p><strong>Email preferences.</strong> Unsubscribe links are included in non-essential emails.</p>

                                    <p><strong>Cookie controls.</strong> Use &quot;Cookie Settings&quot; in the footer to turn analytics/marketing on/off.</p>

                                    <p><strong>&quot;Do Not Sell or Share.&quot;</strong> Use the footer link to opt out of cross-context behavioral advertising (if any non-essential pixels are enabled).</p>
                                </div>
                            </div>
                        </section>

                        {/* 12) Your rights */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                12) Your rights
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>Depending on where you live, you may have rights to access, correct, delete, restrict/object to certain processing, and port your data.</p>

                                    <p><strong>California (CPRA) & other U.S. states.</strong> You may request to know, access, correct, delete, and opt out of sale/share/targeted advertising. We will not discriminate for exercising rights. If we deny your request, you may appeal by replying to our decision email; we&apos;ll respond within 45 days.</p>

                                    <p><strong>EEA/UK/Switzerland.</strong> You have rights to access, rectification, erasure, restriction/objection, and portability; you may lodge a complaint with your local supervisory authority.</p>

                                    <p><strong>How to exercise rights.</strong> Email <a href="mailto:nate@bridgenow.co" className="text-primary hover:text-primary-foreground underline">nate@bridgenow.co</a> with the subject &quot;Privacy Request.&quot; We must verify your identity (e.g., email confirmation, logged-in request). You may use an authorized agent per applicable law.</p>

                                    <p><strong>Response times.</strong> We aim to respond within 30 days (extendable once if reasonably necessary).</p>
                                </div>
                            </div>
                        </section>

                        {/* 13) Retention */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                13) Retention
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>We keep data only as long as needed for the purposes described, then delete or de-identify it.</p>

                                    <p><strong>Account & profile:</strong> Active account + 24 months of inactivity</p>

                                    <p><strong>Financial records (invoices, payouts):</strong> 7 years (tax/audit)</p>

                                    <p><strong>Recordings & transcripts:</strong> 36 months or earlier upon approved request</p>

                                    <p><strong>Security logs & backups:</strong> ≤ 30 days (longer if investigating abuse)</p>

                                    <p><strong>Marketing contacts:</strong> Until you unsubscribe or 24 months of no engagement</p>
                                </div>
                            </div>
                        </section>

                        {/* 14) Security */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                14) Security
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>We use industry-standard safeguards: encryption in transit and at rest; least-privilege access; MFA for admin access; audit logging; and periodic security testing and reviews. No method of transmission or storage is 100% secure.</p>
                                </div>
                            </div>
                        </section>

                        {/* 15) Children */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                15) Children
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>The Services are not directed to children under 16 (or the age required by your jurisdiction). Do not use the Services if you are under the applicable age.</p>
                                </div>
                            </div>
                        </section>

                        {/* 16) Third-party sites */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                                16) Third-party sites
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>The Services may link to third-party sites or services. Their privacy practices are governed by their own policies.</p>
                                </div>
                            </div>
                        </section>

                        {/* 17) Changes to this Policy */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                17) Changes to this Policy
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>We will post updates here and notify account holders of material changes at least 14 days before they take effect. Continued use after the effective date means you accept the changes.</p>
                                </div>
                            </div>
                        </section>

                        {/* 18) Contact */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                18) Contact
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>Questions, requests, or complaints: <a href="mailto:nate@bridgenow.co" className="text-primary hover:text-primary-foreground underline">nate@bridgenow.co</a></p>

                                    <p>Postal: Only Founders, Inc., 380 C Street, Hayward, CA 94541, USA</p>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="text-center py-12 border-t border-border">
                            <p className="text-xl font-bold text-primary mb-2">
                                © 2025 Only Founders, Inc. d/b/a Bridge. All rights reserved.
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Your privacy powers our platform.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}