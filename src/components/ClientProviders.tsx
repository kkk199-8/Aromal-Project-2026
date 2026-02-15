"use client";

import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { IntroScreen } from "@/components/ui/IntroScreen";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <CartProvider>
                <IntroScreen>{children}</IntroScreen>
            </CartProvider>
        </LanguageProvider>
    );
}
