import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interesse Popular",
  description: "Portal do Interesse Popular.",
  icons: {
    icon: [
      { url: "/images/pip-logo.svg", type: "image/svg+xml" },
      { url: "/images/pip-logo.png", type: "image/png", sizes: "1024x1024" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
