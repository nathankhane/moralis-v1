import Link from "next/link";
import type { Metadata } from "next";

const LAST_UPDATED = "September 7, 2025";

export const metadata: Metadata = {
    title: "Terms of Service — Bridge",
    description: "Clear, fair terms that protect both experts and SaaS teams using our platform.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <div className="pb-16 px-6 pt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Terms of Service</span>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Clear, fair terms that protect both experts and SaaS teams using our platform.
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
                                <h1 className="text-4xl font-bold text-foreground mb-6">Bridge Terms of Service</h1>
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    Last updated: {LAST_UPDATED}
                                </p>
                                <p className="text-card-foreground mb-2">
                                    Only Founders, Inc. d/b/a &quot;Bridge&quot; (&quot;Bridge,&quot; &quot;we,&quot; &quot;us&quot;)
                                </p>
                                <p className="text-card-foreground mb-4">
                                    380 C Street, Hayward, CA 94541, USA • <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline">nate@trustedapp.co</a>
                                </p>
                            </div>
                        </div>

                        {/* 1) Acceptance */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                1) Acceptance
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>By creating an account, clicking &quot;I agree,&quot; or using trustedapp.co or app.trustedapp.co, you accept these Terms and our Privacy Policy. If you use the Services on behalf of a company, you represent you&apos;re authorized to bind that company.</p>
                                </div>
                            </div>
                        </section>

                        {/* 2) Roles */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                2) Roles (how this marketplace works)
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Facilitator, not employer/agent.</strong> Bridge operates a marketplace that helps Providers (e.g., SaaS teams) find and book Experts (power-users/operators). We are not a party to the Expert–Provider engagement, do not employ Experts, and do not guarantee outcomes.</p>

                                    <p><strong>Independent contractors.</strong> Experts act as independent contractors, responsible for their taxes, licenses, and compliance.</p>

                                    <p><strong>Stripe Connect.</strong> Payments and payouts are processed by Stripe. You authorize Bridge and Stripe to debit/credit your account and you agree to Stripe&apos;s terms. We may require KYC and may withhold/offset amounts for chargebacks, fraud, or legal duties.</p>
                                </div>
                            </div>
                        </section>

                        {/* 3) Key definitions */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                3) Key definitions
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-3">
                                    <p><strong>&quot;Booking&quot;</strong>: a scheduled call, survey, interview, or content session.</p>
                                    <p><strong>&quot;Deliverables&quot;</strong>: recordings, transcripts, notes, or other outputs from a Booking.</p>
                                    <p><strong>&quot;Credits&quot;</strong>: pre-purchased units redeemable toward Bookings; may be part of a subscription.</p>
                                    <p><strong>&quot;Standard License&quot;</strong>: internal-use license for Provider&apos;s business purposes.</p>
                                    <p><strong>&quot;Share-Rights License&quot;</strong>: license that permits external use (e.g., marketing/social).</p>
                                    <p><strong>&quot;Royalty Terms&quot;</strong>: any reuse royalties stated in the Booking/checkout.</p>
                                </div>
                            </div>
                        </section>

                        {/* 4) Accounts & eligibility */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                4) Accounts & eligibility
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>You must be 18+ and legally able to contract. Keep your info accurate and your credentials confidential. You&apos;re responsible for activity on your account unless caused solely by our security breach.</p>
                                </div>
                            </div>
                        </section>

                        {/* 5) Subscriptions, credits & billing */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                5) Subscriptions, credits & billing
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Auto-renewal.</strong> Paid plans auto-renew each term unless canceled in the app before the renewal date. We&apos;ll state price and term in the plan details.</p>

                                    <p><strong>Credits.</strong> Credits from subscriptions renew each term; one-time purchased credits expire 12 months after purchase unless plan terms say otherwise. Unused credits aren&apos;t refundable.</p>

                                    <p><strong>Changes.</strong> We may change prices/fees on renewal with prior notice. Taxes are extra.</p>

                                    <p><strong>Cancellation.</strong> Cancel anytime; you keep access until the end of the current term. No refunds for partial terms unless required by law.</p>
                                </div>
                            </div>
                        </section>

                        {/* 6) Fees, escrow & payouts */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                6) Fees, escrow & payouts
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Escrow.</strong> Provider funds are held via Stripe until completion or a permitted cancellation.</p>

                                    <p><strong>Platform fee.</strong> A platform fee is charged to Provider; Experts receive their payout net of Stripe and platform fees (rates shown at checkout or plan page).</p>

                                    <p><strong>Payout timing.</strong> Payouts initiate after completion/approval or dispute-window expiry; bank timing may vary.</p>

                                    <p><strong>Holds/clawbacks.</strong> We may hold or reverse payouts for fraud, chargebacks, legal requests, policy breaches, or risk review. You authorize offsets against future payouts.</p>
                                </div>
                            </div>
                        </section>

                        {/* 7) Bookings: reschedules, no-shows, disputes */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                7) Bookings: reschedules, no-shows, disputes
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Reschedule.</strong> Either side may reschedule ≥24h before start time once per Booking (additional reschedules at our discretion).</p>

                                    <div>
                                        <p className="font-semibold mb-2">Cancellations.</p>
                                        <ul className="space-y-1 ml-4">
                                            <li>• Provider cancels ≥24h: 50% fee forfeited (balance returned).</li>
                                            <li>• Provider cancels &lt;24h: treated as completed (no refund).</li>
                                            <li>• Expert no-show: Provider receives a full refund; Expert forfeits payout.</li>
                                            <li>• Provider no-show: treated as completed; Expert is paid.</li>
                                        </ul>
                                    </div>

                                    <p><strong>Proof.</strong> We may require call logs, recordings, or chat evidence to resolve disputes.</p>

                                    <p><strong>Disputes.</strong> File within 7 days of the scheduled time; our decision is final for platform fees/payouts (without limiting legal rights under Section 17).</p>
                                </div>
                            </div>
                        </section>

                        {/* 8) Matching & AI assistance */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                8) Matching & AI assistance
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>We use scoring and LLM-assisted ranking to suggest Experts to Providers. These are assistive tools; Providers make final selections and results are not guaranteed.</p>
                                </div>
                            </div>
                        </section>

                        {/* 9) Verification, ratings & conduct */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                9) Verification, ratings & conduct
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p><strong>Verification tiers.</strong> &quot;Verified&quot; status (e.g., LinkedIn, experience checks) is conditional and may be revoked for misrepresentation or policy breaches.</p>

                                    <p><strong>Reviews.</strong> No fake, paid, or retaliatory reviews. We may moderate, remove, or feature reviews and star ratings, and you grant us a worldwide, royalty-free license to display them.</p>

                                    <p><strong>Conduct.</strong> No harassment, discrimination, illegal content, scraping, reverse engineering, or security testing without written consent. Don&apos;t upload third-party personal data without proper rights.</p>
                                </div>
                            </div>
                        </section>

                        {/* 10) Confidentiality */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                10) Confidentiality
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>Information labeled confidential or reasonably understood as confidential—including session recordings by default—must be protected and used only for the engagement for five (5) years after disclosure, unless a longer period is required by law or contract.</p>
                                </div>
                            </div>
                        </section>

                        {/* 11) IP & content licenses */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                11) IP & content licenses
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>Experts&apos; pre-existing know-how remains theirs.</p>

                                    <div>
                                        <p className="font-semibold mb-2">License choice at checkout.</p>
                                        <ul className="space-y-2 ml-4">
                                            <li><strong>Standard/Internal-Use</strong>: Provider may use Deliverables internally for its business. No public posting.</li>
                                            <li><strong>Share-Rights</strong>: Provider may publicly use, reproduce, display, and adapt Deliverables; attribution optional unless expressly required.</li>
                                        </ul>
                                    </div>

                                    <p><strong>Royalty Terms (if shown).</strong> Any reuse royalties/limitations shown in the Booking govern; otherwise, no royalties are owed beyond the Booking price.</p>

                                    <p><strong>Feedback.</strong> You grant Bridge a perpetual, worldwide, royalty-free license to use feedback to improve the Services.</p>

                                    <p><strong>Anonymized insights.</strong> We may use aggregated/de-identified metadata to improve our Services.</p>
                                </div>
                            </div>
                        </section>

                        {/* 12) Non-circumvention */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                12) Non-circumvention
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>For 24 months after first contact through Bridge, you won&apos;t move substantially similar engagements off-platform without our written waiver. Pre-existing relationships (provable by dated records) are excluded. Liquidated damages for breach: the greater of 20% of off-platform amounts or US$5,000 per Provider–Expert pair (a reasonable pre-estimate of loss, not a penalty). We may suspend accounts and seek injunctive relief.</p>
                                </div>
                            </div>
                        </section>

                        {/* 13) Export, sanctions & compliance */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                13) Export, sanctions & compliance
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>You confirm you&apos;re not prohibited by U.S. or other applicable sanctions and will not use the Services in embargoed regions or for unlawful purposes. Follow all anti-bribery, anti-corruption, and marketing-consent laws.</p>
                                </div>
                            </div>
                        </section>

                        {/* 14) SMS/OTP Terms */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                14) SMS/OTP Terms
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-3">
                                    <p>By providing your mobile number, you agree we may send one-time passcodes (OTP) and other service-only messages needed to operate your account (e.g., security alerts, critical policy updates). Message frequency varies. Msg & data rates may apply.</p>

                                    <p><strong>Purpose</strong>: authentication, account security, and transactional notices only (no promotional texts without your separate opt-in).</p>

                                    <p><strong>Opt-out</strong>: reply STOP to end; HELP for help. Opt-out stops service texts that are not strictly required for security.</p>

                                    <p><strong>Delivery</strong>: delivery isn&apos;t guaranteed. Carriers are not liable for delayed or undelivered messages.</p>

                                    <p><strong>Numbers</strong>: keep your number current; update it if recycled/transferred.</p>

                                    <p><strong>Platform</strong>: messages are sent via Twilio on A2P 10DLC-registered sender IDs where applicable; we may limit/disable messaging for fraud prevention or compliance.</p>

                                    <p><strong>Not for emergencies</strong>: SMS is not a substitute for emergency services.</p>
                                </div>
                            </div>
                        </section>

                        {/* 15) Disclaimers */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                15) Disclaimers
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>The Services and any Deliverables are provided &quot;as is.&quot; We disclaim all warranties to the maximum extent permitted by law, including fitness for a particular purpose and non-infringement. Expert statements are their own; we do not endorse or verify each claim.</p>
                                </div>
                            </div>
                        </section>

                        {/* 16) Limitation of liability */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                16) Limitation of liability
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>To the fullest extent permitted by law, Bridge&apos;s total liability arising out of or related to the Services is limited to the greater of US$100 or the amounts you paid (Providers) or earned (Experts) on the Services in the 12 months before the claim. This cap does not apply to: (i) our failure to remit cleared escrow funds; or (ii) your indemnity obligations.</p>
                                </div>
                            </div>
                        </section>

                        {/* 17) Indemnity */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                17) Indemnity
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>You will defend and indemnify Bridge (and our officers/directors/employees) from claims, damages, and costs arising from your content, your use of the Services, or your breach of these Terms. Our aggregate indemnity to you is capped at US$50,000.</p>
                                </div>
                            </div>
                        </section>

                        {/* 18) Governing law & dispute resolution */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                                    </svg>
                                </div>
                                18) Governing law & dispute resolution
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground space-y-4">
                                    <p>These Terms are governed by California law (conflict-of-law rules excluded). Binding arbitration under JAMS Streamlined Rules in San Francisco County, CA.</p>

                                    <p><strong>Class-action waiver.</strong> Claims only in individual capacities.</p>

                                    <p><strong>Small-claims carve-out.</strong> Either party may pursue eligible claims in small-claims court.</p>

                                    <p><strong>Injunctive relief.</strong> Either party may seek injunctive relief for misuse of IP/confidential info or non-circumvention breaches.</p>
                                </div>
                            </div>
                        </section>

                        {/* 19) Termination */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-stone-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                19) Termination
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>Either party may terminate any time; we may suspend/terminate for breach, fraud, or risk. Sections 2, 5–19 survive.</p>
                                </div>
                            </div>
                        </section>

                        {/* 20) Changes */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-lime-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                20) Changes
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>Material changes will be posted here and emailed to account holders 14 days before taking effect. Continued use after the effective date means acceptance.</p>
                                </div>
                            </div>
                        </section>

                        {/* 21) Contact */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                21) Contact
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p>Only Founders, Inc. d/b/a Bridge<br />
                                    380 C Street, Hayward, CA 94541, USA • <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline">nate@trustedapp.co</a></p>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="text-center py-12 border-t border-border">
                            <p className="text-xl font-bold text-primary mb-2">
                                © 2025 Only Founders, Inc. d/b/a Bridge. All rights reserved.
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Clear terms. Fair marketplace. Trusted outcomes.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}