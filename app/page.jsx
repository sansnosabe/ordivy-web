import MotionController from './MotionController';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BellRing, Box, Check, ChevronDown,
  Clock3, Database, Home, Leaf, ListChecks, LockKeyhole, PackageCheck,
  PackageOpen, Palette, Puzzle, ScanLine, Search, ShieldCheck, Shirt,
  ShoppingCart, Snowflake, Sparkles, Wrench,
} from 'lucide-react';

const spaces = [
  { icon: Home, name: 'Cocina', count: '43 productos' },
  { icon: Shirt, name: 'Armario', count: '28 productos' },
  { icon: Wrench, name: 'Trastero', count: '16 productos' },
];

const categories = [
  [PackageOpen, 'Comida y despensa'], [Snowflake, 'Congelador'], [Home, 'Hogar'],
  [Wrench, 'Herramientas'], [Shirt, 'Ropa y moda'], [Palette, 'Maquillaje'],
  [Database, 'Material de oficina'], [Puzzle, 'Colecciones'],
];

const features = [
  { icon: ScanLine, number: '01', title: 'Añade', text: 'Escanea, busca o crea cualquier objeto en unos segundos.' },
  { icon: ListChecks, number: '02', title: 'Organiza', text: 'Asigna ubicaciones, cantidades y fechas para encontrarlo todo a la primera.' },
  { icon: Search, number: '03', title: 'Encuentra', text: 'Busca en todos tus inventarios y descubre al instante dónde está cada cosa.' },
  { icon: BellRing, number: '04', title: 'Recuerda', text: 'Controla mínimos, caducidades y objetos en uso sin depender de tu memoria.' },
];

const faqs = [
  ['¿Ordivy es gratis?', 'Sí. Puedes empezar gratis y organizar tus espacios principales. Premium amplía los límites y añade automatizaciones avanzadas.'],
  ['¿Necesito etiquetar todos mis productos?', 'No. Puedes escanear un código, buscar el producto o añadirlo manualmente. Tú eliges el nivel de detalle.'],
  ['¿Dónde se guardan mis datos?', 'Tu información permanece vinculada a tu dispositivo y Ordivy pide únicamente los permisos necesarios para cada función.'],
  ['¿Puedo tener varios inventarios?', 'Sí. Puedes separar tu casa, trastero, oficina o cualquier colección y mantener cada espacio ordenado.'],
];

function LogoSymbolPaths() {
  return <>
      <path className="logo-tile" d="M480.51 208.76v-20.51c0-39.56-32.07-71.62-71.62-71.62h-20.51c-13.53 0-24.5 10.97-24.5 24.5v67.64c0 13.53 10.97 24.5 24.5 24.5h67.64c13.53 0 24.5-10.97 24.5-24.5Z" />
      <path className="logo-tile" d="M456.01 380.57h-67.64c-13.53 0-24.5 10.97-24.5 24.5v67.64c0 13.53 10.97 24.5 24.5 24.5h32.75c32.8 0 59.38-26.59 59.38-59.38v-32.75c0-13.53-10.97-24.5-24.5-24.5Z" />
      <path className="logo-tile" d="M348.54 208.76v-67.64c0-13.53-9.4-24.5-20.99-24.5h-57.96c-11.59 0-20.99 10.97-20.99 24.5v67.64c0 13.53 9.4 24.5 20.99 24.5h57.96c11.59 0 20.99-10.97 20.99-24.5Z" />
      <path className="logo-tile" d="M248.6 405.06v67.64c0 13.53 9.4 24.5 20.99 24.5h57.96c11.59 0 20.99-10.97 20.99-24.5v-67.64c0-13.53-9.4-24.5-20.99-24.5h-57.96c-11.59 0-20.99 10.97-20.99 24.5Z" />
      <rect className="logo-tile" x="363.88" y="248.6" width="116.63" height="116.63" rx="24.5" />
      <path className="logo-tile" d="M116.63 405.06v32.75c0 32.8 26.59 59.38 59.38 59.38h32.75c13.53 0 24.5-10.97 24.5-24.5v-67.64c0-13.53-10.97-24.5-24.5-24.5h-67.64c-13.53 0-24.5 10.97-24.5 24.5Z" />
      <path className="logo-tile" d="M208.76 116.63h-32.75c-32.8 0-59.38 26.59-59.38 59.38v32.75c0 13.53 10.97 24.5 24.5 24.5h67.64c13.53 0 24.5-10.97 24.5-24.5v-67.64c0-13.53-10.97-24.5-24.5-24.5Z" />
      <rect className="logo-tile" x="116.63" y="248.6" width="116.63" height="116.63" rx="24.5" />
    </>;
}

