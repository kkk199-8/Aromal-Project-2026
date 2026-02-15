"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function CartBar() {
    const { totalItems, totalPrice } = useCart();
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        setIsVisible(totalItems > 0);
    }, [totalItems]);

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 cursor-pointer"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <div className="bg-charcoal text-white pl-2 pr-6 py-2 rounded-full shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform border border-white/10 backdrop-blur-md">
                            <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-sm font-bold shadow-lg shadow-orange/20">
                                {totalItems}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-white/60 font-medium uppercase tracking-wider">{t("cartbar.label")}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold">{formatPrice(totalPrice)}</span>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-white/10 mx-2" />
                            <div className="flex items-center gap-2 text-sm font-bold text-orange">
                                <span>{t("cartbar.view")}</span>
                                <ShoppingBag className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
}
