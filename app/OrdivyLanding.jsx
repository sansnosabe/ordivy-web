import MotionV2 from "./MotionV2";
import BrandFilm from "./BrandFilm";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  PackageCheck,
  ScanLine,
  Search,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
} from "lucide-react";

const benefits = [
  ["01", ScanLine, "Añade sin perder tiempo", "Escanea un código, busca el producto o créalo manualmente. Tú eliges cuánto detalle necesitas."],
  ["02", MapPin, "Cada cosa en su sitio", "Organiza por casa, habitación, armario, caja o cualquier ubicación que tenga sentido para ti."],
  ["03", ShoppingBasket, "Compra con cabeza", "Controla cantidades y mínimos para saber qué falta antes de volver a comprarlo."],
];

const faqs = [
  [
    "¿Qué puedo organizar con Ordivy?",
    "Prácticamente cualquier cosa: alimentos, ropa, herramientas, productos del hogar, material de oficina o colecciones.",
  ],
  [
    "¿Tengo que registrar todo de golpe?",
    "No. Empieza por un espacio pequeño y añade productos cuando los uses o cuando hagas la compra. Ordivy se adapta a tu ritmo.",
  ],
  [
    "¿Puedo crear varios inventarios?",
    "Sí. Puedes separar casa, oficina, trastero o cualquier otro espacio y organizar cada uno con sus propias ubicaciones.",
  ],
  [
    "¿Dónde se guardan mis datos?",
    "Ordivy nace con un enfoque local: tu información empieza en tu dispositivo y solo solicita los permisos necesarios para cada función.",
  ],
];

function LogoSymbol({ className = "" }) {
  return (
    <svg className={className} viewBox="116.63 116.63 363.88 380.57" aria-hidden="true">
      <path d="M480.51 208.76v-20.51c0-39.56-32.07-71.62-71.62-71.62h-20.51c-13.53 0-24.5 10.97-24.5 24.5v67.64c0 13.53 10.97 24.5 24.5 24.5h67.64c13.53 0 24.5-10.97 24.5-24.5Z" />
      <path d="M456.01 380.57h-67.64c-13.53 0-24.5 10.97-24.5 24.5v67.64c0 13.53 10.97 24.5 24.5 24.5h32.75c32.8 0 59.38-26.59 59.38-59.38v-32.75c0-13.53-10.97-24.5-24.5-24.5Z" />
      <path d="M348.54 208.76v-67.64c0-13.53-9.4-24.5-20.99-24.5h-57.96c-11.59 0-20.99 10.97-20.99 24.5v67.64c0 13.53 9.4 24.5 20.99 24.5h57.96c11.59 0 20.99-10.97 20.99-24.5Z" />
      <path d="M248.6 405.06v67.64c0 13.53 9.4 24.5 20.99 24.5h57.96c11.59 0 20.99-10.97 20.99-24.5v-67.64c0-13.53-9.4-24.5-20.99-24.5h-57.96c-11.59 0-20.99 10.97-20.99 24.5Z" />
      <rect x="363.88" y="248.6" width="116.63" height="116.63" rx="24.5" />
      <path d="M116.63 405.06v32.75c0 32.8 26.59 59.38 59.38 59.38h32.75c13.53 0 24.5-10.97 24.5-24.5v-67.64c0-13.53-10.97-24.5-24.5-24.5h-67.64c-13.53 0-24.5 10.97-24.5 24.5Z" />
      <path d="M208.76 116.63h-32.75c-32.8 0-59.38 26.59-59.38 59.38v32.75c0 13.53 10.97 24.5 24.5 24.5h67.64c13.53 0 24.5-10.97 24.5-24.5v-67.64c0-13.53-10.97-24.5-24.5-24.5h-67.64Z" />
      <rect x="116.63" y="248.6" width="116.63" height="116.63" rx="24.5" />
    </svg>
  );
}

function Logo({ light = false }) {
  return (
    <a className={`v2-brand ${light ? "v2-brand--light" : ""}`} href="#inicio" aria-label="Ordivy, inicio">
      <LogoSymbol />
      <span>ordivy</span>
    </a>
  );
}

