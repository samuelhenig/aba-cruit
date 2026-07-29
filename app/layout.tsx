import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BCBA Recruiter | ABA Recruiting & Staffing | ABA Cruit",
  description:
    "ABA Cruit helps ABA companies hire BCBAs, RBTs, clinical leaders, and support staff faster. BCBA recruiting is our specialty.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
