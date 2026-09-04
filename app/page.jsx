import {
  ArrowDown, ArrowRight, ArrowUpRight, BellRing, Box, Check, ChevronDown,
  Clock3, Database, Home, Leaf, ListChecks, LockKeyhole, PackageCheck,
  PackageOpen, Palette, Puzzle, ScanLine, Search, ShieldCheck, Shirt,
  ShoppingCart, Snowflake, Sparkles, Wrench,
} from 'lucide-react';

const logoTiles = [
  ['-24px', '-18px'], ['5px', '-28px'], ['26px', '-10px'], ['-30px', '8px'],
  ['0px', '0px'], ['30px', '16px'], ['-18px', '28px'], ['14px', '24px'],
];

const spaces = [
  { icon: PackageOpen, name: 'Despensa', count: '24 productos' },
  { icon: Snowflake, name: 'Congelador', count: '12 productos' },
  { icon: Box, name: 'Almacén', count: '18 productos' },
  { icon: Wrench, name: 'Herramientas', count: '32 productos' },
];

const categories = [
  [PackageOpen, 'Comida y despensa'], [Snowflake, 'Congelador'], [Home, 'Hogar'],
  [Wrench, 'Herramientas'], [Shirt, 'Ropa y moda'], [Palette, 'Maquillaje'],
  [Database, 'Material de oficina'], [Puzzle, 'Colecciones'],
];

const features = [
  { icon: ScanLine, number: '01', title: 'Escanea', text: 'Añade productos en segundos con el código de barras. Sin formularios eternos.' },
  { icon: ListChecks, number: '02', title: 'Organiza', text: 'Asigna ubicaciones, cantidades y fechas para encontrarlo todo a la primera.' },
  { icon: ShoppingCart, number: '03', title: 'Compra mejor', text: 'Crea tu lista de compra y evita llevarte a casa algo que ya tenías.' },
  { icon: Leaf, number: '04', title: 'Desperdicia menos', text: 'Recibe avisos a tiempo y aprovecha mejor cada producto que compras.' },
];

const faqs = [
  ['¿Ordviy es gratis?', 'Sí. Puedes empezar gratis y organizar tus espacios principales. Premium amplía los límites y añade automatizaciones avanzadas.'],
  ['¿Necesito etiquetar todos mis productos?', 'No. Puedes escanear un código, buscar el producto o añadirlo manualmente. Tú eliges el nivel de detalle.'],
  ['¿Dónde se guardan mis datos?', 'Tu información permanece vinculada a tu dispositivo y Ordviy pide únicamente los permisos necesarios para cada función.'],
  ['¿Puedo tener varios inventarios?', 'Sí. Puedes separar tu casa, trastero, oficina o cualquier colección y mantener cada espacio ordenado.'],
];

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="Ordviy, inicio">
      <span className="brand-mark" aria-hidden="true">
        {logoTiles.map(([x, y], index) => <span key={index} style={{ '--tile-x': x, '--tile-y': y, '--tile-delay': `${index * 65}ms` }} />)}
      </span>
      <span className="brand-name">ordviy</span>
    </a>
  );
}

function DownloadBadge({ store, dark = false }) {
  return (
    <a className={`store-badge ${dark ? 'store-badge--dark' : ''}`} href="#descargar" aria-label={`Descargar Ordviy en ${store}`}>
      <span className="store-symbol" aria-hidden="true">{store === 'App Store' ? '●' : '▶'}</span>
      <span><small>Disponible en</small>{store}</span>
    </a>
  );
}

