import OrdivyLandingEn from "../OrdivyLandingEn";

export const metadata = {
  title: "Your home, in order",
  description: "Organize what you own, find everything, and buy only what you need with Ordivy.",
  alternates: {
    canonical: "/en",
    languages: { "es-ES": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    siteName: "Ordivy",
    locale: "en_US",
    url: "/en",
    title: "Ordivy — Your home, in order",
    description: "Organize what you own, find everything, and buy only what you need.",
    images: [{ url: "/social/ordivy-en.png", width: 1200, height: 630, alt: "Ordivy — Your home, in order" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordivy — Your home, in order",
    description: "Organize what you own, find everything, and buy only what you need.",
    images: ["/social/ordivy-en.png"],
  },
};

export default function EnglishHomePage() {
  return <OrdivyLandingEn />;
}
