import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { CATEGORIES } from "@/lib/catalog";
import { cn } from "@/lib/cn";

interface ProductCardProps {
  product: Product;
  lang: "ar" | "en";
  className?: string;
}

/**
 * A product tile: photo, name, category and colour names.
 * Hover (desktop): the card lifts, the photo zooms slightly, and a "view" pill slides up from the bottom.
 */
export function ProductCard({ product, lang, className }: ProductCardProps) {
  const cover = product.photos[0];
  const category = CATEGORIES.find((c) => c.id === product.category);
  const name = product.name[lang];
  const colours = product.colors.map((color) => color.name[lang]).join(" · ");
  const viewLabel = lang === "ar" ? "عرض التفاصيل" : "View details";

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/15 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(12,12,12,0.45)] hover:ring-ink/40",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gold/30">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.alt[lang]}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        {/* View pill: slides up over the photo on hover (desktop only) */}
        <span
          aria-hidden
          className="absolute inset-x-3 bottom-3 hidden translate-y-[140%] items-center justify-center gap-2 rounded-full bg-gold py-2.5 text-sm font-semibold text-ink opacity-0 shadow-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:flex"
        >
          {viewLabel}
          <ArrowUpRight size={16} className="rtl:-scale-x-100" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 md:gap-3 md:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-gold px-2.5 py-1 text-[11px] font-semibold text-ink transition-transform duration-500 group-hover:-translate-y-0.5 md:text-xs">
            {category ? category.name[lang] : ""}
          </span>
          <ArrowUpRight
            aria-hidden
            className="size-4 text-ink transition-transform duration-500 group-hover:rotate-45 rtl:-scale-x-100 group-hover:rtl:-rotate-45 md:size-5"
          />
        </div>
        <h3 className="font-display text-base leading-snug transition-colors duration-300 md:text-2xl">{name}</h3>
        <p className="mt-auto pt-1 text-xs text-ink/75 transition-colors duration-300 group-hover:text-ink md:pt-2 md:text-sm">
          {colours}
        </p>
      </div>
    </Link>
  );
}