function PhonePreview({ compact = false }) {
  return (
    <div className={`phone-stage ${compact ? 'phone-stage--compact' : ''}`} aria-label="Vista previa de la aplicación Ordviy">
      {!compact && <><div className="orbit orbit--one" /><div className="orbit orbit--two" /></>}
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="phone-status"><b>9:41</b><span>● ◒ ▰</span></div>
          <Logo />
          <div className="search-pill"><Search size={11} /> Buscar en tu inventario...</div>
          <div className="space-grid">
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

export default function OrdviyPage() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-noise" />
        <header className="site-header shell">
          <Logo light />
          <nav aria-label="Navegación principal">
            <a href="#idea">La idea</a><a href="#funciones">Funciones</a><a href="#premium">Premium</a><a href="#faq">FAQ</a>
          </nav>
          <a className="header-cta" href="#descargar">Descargar <ArrowRight size={15} /></a>
        </header>
        <div className="hero-layout shell">
          <div className="hero-copy">
            <p className="eyebrow">EL ORDEN MARCA LA DIFERENCIA</p>
            <h1>Organiza tu vida.<br /><span>Sin complicaciones.</span></h1>
            <p className="hero-lede">Todo lo que tienes, justo donde esperas encontrarlo. Ordviy te ayuda a comprar mejor y desperdiciar menos.</p>
            <div className="store-row"><DownloadBadge store="App Store" /><DownloadBadge store="Google Play" /></div>
            <p className="hero-note">Gratis para empezar · Sin registros interminables</p>
          </div>
          <PhonePreview />
        </div>
        <a className="scroll-cue" href="#idea" aria-label="Descubrir más"><span>Descubre cómo</span><ArrowDown size={17} /></a>
      </section>

      <section className="idea-section section" id="idea">
        <div className="shell idea-layout">
          <SectionTitle label="NUESTRA IDEA" title={<>El orden también<br />puede sentirse bien.</>} copy="Ordviy no es una lista más. Es una forma visual, sencilla y tranquila de saber qué tienes y dónde está." />
          <div className="name-system reveal-on-scroll">
            <div className="name-title"><span>DE DÓNDE NACE ORDVIY</span><strong>OR + DI + VY = ORDVIY</strong></div>
            <div className="name-cards">
              <article><span className="mini-symbol">＝</span><h3>OR — Order</h3><p>Un lugar para encontrar, usar y gestionar con menos esfuerzo.</p></article>
              <article><span className="mini-symbol">◇</span><h3>DI — Difference</h3><p>Comprar con intención y reducir lo que termina sobrando.</p></article>
              <article><span className="mini-symbol">□</span><h3>VY — Inventory</h3><p>Tu inventario bajo control, sin convertirlo en otra tarea.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="world-section section">
        <div className="shell world-head">
          <SectionTitle label="UN INVENTARIO PARA TODO" title={<>Tu mundo,<br />a tu manera.</>} copy="Desde la despensa hasta una colección. Crea tantos espacios como necesites y reconoce cada uno de un vistazo." />
          <p className="hand-note">Todo encuentra<br />su lugar <span>↘</span></p>
        </div>
        <div className="category-track" aria-label="Ejemplos de categorías">
          <div className="category-row">
            {[...categories, ...categories].map(([Icon, label], index) => (
              <div className="category-card" key={`${label}-${index}`}><Icon strokeWidth={1.45} /><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="steps-section section">
        <div className="shell steps-layout">
          <div className="steps-visual reveal-on-scroll">
            <div className="scan-card"><span className="scan-line" /><ScanLine /><b>Leche entera</b><small>Producto reconocido</small></div>
            <div className="steps-phone"><div className="mini-notch" /><p>Lista de la compra</p><div className="shopping-item"><span>🥛</span><div><b>Leche</b><small>1 unidad</small></div><Check size={15} /></div><div className="shopping-item"><span>🍅</span><div><b>Tomate</b><small>500 g</small></div><span className="empty-check" /></div><div className="shopping-item"><span>🍝</span><div><b>Pasta</b><small>2 paquetes</small></div><span className="empty-check" /></div></div>
            <span className="transfer-arrow">→</span>
          </div>
          <div className="steps-copy">
            <SectionTitle label="ASÍ DE FÁCIL" title={<>De la compra<br />al orden.</>} />
            <ol className="step-list">
              <li><span>01</span><div><h3>Escanea o busca</h3><p>Añade cada producto en unos segundos.</p></div></li>
              <li><span>02</span><div><h3>Guárdalo en su sitio</h3><p>Indica dónde está y cuánto te queda.</p></div></li>
              <li><span>03</span><div><h3>Deja que Ordviy recuerde</h3><p>Consulta, repón y aprovecha sin depender de tu memoria.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="features-section section" id="funciones">
        <div className="shell">
          <SectionTitle center label="FUNCIONES PRINCIPALES" title={<>Pequeñas acciones.<br />Grandes ventajas.</>} />
          <div className="feature-grid">
            {features.map(({ icon: Icon, number, title, text }) => (
              <article className="feature-card reveal-on-scroll" key={title}><span className="feature-number">{number}</span><span className="feature-icon"><Icon strokeWidth={1.5} /></span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="feature-arrow" /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section section" id="premium">
        <div className="shell premium-panel">
          <div className="premium-copy">
            <p className="eyebrow">ORDVIY PREMIUM</p><h2>Más orden.<br />Todavía menos esfuerzo.</h2>
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
          <SectionTitle label="PREGUNTAS FRECUENTES" title={<>Todo claro<br />desde el principio.</>} copy="Lo esencial sobre Ordviy, sin letra pequeña." />
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
        <p className="copyright">© 2026 Ordviy<br />Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
