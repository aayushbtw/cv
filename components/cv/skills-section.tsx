import { CardContent } from "@/components/ui/card";

export function SkillsSection({
  content,
}: {
  content: { title: string; description: string }[];
}) {
  return (
    <CardContent className="gap-sm">
      {content.map((c) => (
        <div className="grid grid-cols-12 gap-md" key={c.title}>
          <div className="col-span-4 font-medium">{c.title}:</div>
          <div className="col-span-8">{c.description}</div>
        </div>
      ))}
    </CardContent>
  );
}
