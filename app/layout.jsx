import { Geist } from 'next/font/google';
import './globals.css';
import './landing.css';
import './legal.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.ordivy.app'),
  title: {
    default: 'Ordivy — Tu casa, en orden',
    template: '%s | Ordivy',
  },
  description: 'Organiza lo que tienes, encuentra cada cosa y compra solo lo necesario con Ordivy.',
  keywords: ['inventario del hogar', 'lista de la compra', 'despensa', 'caducidades', 'organización del hogar', 'Ordivy'],
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};

export default function RootLayout({ children }) {
  return <html lang="es"><body className={geist.variable}>{children}</body></html>;
}
