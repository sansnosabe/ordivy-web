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
  {
    number: "01", Icon: ScanLine, title: "Record what comes in", text: "Scan the barcode or search by name. Ordivy finds the product and you only confirm the quantity.",
    label: "PRODUCT FOUND", value: "Tuna in olive oil", note: "Pincha · 400 g",
  },
  {
    number: "02", Icon: MapPin, title: "Say where you keep it", text: "Assign a location that makes sense in your home: a room, cupboard, shelf, box, or drawer.",
    label: "LOCATION", value: "Kitchen › Pantry", note: "Tinned food shelf · 4 units",
  },
  {
    number: "03", Icon: ShoppingBasket, title: "Let Ordivy watch the minimum", text: "Choose how many units you always want available. Drop below that number and the item appears on your shopping list.",
    label: "AUTOMATIC RESTOCK", value: "4 left · minimum 5", note: "1 missing from the shopping list",
  },
];

const inventorySpaces = [
  ["Pantry", "Kitchen › Tinned food shelf", "Tuna in olive oil · 4 units", "1 to restock"],
  ["Freezer", "Kitchen › Bottom drawer", "Vegetables · 3 bags", "Everything located"],
  ["Wardrobe", "Bedroom › Top shelf", "Winter clothes", "Stored by season"],
  ["Medicine cabinet", "Bathroom › Cabinet", "8 products · 2 expire soon", "Check dates"],
  ["Storage room", "Box 04 › Tools", "Drill and accessories", "12 pieces"],
  ["Office", "Drawer unit › Supplies", "Paper, ink, and cables", "2 low-stock items"],
  ["Collections", "Display case › Shelf 03", "Editions and pieces", "36 recorded"],
  ["Garage", "Metal cupboard", "Cleaning and maintenance", "5 locations"],
];

const faqs = [
  [
    "What can I organize with Ordivy?",
    "Almost anything: food, clothes, tools, household products, office supplies, or collections.",
  ],
  [
    "Do I have to add everything at once?",
    "No. Start with one small space and add products as you use or buy them. Ordivy adapts to your pace.",
  ],
  [
    "Can I create several inventories?",
    "Yes. You can separate your home, office, storage room, or any other space and organize each one with its own locations.",
  ],
  [
    "Where is my information stored?",
    "In this first version, your inventories are stored on your device. Your account protects Premium access, but inventory sync is not active yet.",
  ],
  [
    "Which devices will be supported?",
    "The first release is built for iPhone. Android and a dedicated iPad experience will come later.",
  ],
  [
    "How does Premium work at launch?",
    "During this first phase, Premium is activated through Ordivy invitations. In-app purchases and subscriptions are not available yet.",
  ],
];

const screenshots = [
  ["/screenshots/01-inicio.jpg", "Home", "See which space has low stock and which products are currently in use."],
  ["/screenshots/02-inventario-general.jpg", "Inventory", "Add, remove, move, set a minimum, or check expiry from the product card."],
  ["/screenshots/04-buscar-producto.jpg", "Search", "Reuse products you saved before or browse suggestions from Open Food Facts."],
  ["/screenshots/05-lista-compra.jpg", "Shopping", "Calculate how much is missing to restore your minimums and tick items off as you shop."],
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
    <a className={`v2-brand ${light ? "v2-brand--light" : ""}`} href="#home" aria-label="Ordivy, home">
      <LogoSymbol />
      <span>ordivy</span>
    </a>
  );
}

function StoreBadge() {
  return (
    <span className="v2-store" aria-label="Ordivy is coming soon to the App Store">
      <i aria-hidden="true">●</i>
      <span>
        <small>Coming soon to the</small>
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
          alt="Ordivy home screen showing the Kitchen inventory and its locations"
          width={1242}
          height={2688}
          priority
          sizes="(max-width: 560px) 286px, 304px"
        />
      </div>
    </div>
  );
}

