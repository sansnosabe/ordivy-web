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
          Esta política explica qué información utiliza Ordivy, dónde se guarda y qué servicios externos intervienen. Última actualización: 9 de octubre de 2026.
        </p>
      }
    >
      <LanguageSection id="es" language="Español" title="Política de privacidad">
        <LegalSection title="1. Alcance">
          <p>Esta política se aplica a la aplicación Ordivy y a su web. Las funciones locales no exigen crear una cuenta. Al conectar tu cuenta puedes sincronizar datos y compartir inventarios y Premium con tu familia.</p>
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
            <strong>Cuenta y Supabase.</strong> Supabase presta el servicio de autenticación y conserva los datos de cuenta necesarios. Puedes eliminar la cuenta desde la aplicación. La eliminación afecta a tu identidad y a los datos personales de tu cuenta; consulta el apartado de conservación para las excepciones de contenido compartido y copias. Consulta la <a href="https://supabase.com/privacy">política de privacidad de Supabase</a>.
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
          <p><strong>Web y Vercel.</strong> Vercel aloja la web y procesa los datos técnicos necesarios para servirla, como dirección IP y solicitudes. El distintivo de descarga puede solicitar una imagen a servidores de Apple. No hay publicidad ni analítica de uso activadas en esta web. El almacenamiento vacío en el navegador no significa que no existan registros técnicos del servidor.</p>
          <p><strong>Correos de cuenta y Resend.</strong> Supabase utiliza Resend para enviar los mensajes de confirmación y recuperación de cuenta. Resend procesa la dirección del destinatario, el contenido del mensaje y los datos técnicos necesarios para su entrega. Consulta su <a href="https://resend.com/legal/privacy-policy">política de privacidad</a> y su <a href="https://resend.com/legal/dpa">acuerdo de tratamiento</a>.</p>
          <p><strong>Soporte por correo.</strong> Utilizamos Gmail para recibir y responder a los mensajes enviados a ordivyapp@gmail.com. Google procesa los mensajes conforme a sus <a href="https://policies.google.com/privacy?hl=es">condiciones de privacidad</a>.</p>
        </LegalSection>

        <LegalSection title="5. Finalidades y decisiones del usuario">
          <p>Los datos de cuenta, inventario sincronizado y acceso Premium se utilizan para prestar las funciones que solicitas, sobre la base de la ejecución del servicio (artículo 6.1.b del RGPD). Las consultas de soporte necesarias para utilizar el servicio se atienden sobre esa misma base. Las demás consultas se atienden por el interés legítimo en responder a quien contacta con Ordivy (artículo 6.1.f).</p>
          <p>Los registros técnicos necesarios para proteger la web y el servicio se utilizan por el interés legítimo en prevenir abusos y mantener su seguridad. Los datos que deban conservarse para cumplir una obligación legal se tratan sobre esa obligación (artículo 6.1.c). Puedes oponerte a tratamientos basados en interés legítimo en los supuestos previstos por la normativa.</p>
          <p>Las fotografías, consultas externas, notificaciones y dictado se activan cuando solicitas la función correspondiente y puedes retirar los permisos desde el dispositivo. Un permiso del sistema no equivale por sí solo a un consentimiento para cualquier tratamiento. Ordivy no utiliza tu inventario para publicidad ni seguimiento entre aplicaciones.</p>
          <p>Facilitar los datos de cuenta es necesario para usar las funciones que requieren cuenta; puedes seguir utilizando las funciones locales sin registrarte.</p>
        </LegalSection>

        <LegalSection title="6. Conservación y eliminación">
          <p>Los datos locales se conservan hasta que los eliminas, borras los datos de la aplicación o desinstalas Ordivy. Las copias del dispositivo pueden conservar información según tus ajustes de Apple o Google.</p>
          <p>Los datos de cuenta y el inventario personal sincronizado se conservan mientras mantienes la cuenta y hasta su eliminación, salvo la información que deba mantenerse por obligaciones legales o reclamaciones. Los inventarios familiares compartidos pueden seguir disponibles para los demás miembros: eliminar tu cuenta no elimina todo el contenido compartido ni las copias de otros dispositivos.</p>
          <p>Los correos de soporte se conservan mientras se atiende la consulta y durante un máximo de 12 meses desde su cierre. Cuando sea necesario cumplir una obligación legal o formular, ejercer o defender reclamaciones, se conserva únicamente la información necesaria durante el plazo correspondiente.</p>
          <p>Los registros técnicos y las copias operativas tienen ciclos de conservación propios de cada servicio; borrar una cuenta no implica borrar inmediatamente todas esas copias. En el plan gratuito actual, Supabase publica un día de conservación para registros de API y base de datos; ese plazo no se aplica a los inventarios ni a todos los registros de los proveedores.</p>
          <p>Eliminar la cuenta no cancela una suscripción de App Store. Debes gestionarla también desde tu cuenta de Apple. Puedes solicitar información o ayuda para eliminar datos escribiendo a ordivyapp@gmail.com.</p>
        </LegalSection>

        <LegalSection title="7. Protección y terceros">
          <p>El proyecto de Supabase está configurado en Irlanda, dentro de la Unión Europea, para su base de datos principal, autenticación y almacenamiento. Los servicios auxiliares de soporte, operación y distribución de contenido pueden intervenir desde otros países.</p>
          <p>Supabase, RevenueCat y Vercel describen las garantías aplicables a sus servicios, incluidas cláusulas contractuales tipo para determinadas transferencias internacionales, en sus acuerdos de tratamiento: <a href="https://supabase.com/legal/customer-resources/data-processing-addendum">Supabase</a>, <a href="https://www.revenuecat.com/dpa">RevenueCat</a> y <a href="https://vercel.com/legal/dpa">Vercel</a>. Puedes consultar esos documentos o escribirnos para pedir información sobre las garantías aplicables.</p>
          <p>Apple, Open Food Facts, Google y los servicios de reconocimiento de voz tienen sus propias condiciones de privacidad para los tratamientos que realizan en sus servicios. Ordivy no afirma que todos los tratamientos se limiten a Irlanda.</p>
        </LegalSection>

        <LegalSection title="8. Sincronización y familia">
          <p>Puedes conectar tu cuenta para sincronizar datos y utilizar Tu familia para compartir inventarios y Premium. Estas funciones requieren procesar fuera del dispositivo los datos necesarios para sincronizar y compartir. La publicidad y la analítica de uso no están activas. Las cuentas Ordivy y las suscripciones Premium de App Store utilizan los servicios descritos en esta política.</p>
        </LegalSection>

        <LegalSection title="9. Consultas y solicitudes">
          <p>Puedes solicitar acceso, rectificación o supresión de tus datos personales y, cuando corresponda, limitación, oposición y portabilidad. Cuando un tratamiento se base en consentimiento, puedes retirarlo sin afectar a la licitud del tratamiento anterior.</p>
          <p>Escribe a ordivyapp@gmail.com e indica tu solicitud. No envíes contraseñas ni datos de pago. Si existen dudas razonables sobre tu identidad, podemos solicitar únicamente la información adicional necesaria para comprobarla.</p>
          <p>Puedes presentar una reclamación ante la <a href="https://www.aepd.es/">Agencia Española de Protección de Datos</a>. Eliminar una cuenta, cancelar una suscripción y borrar datos locales son acciones distintas.</p>
        </LegalSection>

        <LegalSection title="10. Cambios en esta política">
          <p>La política se actualizará antes de activar servicios nuevos que cambien el tratamiento de datos. La fecha de la versión vigente aparecerá al comienzo de esta página.</p>
        </LegalSection>
      </LanguageSection>
    </LegalShell>
  );
}

