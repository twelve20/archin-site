import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-card shadow-card overflow-hidden",
        hover &&
          "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
