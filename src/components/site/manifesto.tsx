"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Kicker, Title } from "@/components/ui/section-heading";

/**
 * The slogan as four stacked words. As the visitor scrolls, the words drift in opposite directions,
 * and each word's letters lift in colour on hover.
 */
export function Manifesto() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const driftA = useTransform(smooth, [0, 1], ["-10%", "10%"]);
  const driftB = useTransform(smooth, [0, 1], ["12%", "-12%"]);

  return (
    <section ref={ref} id="manifesto" className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow>{t.manifesto.eyebrow}</Eyebrow>
            <Title className="mt-5">{t.manifesto.title}</Title>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-base leading-relaxed text-ink/75 md:text-lg">{t.manifesto.body}</p>
          </div>
        </Reveal>

        <div dir="ltr" className="mt-10 space-y-1 md:mt-14">
          {t.manifesto.words.map((word, index) => {
            const outlined = index % 2 === 1;
            const drift = index % 2 === 0 ? driftA : driftB;
            return (
              <Reveal
                key={word}
                delay={index * 0.08}
                className={cn("flex", outlined ? "justify-end" : "justify-start")}
              >
                <motion.span
                  style={{ x: drift }}
                  className={cn(
                    "font-display block cursor-default whitespace-nowrap text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.9] transition-colors duration-500 hover:text-gold",
                    outlined ? "outline-display text-ink" : "text-ink",
                  )}
                >
                  {word}
                </motion.span>
              </Reveal>
            );
          })}
        </div>
        <Kicker className="mt-8 text-center md:text-start">YALO · Youth Against Living Ordinary</Kicker>
      </div>
    </section>
  );
}
