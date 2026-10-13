import DocumentRoot from '../DocumentRoot';
import { siteMetadata } from '../site-metadata';
export const metadata = siteMetadata;
export default function SpanishLayout({ children }) { return <DocumentRoot lang="es">{children}</DocumentRoot>; }
