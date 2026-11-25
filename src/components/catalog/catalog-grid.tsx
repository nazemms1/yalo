"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/lib/language";
import { CATEGORIES, PRODUCTS, type CategoryId } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";
import { cn } from "@/lib/cn";

/**
 * Filter pills plus the product grid. Pills lift on hover and change colour when selected.
 * Products animate in and out, and the grid re-flows smoothly when the filter changes.
 */
export function CatalogGrid() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<CategoryId | "all">("all");

  const usedCategories = useMemo(
    () => CATEGORIES.filter((c) => PRODUCTS.some((p) => p.category === c.id)),
    [],
  );
  const visible = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);
  const allLabel = lang === "ar" ? "الكل" : "All";
  const groupLabel = lang === "ar" ? "الفئات" : "Categories";

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={groupLabel}>
        {[{ id: "all" as const, name: { ar: allLabel, en: allLabel } }, ...usedCategories].map((cat) => (
          <motion.button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300",
              active === cat.id
                ? "border-ink bg-ink text-gold"
                : "border-ink/25 text-ink hover:border-ink hover:bg-gold/40",
            )}
          >
            {cat.name[lang]}
          </motion.button>
        ))}
      </div>

      <motion.ul layout className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((product) => (
            <motion.li
              key={product.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} lang={lang} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
