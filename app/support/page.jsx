import Link from "next/link";
import { LanguageSection, LegalSection, LegalShell } from "../LegalShell";

export const metadata = {
  title: "Soporte — Ordivy",
  description: "Ayuda y contacto de soporte para Ordivy.",
};

export default function SupportPage() {
  return (
    <LegalShell
      eyebrow="SOPORTE"
      title="Estamos para ayudarte."
      intro={
        <p>
          Escríbenos a <a href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>. Para investigar una incidencia, incluye el modelo del dispositivo, la versión del sistema y los pasos que la provocan. No envíes contraseñas ni datos de pago.
        </p>
      }
    >
      <LanguageSection id="es" language="Español" title="Ayuda con Ordivy">
        <LegalSection title="Contacto">
          <p>Atendemos consultas sobre funcionamiento, compras, privacidad y problemas técnicos.</p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com?subject=Soporte%20Ordivy">Enviar un correo</a>
        </LegalSection>

        <LegalSection title="Datos e inventarios">
          <p>La primera versión guarda tus inventarios localmente. Si cambias de dispositivo o desinstalas Ordivy, los datos pueden perderse cuando no exista una copia administrada por el sistema.</p>
        </LegalSection>

        <LegalSection title="Cámara, fotos y voz">
          <p>Puedes revisar o cambiar los permisos desde los ajustes del dispositivo. Si deniegas uno, las demás funciones de Ordivy siguen disponibles.</p>
        </LegalSection>

        <LegalSection title="Compras Premium">
          <p>Usa “Restaurar compras” dentro de Ordivy si una suscripción activa no aparece. Debes utilizar la misma cuenta de App Store o Google Play con la que realizaste la compra. Los reembolsos y cobros los gestiona la tienda.</p>
        </LegalSection>

        <LegalSection title="Privacidad y condiciones">
          <p>Consulta la <Link href="/privacy">política de privacidad</Link> y las <Link href="/terms">condiciones de uso</Link> vigentes.</p>
        </LegalSection>
      </LanguageSection>

      <LanguageSection id="en" language="English" title="Help with Ordivy">
        <LegalSection title="Contact">
          <p>We answer questions about features, purchases, privacy, and technical problems.</p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com?subject=Ordivy%20support">Send an email</a>
        </LegalSection>

        <LegalSection title="Information and inventories">
          <p>The first version stores inventories locally. If you change devices or uninstall Ordivy, information may be lost when no system-managed backup exists.</p>
        </LegalSection>

        <LegalSection title="Camera, photos, and voice">
          <p>You can review or change permissions in your device settings. If you deny one, the other Ordivy features remain available.</p>
        </LegalSection>

        <LegalSection title="Premium purchases">
          <p>Use “Restore purchases” in Ordivy if an active subscription does not appear. You must use the same App Store or Google Play account used for the purchase. The store manages charges and refunds.</p>
        </LegalSection>

        <LegalSection title="Privacy and terms">
          <p>Read the current <Link href="/privacy">privacy policy</Link> and <Link href="/terms">terms of use</Link>.</p>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}
