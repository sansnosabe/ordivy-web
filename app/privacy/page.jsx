import { LanguageSection, LegalSection, LegalShell } from "../LegalShell";

export const metadata = {
  title: "Privacidad",
  description: "Política de privacidad de Ordivy en español.",
  alternates: { canonical: "/privacy", languages: { "es-ES": "/privacy", en: "/en/privacy" } },
  openGraph: {
    "type": "website",
    "siteName": "Ordivy",
    "locale": "es_ES",
    "url": "/privacy",
    "title": "Privacidad | Ordivy",
    "description": "Política de privacidad de Ordivy en español.",
    "images": [
      {
        "url": "/social/ordivy-es.png",
        "width": 1200,
        "height": 630,
        "alt": "Ordivy — Tu casa, en orden"
      }
    ]
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Privacidad | Ordivy",
    "description": "Política de privacidad de Ordivy en español.",
    "images": [
      "/social/ordivy-es.png"
    ]
  },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="es"
      page="privacy"
      eyebrow="PRIVACIDAD Y DATOS"
      title="Tu inventario sigue siendo tuyo."
      intro={
        <p>
          Esta política explica qué información utiliza Ordivy, dónde se guarda y qué servicios externos intervienen. Última actualización: 7 de octubre de 2026.
        </p>
      }
    >
      <LanguageSection id="es" language="Español" title="Política de privacidad">
        <LegalSection title="1. Alcance">
          <p>
            Esta política se aplica a Ordivy, una aplicación de inventario personal. Sus funciones locales no exigen crear una cuenta. Al conectar tu cuenta puedes sincronizar tus datos y utilizar las funciones de familia para compartir inventarios y Premium.
          </p>
        </LegalSection>

        <LegalSection title="2. Información guardada en tu dispositivo">
          <p>
            Ordivy guarda localmente los datos que introduces: inventarios, ubicaciones, nombres y detalles de productos, identificadores, cantidades, mínimos, caducidades, elementos en uso, lista de Compra, historial, preferencias y fotografías elegidas por ti.
          </p>
          <p>Estos datos se guardan en el almacenamiento privado de la aplicación y se utilizan para ofrecer sus funciones. Si utilizas la sincronización, los datos de inventario también se procesan en la nube; los inventarios que compartas estarán disponibles para los miembros de tu familia correspondientes.</p>
          <p>Si creas una cuenta, Supabase procesa tu correo, contraseña, nombre de usuario único, identificador interno y sesión para registrarte, confirmar el correo y mantener la sesión. Ordivy no guarda tu contraseña en texto legible. El nombre de usuario puede ser visible para otros miembros cuando utilizas las funciones de familia.</p>
        </LegalSection>

        <LegalSection title="3. Permisos">
          <ul>
            <li>La cámara se solicita cuando decides escanear un código o hacer una fotografía.</li>
            <li>El acceso a fotografías se solicita cuando eliges una imagen de la galería.</li>
            <li>Las notificaciones se solicitan cuando activas un aviso compatible.</li>
            <li>El micrófono y el reconocimiento de voz se solicitan cuando inicias una acción de dictado.</li>
          </ul>
          <p>Puedes denegar o retirar estos permisos desde los ajustes del sistema. Las funciones que no los necesitan seguirán disponibles.</p>
        </LegalSection>

        <LegalSection title="4. Servicios externos">
          <p>
            <strong>Cuenta y Supabase.</strong> Supabase presta el servicio de autenticación y conserva los datos de cuenta necesarios. Puedes eliminar la cuenta desde la aplicación. Esta acción borra la identidad y sus datos cloud, pero no elimina automáticamente el inventario almacenado localmente en el dispositivo. Consulta la <a href="https://supabase.com/privacy">política de privacidad de Supabase</a>.
          </p>
          <p>
            <strong>Open Food Facts.</strong> Al buscar un alimento o escanear un código desconocido, se puede enviar el texto de búsqueda o el código a Open Food Facts. Las imágenes de su catálogo pueden cargarse desde sus servidores. No se envía tu inventario completo. Consulta su <a href="https://world.openfoodfacts.org/privacy">información de privacidad</a>.
          </p>
          <p>
            <strong>Reconocimiento de voz.</strong> Según el dispositivo y sus ajustes, Apple, Google o el servicio de reconocimiento del fabricante puede procesar el audio para convertirlo en texto. Ordivy recibe el texto resultante para que puedas revisarlo.
          </p>
          <p>
            <strong>Premium y RevenueCat.</strong> En iOS, Apple procesa el pago de las suscripciones. RevenueCat recibe el identificador interno de tu cuenta Ordivy, los identificadores de los productos y el estado de las compras para activar Premium y restaurarlo. Ordivy no recibe ni guarda los datos de tu tarjeta. Consulta la <a href="https://www.revenuecat.com/privacy/">política de privacidad de RevenueCat</a>.
          </p>
        </LegalSection>

        <LegalSection title="5. Finalidades y decisiones del usuario">
          <p>
            Los datos locales se utilizan para organizar y mostrar tu inventario. Las consultas externas, el dictado, las fotografías y las notificaciones se ejecutan cuando solicitas la función correspondiente. Ordivy no utiliza estos datos para publicidad, seguimiento entre aplicaciones ni elaboración de perfiles.
          </p>
        </LegalSection>

        <LegalSection title="6. Conservación y eliminación">
          <p>
            Los datos locales se conservan hasta que los modificas o eliminas, borras los datos de la aplicación o desinstalas Ordivy. Las copias del dispositivo administradas por Apple o Google pueden conservar información según tus propios ajustes de copia de seguridad.
          </p>
          <p>
            Supabase, RevenueCat, Open Food Facts y los servicios del sistema que utilices conservan los datos que procesan conforme a sus políticas y obligaciones legales. Puedes retirar permisos desde los ajustes del dispositivo y eliminar tu cuenta desde Ordivy. Eliminar tu cuenta no cancela una suscripción de App Store; debes cancelarla también desde tu cuenta de Apple.
          </p>
        </LegalSection>

        <LegalSection title="7. Protección y terceros">
          <p>
            Ordivy reduce los datos enviados fuera del dispositivo a lo necesario para la función solicitada. Los proveedores externos identificados deben aplicar una protección equivalente a la descrita en esta política y pueden procesar información en otros países conforme a sus propias garantías legales.
          </p>
        </LegalSection>

        <LegalSection title="8. Sincronización y familia">
          <p>Puedes conectar tu cuenta para sincronizar datos y utilizar Tu familia para compartir inventarios y Premium. Estas funciones requieren procesar fuera del dispositivo los datos necesarios para sincronizar y compartir. La publicidad y la analítica de uso no están activas. Las cuentas Ordivy y las suscripciones Premium de App Store utilizan los servicios descritos en esta política.</p>
        </LegalSection>

        <LegalSection title="9. Consultas y solicitudes">
          <p>
            Puedes escribir para consultar qué información interviene en una función, solicitar ayuda con su eliminación o ejercer los derechos que reconozca la normativa aplicable. Puedes eliminar tu cuenta desde la aplicación y los datos locales directamente desde la aplicación o el dispositivo.
          </p>
          <a className="legal-contact" href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>
        </LegalSection>

        <LegalSection title="10. Cambios en esta política">
          <p>La política se actualizará antes de activar servicios nuevos que cambien el tratamiento de datos. La fecha de la versión vigente aparecerá al comienzo de esta página.</p>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}

