import { setRequestLocale } from "next-intl/server";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Work from "@/components/Work";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Process />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
