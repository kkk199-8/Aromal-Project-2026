"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        referral: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim()) newErrors.firstName = t("register.firstNameRequired");
        if (!formData.lastName.trim()) newErrors.lastName = t("register.lastNameRequired");
        if (!formData.email.trim()) newErrors.email = t("login.emailRequired");
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = t("login.emailInvalid");
        if (!formData.password) newErrors.password = t("login.passwordRequired");
        else if (formData.password.length < 6) newErrors.password = t("login.passwordMin");
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = t("register.passwordMismatch");
        return newErrors;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setSubmitted(true);
        // Here you would call API to register
    };

    return (
        <main className="min-h-screen bg-transparent flex flex-col">
            <Header />

            <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
                <div className="w-full max-w-md">

                    <h1 className="text-center text-sm font-bold text-muted uppercase tracking-wider mb-8">
                        {t("register.heading")}
                    </h1>

                    {/* Social Auth */}
                    <div className="flex justify-center gap-6 mb-12">
                        <button className="w-14 h-14 rounded-full bg-white shadow-sm border border-border-subtle flex items-center justify-center hover:scale-105 transition-transform">
                            {/* Google Icon */}
                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </button>
                        <button className="w-14 h-14 rounded-full bg-white shadow-sm border border-border-subtle flex items-center justify-center hover:scale-105 transition-transform">
                            {/* Facebook Icon */}
                            <svg className="w-7 h-7 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative mb-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border-subtle"></div>
                        </div>
                        <span className="relative bg-app-bg px-4 text-xs text-muted font-medium uppercase">
                            {t("register.or")}
                        </span>
                    </div>

                    {/* Registration Form */}
                    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                        <div className="flex gap-4">
                            <Input
                                placeholder={t("register.firstName")}
                                value={formData.firstName}
                                onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }); if (errors.firstName) setErrors(prev => { const { firstName, ...rest } = prev; return rest; }); }}
                                error={errors.firstName}
                            />
                            <Input
                                placeholder={t("register.lastName")}
                                value={formData.lastName}
                                onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }); if (errors.lastName) setErrors(prev => { const { lastName, ...rest } = prev; return rest; }); }}
                                error={errors.lastName}
                            />
                        </div>
                        <Input
                            type="email"
                            placeholder={t("register.email")}
                            value={formData.email}
                            onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors(prev => { const { email, ...rest } = prev; return rest; }); }}
                            error={errors.email}
                        />
                        <Input
                            type="password"
                            placeholder={t("register.password")}
                            value={formData.password}
                            onChange={(e) => { setFormData({ ...formData, password: e.target.value }); if (errors.password) setErrors(prev => { const { password, ...rest } = prev; return rest; }); }}
                            error={errors.password}
                        />
                        <Input
                            type="password"
                            placeholder={t("register.confirmPassword")}
                            value={formData.confirmPassword}
                            onChange={(e) => { setFormData({ ...formData, confirmPassword: e.target.value }); if (errors.confirmPassword) setErrors(prev => { const { confirmPassword, ...rest } = prev; return rest; }); }}
                            error={errors.confirmPassword}
                        />
                        <Input
                            placeholder={t("register.referral")}
                            value={formData.referral}
                            onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                        />

                        {submitted && (
                            <div className="flex items-center gap-2 text-green text-sm font-medium bg-green-surface px-4 py-3 rounded-xl">
                                <CheckCircle2 className="w-4 h-4" /> {t("cart.loginSuccess")}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FBC144] to-[#F28E46] text-white font-bold text-base shadow-lg shadow-orange/20 hover:shadow-xl hover:scale-[1.02] transition-all mt-6"
                        >
                            {t("register.submit")}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm">
                        <span className="text-muted">{t("register.hasAccount")} </span>
                        <Link href="/login" className="text-orange font-bold hover:underline decoration-2 underline-offset-4">
                            {t("register.login")}
                        </Link>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
