import { Eyebrow, Title } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** Heading block used at the top of every inner page (the navbar is fixed above it). */
export function PageIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <Reveal className="flex flex-col gap-4 pb-10 pt-32 md:flex-row md:items-end md:justify-between md:pb-14 md:pt-40">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title className="mt-5">{title}</Title>
      </div>
      {lead && <p className="max-w-md text-base leading-relaxed text-ink/75 md:text-lg">{lead}</p>}
    </Reveal>
  );
}
