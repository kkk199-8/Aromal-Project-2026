"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const { totalItems } = useCart();
    const { lang, setLang } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="site-header sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative">
                {/* Left: Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-8 text-base font-bold flex-1 text-charcoal">
                    <Link href="/menu" className="hover:text-orange transition-colors">
                        Menu
                    </Link>
                    <Link href="/about" className="hover:text-orange transition-colors">
                        Rreth nesh
                    </Link>
                    <Link href="/blog" className="hover:text-orange transition-colors">
                        Blog
                    </Link>
                </nav>

                {/* Center: Logo */}
                <Link
                    href="/"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <Image
                        src="/assets/logo/logo_new.png"
                        alt="Aromal"
                        width={240}
                        height={90}
                        className="h-24 w-auto object-contain scale-110 mix-blend-multiply"
                        priority
                    />
                </Link>

                {/* Right: Lang + Cart + Hamburger */}
                <div className="hidden md:flex items-center gap-4 md:gap-5 text-base font-bold flex-1 justify-end">
                    {/* Lang Switcher (Desktop) */}
                    <div className="flex items-center gap-1 bg-charcoal rounded-full px-1 py-0.5 transform scale-110">
                        <button
                            onClick={() => setLang("al")}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === "al"
                                ? "bg-white text-charcoal"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            AL
                        </button>
                        <button
                            onClick={() => setLang("en")}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === "en"
                                ? "bg-white text-charcoal"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            EN
                        </button>
                    </div>

                    <Link
                        href="/cart"
                        className="relative p-2 hover:text-orange transition-colors transform scale-110"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <ShoppingCart className="w-6 h-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange text-white text-[10px] font-bold flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile: Cart + Hamburger (Visible on Mobile) */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <Link
                        href="/cart"
                        className="relative p-2 hover:text-orange transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <ShoppingCart className="w-6 h-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange text-white text-[10px] font-bold flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    <button
                        className="p-2 relative group"
                        aria-label="Menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className={`w-6 h-0.5 bg-charcoal mb-1.5 transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`w-6 h-0.5 bg-charcoal mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-4 h-0.5 bg-charcoal ml-auto transition-all duration-300 origin-center group-hover:w-6 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden flex flex-col pt-24 px-6
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
                style={{ top: '0px', height: '100dvh' }}
            >
                <div className="flex flex-col gap-6 text-2xl font-bold text-charcoal">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange">
                        Home
                    </Link>
                    <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange">
                        Menu
                    </Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange">
                        Rreth nesh
                    </Link>
                    <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange">
                        Blog
                    </Link>
                </div>

                <div className="mt-auto mb-10 flex items-center justify-between border-t border-border pt-6">
                    <div className="flex items-center gap-1 bg-charcoal rounded-full px-1 py-0.5 transform scale-110">
                        <button
                            onClick={() => setLang("al")}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === "al"
                                ? "bg-white text-charcoal"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            AL
                        </button>
                        <button
                            onClick={() => setLang("en")}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === "en"
                                ? "bg-white text-charcoal"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
