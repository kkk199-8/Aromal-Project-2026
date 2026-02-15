"use client";

import { useCart } from "@/context/CartContext";
import { PRODUCTS, formatPrice } from "@/data/products";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, removeItem, updateQuantity, totalPrice } = useCart();
    const { t } = useLanguage();
    const drawerRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        ref={drawerRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-border-subtle flex items-center justify-between bg-white">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-orange" />
                                <h2 className="font-serif font-bold text-xl text-charcoal">{t("drawer.title")}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-muted hover:text-charcoal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted">
                                    <ShoppingBag className="w-16 h-16 opacity-20" />
                                    <p>{t("drawer.empty")}</p>
                                    <button
                                        onClick={onClose}
                                        className="text-orange font-bold hover:underline"
                                    >
                                        {t("drawer.seeMenu")}
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => {
                                    const product = PRODUCTS.find((p) => p.id === item.productId);
                                    if (!product) return null;

                                    return (
                                        <div key={item.productId} className="flex gap-4">
                                            {/* Image */}
                                            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 border border-border-subtle">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-1"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="font-bold text-charcoal">{product.name}</h3>
                                                        <span className="font-medium text-orange">
                                                            {formatPrice(product.price * item.quantity)}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-muted line-clamp-1">{product.description}</p>
                                                </div>

                                                <div className="flex items-center justify-between mt-2">
                                                    {/* Quantity Control */}
                                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-border-subtle">
                                                        <button
                                                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                                            className="w-7 h-7 flex items-center justify-center rounded-md bg-white shadow-sm hover:text-orange transition-colors disabled:opacity-50"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="text-sm font-bold w-4 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                                            className="w-7 h-7 flex items-center justify-center rounded-md bg-white shadow-sm hover:text-orange transition-colors"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        onClick={() => removeItem(item.productId)}
                                                        className="p-2 text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                        title={t("drawer.removeTitle")}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-5 border-t border-border-subtle bg-gray-50">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-muted">{t("drawer.total")}</span>
                                    <span className="text-xl font-bold text-charcoal">
                                        {formatPrice(totalPrice)}
                                    </span>
                                </div>
                                <Link
                                    href="/cart"
                                    onClick={onClose}
                                    className="w-full btn-gradient py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white shadow-lg shadow-orange/20"
                                >
                                    {t("drawer.viewOrder")}
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
