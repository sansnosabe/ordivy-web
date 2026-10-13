import DocumentRoot from '../DocumentRoot';
import { siteMetadata } from '../site-metadata';
export const metadata = siteMetadata;
export default function EnglishLayout({ children }) { return <DocumentRoot lang="en">{children}</DocumentRoot>; }
