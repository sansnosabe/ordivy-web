import Link from "next/link";
import OriginalWordmark from "./OriginalWordmark";

export function LegalShell({ eyebrow, title, intro, children }) {
  return (
    <main className="legal-site">
      <header className="legal-header">
        <Link className="legal-brand" href="/" aria-label="Ordivy, inicio">
          <OriginalWordmark />
        </Link>
        <nav aria-label="Páginas de Ordivy">
          <Link href="/support">Soporte</Link>
          <Link href="/privacy">Privacidad</Link>
          <Link href="/terms">Condiciones</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <div>{intro}</div>
      </section>

      <div className="legal-language-nav" aria-label="Idiomas disponibles">
        <a href="#es">Español</a>
        <a href="#en">English</a>
      </div>

      <div className="legal-content">{children}</div>

      <footer className="legal-footer">
        <span>© 2026 Ordivy</span>
        <a href="mailto:ordivyapp@gmail.com">ordivyapp@gmail.com</a>
      </footer>
    </main>
  );
}

export function LanguageSection({ id, language, title, children }) {
  return (
    <article className="legal-language" id={id} lang={id}>
      <div className="legal-language-heading">
        <span>{language}</span>
        <h2>{title}</h2>
      </div>
      <div className="legal-sections">{children}</div>
    </article>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
