import { cn } from "@/lib/utils";

export function Timeline({
  children,
  date,
  className,
}: {
  children: React.ReactNode;
  date: string;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-between text-fg-2", className)}>
      <span className="inline-flex font-medium">{children}</span>
      <span className="inline-flex">{date}</span>
    </div>
  );
}
