import { LanguageSection, LegalSection, LegalShell } from "../../LegalShell";

export const metadata = {
  title: "Terms of use",
  description: "Ordivy terms of use in English.",
  alternates: { canonical: "/en/terms", languages: { "es-ES": "/terms", en: "/en/terms" } },
  openGraph: {
    "type": "website",
    "siteName": "Ordivy",
    "locale": "en_US",
    "url": "/en/terms",
    "title": "Terms of use | Ordivy",
    "description": "Ordivy terms of use in English.",
    "images": [
      {
        "url": "/social/ordivy-en.png",
        "width": 1200,
        "height": 630,
        "alt": "Ordivy — Your home, in order"
      }
    ]
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Terms of use | Ordivy",
    "description": "Ordivy terms of use in English.",
    "images": [
      "/social/ordivy-en.png"
    ]
  },
};

export default function TermsPage() {
  return (
    <LegalShell
      locale="en"
      page="terms"
      eyebrow="TERMS OF USE"
      title="Clear rules for using Ordivy."
      intro={<p>These terms apply to Ordivy. Last updated: October 9, 2026.</p>}
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
          <p>You are responsible for reviewing the information you enter and keeping access to your device secure. Ordivy stores inventory on your device and lets you sync data when you connect your account. Check sync status and your backups before uninstalling the app or changing devices. Data that is neither synced nor backed up may be lost.</p>
          <p>Inventories shared with your family are accessible to its members. Deleting your account does not delete the shared inventory while other members remain. Do not share third-party personal data without a valid basis.</p>
        </LegalSection>

        <LegalSection title="4. Third-party information">
          <p>Names, images, categories, and other information obtained from Open Food Facts may be incomplete, outdated, or incorrect. You should review it before saving and must not use Ordivy as a substitute for medical, health, or safety guidance.</p>
        </LegalSection>

        <LegalSection title="5. Ordivy Premium">
          <p>On iOS, Premium requires an Ordivy account with a verified email and a monthly or annual subscription purchased through the App Store. Ordivy invitation codes do not activate Premium on iOS. The purchase screen shows the features, price, duration, and any trial before you confirm payment.</p>
          <p>Premium may also be available through family features while a member maintains valid Premium access. This does not automatically create or cancel an individual subscription.</p>
        </LegalSection>

        <LegalSection title="6. Renewal, cancellation, and restoration">
          <p>Subscriptions renew automatically unless cancelled. You can manage or cancel them through your Apple account; cancellation keeps access active until the end of the paid period. Apple processes payments and refunds under its terms. You can restore purchases in Ordivy using the corresponding Ordivy and store accounts. Deleting your Ordivy account does not cancel your subscription.</p>
        </LegalSection>

        <LegalSection title="7. When Premium ends">
          <p>Premium remains available while your subscription is active. If it ends, Ordivy does not delete your inventories, locations, or products; free version limits apply.</p>
        </LegalSection>

        <LegalSection title="8. Availability">
          <p>We work to keep Ordivy available, but some features depend on the device, connection, Open Food Facts, or Apple services. We may correct, modify, or withdraw features when needed to maintain security, compatibility, or legal compliance.</p>
          <p>Authentication, sync and family features also depend on Supabase; Premium access management uses RevenueCat. Unavailability of these services may affect those features.</p>
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


