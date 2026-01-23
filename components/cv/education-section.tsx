import { CardContent } from "@/components/ui/card";
import { Timeline } from "./timeline";

export function EducationSection({
  content,
}: {
  content: {
    title: string;
    date: string;
  }[];
}) {
  return (
    <CardContent className="gap-xs">
      {content.map((c) => (
        <Timeline className="text-sm" date={c.date} key={c.title}>
          <span className="text-fg-3">{c.title}</span>
        </Timeline>
      ))}
    </CardContent>
  );
}
