"use client";

import { useLanguage } from "@/lib/language";
import { PageIntro } from "@/components/ui/page-intro";

/** Heading for the catalogue page, in the current language. */
export function CatalogIntro() {
  const { t } = useLanguage();
  return <PageIntro eyebrow={t.products.eyebrow} title={t.products.title} lead={t.products.lead} />;
}
