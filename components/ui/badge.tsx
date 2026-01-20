import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("inline-flex items-center justify-center py-xs px-sm bg-bg-2 text-fg-2 font-medium rounded-md text-xs", className)}
      data-slot="badge"
      {...props}
    />
  );
}

export {Badge}