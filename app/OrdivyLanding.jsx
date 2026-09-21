import MotionV2 from "./MotionV2";
import BrandFilm from "./BrandFilm";
import BenefitMockup from "./BenefitMockup";
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
  {
    number: "01", kind: "scan", Icon: ScanLine, title: "Registra lo que entra", text: "Escanea el código de barras o busca por nombre. Ordivy recupera el producto y tú solo confirmas la cantidad.",
  },
  {
    number: "02", kind: "location", Icon: MapPin, title: "Dile dónde lo guardas", text: "Cada producto pertenece a un inventario y a una ubicación dentro de él. En Cocina, por ejemplo, puedes elegir Despensa.",
  },
  {
    number: "03", kind: "restock", Icon: ShoppingBasket, title: "Deja que vigile el mínimo", text: "Marca cuántas unidades quieres tener siempre. Si bajas de ese número, el producto aparece en tu lista de compra.",
  },
];

const inventorySpaces = [
  ["Despensa", "Inventario Cocina", "Bonito en aceite · 4 uds.", "1 por reponer"],
  ["Congelador", "Inventario Cocina", "Verduras · 3 bolsas", "Todo localizado"],
  ["Armario", "Inventario Casa", "Ropa de invierno", "Guardado por temporada"],
  ["Botiquín", "Inventario Casa", "8 productos · 2 caducan pronto", "Revisar fechas"],
  ["Trastero", "Inventario Casa", "Taladro y accesorios", "12 piezas"],
  ["Oficina", "Inventario Trabajo", "Papel, tinta y cables", "2 con stock bajo"],
  ["Vitrina", "Inventario Colecciones", "Ediciones y piezas", "36 registradas"],
  ["Garaje", "Inventario Casa", "Limpieza y mantenimiento", "Todo localizado"],
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
    "En esta primera versión, tus inventarios se guardan en el dispositivo. La cuenta protege el acceso Premium, pero la sincronización del inventario todavía no está activa.",
  ],
  [
    "¿En qué dispositivos estará disponible?",
    "El primer lanzamiento está preparado para iPhone. La versión para Android y la experiencia específica para iPad llegarán más adelante.",
  ],
  [
    "¿Cómo funciona Premium en el lanzamiento?",
    "Durante esta primera fase, Premium se activa mediante invitaciones de Ordivy. Las compras y suscripciones dentro de la app todavía no están disponibles.",
  ],
];

const screenshots = [
  ["/screenshots/01-inicio.jpg", "Inicio", "Detecta qué espacio tiene stock bajo y qué productos están ahora mismo en uso."],
  ["/screenshots/02-inventario-general.jpg", "Inventario", "Suma, quita, mueve, fija un mínimo o revisa la caducidad desde la ficha del producto."],
  ["/screenshots/04-buscar-producto.jpg", "Búsqueda", "Reutiliza tus productos guardados o consulta sugerencias de Open Food Facts."],
  ["/screenshots/05-lista-compra.jpg", "Compra", "Calcula cuánto falta para recuperar tus mínimos y marca productos mientras compras."],
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
    <span className="v2-store" aria-label="Ordivy llegará próximamente a App Store">
      <i aria-hidden="true">●</i>
      <span>
        <small>Próximamente en</small>
        <b>App Store</b>
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
          alt="Pantalla de inicio de Ordivy con el inventario Cocina y sus ubicaciones"
          width={1242}
          height={2688}
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
          <div className="v2-header-actions">
            <Link className="v2-lang-switch" href="/en" hrefLang="en" aria-label="View the website in English">EN</Link>
            <a className="v2-header-cta" href="#descargar">
              Próximamente <ArrowRight size={16} />
            </a>
          </div>
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
                Ver lanzamiento <ArrowRight size={18} />
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
          <p>Crea un inventario —por ejemplo, Cocina— y añade dentro ubicaciones independientes como Despensa, Nevera o Congelador.</p>
        </div>
        <div className="v2-rail">
          <div>
            {inventorySpaces.map(([item, path, example, status], index) => (
              <article className={`v2-rail-card v2-rail-card--${(index % 4) + 1}`} key={item} data-reveal-v2>
                <span>0{index + 1}</span>
                <PackageCheck />
                <small>{path}</small>
                <h3>{item}</h3>
                <p>{example}</p>
                <strong>{status}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-screens v2-section" id="capturas">
        <div className="v2-shell v2-screens-head" data-reveal-v2>
          <div>
            <p className="v2-eyebrow v2-eyebrow--dark">EL CICLO COMPLETO, EN LA APP</p>
            <h2>Mirar, actualizar, reponer. Sin hojas paralelas.</h2>
          </div>
          <p>Inicio resume el estado de tu casa; Inventario permite actuar; Búsqueda encuentra; Compra reúne lo que falta.</p>
        </div>
        <div className="v2-shell v2-screen-grid">
          {screenshots.map(([src, title, text]) => (
            <article key={src} data-reveal-v2>
              <div className="v2-screen-shot">
                <Image src={src} alt={`Pantalla ${title} de Ordivy`} width={1242} height={2688} sizes="(max-width: 560px) 78vw, 260px" />
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
            <h2>Tus cosas no salen de casa sin que tú lo decidas.</h2>
          </div>
          <div className="v2-privacy-facts">
            <span><b>Inventario</b> guardado en tu iPhone durante esta primera versión.</span>
            <span><b>Cuenta</b> utilizada para proteger tu acceso y tu estado Premium.</span>
            <span><b>Cámara</b> activada únicamente cuando decides escanear un código.</span>
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
          <span className="v2-launch-status"><i /> Versión para iPhone enviada a revisión</span>
          <div className="v2-store-row">
            <StoreBadge />
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
          <Link href="/en" hrefLang="en">English</Link>
          <a href="#inicio">Volver arriba ↑</a>
        </nav>
      </footer>
    </main>
  );
}






