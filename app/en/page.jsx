import OrdivyLandingEn from "../OrdivyLandingEn";

export const metadata = {
  title: "Your home, in order",
  description: "Organize what you own, find everything, and buy only what you need with Ordivy.",
  alternates: {
    canonical: "/en",
    languages: { "es-ES": "/", en: "/en" },
  },
  openGraph: {
    locale: "en_US",
    url: "/en",
    title: "Ordivy — Your home, in order",
    description: "Organize what you own, find everything, and buy only what you need.",
  },
};

export default function EnglishHomePage() {
  return <OrdivyLandingEn />;
}
