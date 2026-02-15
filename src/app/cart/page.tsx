"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, formatPrice } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight, ArrowLeft, Mail, CreditCard, Award } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CartPage() {
    const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
    const { t } = useLanguage();
    const [orderSent, setOrderSent] = useState(false);

    const handleSendOrder = () => {
        if (items.length === 0) return;
        setOrderSent(true);
    };

    if (orderSent) {
        return (
            <main className="min-h-screen bg-transparent flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
                    <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mb-6">
                        <Mail className="w-10 h-10 text-green" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                        {t("cart.orderSent")}
                    </h1>
                    <p className="text-muted max-w-md mb-3 leading-relaxed">
                        {t("cart.confirmEmail")}
                    </p>
                    <p className="text-sm text-muted mb-8">
                        {t("cart.payAtCounter")}
                    </p>
                    <Link href="/menu" className="btn-gradient px-8 py-3.5 text-sm uppercase tracking-wider inline-flex items-center gap-2">
                        {t("cart.backToMenu")} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-transparent flex flex-col">
            <Header />

            <div className="flex-1 py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">

                    {/* Page Title */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">
                            {t("cart.title")}
                        </h1>
                        <p className="text-muted text-sm">
                            {t("cart.subtitle")}
                        </p>
                    </div>

                    {items.length === 0 ? (
                        /* Empty Cart State */
                        <div className="text-center py-20">
                            <div className="w-24 h-24 rounded-full bg-orange/5 flex items-center justify-center mx-auto mb-6">
                                <ShoppingBag className="w-12 h-12 text-orange/30" />
                            </div>
                            <h2 className="text-xl font-bold text-charcoal mb-2">{t("cart.empty")}</h2>
                            <p className="text-muted text-sm mb-8">{t("cart.emptyDesc")}</p>
                            <Link href="/menu" className="btn-gradient px-8 py-3.5 text-sm uppercase tracking-wider inline-flex items-center gap-2">
                                {t("cart.seeMenu")} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Items List */}
                            <div className="lg:col-span-2 space-y-4">
                                {items.map((item) => {
                                    const product = PRODUCTS.find((p) => p.id === item.productId);
                                    if (!product) return null;
                                    return (
                                        <div key={item.productId} className="bg-white rounded-2xl p-4 md:p-5 flex gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-border-subtle">
                                            {/* Image */}
                                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: "#F5F0E8" }}>
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </div>
                                            {/* Details */}
                                            <div className="flex-1 flex flex-col justify-between min-w-0">
                                                <div>
                                                    <div className="flex justify-between items-start gap-2">
                                                        <h3 className="font-bold text-charcoal truncate">{product.name}</h3>
                                                        <span className="font-bold text-orange whitespace-nowrap">
                                                            {formatPrice(product.price * item.quantity)}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-muted line-clamp-1 mt-0.5">{product.description}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1 border border-border-subtle">
                                                        <button
                                                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-white shadow-sm hover:text-orange transition-colors"
                                                        >
                                                            <Minus className="w-3.5 h-3.5" />
                                                        </button>
                                                        <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-white shadow-sm hover:text-orange transition-colors"
                                                        >
                                                            <Plus className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
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
                                })}

                                <Link href="/menu" className="inline-flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors mt-2">
                                    <ArrowLeft className="w-4 h-4" /> {t("cart.continueShopping")}
                                </Link>
                            </div>

                            {/* Order Summary Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border-subtle sticky top-28">
                                    <h2 className="font-bold text-lg text-charcoal mb-4">{t("cart.summary")}</h2>

                                    <div className="space-y-3 text-sm border-b border-border-subtle pb-4 mb-4">
                                        <div className="flex justify-between text-muted">
                                            <span>{t("cart.subtotal")}</span>
                                            <span>{formatPrice(totalPrice)}</span>
                                        </div>
                                        <div className="flex justify-between text-muted">
                                            <span>{t("cart.payment")}</span>
                                            <span className="text-charcoal font-medium">{t("cart.paymentMethod")}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-charcoal font-bold">{t("cart.total")}</span>
                                        <span className="text-xl font-bold text-charcoal">{formatPrice(totalPrice)}</span>
                                    </div>

                                    {/* Info Note */}
                                    <div className="bg-orange-surface rounded-xl p-3 mb-5 flex gap-2.5 items-start">
                                        <Mail className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                                        <p className="text-xs text-charcoal/80 leading-relaxed">
                                            {t("cart.emailConfirmNote")}
                                        </p>
                                    </div>

                                    <button
                                        onClick={handleSendOrder}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FBC144] to-[#F28E46] text-white font-bold text-base shadow-lg shadow-orange/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                                    >
                                        {t("cart.send")} <ArrowRight className="w-4 h-4" />
                                    </button>

                                    {/* Loyalty Callout */}
                                    <div className="mt-4 bg-green-surface rounded-xl p-3 flex gap-2.5 items-start">
                                        <Award className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-charcoal/80 leading-relaxed">
                                                <Link href="/login" className="text-orange font-bold hover:underline">{t("cart.loginCta")}</Link> {t("cart.loyaltyNote")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <Footer />
        </main>
    );
}
