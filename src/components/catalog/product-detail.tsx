"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { BRAND } from "@/lib/brand";
import { CATEGORIES, type Product } from "@/lib/catalog";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";
import { ProductGallery } from "@/components/catalog/product-gallery";
import { Reveal } from "@/components/ui/reveal";

export function ProductDetail({ product }: { product: Product }) {
  const { t, lang } = useLanguage();
  const category = CATEGORIES.find((c) => c.id === product.category);

  return (
    <section className="px-5 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Link href="/products" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:opacity-70">
          <ArrowLeft aria-hidden size={16} className="rtl:-scale-x-100" />
          {t.detail.back}
        </Link>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <ProductGallery product={product} />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-7 lg:col-span-5 lg:col-start-8">
            <div>
              {category && <Eyebrow>{category.name[lang]}</Eyebrow>}
              <h1 className="font-display mt-5 text-[clamp(2.4rem,4.5vw,3.75rem)] leading-tight">
                {product.name[lang]}
              </h1>
            </div>

            <p className="text-lg leading-relaxed text-ink/80">{product.summary[lang]}</p>

            <ul className="space-y-2">
              {product.points.map((point) => (
                <li key={point.en} className="flex items-start gap-3 text-base text-ink/85">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {point[lang]}
                </li>
              ))}
            </ul>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ink">{t.detail.colors}</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <li key={color.hex} className="rounded-full border border-ink/25 px-4 py-1.5 text-sm font-medium">
                    {color.name[lang]}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gold/30 p-5">
              <p className="font-semibold text-ink">{t.detail.priceTitle}</p>
              <p className="mt-1 text-sm text-ink/75">{t.detail.priceBody}</p>
              <div className="mt-4">
                <ButtonLink href={BRAND.url} external variant="primary" size="md">
                  {t.detail.cta}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
