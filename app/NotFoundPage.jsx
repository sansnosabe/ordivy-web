import Link from 'next/link';
import OrdivyLogo from './OrdivyLogo';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage({ locale = 'es' }) {
  const en = locale === 'en';
  const home = en ? '/en' : '/';
  return (
    <main className={styles.page} lang={locale}>
      <Link href={home} className={styles.brand} aria-label={en ? 'Ordivy, home' : 'Ordivy, inicio'}>
        <OrdivyLogo light className={styles.logo} />
      </Link>
      <section className={styles.content} aria-labelledby="not-found-title">
        <p className={styles.code}>404</p>
        <h1 id="not-found-title">{en ? 'This page is missing.' : 'Esta página no está en su sitio.'}</h1>
        <p className={styles.description}>{en ? 'The link may have changed or the address may be incorrect. Let’s get you back home.' : 'Puede que el enlace haya cambiado o que la dirección no sea correcta. Volvamos al inicio.'}</p>
        <Link href={home} className={styles.button}>{en ? 'Back to home' : 'Volver al inicio'}<span aria-hidden="true"> →</span></Link>
        <Link href={`${en ? '/en' : ''}/support`} className={styles.support}>{en ? 'Need help? Contact support' : '¿Necesitas ayuda? Ir a soporte'}</Link>
      </section>
    </main>
  );
}
