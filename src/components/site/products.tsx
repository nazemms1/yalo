"use client";

import { useLanguage } from "@/lib/language";
import { PRODUCTS } from "@/lib/catalog";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Title } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/site/product-card";

/** Home teaser: the first products, with a link to the full catalogue. */
export function Products() {
  const { t, lang } = useLanguage();

  return (
    <section id="products" className="px-5 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>{t.products.eyebrow}</Eyebrow>
            <Title className="mt-5">{t.products.title}</Title>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/75 md:text-lg">{t.products.lead}</p>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4 lg:grid-cols-3">
          {PRODUCTS.slice(0, 3).map((product, index) => (
            <li key={product.slug}>
              <Reveal delay={index * 0.08} className="h-full">
                <ProductCard product={product} lang={lang} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8 flex justify-center">
          <ButtonLink href="/products" variant="ghost" size="md">
            {t.products.cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
