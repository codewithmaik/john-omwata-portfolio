import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Omwata John Charles — Websites, Designed & Built";
const description =
  "Freelance web developer in Kampala, Uganda. I design, build, and deploy custom websites for businesses, restaurants, studios, and consultants.";

export const metadata: Metadata = {
  metadataBase: new URL("https://john-omwata-portfolio.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
