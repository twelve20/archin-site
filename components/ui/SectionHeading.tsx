import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold text-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-text-light text-lg",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 bg-accent rounded-full",
          align === "center" && "mx-auto"
        )}
      />
    </AnimateOnScroll>
  );
}
