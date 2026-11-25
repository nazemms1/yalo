"use client";

import { useLanguage } from "@/lib/language";

function Star() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-7 shrink-0 fill-current">
      <path d="M12 0c.6 6.2 4.8 10.4 12 12-7.2 1.6-11.4 5.8-12 12-.6-6.2-4.8-10.4-12-12C7.2 10.4 11.4 6.2 12 0Z" />
    </svg>
  );
}

/** Full-width ticker. Always moves in one direction in both languages. */
export function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div dir="ltr" className="group overflow-hidden bg-gold py-5 text-ink md:py-7">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused] md:gap-12">
        {items.map((text, index) => (
          <span key={index} className="flex shrink-0 items-center gap-8 md:gap-12">
            <span className="font-display text-3xl uppercase md:text-5xl">{text}</span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}
