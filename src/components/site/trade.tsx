"use client";

import { useLanguage } from "@/lib/language";
import { BRAND } from "@/lib/brand";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Title } from "@/components/ui/section-heading";

export function Trade() {
  const { t } = useLanguage();

  return (
    <section id="trade" className="px-5 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <Eyebrow>{t.trade.eyebrow}</Eyebrow>
          <Title className="mt-5">{t.trade.title}</Title>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/75 md:text-lg">{t.trade.lead}</p>
          <div className="mt-8">
            <ButtonLink href={BRAND.url} external variant="primary" size="lg">
              {t.trade.cta}
            </ButtonLink>
          </div>
        </Reveal>

        <ol className="divide-y-2 divide-ink border-y-2 border-ink lg:col-span-5 lg:col-start-8">
          {t.trade.items.map((item, index) => (
            <li key={item}>
              <Reveal delay={index * 0.1} className="group flex items-center gap-6 border-ink/0 py-7 transition-all duration-500 hover:bg-gold/40 hover:ps-4">
                <span className="font-display text-xl text-ink">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-3xl leading-tight md:text-4xl">{item}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