function LogoSymbol({ className = '' }) {
  return (
    <svg className={className} viewBox="116.63 116.63 363.88 380.57" aria-hidden="true">
      <LogoSymbolPaths />
    </svg>
  );
}

function LegacyOriginWordmark() {
  return (
    <svg className="origin-wordmark" viewBox="130 110 1270 450" aria-label="Ordivy">
      <g className="origin-vector-pair origin-vector-pair--or">
        <path d="M438.96 287.76c0 87.27-62.1 143.9-136.13 143.9S166.7 375.03 166.7 287.76s62.1-143.9 136.13-143.9 136.13 58.02 136.13 143.9Zm-216.33 0c0 56.17 36.6 90.98 80.2 90.98s80.2-34.81 80.2-90.98-36.6-90.98-80.2-90.98-80.2 34.81-80.2 90.98Z" />
        <path d="M521.32 279.18c15.64-20.58 38.8-24.55 58.98-24.55 32.11 0 51.87 20.58 51.87 57.64v17.29c0 2.47-4.53 7-7 7h-38.7c-2.47 0-7-4.53-7-7v-9.88c0-13.59-7.82-20.58-18.53-20.58-14.41 0-29.64 14-34.99 29.64v91.81c0 2.47-4.53 7-7 7h-38.7c-2.47 0-7-4.53-7-7v-154.8c0-2.47 4.53-7 7-7h32.11c6.18 0 5.62 11.68 8.92 20.32l.04.11Z" />
      </g>
      <g className="origin-vector-pair origin-vector-pair--di">
        <path d="M786.16 410.65h-2.05c-14.41 12.77-25.12 21-50.65 21-44.46 0-80.69-34.58-80.69-88.52 0-50.22 35-88.51 86.05-88.51 17.7 0 36.23 5.35 45.29 13.17h2.06V182.81c0-2.47 4.53-7 7-7h38.7c2.47 0 7 4.53 7 7v257.73c0 2.47-4.53 7-7 7h-45.7M745.81 387.19c17.7 0 30.47-8.64 40.35-18.11v-46.93c-7-14.41-21.82-23.05-39.11-23.05-24.29 0-41.58 18.11-41.58 44.05 0 28.41 18.53 44.05 40.35 44.05Z" />
        <path d="M880.91 258.74h38.7c3.86 0 7 3.14 7 7v154.8c0 3.86-3.14 7-7 7h-38.7c-3.86 0-7-3.14-7-7v-154.8c0-3.86 3.14-7 7-7Z" />
        <rect x="873.91" y="180.25" width="52.7" height="52.7" rx="11.07" />
      </g>
      <g className="origin-vector-pair origin-vector-pair--vy">
        <path d="M953.79 267.8c-.82-1.65-2.06-4.53-2.06-5.76s1.24-3.29 3.71-3.29h45.29c4.94 0 6.18.41 8.64 5.76l32.94 72.87c4.53 9.88 6.59 20.58 6.59 20.58h1.65s2.47-11.53 6.59-20.58l32.94-72.87c2.47-5.35 3.7-5.76 8.64-5.76h45.29c2.47 0 3.71 2.06 3.71 3.29s-1.24 4.12-2.06 5.76l-73.28 159.74h-45.29L953.8 267.8Z" />
        <path d="M1259.64 525.52c-1.65 4.12-3.29 4.94-9.06 4.94h-44.05c-1.65 0-3.29-1.24-3.29-3.3 0-1.23.41-2.88 2.06-7l38.29-94.28-78.64-157.68c-2.06-4.12-2.06-5.35-2.06-6.18 0-2.06 2.06-3.29 3.71-3.29h44.46c5.76 0 7.82 1.23 9.88 5.35l39.11 78.64c5.76 11.12 8.65 20.58 8.65 20.58h.82l39.94-99.22c1.65-4.12 3.29-5.35 9.06-5.35h44.05c1.65 0 3.3 1.23 3.3 3.29 0 1.65-.82 3.71-2.06 7l-104.16 256.49Z" />
      </g>
    </svg>
  );
}

