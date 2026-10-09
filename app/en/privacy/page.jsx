import { LanguageSection, LegalSection, LegalShell } from "../../LegalShell";

export const metadata = {
  title: "Privacy",
  description: "Ordivy privacy policy in English.",
  alternates: { canonical: "/en/privacy", languages: { "es-ES": "/privacy", en: "/en/privacy" } },
  openGraph: {
    "type": "website",
    "siteName": "Ordivy",
    "locale": "en_US",
    "url": "/en/privacy",
    "title": "Privacy | Ordivy",
    "description": "Ordivy privacy policy in English.",
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
    "title": "Privacy | Ordivy",
    "description": "Ordivy privacy policy in English.",
    "images": [
      "/social/ordivy-en.png"
    ]
  },
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
          This policy explains what information Ordivy uses, where it is stored, and which external services are involved. Last updated: October 9, 2026.
        </p>
      }
    >

      <LanguageSection id="en" language="English" title="Privacy policy">
        <LegalSection title="1. Scope">
          <p>This policy applies to the Ordivy app and website. Local features do not require an account. Connecting your account lets you sync data and share inventories and Premium with your family.</p>
        </LegalSection>

        <LegalSection title="2. Information stored on your device">
          <p>
            Ordivy stores the information you enter locally: inventories, locations, product names and details, identifiers, quantities, minimums, expiry dates, items in use, Shopping list, history, preferences, and photos you choose.
          </p>
          <p>This information is stored in the app&apos;s private storage and used to provide its features. If you use sync, inventory data is also processed in the cloud; inventories you share are available to the corresponding members of your family.</p>
          <p>If you create an account, Supabase processes your email, password, unique username, internal identifier, and session to register you, confirm your email, and keep you signed in. Ordivy does not store your password in readable form. Your username may be visible to other members when you use family features.</p>
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
            <strong>Account and Supabase.</strong> Supabase provides authentication and stores the account information required for that service. You can delete your account in the app. Deletion affects your identity and personal account data; see the retention section for shared content and backup exceptions. See <a href="https://supabase.com/privacy">Supabase&apos;s privacy policy</a>.
          </p>
          <p>
            <strong>Open Food Facts.</strong> When you search for food or scan an unknown code, the search text or product code may be sent to Open Food Facts. Catalog images may load from its servers. Your complete inventory is not sent. See its <a href="https://world.openfoodfacts.org/privacy">privacy information</a>.
          </p>
          <p>
            <strong>Speech recognition.</strong> Depending on your device and settings, Apple, Google, or the device manufacturer&apos;s recognition service may process audio to convert it into text. Ordivy receives the resulting text so that you can review it.
          </p>
          <p>
            <strong>Premium and RevenueCat.</strong> On iOS, Apple processes subscription payments. RevenueCat receives your internal Ordivy account identifier, product identifiers, and purchase status to activate and restore Premium. Ordivy does not receive or store your payment card details. See <a href="https://www.revenuecat.com/privacy/">RevenueCat&apos;s privacy policy</a>.
          </p>
          <p><strong>Website and Vercel.</strong> Vercel hosts the website and processes technical data needed to serve it, such as IP addresses and requests. The download badge may request an image from Apple servers. Advertising and usage analytics are not enabled on this website. Empty browser storage does not mean that server technical logs do not exist.</p>
          <p><strong>Account emails and Resend.</strong> Supabase uses Resend to send account confirmation and recovery messages. Resend processes the recipient address, message content and technical data needed for delivery. See its <a href="https://resend.com/legal/privacy-policy">privacy policy</a> and <a href="https://resend.com/legal/dpa">data processing agreement</a>.</p>
          <p><strong>Email support.</strong> We use Gmail to receive and reply to messages sent to ordivyapp@gmail.com. Google processes messages under its <a href="https://policies.google.com/privacy?hl=en">privacy terms</a>.</p>
        </LegalSection>

        <LegalSection title="5. Purposes and user choices">
          <p>Account data, synced inventory and Premium access are used to provide the features you request, on the basis of performing the service (Article 6(1)(b) GDPR). Support requests necessary to use the service are handled on the same basis. Other enquiries are handled based on our legitimate interest in responding to people who contact Ordivy (Article 6(1)(f)).</p>
          <p>Technical logs needed to protect the website and service are used based on our legitimate interest in preventing abuse and maintaining security. Information required to comply with a legal obligation is processed on that basis (Article 6(1)(c)). You may object to processing based on legitimate interests in the circumstances provided by law.</p>
          <p>Photos, external searches, notifications and dictation are activated when you request the feature. You can withdraw device permissions. A system permission does not itself constitute consent to every type of processing. Ordivy does not use your inventory for advertising or cross-app tracking.</p>
          <p>Account information is necessary for features that require an account; you can continue using local features without registering.</p>
        </LegalSection>

        <LegalSection title="6. Retention and deletion">
          <p>Local information is retained until you delete it, erase the app data or uninstall Ordivy. Device backups may retain information according to your Apple or Google settings.</p>
          <p>Account information and personal synced inventory are retained while you maintain your account and until deletion, except information needed for legal obligations or claims. Shared family inventories may remain available to other members: deleting your account does not delete all shared content or copies on other devices.</p>
          <p>Support emails are retained while the enquiry is handled and for up to 12 months after it is closed. Where information is needed for a legal obligation or to establish, exercise or defend claims, only the necessary information is retained for the applicable period.</p>
          <p>Technical logs and operational backups have retention cycles specific to each service; deleting an account does not immediately erase all such copies. Under the current Free plan, Supabase publishes one day of retention for API and database logs. This period does not apply to inventories or all provider logs.</p>
          <p>Deleting your account does not cancel an App Store subscription. You must also manage it through your Apple account. You can request information or help deleting data at ordivyapp@gmail.com.</p>
        </LegalSection>

        <LegalSection title="7. Protection and third parties">
          <p>The Supabase project is configured in Ireland, within the European Union, for its primary database, authentication and storage. Auxiliary support, operational and content delivery services may involve other countries.</p>
          <p>Supabase, RevenueCat and Vercel describe safeguards for their services, including standard contractual clauses for certain international transfers, in their data processing agreements: <a href="https://supabase.com/legal/customer-resources/data-processing-addendum">Supabase</a>, <a href="https://www.revenuecat.com/dpa">RevenueCat</a> and <a href="https://vercel.com/legal/dpa">Vercel</a>. You can consult these documents or contact us for information about applicable safeguards.</p>
          <p>Apple, Open Food Facts, Google and speech recognition services have their own privacy terms for processing in their services. Ordivy does not claim that all processing is limited to Ireland.</p>
        </LegalSection>

        <LegalSection title="8. Sync and family">
          <p>You can connect your account to sync data and use Your family to share inventories and Premium. These features require processing the data needed for sync and sharing outside your device. Advertising and usage analytics are not active. Ordivy accounts and App Store Premium subscriptions use the services described in this policy.</p>
        </LegalSection>

        <LegalSection title="9. Questions and requests">
          <p>You can request access to, rectification or erasure of your personal data and, where applicable, restriction, objection and portability. Where processing is based on consent, you can withdraw it without affecting the lawfulness of earlier processing.</p>
          <p>Email ordivyapp@gmail.com and describe your request. Do not send passwords or payment details. If there are reasonable doubts about your identity, we may request only the additional information needed to verify it.</p>
          <p>You may lodge a complaint with the <a href="https://www.aepd.es/">Spanish Data Protection Agency</a>. Deleting an account, cancelling a subscription and removing local data are separate actions.</p>
        </LegalSection>

        <LegalSection title="10. Changes to this policy">
          <p>The policy will be updated before new services that change data processing are enabled. The current version date will appear at the top of this page.</p>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}

