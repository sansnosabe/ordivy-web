import { softwareApplication } from './home-seo';

export default function SoftwareApplication({ lang }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(softwareApplication(lang)).replace(/</g, '\\u003c'),
  }} />;
}
