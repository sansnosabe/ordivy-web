import { AlertTriangle, ChevronRight, MapPin, ScanLine, Search, ShoppingBasket } from "lucide-react";

const content = {
  es: {
    search: "BUSCAR", inventory: "INVENTARIO", kitchen: "Cocina",
    scan: "Escanear código", searchProduct: "Buscar producto", query: "bonito",
    product: "Bonito en aceite", productMeta: "Pincha · 400 g", location: "Despensa",
    lowStock: "Stock bajo", units: "Unidades", threshold: "Avisarme si quedan menos de",
    shopping: "Falta 1 en Compra",
  },
  en: {
    search: "SEARCH", inventory: "INVENTORY", kitchen: "Kitchen",
    scan: "Scan barcode", searchProduct: "Search product", query: "tuna",
    product: "Tuna in olive oil", productMeta: "Pincha · 400 g", location: "Pantry",
    lowStock: "Low stock", units: "Units", threshold: "Notify me when fewer than",
    shopping: "1 missing from Shopping",
  },
};

function ProductThumb({ icon }) {
  return <i className="v2-app-product-thumb" aria-hidden="true"><span>{icon}</span></i>;
}

function ProductHeader({ copy, quantity = false }) {
  return <div className="v2-app-product-head">
    <ProductThumb icon={copy.icon} />
    <span><strong>{copy.product}</strong><small>{copy.productMeta}</small><em><MapPin /> {copy.location}</em></span>
    {quantity && <b>4/5<small>{copy.units.toLowerCase()}</small></b>}
  </div>;
}

export default function BenefitMockup({ kind, locale = "es" }) {
  const examples = locale === "es" ? {
    scan: { kitchen: "Tecnología", query: "cable", product: "Cable USB-C", productMeta: "1 m", location: "Cajón de cables", icon: "🔌" },
    location: { kitchen: "Ropa", query: "camiseta", product: "Camiseta de algodón", productMeta: "Talla M", location: "Armario", icon: "👕" },
    restock: { kitchen: "Material de oficina", query: "cuaderno", product: "Cuaderno A5", productMeta: "80 hojas", location: "Estantería", icon: "📓" },
  } : {
    scan: { kitchen: "Technology", query: "cable", product: "USB-C cable", productMeta: "1 m", location: "Cable drawer", icon: "🔌" },
    location: { kitchen: "Clothes", query: "t-shirt", product: "Cotton T-shirt", productMeta: "Size M", location: "Wardrobe", icon: "👕" },
    restock: { kitchen: "Office supplies", query: "notebook", product: "A5 notebook", productMeta: "80 pages", location: "Shelf", icon: "📓" },
  };
  const copy = { ...content[locale], ...examples[kind] };

  return (
    <div className={`v2-benefit-proof v2-benefit-proof--${kind}`} aria-hidden="true">
      <div className="v2-app-mini-head">
        <span>{kind === "scan" ? copy.search : copy.inventory}</span>
        <strong>{copy.kitchen}</strong>
      </div>

      {kind === "scan" && <>
        <div className="v2-app-segment">
          <span><ScanLine /> {copy.scan}</span>
          <span className="is-active"><Search /> {copy.searchProduct}</span>
        </div>
        <div className="v2-app-search"><Search /><span>{copy.query}</span></div>
        <div className="v2-app-search-result"><ProductThumb icon={copy.icon} /><span><strong>{copy.product}</strong><small>{copy.productMeta}</small></span><ChevronRight /></div>
      </>}

      {kind === "location" && <div className="v2-app-product-card">
        <ProductHeader copy={copy} quantity />
        <div className="v2-app-location-row"><span><MapPin /> {locale === "es" ? "Ubicación" : "Location"}</span><strong>{copy.location}</strong><ChevronRight /></div>
      </div>}

      {kind === "restock" && <div className="v2-app-product-card v2-app-product-card--open">
        <div className="v2-app-stock-label"><AlertTriangle /> {copy.lowStock}</div>
        <ProductHeader copy={copy} />
        <div className="v2-app-counter"><strong>{copy.units}</strong><span><i>−</i><b>4</b><i>+</i></span></div>
        <div className="v2-app-counter v2-app-counter--minimum"><strong>{copy.threshold}</strong><span><i>−</i><b>5</b><i>+</i></span></div>
        <div className="v2-app-shopping"><ShoppingBasket /> {copy.shopping}</div>
      </div>}
    </div>
  );
}
