import "./store-badge.css";
import MotionV2 from "./MotionV2";
import BrandFilm from "./BrandFilm";
import BenefitMockup from "./BenefitMockup";
import InventoryDemo from "./InventoryDemo";
import Image from "next/image";
import Link from "next/link";

import { ArrowDown, ArrowRight, Check, ChevronDown, MapPin, ScanLine, Search, ShieldCheck, ShoppingBasket, Sparkles } from "lucide-react";

const benefits = [
  {
    number: "01",
    kind: "scan",
    Icon: ScanLine,
    title: "Registra lo que entra",
    text: "Escanea el código de barras o busca por nombre. Ordivy recupera el producto y tú solo confirmas la cantidad.",
  },
  {
    number: "02",
    kind: "location",
    Icon: MapPin,
    title: "Dile dónde lo guardas",
    text: "Cada producto pertenece a un inventario y a una ubicación dentro de él. Por ejemplo: cables en un cajón, ropa en el armario o herramientas en el trastero.",
  },
  {
    number: "03",
    kind: "restock",
    Icon: ShoppingBasket,
    title: "Deja que vigile el mínimo",
    text: "Marca cuántas unidades quieres tener siempre. Si bajas de ese número, el producto aparece en tu lista de compra.",
  },
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
    "Tus inventarios se guardan en tu dispositivo. Conecta tu cuenta desde Ajustes para sincronizar tus datos; la sección Tu familia permite compartir inventarios y Premium.",
  ],
  [
    "¿En qué dispositivos está disponible?",
    "Ordivy ya está disponible en App Store. La versión para Android llegará próximamente a Google Play.",
  ],
  [
    "¿Cómo funciona Ordivy Premium?",
    "En iOS, puedes contratar una suscripción Premium desde la app con una cuenta Ordivy verificada. Consulta y gestiona tu plan en Ajustes, restaura tus compras desde Premium y gestiona o cancela la suscripción desde tu cuenta de Apple.",
  ],
];

