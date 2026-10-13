import DocumentRoot from './DocumentRoot';
import NotFoundPage from './NotFoundPage';
export const metadata = { robots: { index: false, follow: true } };
export default function GlobalNotFound() { return <DocumentRoot lang="es"><NotFoundPage /></DocumentRoot>; }
