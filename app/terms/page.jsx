import { LanguageSection, LegalSection, LegalShell } from "../LegalShell";

export const metadata = {
  title: "Condiciones de uso — Ordivy",
  description: "Condiciones de uso de Ordivy en español e inglés.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="CONDICIONES DE USO"
      title="Reglas claras para usar Ordivy."
      intro={<p>Estas condiciones se aplican a Ordivy 1.0.0. Última actualización: 14 de septiembre de 2026.</p>}
    >
      <LanguageSection id="es" language="Español" title="Condiciones de uso">
        <LegalSection title="1. El servicio">
          <p>Ordivy es una herramienta para organizar inventarios personales y domésticos, controlar cantidades y caducidades y preparar listas de Compra. Puedes usarla sin crear una cuenta.</p>
        </LegalSection>

        <LegalSection title="2. Licencia y uso permitido">
          <p>Se te concede una licencia personal, limitada, no exclusiva y no transferible para utilizar Ordivy conforme a estas condiciones y a las reglas de la tienda desde la que la descargaste.</p>
          <p>No puedes manipular la aplicación para eludir límites de acceso, interferir con su funcionamiento, distribuir copias no autorizadas ni utilizarla con fines ilícitos.</p>
        </LegalSection>

        <LegalSection title="3. Tus datos y copias de seguridad">
          <p>Debes revisar la información que introduces y mantener seguro el acceso a tu dispositivo. La versión inicial guarda el inventario localmente y no ofrece una copia en servidores de Ordivy. Desinstalar la aplicación o perder el dispositivo puede eliminar los datos si no existe una copia administrada por el sistema.</p>
        </LegalSection>

        <LegalSection title="4. Información de terceros">
          <p>Los nombres, imágenes, categorías y otros datos obtenidos de Open Food Facts pueden estar incompletos, desactualizados o ser incorrectos. Debes revisar esa información antes de guardarla y no utilizar Ordivy como sustituto de indicaciones médicas, sanitarias o de seguridad.</p>
        </LegalSection>

        <LegalSection title="5. Ordivy Premium">
          <p>Premium desbloquea las funciones indicadas en la pantalla de compra mientras la suscripción permanezca activa. El precio, la moneda, el periodo, los impuestos y cualquier oferta son los que muestra App Store o Google Play antes de confirmar.</p>
          <p>Los planes mensual y anual pueden ofrecer 7 días gratis a nuevos suscriptores que cumplan los requisitos de la tienda. La pantalla de pago del sistema confirma si la prueba se aplica a tu cuenta.</p>
        </LegalSection>

        <LegalSection title="6. Renovación, cancelación y restauración">
          <p>Las suscripciones se renuevan automáticamente salvo cancelación. Puedes administrarlas o cancelarlas desde tu cuenta de App Store o Google Play. La cancelación mantiene Premium hasta el final del periodo ya pagado o de prueba aplicable.</p>
          <p>Apple o Google gestiona cobros, impuestos, reembolsos y disputas de pago. Ordivy permite restaurar compras realizadas con la misma cuenta de la tienda.</p>
        </LegalSection>

        <LegalSection title="7. Cuando termina Premium">
          <p>Ordivy no elimina tus inventarios, ubicaciones ni productos al terminar Premium. Se aplican los límites del plan Gratis y eliges qué inventario y ubicaciones continúan accesibles hasta recuperar Premium.</p>
        </LegalSection>

        <LegalSection title="8. Disponibilidad">
          <p>Trabajamos para mantener Ordivy disponible, pero algunas funciones dependen del dispositivo, la conexión, Open Food Facts, RevenueCat o los servicios de Apple y Google. Podemos corregir, modificar o retirar funciones cuando sea necesario para mantener la seguridad, compatibilidad o cumplimiento legal.</p>
        </LegalSection>

        <LegalSection title="9. Responsabilidad">
          <p>Ordivy es una herramienta de organización. Dentro de los límites permitidos por la ley, no garantiza que la información introducida u obtenida de terceros sea completa ni que las alertas eviten pérdidas, caducidades o compras innecesarias. Nada en estas condiciones limita los derechos que la normativa de consumo te reconozca obligatoriamente.</p>
        </LegalSection>

        <LegalSection title="10. Tiendas y cambios">
          <p>Cuando corresponda, también se aplican las condiciones de App Store o Google Play y, en dispositivos Apple, el <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">contrato de licencia estándar de Apple</a>. Podemos actualizar estas condiciones para reflejar cambios en Ordivy o en la normativa; la fecha vigente aparecerá en esta página.</p>
        </LegalSection>

        <LegalSection title="11. Contacto">
          <p>Para consultas sobre Ordivy o estas condiciones:</p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>
        </LegalSection>
      </LanguageSection>

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
          <p>Premium unlocks the features shown on the purchase screen while the subscription remains active. The price, currency, period, taxes, and any offer are those displayed by App Store or Google Play before confirmation.</p>
          <p>Monthly and annual plans may offer 7 free days to eligible new subscribers. The system payment sheet confirms whether the trial applies to your account.</p>
        </LegalSection>

        <LegalSection title="6. Renewal, cancellation, and restoration">
          <p>Subscriptions renew automatically unless cancelled. You can manage or cancel them through your App Store or Google Play account. Cancellation keeps Premium available until the end of the applicable paid or trial period.</p>
          <p>Apple or Google manages charges, taxes, refunds, and payment disputes. Ordivy lets you restore purchases made with the same store account.</p>
        </LegalSection>

        <LegalSection title="7. When Premium ends">
          <p>Ordivy does not delete your inventories, locations, or products when Premium ends. Free plan limits apply, and you choose which inventory and locations remain accessible until Premium returns.</p>
        </LegalSection>

        <LegalSection title="8. Availability">
          <p>We work to keep Ordivy available, but some features depend on the device, connection, Open Food Facts, RevenueCat, or Apple and Google services. We may correct, modify, or withdraw features when needed to maintain security, compatibility, or legal compliance.</p>
        </LegalSection>

        <LegalSection title="9. Liability">
          <p>Ordivy is an organization tool. To the extent permitted by law, it does not guarantee that information entered or obtained from third parties is complete or that alerts will prevent losses, expiry, or unnecessary purchases. Nothing in these terms limits mandatory consumer rights available to you.</p>
        </LegalSection>

        <LegalSection title="10. Store terms and changes">
          <p>Where applicable, App Store or Google Play terms also apply and, on Apple devices, so does <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple&apos;s Standard Licensed Application End User License Agreement</a>. We may update these terms to reflect changes to Ordivy or applicable law; the current date will appear on this page.</p>
        </LegalSection>

        <LegalSection title="11. Contact">
          <p>For questions about Ordivy or these terms:</p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}
