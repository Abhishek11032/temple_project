import type { Metadata } from "next";
import SiteHeader from "@/components/temple/SiteHeader";
import SiteFooter from "@/components/temple/SiteFooter";
import FloatingActions from "@/components/temple/FloatingActions";
import LoadingExperience from "@/components/temple/LoadingExperience";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Shri Khatu Shyam Ji Temple",
  icons: {
    icon: "/images/logo.png",
  },
  description:
    "A divine initiative dedicated to preserving Sanatan Dharma, spreading devotion, and creating a sacred place for devotees.",
  openGraph: {
    title: "Shri Khatu Shyam Ji Temple",
    description:
      "A divine initiative dedicated to preserving Sanatan Dharma, spreading devotion, and creating a sacred place for devotees.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-temple-ivory font-sans text-temple-ink antialiased">
        <LoadingExperience>
          <SiteHeader />
          {children}
          <SiteFooter />
          <FloatingActions />
        </LoadingExperience>
      </body>
    </html>
  );
}