function OriginWordmark() {
  return (
    <div className="origin-wordmark" role="img" aria-label="Ordivy">
      <span className="origin-vector-pair origin-vector-pair--or"><img src="/ordivy-wordmark.svg" alt="" /></span>
      <span className="origin-vector-pair origin-vector-pair--di"><img src="/ordivy-wordmark.svg" alt="" /></span>
      <span className="origin-vector-pair origin-vector-pair--vy"><img src="/ordivy-wordmark.svg" alt="" /></span>
    </div>
  );
}

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="Ordivy, inicio">
      <span className="brand-mark"><LogoSymbol /></span>
      <span className="brand-name">ordivy</span>
    </a>
  );
}

function DownloadBadge({ store, dark = false }) {
  return (
    <a className={`store-badge ${dark ? 'store-badge--dark' : ''}`} href="#descargar" aria-label={`Descargar Ordivy en ${store}`}>
      <span className="store-symbol" aria-hidden="true">{store === 'App Store' ? '●' : '▶'}</span>
      <span><small>Disponible en</small>{store}</span>
    </a>
  );
}

function PhonePreview({ compact = false }) {
  return (
    <div className={`phone-stage ${compact ? 'phone-stage--compact' : ''}`} aria-label="Vista conceptual de la aplicación Ordivy">
      {!compact && <><div className="orbit orbit--one" /><div className="orbit orbit--two" /></>}
      {!compact && <>
        <div className="product-chip product-chip--coffee"><span><Wrench size={16} /></span><div><b>Taladro</b><small>Trastero</small></div><Check size={15} /></div>
        <div className="product-chip product-chip--list"><span><Puzzle size={16} /></span><div><b>Colección LEGO</b><small>56 piezas</small></div><ArrowRight size={15} /></div>
      </>}
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="phone-status"><b>9:41</b><span>● ◒ ▰</span></div>
          <div className="app-home-head"><div><small>HOGAR</small><b>Mi casa</b><span>Todo lo que tienes, en su sitio.</span></div><i><Home size={18} /></i></div>
          <div className="phone-section-title"><b>Mis inventarios</b><span>Gestionar</span></div>
          <div className="inventory-pills"><span className="active"><Home size={13} /> Mi casa</span><span><Database size={13} /> Oficina</span></div>
          <div className="restock-card"><span><BellRing size={16} /></span><div><b>3 productos por reponer</b><small>Ver lista de compra</small></div><ArrowRight size={13} /></div>
          <div className="phone-section-title"><b>Ubicaciones</b><span>Gestionar</span></div>
          <div className="space-grid space-grid--locations">
            {spaces.map(({ icon: Icon, name, count }, index) => (
              <div className="space-card" key={name} style={{ '--card-delay': `${700 + index * 110}ms` }}>
                <Icon strokeWidth={1.6} /><b>{name}</b><small>{count}</small>
              </div>
            ))}
          </div>
          <div className="phone-nav"><span>Inicio</span><span>Inventario</span><b>＋</b><span>Compra</span><span>Ajustes</span></div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ label, title, copy, center = false }) {
  return (
    <div className={`section-title ${center ? 'section-title--center' : ''}`}>
      <p className="eyebrow eyebrow--dark">{label}</p><h2>{title}</h2>{copy && <p>{copy}</p>}
    </div>
  );
}

