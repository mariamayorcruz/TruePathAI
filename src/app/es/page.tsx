import { SiteHeader } from "@/components/layout/site-header";
import { LandingPage } from "@/components/landing/landing-page";
import { getDictionary } from "@/i18n/get-dictionary";

export default function SpanishHomePage() {
  const dictionary = getDictionary("es");

  return (
    <>
      <SiteHeader />
      <LandingPage dictionary={dictionary} locale="es" />
    </>
  );
}
