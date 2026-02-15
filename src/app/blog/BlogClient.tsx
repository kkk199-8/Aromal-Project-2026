"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartBar } from "@/components/ui/CartBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ARTICLES } from "@/data/articles";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-transparent">
            <Header />

            {/* Hero */}
            <section className="bg-transparent py-14 md:py-20 px-4 md:px-8 text-center">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-3">
                        {t("blog.badge")}
                    </h1>
                    <p className="text-muted max-w-md mx-auto">
                        {t("blog.subtitle")}
                    </p>
                </ScrollReveal>
            </section>

            {/* Articles Grid */}
            <section className="section-spacing">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal stagger={0.12}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {ARTICLES.map((article) => (
                                <Link key={article.id} href={`/blog/${article.slug}`} className="group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                        {/* Image */}
                                        <div className="aspect-[16/10] overflow-hidden relative">
                                            <div className="absolute top-3 left-3 z-10">
                                                <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-orange uppercase tracking-wider">
                                                    {article.category}
                                                </span>
                                            </div>
                                            <div className="w-full h-full bg-gradient-to-br from-orange/10 to-green/10 flex items-center justify-center">
                                                <span className="text-5xl opacity-30">📝</span>
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <div className="p-5 md:p-6">
                                            <div className="flex items-center gap-2 text-xs text-muted mb-3">
                                                <Calendar className="w-3 h-3" />
                                                {article.date} · {article.readTime} {t("blog.readTime")}
                                            </div>
                                            <h2 className="text-lg font-bold text-charcoal mb-2 group-hover:text-orange transition-colors line-clamp-2">
                                                {article.title}
                                            </h2>
                                            <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                            <span className="inline-flex items-center gap-1 text-orange font-bold text-sm group-hover:gap-2 transition-all">
                                                {t("blog.readMore")} <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
            <CartBar />
        </main>
    );
}
