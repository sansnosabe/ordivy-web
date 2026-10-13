import OrdivyLandingEn from '../OrdivyLandingEn';
import SoftwareApplication from '../SoftwareApplication';
import { homeMetadata } from '../home-seo';
export const metadata = homeMetadata('en');
export default function EnglishHomePage() { return <><SoftwareApplication lang="en" /><OrdivyLandingEn /></>; }
