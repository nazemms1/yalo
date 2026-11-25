"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { BRAND, BRANCHES } from "@/lib/brand";
import { BRANCH_PHOTOS } from "@/lib/catalog";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Title } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

const TONE = ["bg-gold text-ink", "bg-paper text-ink ring-1 ring-ink/10"];

interface BranchProps {
  /** The home page shows its own heading; the branches page already has one, so it turns this off. */
  showHeader?: boolean;
}

/** Branches still being prepared: each card gives the area and landmark from the announcement. */
export function Branch({ showHeader = true }: BranchProps) {
  const { t, lang } = useLanguage();

  return (
    <section id="branch" className="px-5 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>{t.branch.eyebrow}</Eyebrow>
              <Title className="mt-5">{t.branch.title}</Title>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink/75 md:text-lg">{t.branch.lead}</p>
          </Reveal>
        )}

        <div className={cn("grid gap-4 md:grid-cols-2", showHeader ? "mt-10" : "mt-0")}>
          {BRANCHES.map((branch, index) => {
            const photo = BRANCH_PHOTOS[branch.id];
            const city = lang === "ar" ? branch.city.ar : branch.city.en;
            return (
              <Reveal key={branch.id} delay={index * 0.1}>
                <article
                  className={cn(
                    "group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl md:p-8",
                    TONE[index % TONE.length],
                  )}
                >
                  {photo && (
                    <Image
                      src={photo}
                      alt={city}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                  {photo && <span aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent" />}

                  <div className={cn("relative flex items-center justify-between", photo && "text-bone")}>
                    <span className="rounded-full bg-current/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
                      {t.branch.soon}
                    </span>
                    <MapPin aria-hidden size={20} />
                  </div>

                  <div className={cn("relative mt-8", photo && "text-bone")}>
                    <h3 className="font-display text-[clamp(2.4rem,4.5vw,3.75rem)] leading-none">{city}</h3>
                    {lang === "ar" && (
                      <p dir="ltr" className="font-display mt-1 text-lg tracking-wider opacity-70">
                        {branch.city.en}
                      </p>
                    )}
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider opacity-70">{t.branch.address}</p>
                    <p className="mt-1 text-lg font-semibold">{lang === "ar" ? branch.area.ar : branch.area.en}</p>
                    <p className="mt-0.5 text-base opacity-85">
                      {lang === "ar" ? branch.landmark.ar : branch.landmark.en}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 flex justify-center">
          <ButtonLink href={BRAND.url} external variant="primary" size="md">
            {t.branch.cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
