import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Frontend Daily", template: "%s · Frontend Daily" },
  description: "A living portfolio documenting the journey from Frontend Fresher to Junior — daily upgrades, AI research reports, STAR method, and more.",
  keywords: ["frontend", "portfolio", "Next.js", "React", "learning", "junior developer"],
  openGraph: {
    title: "Frontend Daily",
    description: "Fresher → Junior: 30-day daily upgrade portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" className={cn(syne.variable, dmSans.variable, dmMono.variable, "font-sans", geist.variable, "dark")}>
      <body>
        {children}
      </body>
    </html>
  );
}
