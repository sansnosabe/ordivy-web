import Link from "next/link";
import { LanguageSection, LegalSection, LegalShell } from "../LegalShell";

export const metadata = {
  title: "Soporte",
  description: "Ayuda y contacto de soporte para Ordivy.",
  alternates: { canonical: "/support", languages: { "es-ES": "/support", en: "/en/support" } },
};

export default function SupportPage() {
  return (
    <LegalShell
      locale="es"
      page="support"
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
          <p>Atendemos consultas sobre funcionamiento, acceso Premium, privacidad y problemas técnicos.</p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com?subject=Soporte%20Ordivy">Enviar un correo</a>
        </LegalSection>

        <LegalSection title="Datos e inventarios">
          <p>La primera versión guarda tus inventarios localmente. Si cambias de dispositivo o desinstalas Ordivy, los datos pueden perderse cuando no exista una copia administrada por el sistema.</p>
        </LegalSection>

        <LegalSection title="Cámara, fotos y voz">
          <p>Puedes revisar o cambiar los permisos desde los ajustes del dispositivo. Si deniegas uno, las demás funciones de Ordivy siguen disponibles.</p>
        </LegalSection>

        <LegalSection title="Premium de lanzamiento">
          <p>En la primera versión, Premium se activa mediante códigos de invitación de Ordivy. Las compras y suscripciones dentro de la app todavía no están disponibles. Si tu código no funciona, escríbenos indicando tu nombre de usuario; no envíes contraseñas.</p>
        </LegalSection>

        <LegalSection title="Privacidad y condiciones">
          <p>Consulta la <Link href="/privacy">política de privacidad</Link> y las <Link href="/terms">condiciones de uso</Link> vigentes.</p>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}
