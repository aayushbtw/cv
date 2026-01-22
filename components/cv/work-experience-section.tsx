import { IconArrowRight } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { parseText } from "@/lib/parse-text";
import { Timeline } from "./timeline";

export function WorkExperienceSection({
  content,
}: {
  content: {
    workplace: string;
    designation: string;
    date: string;
    projects: {
      name: string;
      description: string;
      points: string[];
      stack: string[];
    }[];
  }[];
}) {
  return (
    <CardContent>
      {content.map((c) => (
        <div className="flex flex-col gap-xs" key={c.workplace}>
          <Timeline date={c.date}>
            {c.workplace} — {c.designation}
          </Timeline>

          <ul className="flex list-disc flex-col gap-xs pl-4.5 marker:text-brand">
            {c.projects.map((p) => (
              <li className="break-inside-avoid" key={p.name}>
                <div className="flex flex-col gap-xs">
                  <div>
                    <h6 className="font-medium text-fg-2">{p.name}</h6>
                    <p className="max-w-11/12 font-paragraph text-sm">
                      {p.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-xs font-paragraph">
                    {p.points.map((point) => (
                      <li
                        className="flex max-w-11/12 items-baseline gap-2 text-sm"
                        key={point}
                      >
                        <IconArrowRight className="size-4.5 shrink-0 translate-y-0.5 text-fg-2" />
                        <span>{parseText(point)}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex gap-sm">
                    {p.stack.map((s) => (
                      <li key={s}>
                        <Badge>{s}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </CardContent>
  );
}
