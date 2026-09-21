import { LanguageSection, LegalSection, LegalShell } from "../../LegalShell";

export const metadata = {
  title: "Privacy",
  description: "Ordivy privacy policy in English.",
  alternates: { canonical: "/en/privacy", languages: { "es-ES": "/privacy", en: "/en/privacy" } },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="en"
      page="privacy"
      eyebrow="PRIVACY AND DATA"
      title="Your inventory remains yours."
      intro={
        <p>
          This policy explains what information Ordivy uses, where it is stored, and which external services are involved. Last updated: September 21, 2026.
        </p>
      }
    >

      <LanguageSection id="en" language="English" title="Privacy policy">
        <LegalSection title="1. Scope">
          <p>
            This policy applies to the first public version of Ordivy, a personal inventory app that works mainly on the device. Its local features do not require an account, and inventory is not currently synced with Ordivy servers.
          </p>
        </LegalSection>

        <LegalSection title="2. Information stored on your device">
          <p>
            Ordivy stores the information you enter locally: inventories, locations, product names and details, identifiers, quantities, minimums, expiry dates, items in use, Shopping list, history, preferences, and photos you choose.
          </p>
          <p>This information remains in the app&apos;s private storage and is used only to provide its features.</p>
          <p>If you create an account, Supabase processes your email, password, unique username, internal identifier, and session to register you, confirm your email, and keep you signed in. Ordivy does not store your password in readable form. Your username may be visible when social or collaboration features become available.</p>
        </LegalSection>

        <LegalSection title="3. Permissions">
          <ul>
            <li>Camera access is requested when you choose to scan a code or take a photo.</li>
            <li>Photo access is requested when you choose an image from your library.</li>
            <li>Notification permission is requested when you enable a compatible alert.</li>
            <li>Microphone and speech recognition are requested when you start dictation.</li>
          </ul>
          <p>You can deny or withdraw these permissions in system settings. Features that do not need them will remain available.</p>
        </LegalSection>

        <LegalSection title="4. External services">
          <p>
            <strong>Account and Supabase.</strong> Supabase provides authentication and stores the account information required for that service. You can delete your account in the app. This deletes your identity and cloud account data but does not automatically remove inventory stored locally on your device. See <a href="https://supabase.com/privacy">Supabase&apos;s privacy policy</a>.
          </p>
          <p>
            <strong>Open Food Facts.</strong> When you search for food or scan an unknown code, the search text or product code may be sent to Open Food Facts. Catalog images may load from its servers. Your complete inventory is not sent. See its <a href="https://world.openfoodfacts.org/privacy">privacy information</a>.
          </p>
          <p>
            <strong>Speech recognition.</strong> Depending on your device and settings, Apple, Google, or the device manufacturer&apos;s recognition service may process audio to convert it into text. Ordivy receives the resulting text so that you can review it.
          </p>
          <p>
            <strong>Premium and future purchases.</strong> The initial version does not offer in-app purchases or subscriptions. Launch Premium is granted through invitations managed by Ordivy. Although the app includes technical preparation for future purchases, no payments are processed while this feature remains disabled.
          </p>
        </LegalSection>

        <LegalSection title="5. Purposes and user choices">
          <p>
            Local information is used to organize and display your inventory. External searches, dictation, photos, and notifications run when you request the corresponding feature. Ordivy does not use this information for advertising, cross-app tracking, or profiling.
          </p>
        </LegalSection>

        <LegalSection title="6. Retention and deletion">
          <p>
            Local information is retained until you modify or delete it, erase the app&apos;s data, or uninstall Ordivy. Device backups managed by Apple or Google may retain information according to your own backup settings.
          </p>
          <p>
            Supabase, Open Food Facts, and the system services you use retain the information they process according to their policies and legal obligations. You can withdraw permissions in device settings and delete your account from Ordivy.
          </p>
        </LegalSection>

        <LegalSection title="7. Protection and third parties">
          <p>
            Ordivy limits information sent outside the device to what is needed for the feature you request. The identified external providers must offer protection equivalent to that described in this policy and may process information in other countries under their own legal safeguards.
          </p>
        </LegalSection>

        <LegalSection title="8. Services that are not active">
          <p>Ordivy accounts are active. Cloud inventory sync, collaboration, purchases and subscriptions, advertising, and usage analytics are not active.</p>
        </LegalSection>

        <LegalSection title="9. Questions and requests">
          <p>
            You may contact us to ask what information a feature uses, request help deleting it, or exercise rights available under applicable law. You can delete your account in the app and remove local information directly in the app or on the device.
          </p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>
        </LegalSection>

        <LegalSection title="10. Changes to this policy">
          <p>The policy will be updated before new services that change data processing are enabled. The current version date will appear at the top of this page.</p>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}
