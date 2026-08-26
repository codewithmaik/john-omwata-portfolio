import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LegalPage from "@/components/LegalPage";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.datenschutz" });
  return { title: t("metaTitle") };
}

export default async function DatenschutzPage({
  params,
}: PageProps<"/[locale]/datenschutz">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const sections = t.raw("datenschutz.sections") as {
    heading: string;
    body: string[];
  }[];

  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow={t("datenschutz.eyebrow")}
          title={t("datenschutz.title")}
          intro={t("datenschutz.intro")}
          sections={sections}
          backLabel={t("backToHome")}
        />
      </main>
      <Footer />
    </>
  );
}
