import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackFlow | Hackathon Discovery and Team Matching",
  description: "Discover student hackathons, build a profile, and find teammates faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
