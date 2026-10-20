import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STUDIO_ARCHIVE // High-End UI Components",
  description: "Architectural grade, interactive components and visual systems for elite digital builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="studio-grid-bg min-h-screen text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
