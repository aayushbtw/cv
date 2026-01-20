import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-bg-2 px-sm py-xs font-medium text-fg-2 text-xs",
        className
      )}
      data-slot="badge"
      {...props}
    />
  );
}

export { Badge };
