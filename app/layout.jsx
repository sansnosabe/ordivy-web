import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata = {
  title: 'Ordviy — Todo en orden',
  description: 'Organiza lo que tienes, compra mejor y desperdicia menos con Ordviy.',
};

export default function RootLayout({ children }) {
  return <html lang="es"><body className={geist.variable}>{children}</body></html>;
}
