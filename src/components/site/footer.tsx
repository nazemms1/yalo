"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { BRAND } from "@/lib/brand";

const LINKS = [
  { href: "/about", key: "manifesto" },
  { href: "/products", key: "products" },
  { href: "/branches", key: "branch" },
  { href: "/wholesale", key: "trade" },
] as const;

/**
 * Footer: on phones it stacks into a two-column link grid with large tap targets;
 * on larger screens it becomes a single row. Links get an animated underline on hover.
 */
export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gold text-ink">
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-8 md:px-12 md:py-10">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex rounded-xl bg-ink px-3 py-2">
            <Image src="/yalo/brand/logo.png" alt={BRAND.name} width={150} height={150} className="h-9 w-auto md:h-10" />
          </span>
          <a
            href={BRAND.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink hover:shadow-lg"
          >
            <span dir="ltr">@{BRAND.handle}</span>
            <ArrowUpRight aria-hidden size={16} className="transition-transform duration-300 group-hover:rotate-45 rtl:-scale-x-100" />
          </a>
        </div>

        <nav aria-label="Footer" className="mt-8 md:mt-10">
          <ul className="grid grid-cols-2 gap-x-6 border-t border-ink/20 md:flex md:flex-wrap md:items-center md:gap-x-10 md:border-0 md:pt-0">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-ink/20 md:border-0">
                <Link
                  href={link.href}
                  className="group flex min-h-12 items-center justify-between py-3 text-lg font-medium md:min-h-0 md:py-0 md:text-base"
                >
                  <span className="relative">
                    {t.nav[link.key]}
                    <span
                      aria-hidden
                      className="absolute -bottom-1 inset-x-0 h-[2px] origin-right scale-x-0 bg-ink transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 rtl:origin-left rtl:group-hover:origin-right"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs md:flex-row md:items-center md:justify-between md:px-12 md:text-sm">
          <p className="opacity-80">© 2026 {BRAND.name} · {t.footer.rights}</p>
          <a href="#top" className="group inline-flex w-fit items-center gap-2 font-medium">
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">{t.footer.back}</span>
            <span aria-hidden className="inline-block -rotate-90 transition-transform duration-300 group-hover:-translate-y-1">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
