import { Geist } from 'next/font/google';
import './globals.css';
import './landing.css';
import './legal.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export default function DocumentRoot({ children, lang }) {
  return <html lang={lang}><body className={geist.variable}>{children}</body></html>;
}
