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
  },
  twitter: {
    card: 'summary',
    title: 'Ordivy — Tu casa, en orden',
    description: 'Organiza lo que tienes, encuentra cada cosa y compra solo lo necesario.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return <html lang="es"><body className={geist.variable}>{children}</body></html>;
}
