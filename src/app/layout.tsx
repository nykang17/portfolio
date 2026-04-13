import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Na Yoon Kang",
  description: "CS grad from UCLA turning ideas into working software, one project at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}