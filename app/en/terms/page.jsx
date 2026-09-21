import { LanguageSection, LegalSection, LegalShell } from "../../LegalShell";

export const metadata = {
  title: "Terms of use",
  description: "Ordivy terms of use in English.",
  alternates: { canonical: "/en/terms", languages: { "es-ES": "/terms", en: "/en/terms" } },
};

export default function TermsPage() {
  return (
    <LegalShell
      locale="en"
      page="terms"
      eyebrow="TERMS OF USE"
      title="Clear rules for using Ordivy."
      intro={<p>These terms apply to Ordivy 1.0.0. Last updated: September 21, 2026.</p>}
    >

      <LanguageSection id="en" language="English" title="Terms of use">
        <LegalSection title="1. The service">
          <p>Ordivy is a tool for organizing personal and household inventories, tracking quantities and expiry dates, and preparing Shopping lists. You can use it without creating an account.</p>
        </LegalSection>

        <LegalSection title="2. License and permitted use">
          <p>You receive a personal, limited, non-exclusive, non-transferable license to use Ordivy under these terms and the rules of the store from which you downloaded it.</p>
          <p>You may not manipulate the app to bypass access limits, interfere with its operation, distribute unauthorized copies, or use it for unlawful purposes.</p>
        </LegalSection>

        <LegalSection title="3. Your information and backups">
          <p>You are responsible for reviewing the information you enter and keeping access to your device secure. The initial version stores inventory locally and does not provide a backup on Ordivy servers. Uninstalling the app or losing the device may remove information when no system-managed backup exists.</p>
        </LegalSection>

        <LegalSection title="4. Third-party information">
          <p>Names, images, categories, and other information obtained from Open Food Facts may be incomplete, outdated, or incorrect. You should review it before saving and must not use Ordivy as a substitute for medical, health, or safety guidance.</p>
        </LegalSection>

        <LegalSection title="5. Ordivy Premium">
          <p>In the first version, Premium is granted with invitation codes managed by Ordivy. A code must be redeemed from an Ordivy account and does not create a charge or enable automatic renewal.</p>
        </LegalSection>

        <LegalSection title="6. Future purchases">
          <p>In-app purchases and subscriptions are not available yet. If they become available later, Ordivy will show the price, duration, renewal terms, and any trial before asking you to confirm payment, and will update these terms where appropriate.</p>
        </LegalSection>

        <LegalSection title="7. When Premium ends">
          <p>Access granted by invitation remains available under the conditions shown when the code is redeemed. If it becomes unavailable, Ordivy does not delete your inventories, locations, or products; free version limits apply.</p>
        </LegalSection>

        <LegalSection title="8. Availability">
          <p>We work to keep Ordivy available, but some features depend on the device, connection, Open Food Facts, or Apple services. We may correct, modify, or withdraw features when needed to maintain security, compatibility, or legal compliance.</p>
        </LegalSection>

        <LegalSection title="9. Liability">
          <p>Ordivy is an organization tool. To the extent permitted by law, it does not guarantee that information entered or obtained from third parties is complete or that alerts will prevent losses, expiry, or unnecessary purchases. Nothing in these terms limits mandatory consumer rights available to you.</p>
        </LegalSection>

        <LegalSection title="10. Store terms and changes">
          <p>App Store terms and <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple&apos;s Standard Licensed Application End User License Agreement</a> also apply. We may update these terms to reflect changes to Ordivy or applicable law; the current date will appear on this page.</p>
        </LegalSection>

        <LegalSection title="11. Contact">
          <p>For questions about Ordivy or these terms:</p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}
