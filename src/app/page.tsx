"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { CartBar } from "@/components/ui/CartBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Leaf, Recycle, MapPin, Droplets } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const FEATURED = PRODUCTS.filter((p) => p.category === "bowls").slice(0, 4);

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-transparent">
      <Header />

      {/* ==================== HERO WITH VIDEO ==================== */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/Loading Whisk AROMAL Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-charcoal/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="max-w-xl">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] text-white mb-6"
            >
              {t("home.hero.line1")}<br />
              <span className="text-orange">{t("home.hero.line2")}</span><br />
              {t("home.hero.line3")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/80 max-w-md mb-10 leading-relaxed"
            >
              {t("home.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/menu"
                className="btn-gradient px-8 py-3.5 text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg"
              >
                {t("home.hero.cta")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 text-sm uppercase tracking-wider inline-flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                {t("home.hero.about")}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[var(--bg-app)] to-transparent" />
      </section>

      {/* ==================== FEATURED PRODUCTS ==================== */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">
                {t("home.products.title")}
              </h2>
              <p className="text-muted text-sm md:text-base">
                {t("home.products.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.12}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {FEATURED.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="btn-outline px-8 py-3 text-sm inline-flex items-center gap-2"
              >
                {t("home.products.seeAll")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-4">
              {t("home.values.title")}
            </h2>
            <p className="text-muted text-center mb-14 text-sm md:text-base max-w-lg mx-auto">
              {t("home.values.subtitle")}
            </p>
          </ScrollReveal>
          <ScrollReveal stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center mx-auto mb-5">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-handwriting text-charcoal mb-3" style={{ fontFamily: 'var(--font-caveat)' }}>{t("home.values.local.title")}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {t("home.values.local.desc")}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center mx-auto mb-5">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-handwriting text-charcoal mb-3" style={{ fontFamily: 'var(--font-caveat)' }}>{t("home.values.zero.title")}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {t("home.values.zero.desc")}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center mx-auto mb-5">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-handwriting text-charcoal mb-3" style={{ fontFamily: 'var(--font-caveat)' }}>{t("home.values.plastic.title")}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {t("home.values.plastic.desc")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== TESTIMONIALS (SOCIAL PROOF) ==================== */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">
                {t("home.testimonials.title")}
              </h2>
              <p className="text-muted text-sm md:text-base mb-10">
                {t("home.testimonials.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {[
              {
                id: 1,
                name: "Ana M.",
                text: t("home.testimonial1"),
                image: "/assets/testimonial-1.png",
                alt: t("home.testimonial1.alt"),
                direction: "left" as const,
              },
              {
                id: 2,
                name: "Endri K.",
                text: t("home.testimonial2"),
                image: "/assets/testimonial-2.png",
                alt: t("home.testimonial2.alt"),
                direction: "up" as const,
              },
              {
                id: 3,
                name: "Sara L.",
                text: t("home.testimonial3"),
                image: "/assets/testimonial-3.png",
                alt: t("home.testimonial3.alt"),
                direction: "right" as const,
              },
            ].map((testimonial) => (
              <ScrollReveal key={testimonial.id} direction={testimonial.direction} distance={50}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group">
                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex gap-1 mb-3 text-orange">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s}>★</span>
                      ))}
                    </div>
                    <p className="text-charcoal text-sm leading-relaxed mb-4 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="text-xs font-bold text-muted uppercase tracking-wider">
                      — {testimonial.name}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartBar />
    </main>
  );
}
