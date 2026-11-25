"use client";

import { useLanguage } from "@/lib/language";
import { PageIntro } from "@/components/ui/page-intro";

/** Heading for the branches page, in the current language. */
export function BranchesIntro() {
  const { t } = useLanguage();
  return <PageIntro eyebrow={t.branch.eyebrow} title={t.branch.title} lead={t.branch.lead} />;
}
