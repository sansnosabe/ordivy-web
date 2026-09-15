import { LanguageSection, LegalSection, LegalShell } from "../LegalShell";

export const metadata = {
  title: "Privacidad — Ordivy",
  description: "Política de privacidad de Ordivy en español e inglés.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="PRIVACIDAD Y DATOS"
      title="Tu inventario sigue siendo tuyo."
      intro={
        <p>
          Esta política explica qué información utiliza Ordivy, dónde se guarda y qué servicios externos intervienen. Última actualización: 16 de septiembre de 2026.
        </p>
      }
    >
      <LanguageSection id="es" language="Español" title="Política de privacidad">
        <LegalSection title="1. Alcance">
          <p>
            Esta política se aplica a la primera versión pública de Ordivy, una aplicación de inventario personal con funcionamiento principalmente local. Sus funciones locales no exigen crear una cuenta y el inventario todavía no se sincroniza con servidores propios.
          </p>
        </LegalSection>

        <LegalSection title="2. Información guardada en tu dispositivo">
          <p>
            Ordivy guarda localmente los datos que introduces: inventarios, ubicaciones, nombres y detalles de productos, identificadores, cantidades, mínimos, caducidades, elementos en uso, lista de Compra, historial, preferencias y fotografías elegidas por ti.
          </p>
          <p>Estos datos permanecen en el almacenamiento privado de la aplicación y se utilizan exclusivamente para ofrecer sus funciones.</p>
          <p>Si creas una cuenta, Supabase procesa tu correo, contraseña, nombre de usuario único, identificador interno y sesión para registrarte, confirmar el correo y mantener la sesión. Ordivy no guarda tu contraseña en texto legible. El nombre de usuario podrá ser visible cuando se activen funciones sociales o de colaboración.</p>
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
            <strong>Compras y RevenueCat.</strong> Apple o Google procesa el pago. RevenueCat recibe el identificador interno de tu cuenta Ordivy, los identificadores de producto, el estado de la suscripción y la información técnica necesaria para activar o restaurar Premium. Ordivy no recibe ni almacena los datos completos de tu tarjeta. Consulta las políticas de <a href="https://www.revenuecat.com/privacy/">RevenueCat</a>, <a href="https://www.apple.com/legal/privacy/">Apple</a> y <a href="https://policies.google.com/privacy">Google</a>.
          </p>
        </LegalSection>

        <LegalSection title="5. Finalidades y decisiones del usuario">
          <p>
            Los datos locales se utilizan para organizar y mostrar tu inventario. Las consultas externas, el dictado, las fotografías, las notificaciones y las compras se ejecutan cuando solicitas la función correspondiente. Ordivy no utiliza estos datos para publicidad, seguimiento entre aplicaciones ni elaboración de perfiles.
          </p>
        </LegalSection>

        <LegalSection title="6. Conservación y eliminación">
          <p>
            Los datos locales se conservan hasta que los modificas o eliminas, borras los datos de la aplicación o desinstalas Ordivy. Las copias del dispositivo administradas por Apple o Google pueden conservar información según tus propios ajustes de copia de seguridad.
          </p>
          <p>
            Apple, Google, RevenueCat y Open Food Facts conservan los datos que procesan conforme a sus políticas y obligaciones legales. Puedes retirar permisos desde los ajustes del sistema y administrar o cancelar una suscripción desde la tienda correspondiente.
          </p>
        </LegalSection>

        <LegalSection title="7. Protección y terceros">
          <p>
            Ordivy reduce los datos enviados fuera del dispositivo a lo necesario para la función solicitada. Los proveedores externos identificados deben aplicar una protección equivalente a la descrita en esta política y pueden procesar información en otros países conforme a sus propias garantías legales.
          </p>
        </LegalSection>

        <LegalSection title="8. Servicios que no están activos">
          <p>Las cuentas de Ordivy están activas. La sincronización del inventario en la nube, la colaboración, la publicidad y la analítica de uso no están activas.</p>
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
            <strong>Purchases and RevenueCat.</strong> Apple or Google processes payments. RevenueCat receives your internal Ordivy account identifier, product identifiers, subscription status, and technical information required to activate or restore Premium. Ordivy does not receive or store your full payment card details. See the policies of <a href="https://www.revenuecat.com/privacy/">RevenueCat</a>, <a href="https://www.apple.com/legal/privacy/">Apple</a>, and <a href="https://policies.google.com/privacy">Google</a>.
          </p>
        </LegalSection>

        <LegalSection title="5. Purposes and user choices">
          <p>
            Local information is used to organize and display your inventory. External searches, dictation, photos, notifications, and purchases run when you request the corresponding feature. Ordivy does not use this information for advertising, cross-app tracking, or profiling.
          </p>
        </LegalSection>

        <LegalSection title="6. Retention and deletion">
          <p>
            Local information is retained until you modify or delete it, erase the app&apos;s data, or uninstall Ordivy. Device backups managed by Apple or Google may retain information according to your own backup settings.
          </p>
          <p>
            Apple, Google, RevenueCat, and Open Food Facts retain the information they process according to their policies and legal obligations. You can withdraw permissions in system settings and manage or cancel a subscription through the relevant store.
          </p>
        </LegalSection>

        <LegalSection title="7. Protection and third parties">
          <p>
            Ordivy limits information sent outside the device to what is needed for the feature you request. The identified external providers must offer protection equivalent to that described in this policy and may process information in other countries under their own legal safeguards.
          </p>
        </LegalSection>

        <LegalSection title="8. Services that are not active">
          <p>Ordivy accounts are active. Cloud inventory sync, collaboration, advertising, and usage analytics are not active.</p>
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