const screenshots = [
  ["/screenshots/es/home.jpeg", "Inicio", "Consulta tus inventarios, ubicaciones y productos en uso de un vistazo."],
  ["/screenshots/es/inventory.jpeg", "Inventario", "Explora ubicaciones, busca productos y consulta las cantidades disponibles."],
  ["/screenshots/es/shopping.jpeg", "Compra", "Reúne lo que falta, organiza la lista y marca productos mientras compras."],
  ["/screenshots/es/settings.jpeg", "Ajustes y Premium", "Gestiona tu plan, conecta tu cuenta para sincronizar datos y comparte con tu familia."],
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

function StoreBadge() {
  return (
    <a className="v2-app-store-badge" href="https://apps.apple.com/app/ordivy/id6814024224" aria-label="Descargar en App Store">
      <Image
        src="https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/es-es?size=250x83"
        alt="Descargar en App Store"
        width={180}
        height={60}
        unoptimized
      />
    </a>
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
          alt="Pantalla de inicio de Ordivy con el inventario Mi taller y sus ubicaciones"
          width={942}
          height={2048}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 900px) 17.52svh, min(286px, calc(46.1svh - 87.6px))"
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
          <div className="v2-header-actions">
            <Link className="v2-lang-switch" href="/en" hrefLang="en" aria-label="View the website in English">
              EN
            </Link>
            <a className="v2-header-cta" href="#descargar">
              Descargar <ArrowRight size={16} />
            </a>
          </div>
        </header>
        <div className="v2-hero-layout v2-shell">
          <div className="v2-hero-copy" data-hero>
            <p className="v2-eyebrow">TU INVENTARIO PERSONAL</p>
            <h1>
              Saber qué<br />
              <span style={{ whiteSpace: "nowrap" }}>tienes, cambia</span><br />
              <em style={{ whiteSpace: "nowrap" }}>lo que compras.</em>
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

      <BrandFilm>
        <LogoSymbol />
      </BrandFilm>
      <section className="v2-statement v2-section" id="como-funciona">
        <div className="v2-shell v2-statement-head">
          <div data-reveal-v2>
            <p className="v2-eyebrow v2-eyebrow--dark">UN PRODUCTO. TRES DECISIONES.</p>
            <h2>De guardarlo a saber cuándo comprarlo.</h2>
          </div>
          <p data-reveal-v2>
            Añades un producto una sola vez. Desde ese momento, Ordivy recuerda dónde está, cuántas unidades quedan y cuándo necesitas reponerlo.
          </p>
        </div>
        <div className="v2-shell v2-benefits">
          {benefits.map(({ number, kind, Icon, title, text }, index) => (
            <article data-reveal-v2 key={number}>
              <span className="v2-benefit-num">PASO {number}</span>
              <i>
                <Icon />
              </i>
              <h3>{title}</h3>
              <p>{text}</p>
              <BenefitMockup kind={kind} />
              {index < benefits.length - 1 && <ArrowRight className="v2-benefit-arrow" aria-hidden="true" />}
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
                ["🔧", "Taladro inalámbrico", "Ubicación: Trastero", "1 ud."],
                ["🔋", "Batería de taladro", "Ubicación: Trastero", "2 ud."],
                ["📦", "Brocas para taladro", "Ubicación: Garaje", "12 ud."],
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
            <p className="v2-eyebrow v2-eyebrow--dark">UNA BÚSQUEDA QUE RESPONDE</p>
            <h2>No busques en cajones. Busca en Ordivy.</h2>
            <p>Escribe “taladro” y no recibes una lista genérica: ves el objeto que ya tienes, su ubicación exacta y la cantidad disponible.</p>
            <ul>
              <li>
                <Check /> “Ubicación: Trastero”, no solo “en casa”
              </li>
              <li>
                <Check /> Herramienta, batería y accesorios en una búsqueda
              </li>
              <li>
                <Check /> Cantidades visibles antes de comprar otra unidad
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="v2-inventory v2-section">
        <div className="v2-shell v2-inventory-head" data-reveal-v2>
          <p className="v2-eyebrow">LA ESTRUCTURA REAL DE TU CASA</p>
          <h2>
            Tu casa no es una lista plana.
            <br />
            Ordivy tampoco.
          </h2>
          <p>Ropa, herramientas, material de oficina o colecciones. Explora estos ejemplos y descubre cómo organizar tus cosas en Ordivy.</p>
        </div>
        <InventoryDemo locale="es" />
      </section>

      <section className="v2-screens v2-section" id="capturas">
        <div className="v2-shell v2-screens-head" data-reveal-v2>
          <div>
            <p className="v2-eyebrow v2-eyebrow--dark">EL CICLO COMPLETO, EN LA APP</p>
            <h2>Mirar, actualizar, reponer. Sin hojas paralelas.</h2>
          </div>
          <p>Inicio resume tus espacios; Inventario permite actuar; Compra reúne lo que falta; Ajustes conecta tu cuenta, tu plan y tu familia.</p>
        </div>
        <div className="v2-shell v2-screen-grid">
          {screenshots.map(([src, title, text]) => (
            <article key={src} data-reveal-v2>
              <div className="v2-screen-shot">
                <Image src={src} alt={`Pantalla ${title} de Ordivy`} width={942} height={2048} sizes="(max-width: 560px) 78vw, 260px" />
              </div>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-privacy v2-section">
        <div className="v2-shell v2-privacy-panel" data-reveal-v2>
          <i>
            <ShieldCheck />
          </i>
          <div>
            <p className="v2-eyebrow v2-eyebrow--dark">QUÉ SE GUARDA Y DÓNDE</p>
            <h2>Tu inventario, con opciones para sincronizar y compartir.</h2>
          </div>
          <div className="v2-privacy-facts">
            <span>
              <b>Inventario</b> guardado en tu dispositivo, con sincronización al conectar tu cuenta.
            </span>
            <span>
              <b>Cuenta</b> utilizada para tu acceso, Premium, sincronización y funciones de familia.
            </span>
            <span>
              <b>Cámara</b> activada únicamente cuando decides escanear un código.
            </span>
          </div>
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
              <details key={question} name="ordivy-faq" open={index === 0}>
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
          <span className="v2-launch-status">
            <i /> Disponible en App Store
          </span>
          <div className="v2-store-row">
            <StoreBadge />
            <span className="v2-store" aria-label="Android próximamente en Google Play"><span><small>Próximamente en</small><b>Google Play</b></span></span>
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
          <Link href="/en" hrefLang="en">
            English
          </Link>
          <a href="#inicio">Volver arriba ↑</a>
        </nav>
      </footer>
    </main>
  );
}

