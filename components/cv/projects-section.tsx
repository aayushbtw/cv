import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { Timeline } from "./timeline";

export function ProjectsSection({
  content,
}: {
  content: {
    title: string;
    description: string;
    date: string;
    stack: string[];
  }[];
}) {
  return (
    <CardContent>
      <ul className="flex list-disc flex-col gap-xs pl-4.5 marker:text-brand">
        {content.map((c) => (
          <li className="break-inside-avoid" key={c.title}>
            <div className="flex flex-col gap-xs">
              <div>
                <Timeline date={c.date}>{c.title}</Timeline>
                <p className="max-w-11/12 font-paragraph text-sm">
                  {c.description}
                </p>
              </div>

              <ul className="flex gap-sm">
                {c.stack.map((s) => (
                  <li key={s}>
                    <Badge>{s}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  );
}