function StoreBadge({ store }) {
  return (
    <span className="v2-store" aria-label={`Descargar Ordivy en ${store}`}>
      <i aria-hidden="true">{store === "App Store" ? "●" : "▶"}</i>
      <span>
        <small>Descargar en</small>
        <b>{store}</b>
      </span>
    </span>
  );
}

function AppScreen() {
  return (
    <div className="v2-phone-wrap">
      <div className="v2-orbit v2-orbit--a" />
      <div className="v2-orbit v2-orbit--b" />
      <div className="v2-phone v2-phone--real">
        <Image
          src="/ordivy-app-home.jpeg"
          alt="Pantalla real de Ordivy mostrando el inventario Colecciones, sus ubicaciones y un producto"
          width={942}
          height={1924}
          priority
          sizes="(max-width: 560px) 286px, 304px"
        />
      </div>
    </div>
  );
}

export default function OrdivyLanding() {
  return (
    <main className="v2-site">
      <MotionV2 />
      <section className="v2-hero" id="inicio">
        <div className="v2-hero-glow" aria-hidden="true" />
        <header className="v2-header v2-shell">
          <Logo light />
          <nav aria-label="Navegación principal">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#funciones">Funciones</a>
            <a href="#faq">Preguntas</a>
          </nav>
          <a className="v2-header-cta" href="#descargar">
            Descargar <ArrowRight size={16} />
          </a>
        </header>
        <div className="v2-hero-layout v2-shell">
          <div className="v2-hero-copy" data-hero>
            <p className="v2-eyebrow">TU INVENTARIO PERSONAL</p>
            <h1>
              Saber qué tienes cambia <em>lo que compras.</em>
            </h1>
            <p className="v2-hero-lede">
              Ordivy pone orden en tus cosas para que encuentres todo, repongas a tiempo y dejes de comprar lo que ya tenías.
            </p>
            <div className="v2-hero-actions">
              <a className="v2-primary" href="#descargar">
                Descargar Ordivy <ArrowRight size={18} />
              </a>
              <a className="v2-text-link" href="#como-funciona">
                Ver cómo funciona <ArrowDown size={16} />
              </a>
            </div>
            <p className="v2-trust">
              <ShieldCheck size={16} /> Diseñada para que el control empiece en tu dispositivo.
            </p>
          </div>
          <AppScreen />
        </div>
        <div className="v2-marquee" aria-hidden="true">
          <div className="v2-ticker-track">
            {[0, 1, 2, 3].map((copy) => (
              <div className="v2-ticker-group" key={copy}>
                {["ENCUENTRA", "ORGANIZA", "ESCANEA", "GUARDA", "LOCALIZA", "REPÓN", "PLANIFICA", "REUTILIZA", "AHORRA", "APROVECHA"].map((word) => (
                  <span key={word}>
                    {word}
                    <i className="v2-ticker-tile" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandFilm><LogoSymbol /></BrandFilm>
      <section className="v2-statement v2-section" id="como-funciona">
        <div className="v2-shell v2-statement-head">
          <div data-reveal-v2>
            <p className="v2-eyebrow v2-eyebrow--dark">MENOS MEMORIA. MÁS CLARIDAD.</p>
            <h2>Tu casa deja de ser un misterio.</h2>
          </div>
          <p data-reveal-v2>
            Ese paquete que compras dos veces. La herramienta que nunca aparece. Lo que caduca al fondo de un armario. Ordivy convierte cada rincón en
            información útil.
          </p>
        </div>
        <div className="v2-shell v2-benefits">
          {benefits.map(([number, Icon, title, text]) => (
            <article data-reveal-v2 key={number}>
              <span className="v2-benefit-num">{number}</span>
              <i>
                <Icon />
              </i>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-search-story v2-section" id="funciones">
        <div className="v2-shell v2-search-layout">
          <div className="v2-search-demo" data-reveal-v2>
            <p>BUSCAR EN ORDIVY</p>
            <div className="v2-big-search">
              <Search />
              <span>taladro</span>
              <i>3 resultados</i>
            </div>
            <div className="v2-results">
              {[
                ["🔧", "Taladro inalámbrico", "Trastero · Estante superior", "1 ud."],
                ["🔋", "Batería de taladro", "Trastero · Caja de herramientas", "2 ud."],
                ["📦", "Brocas para taladro", "Garaje · Armario pequeño", "12 ud."],
              ].map(([emoji, name, place, qty]) => (
                <article key={name}>
                  <span>{emoji}</span>
                  <div>
                    <b>{name}</b>
                    <small>{place}</small>
                  </div>
                  <strong>{qty}</strong>
                </article>
              ))}
            </div>
          </div>
          <div className="v2-search-copy" data-reveal-v2>
            <p className="v2-eyebrow v2-eyebrow--dark">TODO LOCALIZADO</p>
            <h2>Encuentra una aguja en tu propio pajar.</h2>
            <p>Busca en todos tus inventarios y descubre al instante dónde está cada cosa y cuántas unidades quedan.</p>
            <ul>
              <li>
                <Check /> Búsqueda en todos tus espacios
              </li>
              <li>
                <Check /> Cantidades y mínimos siempre visibles
              </li>
              <li>
                <Check /> Inventario y lista de compra conectados
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="v2-inventory v2-section">
        <div className="v2-shell v2-inventory-head" data-reveal-v2>
          <p className="v2-eyebrow">UN SISTEMA QUE SE ADAPTA A TI</p>
          <h2>
            Una despensa. Un armario.
            <br />
            Una casa entera.
          </h2>
          <p>Empieza por lo que más necesitas ordenar y amplía cuando quieras.</p>
        </div>
        <div className="v2-rail">
          <div>
            {["Despensa", "Congelador", "Armario", "Botiquín", "Trastero", "Oficina", "Colecciones", "Garaje"].map((item, index) => (
              <article className={`v2-rail-card v2-rail-card--${(index % 4) + 1}`} key={item} data-reveal-v2>
                <span>0{index + 1}</span>
                <PackageCheck />
                <h3>{item}</h3>
                <p>Cada objeto, cantidad y ubicación bajo control.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-privacy v2-section">
        <div className="v2-shell v2-privacy-panel" data-reveal-v2>
          <i>
            <ShieldCheck />
          </i>
          <div>
            <p className="v2-eyebrow v2-eyebrow--dark">PRIVACIDAD DESDE EL PRINCIPIO</p>
            <h2>Tu inventario habla de tu vida. Por eso es tuyo.</h2>
          </div>
          <p>Ordivy pide únicamente los permisos que necesita para funcionar y te explica para qué sirve cada uno.</p>
        </div>
      </section>

      <section className="v2-faq v2-section" id="faq">
        <div className="v2-shell v2-faq-layout">
          <div data-reveal-v2>
            <p className="v2-eyebrow v2-eyebrow--dark">PREGUNTAS FRECUENTES</p>
            <h2>Antes de empezar.</h2>
            <p>Lo esencial sobre Ordivy, explicado sin letra pequeña.</p>
          </div>
          <div className="v2-faq-list" data-reveal-v2>
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  <span>{question}</span>
                  <ChevronDown />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-download" id="descargar">
        <div className="v2-download-orb v2-download-orb--a" />
        <div className="v2-download-orb v2-download-orb--b" />
        <div className="v2-shell v2-download-content" data-reveal-v2>
          <Logo light />
          <Sparkles />
          <h2>
            Compra menos.
            <br />
            Encuentra más.
          </h2>
          <p>Tu casa, tu inventario y tu lista de compra en un solo lugar.</p>
          <div className="v2-store-row">
            <StoreBadge store="App Store" />
            <StoreBadge store="Google Play" />
          </div>
        </div>
      </section>
      <footer className="v2-footer v2-shell">
        <Logo />
        <p>© 2026 Ordivy. Todos los derechos reservados.</p>
        <nav aria-label="Enlaces del pie">
          <Link href="/support">Soporte</Link>
          <Link href="/privacy">Privacidad</Link>
          <Link href="/terms">Condiciones</Link>
          <a href="#inicio">Volver arriba ↑</a>
        </nav>
      </footer>
    </main>
  );
}






