"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/lib/language";
import type { Product } from "@/lib/catalog";
import { cn } from "@/lib/cn";

/**
 * Large photo with thumbnails underneath. The main photo cross-fades when a thumbnail is picked,
 * and thumbnails grow slightly on hover. A single photo shows without thumbnails.
 */
export function ProductGallery({ product }: { product: Product }) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const current = product.photos[index] ?? product.photos[0];

  if (!current) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gold/30 ring-1 ring-ink/10">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={current.src}
              alt={current.alt[lang]}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {product.photos.length > 1 && (
        <ul className="grid grid-cols-4 gap-3">
          {product.photos.map((photo, i) => (
            <li key={photo.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={photo.alt[lang]}
                aria-pressed={i === index}
                className={cn(
                  "relative block aspect-square w-full overflow-hidden rounded-xl ring-2 transition-all duration-300 hover:scale-[1.05]",
                  i === index ? "ring-ink" : "ring-transparent hover:ring-gold",
                )}
              >
                <Image src={photo.src} alt="" fill sizes="25vw" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
