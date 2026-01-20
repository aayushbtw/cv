import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "@/base/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "cv",
  description: "cv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn(fontSans.variable, "antialiased")} lang="en">
      <body className="flex justify-center bg-bg-2 p-0! text-fg-2 print:block print:min-h-0 print:bg-transparent [&_svg]:stroke-[1.5px]">
        <div className="w-[210mm] bg-bg-1 px-7.5 py-8.75 print:min-h-0 print:w-full print:p-0">
          {children}
        </div>
      </body>
    </html>
  );
}
