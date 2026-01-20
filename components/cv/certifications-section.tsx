import { CardContent } from "@/components/ui/card";
import { Timeline } from "./timeline";

export function CertificationsSection({
  content,
}: {
  content: {
    title: string;
    description: string;
    date: string;
  }[];
}) {
  return (
    <CardContent>
      <ul className="flex list-disc flex-col gap-xs pl-4 marker:text-brand">
        {content.map((c) => (
          <li className="break-inside-avoid" key={c.title}>
            <div className="flex flex-col gap-xs">
              <Timeline date={c.date}>{c.title}</Timeline>
              <p className="max-w-11/12">{c.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  );
}
