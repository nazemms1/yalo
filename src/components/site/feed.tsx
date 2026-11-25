"use client";

import { ArrowUpRight, Camera } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { BRAND, FEED_POSTS, type FeedTone } from "@/lib/brand";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Title } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

const TONE: Record<FeedTone, string> = {
  gold: "bg-gold text-ink",
  bordeaux: "bg-ink text-gold",
  ink: "bg-ink text-bone",
  bone: "bg-paper text-ink ring-1 ring-ink/10",
};

export function Feed() {
  const { t, lang } = useLanguage();
  const date = (iso: string) =>
    new Intl.DateTimeFormat(lang === "ar" ? "ar-SY" : "en-US", { day: "numeric", month: "long", year: "numeric" }).format(
      new Date(`${iso}T12:00:00Z`),
    );

  return (
    <section id="instagram" className="relative px-5 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <div>
              <Eyebrow>{t.feed.eyebrow}</Eyebrow>
              <Title className="mt-5">{t.feed.title}</Title>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75 md:text-lg">{t.feed.lead}</p>

              <a
                href={BRAND.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-4 rounded-3xl border-2 border-ink p-4 pe-6 transition-colors hover:bg-ink hover:text-bone"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-gold font-display text-2xl text-ink">
                  Y
                </span>
                <span className="flex flex-col leading-tight">
                  <span dir="ltr" className="font-display text-2xl">
                    @{BRAND.handle}
                  </span>
                  <span className="mt-1 text-sm opacity-70">
                    {t.feed.follow} · {BRAND.snapshot.followers} {lang === "ar" ? "متابع" : "followers"}
                  </span>
                </span>
                <ArrowUpRight aria-hidden className="ms-2 size-6 transition-transform group-hover:rotate-45 rtl:-scale-x-100" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {FEED_POSTS.map((post, index) => (
              <Reveal key={post.date + index} delay={(index % 2) * 0.08}>
                <a
                  href={BRAND.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-xl md:p-6",
                    TONE[post.tone],
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-current/10 px-3 py-1.5 text-sm font-medium">
                      <Camera aria-hidden size={14} />
                      {t.feed.photo}
                    </span>
                    <ArrowUpRight aria-hidden size={22} className="transition-transform duration-500 group-hover:rotate-45 rtl:-scale-x-100" />
                  </div>

                  <p dir="auto" className="font-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-snug transition-transform duration-500 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-between text-sm font-medium opacity-80">
                    <span dir="ltr">@{BRAND.handle}</span>
                    <time dateTime={post.date}>{date(post.date)}</time>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
