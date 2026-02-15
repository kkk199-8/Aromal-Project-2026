"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartBar } from "@/components/ui/CartBar";
import Image from "next/image";
import { Leaf, Heart, Recycle, Coffee } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    const VALUES = [
        {
            icon: Leaf,
            title: t("about.value1.title"),
            description: t("about.value1.desc"),
            accent: "green" as const,
        },
        {
            icon: Heart,
            title: t("about.value2.title"),
            description: t("about.value2.desc"),
            accent: "orange" as const,
        },
        {
            icon: Recycle,
            title: t("about.value3.title"),
            description: t("about.value3.desc"),
            accent: "green" as const,
        },
        {
            icon: Coffee,
            title: t("about.value4.title"),
            description: t("about.value4.desc"),
            accent: "orange" as const,
        },
    ];

    return (
        <main className="min-h-screen bg-transparent">
            <Header />

            {/* Hero */}
            <section className="relative bg-transparent overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-xs font-bold uppercase tracking-wider mb-6">
                        {t("about.badge")}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6 max-w-3xl mx-auto leading-tight">
                        {t("about.title")} <span className="text-orange">Aromal</span>
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        {t("about.subtitle")}
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-spacing">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                            <Image
                                src="/assets/honey-bee.png"
                                alt={t("about.story.imageAlt")}
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                                {t("about.story.title")}
                            </h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>{t("about.story.p1")}</p>
                                <p>{t("about.story.p2")}</p>
                                <p>{t("about.story.p3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-spacing bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-16">
                        {t("about.values.title")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {VALUES.map((value, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 flex gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                                style={{ borderTop: `4px solid ${value.accent === "orange" ? "#F28E46" : "#9DC545"}` }}
                            >
                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${value.accent === "orange" ? "bg-orange" : "bg-green"
                                    }`}>
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-charcoal mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialty */}
            <section className="section-spacing">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                        {t("about.specialty.title")}
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t("about.specialty.subtitle")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]" style={{ borderTop: "4px solid #9DC545" }}>
                            <span className="text-3xl mb-3 block">🥄</span>
                            <h4 className="font-bold text-charcoal mb-1">{t("about.specialty1.title")}</h4>
                            <p className="text-sm text-muted">{t("about.specialty1.desc")}</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]" style={{ borderTop: "4px solid #F28E46" }}>
                            <span className="text-3xl mb-3 block">🍯</span>
                            <h4 className="font-bold text-charcoal mb-1">{t("about.specialty2.title")}</h4>
                            <p className="text-sm text-muted">{t("about.specialty2.desc")}</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]" style={{ borderTop: "4px solid #9DC545" }}>
                            <span className="text-3xl mb-3 block">🌱</span>
                            <h4 className="font-bold text-charcoal mb-1">{t("about.specialty3.title")}</h4>
                            <p className="text-sm text-muted">{t("about.specialty3.desc")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <CartBar />
        </main>
    );
}