export default function OrdivyLandingEn() {
  return (
    <main className="v2-site">
      <MotionV2 />
      <section className="v2-hero" id="home">
        <div className="v2-hero-glow" aria-hidden="true" />
        <header className="v2-header v2-shell">
          <Logo light />
          <nav aria-label="Main navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#faq">Questions</a>
          </nav>
          <div className="v2-header-actions">
            <Link className="v2-lang-switch" href="/" hrefLang="es" aria-label="Ver la web en español">ES</Link>
            <a className="v2-header-cta" href="#download">Coming soon <ArrowRight size={16} /></a>
          </div>
        </header>
        <div className="v2-hero-layout v2-shell">
          <div className="v2-hero-copy" data-hero>
            <p className="v2-eyebrow">YOUR PERSONAL INVENTORY</p>
            <h1>
              Knowing what you own changes <em>what you buy.</em>
            </h1>
            <p className="v2-hero-lede">
              Ordivy brings order to your belongings so you can find everything, restock on time, and stop buying what you already have.
            </p>
            <div className="v2-hero-actions">
              <a className="v2-primary" href="#download">
                View release <ArrowRight size={18} />
              </a>
              <a className="v2-text-link" href="#how-it-works">
                See how it works <ArrowDown size={16} />
              </a>
            </div>
            <p className="v2-trust">
              <ShieldCheck size={16} /> Designed so control starts on your device.
            </p>
          </div>
          <AppScreen />
        </div>
        <div className="v2-marquee" aria-hidden="true">
          <div className="v2-ticker-track">
            {[0, 1, 2, 3].map((copy) => (
              <div className="v2-ticker-group" key={copy}>
                {["FIND", "ORGANIZE", "SCAN", "SAVE", "LOCATE", "RESTOCK", "PLAN", "REUSE", "SAVE MONEY", "MAKE IT LAST"].map((word) => (
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

      <BrandFilm locale="en"><LogoSymbol /></BrandFilm>
      <section className="v2-statement v2-section" id="how-it-works">
        <div className="v2-shell v2-statement-head">
          <div data-reveal-v2>
            <p className="v2-eyebrow v2-eyebrow--dark">ONE PRODUCT. THREE DECISIONS.</p>
            <h2>From putting it away to knowing when to buy it.</h2>
          </div>
          <p data-reveal-v2>
            Add a product once. From then on, Ordivy remembers where it is, how many units remain, and when you need to restock it.
          </p>
        </div>
        <div className="v2-shell v2-benefits">
          {benefits.map(({ number, Icon, title, text, label, value, note }, index) => (
            <article data-reveal-v2 key={number}>
              <span className="v2-benefit-num">STEP {number}</span>
              <i>
                <Icon />
              </i>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="v2-benefit-proof">
                <small>{label}</small>
                <strong>{value}</strong>
                <span>{note}</span>
              </div>
              {index < benefits.length - 1 && <ArrowRight className="v2-benefit-arrow" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </section>

      <section className="v2-search-story v2-section" id="features">
        <div className="v2-shell v2-search-layout">
          <div className="v2-search-demo" data-reveal-v2>
            <p>SEARCH IN ORDIVY</p>
            <div className="v2-big-search">
              <Search />
              <span>drill</span>
              <i>3 results</i>
            </div>
            <div className="v2-results">
              {[
                ["🔧", "Cordless drill", "Storage room · Top shelf", "1 unit"],
                ["🔋", "Drill battery", "Storage room · Tool box", "2 units"],
                ["📦", "Drill bits", "Garage · Small cupboard", "12 units"],
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
            <p className="v2-eyebrow v2-eyebrow--dark">A SEARCH THAT ANSWERS</p>
            <h2>Stop searching drawers. Search Ordivy.</h2>
            <p>Type “drill” and you do not get a generic list: you see the item you own, its exact location, and the quantity available.</p>
            <ul>
              <li>
                <Check /> “Storage room · Top shelf”, instead of just “at home”
              </li>
              <li>
                <Check /> Tool, battery, and accessories in one search
              </li>
              <li>
                <Check /> Quantities visible before buying another one
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="v2-inventory v2-section">
        <div className="v2-shell v2-inventory-head" data-reveal-v2>
          <p className="v2-eyebrow">THE REAL STRUCTURE OF YOUR HOME</p>
          <h2>
            Your home is not a flat list.
            <br />
            Neither is Ordivy.
          </h2>
          <p>Create inventories, locations, and nested locations using the names you actually use: Kitchen, Pantry, tinned food shelf.</p>
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
            <p className="v2-eyebrow v2-eyebrow--dark">THE COMPLETE LOOP, IN THE APP</p>
            <h2>Check, update, restock. No parallel spreadsheets.</h2>
          </div>
          <p>Home summarizes your household; Inventory lets you act; Search finds; Shopping collects what is missing.</p>
        </div>
        <div className="v2-shell v2-screen-grid">
          {screenshots.map(([src, title, text]) => (
            <article key={src} data-reveal-v2>
              <div className="v2-screen-shot">
                <Image src={src} alt={`Ordivy ${title} screen`} width={1242} height={2688} sizes="(max-width: 560px) 78vw, 260px" />
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
            <p className="v2-eyebrow v2-eyebrow--dark">WHAT IS STORED, AND WHERE</p>
            <h2>Your belongings do not leave home unless you decide.</h2>
          </div>
          <div className="v2-privacy-facts">
            <span><b>Inventory</b> stored on your iPhone in this first version.</span>
            <span><b>Account</b> used to protect your access and Premium status.</span>
            <span><b>Camera</b> activated only when you choose to scan a barcode.</span>
          </div>
        </div>
      </section>

      <section className="v2-faq v2-section" id="faq">
        <div className="v2-shell v2-faq-layout">
          <div data-reveal-v2>
            <p className="v2-eyebrow v2-eyebrow--dark">FREQUENTLY ASKED QUESTIONS</p>
            <h2>Before you start.</h2>
            <p>The essentials about Ordivy, explained clearly.</p>
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

      <section className="v2-download" id="download">
        <div className="v2-download-orb v2-download-orb--a" />
        <div className="v2-download-orb v2-download-orb--b" />
        <div className="v2-shell v2-download-content" data-reveal-v2>
          <Logo light />
          <Sparkles />
          <h2>
            Buy less.
            <br />
            Find more.
          </h2>
          <p>Your home, inventory, and shopping list in one place.</p>
          <span className="v2-launch-status"><i /> iPhone version submitted for review</span>
          <div className="v2-store-row">
            <StoreBadge />
          </div>
        </div>
      </section>
      <footer className="v2-footer v2-shell">
        <Logo />
        <p>© 2026 Ordivy. All rights reserved.</p>
        <nav aria-label="Footer links">
          <Link href="/en/support">Support</Link>
          <Link href="/en/privacy">Privacy</Link>
          <Link href="/en/terms">Terms</Link>
          <Link href="/" hrefLang="es">Español</Link>
          <a href="#home">Back to top ↑</a>
        </nav>
      </footer>
    </main>
  );
}






