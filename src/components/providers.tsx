"use client";

import { MotionConfig } from "motion/react";
import { LanguageProvider } from "@/lib/language";

/** Client-side providers: language switching and motion preferences (respects reduced motion). */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageProvider>
  );
}
