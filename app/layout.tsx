import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/base/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'cv',
  description: 'cv',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn(fontSans.variable, "antialiased")} lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}