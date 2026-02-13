import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "new";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-secondary text-text-light",
    accent: "bg-accent text-white",
    new: "bg-emerald-500 text-white",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
