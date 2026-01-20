export function Timeline({
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
