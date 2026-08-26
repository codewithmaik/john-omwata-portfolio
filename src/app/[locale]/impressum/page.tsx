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
  const t = await getTranslations({ locale, namespace: "legal.impressum" });
  return { title: t("metaTitle") };
}

export default async function ImpressumPage({
  params,
}: PageProps<"/[locale]/impressum">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const sections = t.raw("impressum.sections") as {
    heading: string;
    body: string[];
  }[];

  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow={t("impressum.eyebrow")}
          title={t("impressum.title")}
          intro={t("impressum.intro")}
          sections={sections}
          backLabel={t("backToHome")}
        />
      </main>
      <Footer />
    </>
  );
}
