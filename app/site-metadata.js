export const siteMetadata = {
  metadataBase: new URL('https://www.ordivy.app'),
  title: {
    default: 'Ordivy — Tu casa, en orden',
    template: '%s | Ordivy',
  },
  description: 'Organiza lo que tienes, encuentra cada cosa y compra solo lo necesario con Ordivy.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'Ordivy',
    title: 'Ordivy — Tu casa, en orden',
    description: 'Organiza lo que tienes, encuentra cada cosa y compra solo lo necesario.',
    images: [{ url: '/social/ordivy-es.png', width: 1200, height: 630, alt: 'Ordivy — Tu casa, en orden' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordivy — Tu casa, en orden',
    description: 'Organiza lo que tienes, encuentra cada cosa y compra solo lo necesario.',
    images: ['/social/ordivy-es.png'],
  },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};
