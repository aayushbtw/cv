import { Fragment, type ReactNode } from "react";

export function parseText(text: string): ReactNode[] {
  if (!text.includes("**")) {
    return [text];
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span className="font-semibold" key={`${i}-${part}`}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return <Fragment key={`${i}-${part}`}>{part}</Fragment>;
  });
}
