"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartBar } from "@/components/ui/CartBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { Award, Gift, ShoppingBag, Star, ArrowRight, Trophy, Zap, Crown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LoyaltyPage() {
    const { t } = useLanguage();

    const STEPS = [
        {
            icon: ShoppingBag,
            title: t("loyalty.step1.title"),
            description: t("loyalty.step1.desc"),
        },
        {
            icon: Star,
            title: t("loyalty.step2.title"),
            description: t("loyalty.step2.desc"),
        },
        {
            icon: Gift,
            title: t("loyalty.step3.title"),
            description: t("loyalty.step3.desc"),
        },
    ];

    const REWARDS = [
        {
            emoji: "🥤",
            title: t("loyalty.reward1.title"),
            description: t("loyalty.reward1.desc"),
        },
        {
            emoji: "🥣",
            title: t("loyalty.reward2.title"),
            description: t("loyalty.reward2.desc"),
        },
        {
            emoji: "🎂",
            title: t("loyalty.reward3.title"),
            description: t("loyalty.reward3.desc"),
        },
        {
            emoji: "⭐",
            title: t("loyalty.reward4.title"),
            description: t("loyalty.reward4.desc"),
        },
    ];

    const TIERS = [
        {
            icon: Zap,
            name: t("loyalty.tier.bronze"),
            range: t("loyalty.tier.bronzeRange"),
            color: "from-amber-600 to-amber-700",
            benefits: t("loyalty.tier.bronzeBenefits").split(", "),
        },
        {
            icon: Trophy,
            name: t("loyalty.tier.silver"),
            range: t("loyalty.tier.silverRange"),
            color: "from-gray-400 to-gray-500",
            benefits: t("loyalty.tier.silverBenefits").split(", "),
        },
        {
            icon: Crown,
            name: t("loyalty.tier.gold"),
            range: t("loyalty.tier.goldRange"),
            color: "from-yellow-400 to-yellow-600",
            benefits: t("loyalty.tier.goldBenefits").split(", "),
        },
    ];

    return (
        <main className="min-h-screen bg-transparent">
            <Header />

            {/* Hero */}
            <section className="bg-transparent py-16 md:py-24 px-4 md:px-8 text-center">
                <ScrollReveal>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-green flex items-center justify-center mx-auto mb-6">
                        <Award className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                        {t("loyalty.title")} <span className="text-orange">{t("loyalty.titleAccent")}</span>
                    </h1>
                    <p className="text-muted max-w-lg mx-auto leading-relaxed">
                        {t("loyalty.subtitle")}
                    </p>
                </ScrollReveal>
            </section>

            {/* How It Works */}
            <section className="section-spacing">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-16">
                            {t("loyalty.howTitle")}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal stagger={0.15}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {STEPS.map((step, i) => (
                                <div key={i} className="text-center relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange to-orange-hover flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange/20">
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-6xl font-serif font-bold text-charcoal/5">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-lg font-bold text-charcoal mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Rewards */}
            <section className="section-spacing bg-transparent">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-4">
                            {t("loyalty.rewardsTitle")}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal stagger={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {REWARDS.map((reward, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border-subtle hover:border-orange/20 transition-colors">
                                    <span className="text-3xl flex-shrink-0">{reward.emoji}</span>
                                    <div>
                                        <h3 className="font-bold text-charcoal mb-1">{reward.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed">{reward.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Tiers */}
            <section className="section-spacing">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-4">
                            {t("loyalty.tiersTitle")}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal stagger={0.15}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {TIERS.map((tier, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col">
                                    <div className={`bg-gradient-to-r ${tier.color} p-5 text-center text-white`}>
                                        <tier.icon className="w-8 h-8 mx-auto mb-2" />
                                        <h3 className="text-xl font-bold">{tier.name}</h3>
                                        <p className="text-sm text-white/80 mt-1">{tier.range}</p>
                                    </div>
                                    <div className="p-5 flex-1">
                                        <ul className="space-y-3">
                                            {tier.benefits.map((benefit, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-charcoal">
                                                    <span className="text-green font-bold mt-0.5">✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="section-spacing text-center">
                <ScrollReveal>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
                        {t("loyalty.ctaTitle")}
                    </h2>
                    <p className="text-muted mb-8 max-w-md mx-auto">
                        {t("loyalty.ctaDesc")}
                    </p>
                    <Link
                        href="/register"
                        className="btn-gradient px-10 py-4 text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
                    >
                        {t("loyalty.ctaButton")} <ArrowRight className="w-4 h-4" />
                    </Link>
                </ScrollReveal>
            </section>

            <Footer />
            <CartBar />
        </main>
    );
}
