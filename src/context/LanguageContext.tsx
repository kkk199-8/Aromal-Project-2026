"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type TranslationKey } from "@/data/translations";

export type Lang = "al" | "en";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("al");

    const t = useCallback(
        (key: TranslationKey): string => {
            return translations[lang]?.[key] ?? translations.al[key] ?? key;
        },
        [lang]
    );

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
