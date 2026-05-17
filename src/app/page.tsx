import { SiteHeader } from "@/components/layout/site-header";
import { LandingPage } from "@/components/landing/landing-page";
import { getDictionary } from "@/i18n/get-dictionary";

export default function Home() {
  const dictionary = getDictionary("en");

  return (
    <>
      <SiteHeader />
      <LandingPage dictionary={dictionary} locale="en" />
    </>
  );
}
