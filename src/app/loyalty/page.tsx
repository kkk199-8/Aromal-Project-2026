"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartBar } from "@/components/ui/CartBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { Leaf, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS, formatPrice } from "@/data/products";

export default function LoyaltyPage() {
    const { t } = useLanguage();

    // Use top 5 products for rewards section
    const rewardProducts = PRODUCTS.slice(0, 5);

    return (
        <main className="min-h-screen bg-[#FFF8F3]">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 space-y-6">
                    <h1 className="text-5xl md:text-7xl font-sans font-black text-[#2D2D2D] leading-tight uppercase tracking-tight">
                        <span className="text-[#4A7C59]">{t("loyalty.hero.title")}</span><br />
                        {t("loyalty.hero.title.line2")}{" "}
                        <span className="text-orange">
                            {t("loyalty.hero.title.accent")}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted max-w-md font-medium">
                        {t("loyalty.hero.desc")}
                    </p>
                </div>
                <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/assets/loyalty hero section image.svg"
                            alt="Loyalty Illustration"
                            width={600}
                            height={600}
                            className="object-contain w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* 2. EXPLANATION SECTION ("Çfarë është?") */}
            <section className="py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal">
                        {t("loyalty.explanation.title")}
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto bg-[#FFFBF0] rounded-[2rem] p-8 md:p-12 shadow-sm border border-orange/10 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 flex justify-center">
                        {/* Leaf Icon for Nature Theme */}
                        <div className="w-48 h-48 bg-gradient-to-br from-[#A3C585] to-[#4A7C59] rounded-full flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-500">
                            <Leaf className="w-24 h-24 text-white fill-white" />
                        </div>
                    </div>
                    <div className="flex-[1.5] space-y-4 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-charcoal">{t("loyalty.explanation.cardTitle")}</h3>
                        <p className="text-orange font-bold text-xl">{t("loyalty.explanation.love")}</p>
                        <p className="text-muted text-lg leading-relaxed">
                            {t("loyalty.explanation.desc")}
                            <br /><br />
                            <span className="text-charcoal font-medium">{t("loyalty.explanation.note")}</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS ("Si funksionon?") */}
            <section className="py-20 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal">
                        {t("loyalty.how.title")}
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((num) => (
                        <ScrollReveal key={num} stagger={num * 0.1} className="h-full">
                            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-50">
                                <div className="w-12 h-12 rounded-full bg-[#FFC107] text-white text-xl font-bold flex items-center justify-center mb-6 shadow-md shadow-yellow-200">
                                    {num}
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">
                                    {t(`loyalty.how.step${num}.title` as any)}
                                </h3>
                                <p className="text-muted leading-relaxed">
                                    {t(`loyalty.how.step${num}.desc` as any)}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 4. CARD SHOWCASE ("Aromal Card") */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-4">
                            {t("loyalty.card.title")}
                        </h2>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-12 border border-black/5">
                        <div className="flex-1 relative h-[300px] w-full flex items-center justify-center">
                            {/* Stacked Cards Visualization - Brand Colors */}
                            <div className="absolute w-64 h-40 bg-[#1A1A1A] rounded-xl shadow-2xl transform -rotate-12 translate-y-4 -translate-x-8 z-10 border border-white/10 flex flex-col p-4 justify-between">
                                <span className="text-white/50 text-xs font-mono">BLACK TIER</span>
                                <div className="flex justify-between items-end">
                                    <span className="text-white font-bold tracking-widest">AROMAL</span>
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                            <div className="absolute w-64 h-40 bg-[#4A7C59] rounded-xl shadow-xl transform -rotate-6 translate-y-2 -translate-x-4 z-20 border border-white/10 flex flex-col p-4 justify-between">
                                <span className="text-white/50 text-xs font-mono">GREEN TIER</span>
                                <div className="flex justify-between items-end">
                                    <span className="text-white font-bold tracking-widest">AROMAL</span>
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                            <div className="absolute w-64 h-40 bg-orange rounded-xl shadow-lg transform rotate-0 z-30 border border-white/10 flex flex-col p-4 justify-between">
                                <span className="text-white/80 text-xs font-mono">ORANGE TIER</span>
                                <div className="flex justify-between items-end">
                                    <span className="text-white font-bold tracking-widest">AROMAL</span>
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl font-bold text-charcoal">
                                {t("loyalty.card.subtitle")}
                            </h3>
                            <p className="text-muted text-lg leading-relaxed">
                                {t("loyalty.card.desc")}
                            </p>
                            <div className="bg-orange/5 p-4 rounded-xl border border-orange/10">
                                <p className="text-orange font-bold text-center">
                                    {t("loyalty.card.note")}
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link
                                    href="/register"
                                    className="bg-orange hover:bg-orange-hover text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange/30 transition-all inline-block hover:scale-105"
                                >
                                    {t("loyalty.card.button")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. REWARDS ("Çfarë blen me...") */}
            <section className="py-20 px-6 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal">
                        {t("loyalty.rewards.title")}
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {rewardProducts.map((item, i) => (
                            <ScrollReveal key={item.id} stagger={i * 0.05}>
                                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 group h-full flex flex-col">
                                    <div className="aspect-square bg-gray-50 rounded-xl mb-4 overflow-hidden relative">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={200}
                                            height={200}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h4 className="font-bold text-charcoal text-sm md:text-base mb-1 truncate">{item.name}</h4>
                                    <p className="text-xs text-muted mb-3 line-clamp-2 flex-1">{item.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        {/* Display Points instead of Lek */}
                                        <span className="font-bold text-orange text-sm">{item.price} {t("loyalty.rewards.price")}</span>
                                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange hover:text-white transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/menu" className="inline-block bg-[#FFC107] hover:bg-amber-500 text-charcoal font-bold px-8 py-3 rounded-full transition-colors">
                            {t("cart.seeMenu")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Standard Footer restored */}
            <Footer />
            <CartBar />
        </main>
    );
}
