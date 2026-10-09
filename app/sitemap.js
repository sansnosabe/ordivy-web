const origin = 'https://www.ordivy.app';
const publicPages = ['', '/support', '/privacy', '/terms'];

export default function sitemap() {
  return publicPages.flatMap((path) => {
    const languages = {
      'es-ES': `${origin}${path || '/'}`,
      en: `${origin}/en${path}`,
    };
    return [
      { url: languages['es-ES'], alternates: { languages } },
      { url: languages.en, alternates: { languages } },
    ];
  });
}
