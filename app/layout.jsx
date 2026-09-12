import { Geist } from 'next/font/google';
import './globals.css';
import './landing.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata = {
  title: 'Ordivy — Tu casa, en orden',
  description: 'Organiza lo que tienes, encuentra cada cosa y compra solo lo necesario con Ordivy.',
};

export default function RootLayout({ children }) {
  return <html lang="es"><body className={geist.variable}>{children}</body></html>;
}
