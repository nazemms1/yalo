"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COPY, type Copy, type Lang } from "@/lib/copy";

interface LanguageContextValue {
  lang: Lang;
  t: Copy;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Arabic is the default (server and first client render match). Switching updates <html lang / dir>. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((current) => (current === "ar" ? "en" : "ar"));
  }, []);

  const value = useMemo(() => ({ lang, t: COPY[lang], toggle }), [lang, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
