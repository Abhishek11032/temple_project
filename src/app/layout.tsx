import type { Metadata } from "next";
import App from "../App";
import "../styles/globals.css";
import "../styles/initial-loader.css";

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
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
