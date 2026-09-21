import { MapPin, ScanLine, ShoppingBasket } from "lucide-react";

const content = {
  es: {
    section: "INVENTARIO",
    scanStatus: "Escaneo completado",
    product: "Bonito en aceite",
    productMeta: "Pincha · 400 g",
    found: "Producto encontrado",
    inventory: "Inventario",
    inventoryValue: "Cocina",
    location: "Ubicación",
    locationValue: "Despensa",
    saved: "Bonito · 4 unidades",
    units: "Unidades",
    warning: "Avísame si quedan menos de",
    shopping: "Falta 1 en Compra",
  },
  en: {
    section: "INVENTORY",
    scanStatus: "Scan complete",
    product: "Tuna in olive oil",
    productMeta: "Pincha · 400 g",
    found: "Product found",
    inventory: "Inventory",
    inventoryValue: "Kitchen",
    location: "Location",
    locationValue: "Pantry",
    saved: "Tuna · 4 units",
    units: "Units",
    warning: "Notify me when fewer than",
    shopping: "1 missing from Shopping",
  },
};

export default function BenefitMockup({ kind, locale = "es" }) {
  const copy = content[locale];

  return (
    <div className={`v2-benefit-proof v2-benefit-proof--${kind}`} aria-hidden="true">
      <div className="v2-mini-ui-head">
        <b>ORDIVY</b>
        <span>{copy.section}</span>
      </div>

      {kind === "scan" && (
        <>
          <div className="v2-mini-status"><i /> {copy.scanStatus}</div>
          <div className="v2-mini-product">
            <i><ScanLine /></i>
            <span><strong>{copy.product}</strong><small>{copy.productMeta}</small></span>
          </div>
          <div className="v2-mini-confirm">{copy.found}</div>
        </>
      )}

      {kind === "location" && (
        <>
          <div className="v2-mini-location-grid">
            <span><small>{copy.inventory}</small><strong>{copy.inventoryValue}</strong></span>
            <i><MapPin /></i>
            <span><small>{copy.location}</small><strong>{copy.locationValue}</strong></span>
          </div>
          <div className="v2-mini-saved"><i /> {copy.saved}</div>
        </>
      )}

      {kind === "restock" && (
        <>
          <div className="v2-mini-quantity">
            <small>{copy.units}</small>
            <span><i>−</i><strong>4</strong><i>+</i></span>
          </div>
          <div className="v2-mini-threshold">
            <small>{copy.warning}</small>
            <span><i>−</i><strong>5</strong><i>+</i></span>
          </div>
          <div className="v2-mini-shopping"><ShoppingBasket /> {copy.shopping}</div>
        </>
      )}
    </div>
  );
}
