"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { BRAND } from "@/lib/brand";

export interface DrawerLink {
  href: string;
  label: string;
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: DrawerLink[];
}

/**
 * Full-height menu panel for phones. Locks page scroll while open, closes on Escape,
 * on the backdrop, or after a link is chosen. Tap targets are at least 44px.
 */
export function MobileDrawer({ open, onClose, links }: MobileDrawerProps) {
  const { t, toggle } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label={t.nav.open}>
          <motion.button
            type="button"
            aria-label={t.nav.close}
            onClick={onClose}
            className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.aside
            className="absolute inset-y-0 right-0 flex w-[min(90vw,400px)] flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 38 }}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <span className="inline-flex rounded-xl bg-ink px-3 py-2">
                <Image src="/yalo/brand/logo.png" alt={BRAND.name} width={150} height={150} className="h-8 w-auto" />
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.nav.close}
                className="grid size-11 place-items-center rounded-full bg-gold text-ink transition-colors hover:bg-ink hover:text-gold"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <nav aria-label={t.nav.open} className="flex-1 overflow-y-auto px-3 py-2">
              <ul>
                {links.map((link, index) => (
                  <li key={link.href} className="border-b border-ink/10 last:border-b-0">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex min-h-16 items-center gap-4 px-2 py-3 transition-colors active:bg-gold/40"
                    >
                      <span className="w-8 shrink-0 text-sm font-semibold text-ink/50 tabular-nums" dir="ltr">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display flex-1 text-[clamp(1.75rem,8vw,2.25rem)] leading-none">{link.label}</span>
                      <ArrowUpRight aria-hidden size={20} className="shrink-0 text-ink/60 rtl:-scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-ink/10 px-5 py-5">
              <button
                type="button"
                onClick={toggle}
                className="flex h-12 w-full items-center justify-center rounded-full border-2 border-ink text-base font-semibold transition-colors hover:bg-ink hover:text-gold"
              >
                {t.nav.switchTo}
              </button>
              <a
                href={BRAND.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-base font-semibold text-ink"
              >
                <span>{t.nav.follow}</span>
                <span dir="ltr" className="text-sm opacity-80">@{BRAND.handle}</span>
              </a>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
