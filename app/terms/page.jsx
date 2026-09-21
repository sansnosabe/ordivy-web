import { LanguageSection, LegalSection, LegalShell } from "../LegalShell";

export const metadata = {
  title: "Condiciones de uso",
  description: "Condiciones de uso de Ordivy en español e inglés.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="CONDICIONES DE USO"
      title="Reglas claras para usar Ordivy."
      intro={<p>Estas condiciones se aplican a Ordivy 1.0.0. Última actualización: 21 de septiembre de 2026.</p>}
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
          <p>En la primera versión, Premium se concede mediante códigos de invitación administrados por Ordivy. El código debe canjearse desde una cuenta de Ordivy y no supone un cobro ni activa una renovación automática.</p>
        </LegalSection>

        <LegalSection title="6. Compras futuras">
          <p>Las compras y suscripciones dentro de la aplicación todavía no están disponibles. Si se activan más adelante, Ordivy mostrará el precio, la duración, la renovación y cualquier prueba antes de pedirte que confirmes el pago, y actualizará estas condiciones cuando corresponda.</p>
        </LegalSection>

        <LegalSection title="7. Cuando termina Premium">
          <p>El acceso concedido por invitación se mantiene según las condiciones indicadas al canjear el código. Si deja de estar disponible, Ordivy no elimina tus inventarios, ubicaciones ni productos; se aplican los límites de la versión gratuita.</p>
        </LegalSection>

        <LegalSection title="8. Disponibilidad">
          <p>Trabajamos para mantener Ordivy disponible, pero algunas funciones dependen del dispositivo, la conexión, Open Food Facts o los servicios de Apple. Podemos corregir, modificar o retirar funciones cuando sea necesario para mantener la seguridad, compatibilidad o cumplimiento legal.</p>
        </LegalSection>

        <LegalSection title="9. Responsabilidad">
          <p>Ordivy es una herramienta de organización. Dentro de los límites permitidos por la ley, no garantiza que la información introducida u obtenida de terceros sea completa ni que las alertas eviten pérdidas, caducidades o compras innecesarias. Nada en estas condiciones limita los derechos que la normativa de consumo te reconozca obligatoriamente.</p>
        </LegalSection>

        <LegalSection title="10. Tiendas y cambios">
          <p>También se aplican las condiciones de App Store y el <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">contrato de licencia estándar de Apple</a>. Podemos actualizar estas condiciones para reflejar cambios en Ordivy o en la normativa; la fecha vigente aparecerá en esta página.</p>
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
