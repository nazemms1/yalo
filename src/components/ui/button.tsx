import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "group inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(12,12,12,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink active:translate-y-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-ink text-bone hover:bg-gold hover:text-ink",
        gold: "bg-gold text-ink hover:bg-ink hover:text-gold",
        ghost: "border-2 border-current hover:bg-ink hover:border-ink hover:text-bone",
        inverse: "bg-bone text-ink hover:bg-gold",
      },
      size: {
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

interface ButtonLinkProps extends VariantProps<typeof buttonStyles> {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  arrow?: boolean;
}

export function ButtonLink({ href, children, variant, size, className, external, arrow = true }: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className="grid size-7 place-items-center rounded-full bg-current/10 transition-transform duration-300 group-hover:translate-x-1.5 rtl:rotate-180 rtl:group-hover:-translate-x-1.5"
        >
          <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </>
  );

  const classes = cn(buttonStyles({ variant, size }), className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
