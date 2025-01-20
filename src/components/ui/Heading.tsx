import { cn } from "../../lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "xl" | "2xl" | "3xl" | "4xl" | "default";
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  children,
  className,
  size = "default",
  as: Component = "h1",
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-isidora font-bold",
        {
          "text-4xl": size === "default",
          "text-5xl md:text-6xl": size === "3xl",
          "text-6xl md:text-7xl": size === "4xl",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
