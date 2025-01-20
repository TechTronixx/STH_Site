import { cn } from "../../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full px-6 mx-auto max-w-[1400px] md:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
