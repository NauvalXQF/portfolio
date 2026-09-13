"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "@/dictionaries/en";
import { id } from "@/dictionaries/id";
import type { Dictionary, Lang } from "@/dictionaries/types";

const dictionaries: Record<Lang, Dictionary> = { en, id };

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  setLang: () => {},
  toggleLang: () => {},
});

const STORAGE_KEY = "portfolio-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "id") return saved;
  const nav = window.navigator.language.toLowerCase();
  return nav.startsWith("id") ? "id" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with the server value ("en") so the first client render
  // matches SSR. The stored/browser preference is synced after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const initial = getInitialLang();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-hydration sync from localStorage/navigator
    setLangState((prev) => (prev === initial ? prev : initial));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "id" ? "id" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "en" ? "id" : "en")),
    []
  );

  const value = useMemo(
    () => ({ lang, t: dictionaries[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
