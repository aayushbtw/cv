import { CardContent } from "@/components/ui/card";

export function SkillsSection({
  content,
}: {
  content: { title: string; description: string }[];
}) {
  return (
    <CardContent className="gap-xs">
      {content.map((c) => (
        <div className="grid grid-cols-12 gap-md" key={c.title}>
          <div className="col-span-3 font-medium text-fg-2">{c.title}:</div>
          <div className="col-span-9 font-paragraph">{c.description}</div>
        </div>
      ))}
    </CardContent>
  );
}
