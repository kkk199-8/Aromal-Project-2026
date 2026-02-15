"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryBar } from "@/components/layout/CategoryBar";
import { ProductCard } from "@/components/ui/ProductCard";
import { CartBar } from "@/components/ui/CartBar";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORY_SUBTITLE_KEYS: Record<string, string> = {
    bowls: "menu.cat.bowls.subtitle",
    smoothies: "menu.cat.smoothies.subtitle",
    toasts: "menu.cat.toasts.subtitle",
    drinks: "menu.cat.drinks.subtitle",
    extras: "menu.cat.extras.subtitle",
};

export default function MenuPage() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
    const [searchQuery, setSearchQuery] = useState("");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const isScrollingTo = useRef(false);

    // Filter products by search
    const getFilteredProducts = (categoryId: string) => {
        return PRODUCTS.filter((p) => {
            const matchesCategory = p.category === categoryId;
            const matchesSearch =
                searchQuery.trim() === "" ||
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    };

    // Scrollspy: update active category based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingTo.current) return;

            const scrollY = window.scrollY + 200; // offset for sticky header + category bar

            let currentSection = CATEGORIES[0].id;
            for (const cat of CATEGORIES) {
                const el = sectionRefs.current[cat.id];
                if (el && el.offsetTop <= scrollY) {
                    currentSection = cat.id;
                }
            }
            setActiveCategory(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to section when category is clicked
    const handleCategoryClick = useCallback((id: string) => {
        setActiveCategory(id);
        isScrollingTo.current = true;

        const el = sectionRefs.current[id];
        if (el) {
            const headerOffset = 160; // header + category bar height
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: "smooth",
            });
        }

        // Release scrollspy lock after scroll completes
        setTimeout(() => {
            isScrollingTo.current = false;
        }, 800);
    }, []);

    return (
        <main className="min-h-screen bg-app-bg">
            <Header />

            {/* Search Bar */}
            <div className="bg-white border-b border-border-subtle">
                <div className="max-w-2xl mx-auto px-4 py-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input
                            type="text"
                            placeholder={t("menu.search")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-full bg-app-bg text-charcoal text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-orange/30 border border-border-subtle focus:border-orange transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Category Bar */}
            <CategoryBar
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
            />

            {/* Product Sections */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 pb-32">
                {CATEGORIES.map((cat) => {
                    const products = getFilteredProducts(cat.id);
                    if (products.length === 0 && searchQuery.trim() !== "") return null;

                    return (
                        <section
                            key={cat.id}
                            id={`section-${cat.id}`}
                            ref={(el) => { sectionRefs.current[cat.id] = el; }}
                            className="mb-14"
                        >
                            {/* Section Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal uppercase tracking-wide">
                                    {cat.name}
                                </h2>
                                <p className="text-muted text-sm mt-1 max-w-md mx-auto">
                                    {t(CATEGORY_SUBTITLE_KEYS[cat.id] as keyof typeof import("@/data/translations").translations.al)}
                                </p>
                            </div>

                            {/* Product Grid */}
                            {products.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                                    {products.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-muted text-sm">{t("menu.noResults")}</p>
                                </div>
                            )}
                        </section>
                    );
                })}

                {/* Global no results */}
                {searchQuery.trim() !== "" &&
                    CATEGORIES.every((cat) => getFilteredProducts(cat.id).length === 0) && (
                        <div className="text-center py-20">
                            <p className="text-muted text-lg">{t("menu.noResultsGlobal")}</p>
                        </div>
                    )}
            </div>

            <Footer />
            <CartBar />
        </main>
    );
}