export default function OrdivyPage() {
  return (
    <main>
      <MotionController />
      <section className="hero" id="inicio">
        <div className="hero-noise" />
        <header className="site-header shell">
          <Logo light />
          <nav aria-label="Navegación principal">
            <a href="#inicio">Inicio</a><a href="#funciones">Funciones</a><a href="#premium">Premium</a><a href="#faq">FAQ</a>
          </nav>
          <span className="header-cta"><span className="header-dot" />Próximamente</span>
        </header>
        <div className="hero-layout shell">
          <div className="hero-copy">
            <p className="eyebrow">EL ORDEN MARCA LA DIFERENCIA</p>
            <h1>Todo lo que tienes,<br /><span>siempre bajo control.</span></h1>
            <p className="hero-lede">Organiza cada rincón de casa, encuentra cualquier cosa en segundos y controla cantidades, mínimos y productos en uso desde un solo lugar.</p>
            <a className="hero-cta" href="#idea">Descubrir Ordivy <ArrowDown size={17} /></a>
            <p className="hero-note"><Check size={14} /> Tus datos empiezan contigo, en tu dispositivo.</p>
          </div>
          <PhonePreview />
        </div>
        <a className="scroll-cue" href="#idea" aria-label="Descubrir más"><span>Descubre cómo</span><ArrowDown size={17} /></a>
      </section>

      <section className="idea-section section" id="idea">
        <div className="shell idea-layout">
          <SectionTitle label="MUCHO MÁS QUE UNA DESPENSA" title={<>No solo la comida.<br />Toda tu casa.</>} copy="Ropa, herramientas, documentos, material de oficina, colecciones o productos cotidianos. Ordivy se adapta a lo que tú quieras organizar." />
          <div className="origin-stage">
            <p className="origin-kicker">DE DÓNDE NACE ORDIVY</p>
            <div className="origin-mark" aria-hidden="true">
              <LogoSymbol className="origin-symbol" />
            </div>
            <span className="origin-line" aria-hidden="true" />
            <div className="origin-word">
              <OriginWordmark />
              <div className="origin-meanings">
                <small>Order</small><small>Difference</small><small>Inventory</small>
              </div>
            </div>
            <p className="origin-copy">Ordenar. Marcar la diferencia.<br />Tener el inventario de tu mundo.</p>
          </div>
        </div>
      </section>

      <section className="world-section section">
        <div className="shell world-head">
          <SectionTitle label="UN INVENTARIO PARA TODO" title={<>Cada espacio,<br />perfectamente ubicado.</>} copy="Crea inventarios para casa, oficina o cualquier otro lugar. Dentro de cada uno, organiza por habitaciones, armarios, cajas o zonas reales." />
          <p className="hand-note">Todo encuentra<br />su lugar <span>↘</span></p>
        </div>
        <div className="category-track shell" aria-label="Ejemplos de categorías">
          <div className="category-row">
            {categories.map(([Icon, label], index) => (
              <div className={`category-card category-card--${index + 1}`} key={label}><span className="category-number">0{index + 1}</span><Icon strokeWidth={1.45} /><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="steps-section section">
        <div className="shell steps-layout">
          <div className="steps-visual reveal-on-scroll">
            <div className="scan-card"><span className="scan-line" /><ScanLine /><b>Taladro</b><small>Objeto reconocido</small></div>
            <div className="steps-phone"><div className="mini-notch" /><p>Inventario · Trastero</p><div className="shopping-item"><span>🔧</span><div><b>Taladro</b><small>Estante superior</small></div><Check size={15} /></div><div className="shopping-item"><span>📏</span><div><b>Cinta métrica</b><small>Caja de herramientas</small></div><span className="empty-check" /></div><div className="shopping-item"><span>🔋</span><div><b>Pilas AA</b><small>Cajón pequeño</small></div><span className="empty-check" /></div></div>
            <span className="transfer-arrow">→</span>
          </div>
          <div className="steps-copy">
            <SectionTitle label="ASÍ DE FÁCIL" title={<>De cualquier objeto<br />a su lugar.</>} />
            <ol className="step-list">
              <li><span>01</span><div><h3>Escanea, busca o crea</h3><p>Añade comida, ropa, herramientas o cualquier otra cosa.</p></div></li>
              <li><span>02</span><div><h3>Elige su lugar</h3><p>Asigna el inventario, la ubicación y los datos que te importan.</p></div></li>
              <li><span>03</span><div><h3>Deja que Ordivy recuerde</h3><p>Consulta, repón y aprovecha sin depender de tu memoria.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="features-section section" id="funciones">
        <div className="shell">
          <SectionTitle label="FUNCIONES PRINCIPALES" title={<>Cuatro gestos.<br />Una casa más fácil.</>} copy="Ordivy acompaña el recorrido completo: guardar, encontrar, reponer y aprovechar mejor lo que ya tienes." />
          <div className="feature-grid">
            {features.map(({ icon: Icon, number, title, text }) => (
              <article className="feature-card reveal-on-scroll" key={title}><span className="feature-number">{number}</span><span className="feature-icon"><Icon strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="feature-arrow" /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section section" id="premium">
        <div className="shell premium-panel">
          <div className="premium-copy">
            <p className="eyebrow">ORDIVY PREMIUM</p><h2>Más orden.<br />Todavía menos esfuerzo.</h2>
            <p>Para hogares con más espacios, más personas y muchas cosas que recordar.</p>
            <ul><li><Check /> Inventarios ilimitados</li><li><Check /> Avisos inteligentes</li><li><Check /> Espacios compartidos</li></ul>
            <a className="light-button" href="#descargar">Descubrir Premium <ArrowRight size={17} /></a>
          </div>
          <div className="premium-art" aria-hidden="true"><div className="premium-ring ring-a" /><div className="premium-ring ring-b" /><Sparkles /><span>Todo fluye<br />cuando cada cosa<br />tiene su lugar.</span></div>
        </div>
      </section>

      <section className="privacy-section section" id="privacidad">
        <div className="shell privacy-panel">
          <div className="privacy-icon"><ShieldCheck /></div>
          <div><p className="eyebrow eyebrow--dark">TUS DATOS, TU TRANQUILIDAD</p><h2>Privacidad por diseño.</h2><p>Tu inventario es tuyo. Pedimos únicamente los permisos necesarios y explicamos para qué se utiliza cada uno.</p></div>
          <div className="privacy-points"><div><LockKeyhole /><span><b>Control siempre contigo</b><small>Decide qué compartes y cuándo.</small></span></div><div><BellRing /><span><b>Solo avisos útiles</b><small>Sin ruido ni notificaciones innecesarias.</small></span></div></div>
        </div>
      </section>

      <section className="faq-section section" id="faq">
        <div className="shell faq-layout">
          <SectionTitle label="PREGUNTAS FRECUENTES" title={<>Todo claro<br />desde el principio.</>} copy="Lo esencial sobre Ordivy, sin letra pequeña." />
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="download-section section" id="descargar">
        <div className="shell download-panel">
          <div className="download-copy"><Sparkles /><h2>Recuerda lo que tienes.<br />Compra solo lo que necesitas.</h2><p>El orden marca la diferencia.</p><div className="store-row"><DownloadBadge store="App Store" dark /><DownloadBadge store="Google Play" dark /></div></div>
          <PhonePreview compact />
        </div>
      </section>

      <footer className="footer shell">
        <div><Logo /><p>El orden marca la diferencia.</p></div>
        <div><b>Producto</b><a href="#funciones">Funciones</a><a href="#premium">Premium</a><a href="#faq">FAQ</a></div>
        <div><b>Legal</b><a href="#privacidad">Privacidad</a><a href="#">Términos de uso</a><a href="#">Contacto</a></div>
        <p className="copyright">© 2026 Ordivy<br />Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
