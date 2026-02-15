"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, Music, MapPin, Navigation } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const FOOTER_LINKS = {
    social: [
        { icon: Facebook, href: "https://facebook.com" },
        { icon: Instagram, href: "https://instagram.com" },
        { icon: Linkedin, href: "https://linkedin.com" },
        { icon: Music, href: "https://tiktok.com" },
    ]
};

const LOCATIONS = [
    {
        name: "Aromal – Kika 2",
        address: "Rruga Tish Dahia, Tiranë",
        link: "https://www.google.com/maps/dir//Aromal+-+Kika+2,+Rruga+Tish+Dahia,+Tiran%C3%AB,+Albania/@41.3270016,19.8180864,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1350313c9acaf8dd:0xde3667b5906f49f5!2m2!1d19.8045586!2d41.3166805"
    },
    {
        name: "Aromal – Magnet",
        address: "Komuna e Parisit Area",
        link: "https://share.google/Oug1grxCLdFJ4bBLD"
    },
    {
        name: "Aromal – Delijorgji",
        address: "Kavaja Street Area",
        link: "https://share.google/6JSmLR3eCoL6HaK9O"
    }
];

export function Footer() {
    const { t } = useLanguage();

    const footerMore = [
        { label: t("nav.about"), href: "/about" },
        { label: "Loyalty", href: "/loyalty" },
        { label: t("nav.blog"), href: "/blog" },
    ];

    return (
        <footer className="relative pt-16 pb-8 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-orange/10 to-green/10 z-0 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

                {/* Top Section: Brand & Tagline */}
                <div className="text-center mb-12">
                    <Link href="/" className="inline-block mb-4">
                        <Image
                            src="/assets/logo/logo_new.png"
                            alt="Aromal"
                            width={240}
                            height={90}
                            className="h-24 w-auto object-contain scale-110 mix-blend-multiply"
                        />
                    </Link>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-2">
                        {t("footer.tagline")}
                    </h2>
                    <p className="text-muted text-sm">{t("footer.locations")}</p>
                </div>

                {/* Locations Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 px-4">
                    {LOCATIONS.map((loc, i) => (
                        <div key={i} className="group bg-white p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-border-subtle hover:border-orange/20 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center text-orange mb-4 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg text-charcoal mb-1">{loc.name}</h3>
                            <p className="text-sm text-muted mb-4">{loc.address}</p>

                            <a
                                href={loc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-white text-xs font-bold hover:bg-orange transition-all duration-300 transform group-hover:scale-105"
                            >
                                <Navigation className="w-3 h-3" />
                                {t("footer.openMap")}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Links & Copyright */}
                <div className="border-t border-border-subtle/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted">

                    {/* Links */}
                    <div className="flex gap-6 font-medium">
                        {footerMore.map((link) => (
                            <Link key={link.label} href={link.href} className="hover:text-orange transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex gap-3">
                        {FOOTER_LINKS.social.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white border border-border-subtle flex items-center justify-center text-charcoal hover:bg-orange hover:text-white hover:border-orange transition-all duration-200"
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                        <p>© {new Date().getFullYear()} Aromal</p>
                        <span className="hidden md:block w-1 h-1 rounded-full bg-muted/40" />
                        <p>
                            {t("footer.designedBy")} <span className="text-charcoal font-bold">PROVEDO DIGITAL</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
