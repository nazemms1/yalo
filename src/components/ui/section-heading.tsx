import { cn } from "@/lib/cn";

/** Small pill label above a section title. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-current/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

/** Display heading used by every section. Sized to fill the content, not the viewport. */
export function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-display text-[clamp(2.2rem,4.6vw,4.25rem)] text-balance", className)}>{children}</h2>
  );
}

/** Latin tagline that keeps the brand voice visible in both languages. */
export function Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p dir="ltr" className={cn("text-xs font-semibold uppercase tracking-[0.3em] opacity-60", className)}>
      {children}
    </p>
  );
}
