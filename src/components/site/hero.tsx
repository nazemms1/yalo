"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "@/lib/language";
import { BRAND } from "@/lib/brand";
import { PRODUCTS } from "@/lib/catalog";
import { ButtonLink } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Hero on a white base: the YALO wordmark in black on the left, a real product photo on the right.
 * Motion: letters rise on load and lift on hover, the photo drifts as the page scrolls and zooms on hover,
 * and the gold accent line draws itself in. Yellow stays limited to small accents.
 */
export function Hero() {
  const { t, lang } = useLanguage();
  const photo = PRODUCTS[0]?.photos[0];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-white text-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-28 md:grid-cols-12 md:gap-10 md:px-12 md:pb-20 md:pt-36">
        <motion.div style={{ y: wordY }} className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-3.5 py-1.5 text-sm font-medium"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-80" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            {t.hero.eyebrow}
          </motion.span>

          {/* Wordmark: letters rise in, then each one lifts on hover. ltr keeps Y-A-L-O in order. */}
          <h1
            dir="ltr"
            aria-label={BRAND.name}
            className="font-display mt-6 flex text-[clamp(6rem,27vw,13rem)] leading-[0.82] text-ink md:text-[clamp(5.5rem,15vw,13rem)]"
          >
            {BRAND.name.split("").map((letter, index) => (
              <span key={index} className="inline-block overflow-hidden pb-[0.04em]" aria-hidden>
                <motion.span
                  className="inline-block cursor-default"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.1 + index * 0.1, ease: EASE }}
                  whileHover={{ y: "-8%", color: "#FFCB05", transition: { type: "spring", stiffness: 400, damping: 14 } }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-6 h-1.5 w-24 origin-left rounded-full bg-gold rtl:origin-right"
            aria-hidden
          />

          <p className="font-display mt-6 text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">{t.hero.tagline}</p>
          <p dir="ltr" className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink/65">
            {BRAND.slogan}
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">{t.hero.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/products" variant="primary" size="lg" className="w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="/branches" variant="ghost" size="lg" arrow={false} className="w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div style={{ y: photoY }} className="group relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink/10">
            {photo && (
              <Image
                src={photo.src}
                alt={photo.alt[lang]}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}
          </div>

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            className="absolute -bottom-5 start-5 inline-flex rounded-2xl bg-ink px-4 py-3 shadow-lg"
          >
            <Image src="/yalo/brand/logo.png" alt="" width={150} height={150} className="h-10 w-auto" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
