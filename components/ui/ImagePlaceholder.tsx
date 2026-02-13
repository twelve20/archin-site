import { cn } from "@/lib/utils";
import {
  Layers,
  PaintBucket,
  Palette,
  Paintbrush,
  Droplets,
  Grid3X3,
  ShieldCheck,
  Package,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  PaintBucket,
  Palette,
  Paintbrush,
  Droplets,
  Grid3X3,
  ShieldCheck,
  Package,
};

interface ImagePlaceholderProps {
  gradientFrom?: string;
  gradientTo?: string;
  icon?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ImagePlaceholder({
  gradientFrom = "#D4A574",
  gradientTo = "#C45A3C",
  icon = "Package",
  size = "md",
  className,
}: ImagePlaceholderProps) {
  const Icon = iconMap[icon] || Package;

  const sizes = {
    sm: "h-40",
    md: "h-56",
    lg: "h-72 md:h-80",
  };

  const iconSizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden",
        sizes[size],
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 40%)`,
          }}
        />
      </div>
      <Icon className={cn("text-white/60", iconSizes[size])} />
    </div>
  );
}
