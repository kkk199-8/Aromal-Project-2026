"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight, Scan, QrCode, Camera } from "lucide-react";
import Link from "next/link";

type Tab = "scan" | "history" | "refer";

export default function ProfilePage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<Tab>("scan");
    const [billCode, setBillCode] = useState<string>("");

    // Simulate logged in user name
    const userName = "Theright Followers";
    const balance = 0;
    const totalSaved = 0;

    const menuItems = [
        { label: t("dashboard.menu.subscription"), href: "/subscription", isNew: true },
        { label: t("dashboard.menu.transfer"), href: "#" },
        { label: t("dashboard.menu.account"), href: "#" },
        { label: t("dashboard.menu.password"), href: "#" },
        { label: t("dashboard.menu.logout"), href: "#", isDanger: true },
    ];

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            <Header />

            <div className="pt-32 px-4 max-w-md mx-auto space-y-6">

                {/* User Name Header */}
                <div>
                    <h1 className="text-xl font-bold text-charcoal">{userName}</h1>
                </div>

                {/* Orange Balance Card */}
                <div className="bg-gradient-to-br from-orange to-orange-hover rounded-[2rem] p-8 text-white relative overflow-hidden shadow-lg shadow-orange/20">
                    <div className="relative z-10">
                        <p className="opacity-90 font-medium mb-1">{t("dashboard.balance")}</p>
                        <h2 className="text-5xl font-bold mb-12">{balance} <span className="text-2xl font-medium">{t("dashboard.coins")}</span></h2>

                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-sm opacity-80">{t("dashboard.saved")}</p>
                                <p className="text-2xl font-bold">+{totalSaved}</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xs font-bold tracking-widest opacity-80 mb-1">AROMAL</span>
                                <span className="font-black text-xl leading-none whitespace-pre-line">{t("dashboard.weLoveYou")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="bg-white rounded-[2rem] p-1 shadow-sm border border-gray-100">

                    {/* Tabs */}
                    <div className="flex p-1 gap-1">
                        <button
                            onClick={() => setActiveTab("scan")}
                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "scan" ? "bg-orange text-white shadow-md" : "text-muted hover:bg-gray-50"}`}
                        >
                            <Scan className="w-4 h-4" />
                            {t("dashboard.tab.topup")}
                        </button>
                        <button
                            onClick={() => setActiveTab("history")}
                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "history" ? "bg-white text-charcoal border border-orange" : "text-muted hover:bg-gray-50"}`}
                        >
                            {t("dashboard.tab.history")}
                        </button>
                        <button
                            onClick={() => setActiveTab("refer")}
                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "refer" ? "bg-white text-charcoal border border-orange" : "text-muted hover:bg-gray-50"}`}
                        >
                            {t("dashboard.tab.refer")}
                        </button>
                    </div>

                    {/* Tab Content: Scan (previously Top Up) */}
                    {activeTab === "scan" && (
                        <div className="p-6 space-y-6">
                            <p className="text-xs text-muted text-center max-w-[280px] mx-auto leading-relaxed">
                                {t("dashboard.topup.desc")}
                            </p>

                            {/* Camera / Scan Visual */}
                            <div className="bg-gray-900 rounded-2xl h-48 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer border-2 border-dashed border-gray-700 hover:border-orange transition-colors">
                                <div className="absolute inset-0 bg-black/50 z-0"></div>
                                <div className="relative z-10 flex flex-col items-center animate-pulse">
                                    <QrCode className="w-12 h-12 text-white/80 mb-3" />
                                    <span className="text-white/80 text-sm font-bold">Tap to Scan QR</span>
                                </div>
                                {/* Scanning Line Animation */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-orange/80 shadow-[0_0_20px_rgba(255,165,0,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="text-gray-400 font-bold">#</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder={t("dashboard.topup.placeholder")}
                                    value={billCode}
                                    onChange={(e) => setBillCode(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-4 text-left font-bold text-charcoal focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:font-normal"
                                />
                            </div>

                            <button className="w-full bg-orange hover:bg-orange-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-orange/20 transition-all transform hover:scale-[1.02]">
                                {t("dashboard.topup.button")}
                            </button>
                        </div>
                    )}
                </div>

                {/* Subscription Section */}
                <div className="px-1">
                    <h3 className="text-lg font-bold text-charcoal mb-4 px-2">
                        {t("dashboard.sub.suggested")}
                    </h3>
                    <div className="space-y-4">
                        {/* Package 1: Honey & Oil */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                {t("sub.popular")}
                            </div>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#FFFBF0] flex items-center justify-center border border-orange/10">
                                    <span className="text-2xl">🍯</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg leading-tight mb-1">
                                        {t("sub.pkg1.name")}
                                    </h4>
                                    <p className="text-xs text-muted max-w-[200px]">
                                        {t("sub.pkg1.detail")}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-medium text-charcoal">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange"></div>
                                    {t("sub.pkg1.item1")}
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-charcoal">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange"></div>
                                    {t("sub.pkg1.item2")}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-charcoal">2,900 L</span>
                                    <span className="text-xs text-muted font-bold">{t("dashboard.sub.frequency")}</span>
                                </div>
                                <button className="bg-charcoal text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-charcoal/20 hover:scale-105 transition-transform">
                                    {t("dashboard.sub.subscribe")}
                                </button>
                            </div>
                        </div>

                        {/* Package 2: Fruits & Energy */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 relative overflow-hidden group opacity-90 hover:opacity-100 transition-opacity">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#F0FFF4] flex items-center justify-center border border-[#4A7C59]/10">
                                    <span className="text-2xl">🥝</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg leading-tight mb-1">
                                        {t("sub.pkg2.name")}
                                    </h4>
                                    <p className="text-xs text-muted max-w-[200px]">
                                        {t("sub.pkg2.detail")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div>
                                    <span className="text-2xl font-black text-charcoal">2,500 L</span>
                                    <span className="text-xs text-muted font-bold">{t("dashboard.sub.frequency")}</span>
                                </div>
                                <button className="border-2 border-gray-100 text-charcoal px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors">
                                    {t("dashboard.sub.subscribe")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Settings Section */}
                <div>
                    <h3 className="text-lg font-bold text-charcoal mb-4 px-2">{t("dashboard.menu.settings")}</h3>
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group"
                            >
                                <span className={`font-bold ${item.isDanger ? "text-red-500" : "text-charcoal"}`}>
                                    {item.label}
                                </span>
                                <div className="flex items-center gap-3">
                                    {item.isNew && (
                                        <span className="bg-orange text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                            {t("dashboard.menu.new")}
                                        </span>
                                    )}
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-orange transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            {/* Adding Keyframes for Scan Animation */}
            <style jsx global>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </main>
    );
}
