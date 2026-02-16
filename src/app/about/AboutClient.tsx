"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartBar } from "@/components/ui/CartBar";
import { useLanguage } from "@/context/LanguageContext";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Leaf, Heart, Recycle, Coffee } from "lucide-react";

export default function AboutPage() {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

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
        <main ref={containerRef} className="min-h-screen bg-[#FDFBF7]">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/Aromal About us (Hero Section_background picture).jpeg"
                        alt="Organic lifestyle"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-sm"
                    >
                        {t("about.title")} <span className="text-orange font-handwriting" style={{ fontFamily: 'var(--font-caveat)' }}>Aromal</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-2xl text-charcoal max-w-fit mx-auto font-handwriting leading-tight bg-white/20 backdrop-blur-md px-0.5 py-0 rounded-md shadow-sm"
                        style={{ fontFamily: 'var(--font-caveat)' }}
                    >
                        {t("about.subtitle")}
                    </motion.p>
                </div>
            </section>

            {/* Story Section - Scrollytelling */}
            <section className="py-24 md:py-32 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Chapter 1: The Origin */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange/10 rounded-full blur-3xl" />
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?q=80&w=2532&auto=format&fit=crop"
                                alt="Fresh Ingredients"
                                className="aspect-[4/5] md:aspect-[3/4] rounded-[2rem] rotate-[-2deg]"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-8">
                            <span className="text-orange font-handwriting text-3xl block transform -rotate-2" style={{ fontFamily: 'var(--font-caveat)' }}>
                                Our Beginning
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
                                {t("about.story.title")}
                            </h2>
                            <div className="prose prose-lg text-muted font-light leading-relaxed">
                                <p>{t("about.story.p1")}</p>
                                <p>{t("about.story.p2")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Chapter 2: The Craft (Alternating Layout) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <div className="order-1 md:order-1 space-y-8 md:pl-12">
                            <span className="text-green font-handwriting text-3xl block transform rotate-1" style={{ fontFamily: 'var(--font-caveat)' }}>
                                Made with Love
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
                                {t("about.craft.title")}
                            </h2>
                            <div className="prose prose-lg text-muted font-light leading-relaxed">
                                <p>{t("about.craft.p1")}</p>
                            </div>
                        </div>
                        <div className="order-2 md:order-2 relative">
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green/10 rounded-full blur-3xl" />
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2574&auto=format&fit=crop"
                                alt="Crafting with love"
                                className="aspect-square rounded-full border-8 border-white shadow-xl"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Values Section - Flower Petal Layout */}
            <section className="py-24 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-orange font-handwriting text-3xl block mb-2" style={{ fontFamily: 'var(--font-caveat)' }}>Why We Do It</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
                            {t("about.values.title")}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map((value, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                key={i}
                                className="group relative bg-[#FDFBF7] p-8 rounded-[2rem] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-orange/20"
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${value.accent === 'orange' ? 'bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white' : 'bg-green/10 text-green group-hover:bg-green group-hover:text-white'
                                    }`}>
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-serif font-bold text-xl text-charcoal mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-32 text-center overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange/5 to-green/5 rounded-full blur-3xl -z-10" />
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-handwriting text-charcoal mb-8 rotate-[-2deg]" style={{ fontFamily: 'var(--font-caveat)' }}>
                        {t("about.cta.title")}
                    </h2>
                    <p className="text-xl text-muted mb-10 font-light">
                        {t("about.cta.text")}
                    </p>
                    <a href="/menu" className="inline-block bg-charcoal text-white px-10 py-4 rounded-full font-bold hover:bg-orange transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        {t("about.cta.button")}
                    </a>
                </div>
            </section>

            <Footer />
            <CartBar />
        </main>
    );
}
