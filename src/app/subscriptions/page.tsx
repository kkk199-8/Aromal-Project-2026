"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartBar } from "@/components/ui/CartBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp, Repeat } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border-subtle last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-5 text-left"
            >
                <span className="font-bold text-charcoal pr-4">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-muted flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-muted flex-shrink-0" />
                )}
            </button>
            {isOpen && (
                <p className="pb-5 text-sm text-muted leading-relaxed -mt-1">
                    {answer}
                </p>
            )}
        </div>
    );
}

export default function SubscriptionsPage() {
    const { t } = useLanguage();

    const PACKAGES = [
        {
            emoji: "🍯",
            nameKey: "sub.pkg1.name" as TranslationKey,
            subtitleKey: "sub.pkg1.desc" as TranslationKey,
            price: 2900,
            frequencyKey: "sub.monthly" as TranslationKey,
            descriptionKey: "sub.pkg1.detail" as TranslationKey,
            includeKeys: ["sub.pkg1.item1", "sub.pkg1.item2", "sub.pkg1.item3"] as TranslationKey[],
            savings: "15%",
            badge: null as string | null,
            accent: "orange" as const,
        },
        {
            emoji: "🥤",
            nameKey: "sub.pkg2.name" as TranslationKey,
            subtitleKey: "sub.pkg2.desc" as TranslationKey,
            price: 3900,
            frequencyKey: "sub.weekly" as TranslationKey,
            descriptionKey: "sub.pkg2.detail" as TranslationKey,
            includeKeys: ["sub.pkg2.item1", "sub.pkg2.item2", "sub.pkg2.item3"] as TranslationKey[],
            savings: "20%",
            badge: t("sub.popular"),
            accent: "green" as const,
        },
        {
            emoji: "🥣",
            nameKey: "sub.pkg3.name" as TranslationKey,
            subtitleKey: "sub.pkg3.desc" as TranslationKey,
            price: 4900,
            frequencyKey: "sub.weekly" as TranslationKey,
            descriptionKey: "sub.pkg3.detail" as TranslationKey,
            includeKeys: ["sub.pkg3.item1", "sub.pkg3.item2", "sub.pkg3.item3"] as TranslationKey[],
            savings: "25%",
            badge: null,
            accent: "orange" as const,
        },
        {
            emoji: "🌿",
            nameKey: "sub.pkg4.name" as TranslationKey,
            subtitleKey: "sub.pkg4.desc" as TranslationKey,
            price: 8900,
            frequencyKey: "sub.monthly" as TranslationKey,
            descriptionKey: "sub.pkg4.detail" as TranslationKey,
            includeKeys: ["sub.pkg4.item1", "sub.pkg4.item2", "sub.pkg4.item3", "sub.pkg4.item4"] as TranslationKey[],
            savings: "35%",
            badge: "Premium",
            accent: "green" as const,
        },
    ];

    const FAQS = [
        { qKey: "sub.faq1.q" as TranslationKey, aKey: "sub.faq1.a" as TranslationKey },
        { qKey: "sub.faq2.q" as TranslationKey, aKey: "sub.faq2.a" as TranslationKey },
        { qKey: "sub.faq3.q" as TranslationKey, aKey: "sub.faq3.a" as TranslationKey },
        { qKey: "sub.faq4.q" as TranslationKey, aKey: "sub.faq4.a" as TranslationKey },
    ];

    return (
        <main className="min-h-screen bg-transparent">
            <Header />

            {/* Hero */}
            <section className="bg-transparent py-16 md:py-24 px-4 md:px-8 text-center">
                <ScrollReveal>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green to-orange flex items-center justify-center mx-auto mb-6">
                        <Repeat className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                        {t("sub.title")} <span className="text-orange">{t("sub.titleAccent")}</span>
                    </h1>
                    <p className="text-muted max-w-lg mx-auto leading-relaxed">
                        {t("sub.subtitle")}
                    </p>
                </ScrollReveal>
            </section>

            {/* Packages */}
            <section className="section-spacing">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal stagger={0.12}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PACKAGES.map((pkg, i) => (
                                <div key={i} className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border-subtle hover:border-orange/20 transition-colors flex flex-col">
                                    {pkg.badge && (
                                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${pkg.accent === "green" ? "bg-green" : "bg-orange"}`}>
                                            {pkg.badge}
                                        </div>
                                    )}

                                    <div className="p-6 md:p-8 flex-1">
                                        <span className="text-4xl mb-4 block">{pkg.emoji}</span>
                                        <h3 className="text-xl font-bold text-charcoal mb-1">{t(pkg.nameKey)}</h3>
                                        <p className="text-sm text-muted mb-4">{t(pkg.subtitleKey)}</p>

                                        <div className="flex items-baseline gap-1 mb-1">
                                            <span className="text-3xl font-bold text-charcoal">{pkg.price.toLocaleString()}</span>
                                            <span className="text-sm text-muted">Lekë / {t(pkg.frequencyKey)}</span>
                                        </div>
                                        <p className={`text-xs font-bold mb-5 ${pkg.accent === "green" ? "text-green" : "text-orange"}`}>
                                            {t("sub.save")} {pkg.savings} {t("sub.vsBuying")}
                                        </p>

                                        <p className="text-sm text-muted leading-relaxed mb-6">
                                            {t(pkg.descriptionKey)}
                                        </p>

                                        <ul className="space-y-2.5">
                                            {pkg.includeKeys.map((key, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-charcoal">
                                                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.accent === "green" ? "text-green" : "text-orange"}`} />
                                                    {t(key)}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-6 md:px-8 md:pb-8 pt-0">
                                        <Link
                                            href="/register"
                                            className={`w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg ${pkg.accent === "green"
                                                ? "bg-green hover:bg-green-hover shadow-green/20"
                                                : "bg-orange hover:bg-orange-hover shadow-orange/20"
                                                }`}
                                        >
                                            {t("sub.cta")} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-spacing">
                <div className="max-w-2xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                            {t("sub.faqTitle")}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="bg-white rounded-2xl px-6 md:px-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                            {FAQS.map((faq, i) => (
                                <FaqItem key={i} question={t(faq.qKey)} answer={t(faq.aKey)} />
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-spacing text-center">
                <ScrollReveal>
                    <p className="text-muted mb-4">{t("sub.payNote")}</p>
                </ScrollReveal>
            </section>

            <Footer />
            <CartBar />
        </main>
    );
}
