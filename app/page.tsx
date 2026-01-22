import { IconArrowUpRight } from "@tabler/icons-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cv } from "@/site/cv";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-md">
      <header className="flex-col gap-sm">
        <div className="flex flex-col gap-xs text-fg-1">
          <h1 className="text-4xl tracking-[0.06em]">
            <span className="font-semibold">{cv.firstName}</span>{" "}
            <span>{cv.lastName}</span>
          </h1>
          <h2 className="font-medium text-xl">{cv.designation}</h2>
        </div>

        <div className="flex gap-md">
          {cv.socials.map((s) => (
            <a
              className="link inline-flex items-center gap-xs font-medium underline-offset-4"
              href={s.url}
              key={s.platform}
              target="_blank"
            >
              {s.platform} <IconArrowUpRight className="size-4 shrink-0" />
            </a>
          ))}

          <div className="ml-auto font-medium">{cv.email}</div>
        </div>
      </header>

      <div className="h-1 border-b" />

      <main className="mt-0 flex flex-col gap-md">
        <section>
          <Card>
            <CardHeader>
              <CardDescription className="text-fg-2">
                {cv.description}
              </CardDescription>
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

              {s.body && <s.body.Component content={s.body.content as never} />}
            </Card>
          </section>
        ))}
      </main>

      <div className="h-1 border-b" />
    </div>
  );
}
