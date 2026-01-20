import { CardContent } from "@/components/ui/card";
import { Timeline } from "./timeline";

export function EducationSection({
  content,
}: {
  content: {
    title: string;
    description: string;
    date: string;
  }[];
}) {
  return (
    <CardContent className="gap-xs">
      {content.map((c) => (
        <Timeline date={c.date} key={c.title}>
          {c.title} — {c.description}
        </Timeline>
      ))}
    </CardContent>
  );
}
