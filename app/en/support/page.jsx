import Link from "next/link";
import { LanguageSection, LegalSection, LegalShell } from "../../LegalShell";

export const metadata = {
  title: "Support",
  description: "Help and support contact information for Ordivy.",
  alternates: { canonical: "/en/support", languages: { "es-ES": "/support", en: "/en/support" } },
};

export default function SupportPage() {
  return (
    <LegalShell locale="en" page="support" eyebrow="SUPPORT" title="We are here to help."
      intro={<p>Email us at <a href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>. To help us investigate an issue, include your device model, system version, and the steps that trigger it. Do not send passwords or payment information.</p>}>
      <LanguageSection id="en" language="English" title="Help with Ordivy">
        <LegalSection title="Contact">
          <p>We answer questions about features, Premium access, privacy, and technical problems.</p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com?subject=Ordivy%20support">Send an email</a>
        </LegalSection>
        <LegalSection title="Information and inventories">
          <p>The first version stores inventories locally. If you change devices or uninstall Ordivy, information may be lost when no system-managed backup exists.</p>
        </LegalSection>
        <LegalSection title="Camera, photos, and voice">
          <p>You can review or change permissions in your device settings. If you deny one, the other Ordivy features remain available.</p>
        </LegalSection>
        <LegalSection title="Premium subscriptions on iOS">
          <p>Premium on iOS requires an Ordivy account with a verified email and a monthly or annual App Store subscription. You can restore purchases from the Premium screen and manage or cancel your subscription through your Apple account. Ordivy invitation codes do not activate Premium on iOS. For help, provide your username; do not send passwords or payment information.</p>
        </LegalSection>
        <LegalSection title="Privacy and terms">
          <p>Read the current <Link href="/en/privacy">privacy policy</Link> and <Link href="/en/terms">terms of use</Link>.</p>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}
