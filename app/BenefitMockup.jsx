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
  return <i className="v2-app-product-thumb" aria-hidden="true">{icon === "🔌" ? <svg viewBox="0 0 80 80" className="v2-cable-image"><path d="M24 26v12c0 22 32 22 32 0V26" fill="none" stroke="#595364" strokeWidth="6" strokeLinecap="round"/><rect x="17" y="9" width="14" height="20" rx="4" fill="#6f677b"/><rect x="20" y="5" width="8" height="8" rx="2" fill="#b4b2bd"/><rect x="49" y="9" width="14" height="20" rx="4" fill="#6f677b"/><rect x="52" y="5" width="8" height="8" rx="2" fill="#b4b2bd"/><ellipse cx="40" cy="69" rx="22" ry="3" fill="#75556d" opacity=".1"/></svg> : <span>{icon}</span>}</i>;
}

function ProductHeader({ copy, quantity = false }) {
  return <div className="v2-app-product-head">
    <ProductThumb icon={copy.icon} />
    <span><strong>{copy.product}</strong><small>{copy.productMeta}</small><em><MapPin /> {copy.location}</em></span>
    {quantity && <b>4<small>{copy.units.toLowerCase()}</small></b>}
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
      <style>{".v2-benefits article{min-height:0}.v2-benefit-proof{margin-top:22px;min-height:0;align-content:start;gap:12px}.v2-benefit-proof--scan .v2-app-search-result{padding:12px;gap:10px}.v2-benefit-proof--scan .v2-app-product-thumb{width:46px;height:54px;background:#f3f0f5;border-radius:10px;flex-shrink:0}.v2-cable-image{width:42px!important;height:42px!important}.v2-app-results-label{color:#887886;font-size:10px;font-weight:650}.v2-benefit-proof--scan .v2-app-search-result>span strong{font-size:12px}.v2-benefit-proof--scan .v2-app-search-result>span small{font-size:10px;margin-top:4px}.v2-app-search-result em{display:flex;align-items:center;gap:3px;font-style:normal;font-size:9px;color:#75556d;margin-top:6px}.v2-app-search-result em svg{width:11px;height:11px}.v2-app-add-preview{display:flex;gap:9px;align-items:center;border-top:1px solid #e7dfe7;padding-top:12px;font-size:10px;color:#827480}.v2-app-add-preview>b{padding:5px 9px;border:1px solid #ded4df;border-radius:6px;color:#75556d;background:#fff}.v2-app-add-preview>strong{margin-left:auto;background:#75556d;color:#fff;padding:9px 12px;border-radius:8px;font-size:10px}@media(max-width:560px){.v2-benefits article{min-height:0}.v2-benefit-proof{margin-top:18px}.v2-app-mini-head>span{font-size:9px}.v2-app-mini-head>strong{font-size:13px}.v2-app-segment>span{font-size:9px;padding:10px 5px}.v2-app-search{padding:11px;font-size:12px}}"}</style>
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
        <span className="v2-app-results-label">{locale === "es" ? "Producto encontrado" : "Product found"}</span>
        <div className="v2-app-search-result"><ProductThumb icon={copy.icon} /><span><strong>{copy.product}</strong><small>{copy.productMeta}</small><em><MapPin /> {copy.location}</em></span><ChevronRight /></div>
        <div className="v2-app-add-preview"><span>{locale === "es" ? "Cantidad" : "Quantity"}</span><b>1</b><strong>{locale === "es" ? "Añadir producto" : "Add product"}</strong></div>
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
