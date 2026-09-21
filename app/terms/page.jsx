import { LanguageSection, LegalSection, LegalShell } from "../LegalShell";

export const metadata = {
  title: "Condiciones de uso",
  description: "Condiciones de uso de Ordivy en español.",
  alternates: { canonical: "/terms", languages: { "es-ES": "/terms", en: "/en/terms" } },
};

export default function TermsPage() {
  return (
    <LegalShell
      locale="es"
      page="terms"
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
    </LegalShell>
  );
}
