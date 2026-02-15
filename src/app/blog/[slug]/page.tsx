"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartBar } from "@/components/ui/CartBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogArticlePage() {
    const { t } = useLanguage();
    const params = useParams();
    const slug = params?.slug as string;
    const article = getArticleBySlug(slug);

    if (!article) {
        return (
            <main className="min-h-screen bg-transparent flex flex-col">
                <Header />
                <div className="flex-1 flex items-center justify-center text-center px-4">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-charcoal mb-3">
                            {t("blog.notFound")}
                        </h1>
                        <p className="text-muted mb-6">{t("blog.notFoundDesc")}</p>
                        <Link href="/blog" className="btn-gradient px-6 py-3 text-sm inline-flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" /> {t("blog.backToAll")}
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const related = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

    return (
        <main className="min-h-screen bg-transparent">
            <Header />

            {/* Article Header */}
            <section className="py-14 md:py-20 px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal>
                        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-orange transition-colors mb-8">
                            <ArrowLeft className="w-3.5 h-3.5" /> {t("blog.backToAll")}
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-orange/10 text-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {article.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal leading-tight mb-5">
                            {article.title}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-muted">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" /> {article.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" /> {article.readTime} {t("blog.readTime")}
                            </span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Article Hero Image */}
            <section className="px-4 md:px-8 mb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="aspect-[16/8] rounded-2xl overflow-hidden bg-gradient-to-br from-orange/10 to-green/10 flex items-center justify-center">
                        <span className="text-7xl opacity-20">📖</span>
                    </div>
                </div>
            </section>

            {/* Article Body */}
            <section className="px-4 md:px-8 mb-20">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal>
                        <div className="prose prose-lg">
                            {article.content.map((paragraph, i) => (
                                <p key={i} className="text-charcoal/85 leading-[1.8] mb-6 text-base md:text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Related Articles */}
            {related.length > 0 && (
                <section className="section-spacing bg-transparent border-t border-border-subtle">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-8 text-center">
                                {t("blog.related")}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal stagger={0.12}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {related.map((rel) => (
                                    <Link key={rel.id} href={`/blog/${rel.slug}`} className="group">
                                        <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                            <span className="text-xs font-bold text-orange uppercase tracking-wider">
                                                {rel.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-charcoal mt-2 mb-2 group-hover:text-orange transition-colors">
                                                {rel.title}
                                            </h3>
                                            <p className="text-sm text-muted line-clamp-2 mb-3">
                                                {rel.excerpt}
                                            </p>
                                            <span className="inline-flex items-center gap-1 text-orange font-bold text-sm group-hover:gap-2 transition-all">
                                                {t("blog.readMore")} <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            <Footer />
            <CartBar />
        </main>
    );
}
