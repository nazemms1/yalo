"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/cn";
import { MobileDrawer, type DrawerLink } from "@/components/site/mobile-drawer";

type NavKey = "manifesto" | "products" | "branch" | "instagram" | "trade";

const LINKS: { href: string; key: NavKey }[] = [
  { href: "/about", key: "manifesto" },
  { href: "/products", key: "products" },
  { href: "/branches", key: "branch" },
  { href: "/#instagram", key: "instagram" },
  { href: "/wholesale", key: "trade" },
];

export function Navbar() {
  const { t, toggle, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = useCallback(() => setOpen(false), []);
  const drawerLinks: DrawerLink[] = LINKS.map((link) => ({ href: link.href, label: t.nav[link.key] }));
  const shortLang = lang === "ar" ? "EN" : "ع";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-6 md:pt-5">
      {/* Reading progress: a gold line along the very top that fills as the page scrolls */}
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-1 origin-left bg-gold rtl:origin-right"
      />
      <nav
        aria-label="Main"
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-3 rounded-full px-2 py-2 transition-all duration-500 md:px-4",
          scrolled ? "bg-bone/95 shadow-sm ring-1 ring-ink/10 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <Link
          href="/"
          aria-label={BRAND.name}
          className="inline-flex shrink-0 items-center rounded-full bg-ink px-3 py-1.5 md:px-3.5"
        >
          <Image src="/yalo/brand/logo.png" alt={BRAND.name} width={150} height={150} priority className="h-8 w-auto md:h-9" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:bg-gold/50 hover:text-ink"
              >
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border-2 border-ink px-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-gold md:h-10 md:px-4"
          >
            <span className="md:hidden">{shortLang}</span>
            <span className="hidden md:inline">{t.nav.switchTo}</span>
          </button>

          <Link
            href="/products"
            className="hidden h-10 items-center rounded-full bg-gold px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-gold sm:inline-flex"
          >
            {t.nav.order}
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label={t.nav.open}
            className="grid size-11 place-items-center rounded-full bg-ink text-gold transition-transform active:scale-95 lg:hidden"
          >
            <Menu size={20} aria-hidden />
          </button>
        </div>
      </nav>

      <MobileDrawer open={open} onClose={closeDrawer} links={drawerLinks} />
    </header>
  );
}
