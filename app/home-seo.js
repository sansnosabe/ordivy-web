export const homeContent = {
  es: {
    title: 'Ordivy | App para organizar tus cosas e inventario personal',
    description: 'Organiza ropa, herramientas, alimentos y colecciones. Controla cantidades, encuentra tus pertenencias y prepara tu lista de la compra con Ordivy.',
  },
  en: {
    title: 'Ordivy | Personal inventory and home organization app',
    description: 'Organize clothes, tools, food and collections. Track quantities, find your belongings and build your shopping list with Ordivy.',
  },
};

export function homeMetadata(lang) {
  const { title, description } = homeContent[lang];
  const english = lang === 'en';
  const image = `/social/ordivy-${lang}.png`;
  return {
    title: { absolute: title }, description,
    alternates: { canonical: english ? '/en' : '/', languages: { 'es-ES': '/', en: '/en' } },
    openGraph: {
      type: 'website', siteName: 'Ordivy', locale: english ? 'en_US' : 'es_ES',
      url: english ? '/en' : '/', title, description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function softwareApplication(lang) {
  return {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Ordivy', url: `https://www.ordivy.app${lang === 'en' ? '/en' : '/'}`,
    description: homeContent[lang].description, inLanguage: lang,
    applicationCategory: 'LifestyleApplication', operatingSystem: 'iOS',
    downloadUrl: 'https://apps.apple.com/app/ordivy/id6814024224',
  };
}
