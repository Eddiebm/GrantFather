import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "GrantFather",
  description: "AI-Powered Grant Writing Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
