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
      <span className="inline-flex">{date}</span>
    </div>
  );
}
