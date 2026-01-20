import { CardContent } from "@/components/ui/card";
import { Timeline } from "./timeline";

export function CertificationsSection({
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
          {c.title}
        </Timeline>
      ))}
    </CardContent>
  );
}
