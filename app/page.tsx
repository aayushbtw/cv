import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cv } from "@/site/cv";
import { socials } from "@/site/socials";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-lg">
      <header className="flex flex-col gap-xs text-fg-1">
        <h1 className="text-4xl tracking-[0.06em]">
          <span className="font-semibold">{cv.firstName}</span>{" "}
          <span>{cv.lastName}</span>
        </h1>
        <h2 className="font-medium text-xl">{cv.designation}</h2>
      </header>

      <div className="h-1 border-b" />

      <main className="flex flex-col gap-lg">
        <section>
          <Card>
            <CardHeader className="flex flex-col gap-md">
              <CardDescription>{cv.description}</CardDescription>
            </CardHeader>
          </Card>
        </section>

        {cv.sections.map((s) => (
          <section key={s.title}>
            <Card>
              <CardHeader>
                <CardTitle className="gap-sm">
                  <span className="block h-0.5 w-md bg-brand" />
                  {s.title}
                </CardTitle>
              </CardHeader>

              {s.body && (
                <SectionRenderer
                  component={s.body.component}
                  content={s.body.content}
                />
              )}
            </Card>
          </section>
        ))}
      </main>

      <div className="h-1 border-b" />

      <footer className="flex gap-md">
        {socials.map((s) => (
          <a
            className="link inline-flex items-center gap-xs font-medium underline-offset-4"
            href={s.url}
            key={s.platform}
            target="_blank"
          >
            {s.platform} <IconArrowUpRight className="size-4 shrink-0" />
          </a>
        ))}
      </footer>
    </div>
  );
}

const componentMap = {
  skills: SkillsSection,
  workExp: WorkExperienceSection,
  education: EducationSection,
  projects: ProjectsSection,
  certifications: CertificationsSection,
} as const;

type ComponentKey = keyof typeof componentMap;

function SectionRenderer({
  component,
  content,
}: {
  component: string;
  content: unknown;
}) {
  const Component = componentMap[component as ComponentKey];
  if (!Component) {
    return null;
  }
  return <Component content={content as never} />;
}

function SkillsSection({
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

function WorkExperienceSection({
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
        <div className="flex flex-col gap-md" key={c.workplace}>
          <Timeline date={c.date}>
            {c.workplace} — {c.designation}
          </Timeline>

          <ul className="flex list-disc flex-col gap-md pl-4 marker:text-brand">
            {c.projects.map((p) => (
              <li className="break-inside-avoid" key={p.name}>
                <div className="flex flex-col gap-xs">
                  <div>
                    <h6 className="font-medium">{p.name}</h6>
                    <p className="max-w-11/12 text-fg-2">{p.description}</p>
                  </div>
                  <ul className="flex flex-col gap-xs">
                    {p.points.map((point) => (
                      <li
                        className="flex max-w-11/12 items-baseline gap-2"
                        key={point}
                      >
                        <IconArrowRight className="size-4.5 shrink-0 translate-y-0.5 text-fg-3" />
                        <span>{point}</span>
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

function EducationSection({
  content,
}: {
  content: {
    title: string;
    description: string;

    date: string;
  }[];
}) {
  return (
    <CardContent className="gap-sm">
      {content.map((c) => (
        <Timeline date={c.date} key={c.title}>
          {c.title} — {c.description}
        </Timeline>
      ))}
    </CardContent>
  );
}

function ProjectsSection({
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
      <ul className="flex list-disc flex-col gap-md pl-4 marker:text-brand">
        {content.map((c) => (
          <li className="break-inside-avoid" key={c.title}>
            <div className="flex flex-col gap-xs">
              <div>
                <Timeline date={c.date}>{c.title}</Timeline>
                <p className="max-w-11/12 text-fg-2">{c.description}</p>
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

function CertificationsSection({
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
      <ul className="flex list-disc flex-col gap-md pl-4 marker:text-brand">
        {content.map((c) => (
          <li className="break-inside-avoid" key={c.title}>
            <div className="flex flex-col gap-xs">
              <Timeline date={c.date}>{c.title}</Timeline>
              <p className="max-w-11/12 text-fg-2">{c.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  );
}

function Timeline({
  children,
  date,
}: {
  children: React.ReactNode;
  date: string;
}) {
  return (
    <div className="flex justify-between">
      <span className="inline-flex font-medium">{children}</span>
      <span className="inline-flex text-fg-2">{date}</span>
    </div>
  );
}
