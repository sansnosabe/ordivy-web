import OrdivyLanding from '../OrdivyLanding';
import SoftwareApplication from '../SoftwareApplication';
import { homeMetadata } from '../home-seo';
export const metadata = homeMetadata('es');
export default function HomePage() { return <><SoftwareApplication lang="es" /><OrdivyLanding /></>; }
