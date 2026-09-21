import Link from "next/link";
import OriginalWordmark from "./OriginalWordmark";

export function LegalShell({ eyebrow, title, intro, children, locale = "es", page = "" }) {
  const english = locale === "en";
  const base = english ? "/en" : "";
  const alternate = english ? `/${page}` : `/en/${page}`;
  return (
    <main className="legal-site" lang={locale}>
      <header className="legal-header">
        <Link className="legal-brand" href={english ? "/en" : "/"} aria-label={english ? "Ordivy, home" : "Ordivy, inicio"}>
          <OriginalWordmark />
        </Link>
        <nav aria-label={english ? "Ordivy pages" : "Páginas de Ordivy"}>
          <Link href={`${base}/support`}>{english ? "Support" : "Soporte"}</Link>
          <Link href={`${base}/privacy`}>{english ? "Privacy" : "Privacidad"}</Link>
          <Link href={`${base}/terms`}>{english ? "Terms" : "Condiciones"}</Link>
          <Link className="legal-lang-switch" href={alternate} hrefLang={english ? "es" : "en"}>{english ? "ES" : "EN"}</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <div>{intro}</div>
      </section>

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
