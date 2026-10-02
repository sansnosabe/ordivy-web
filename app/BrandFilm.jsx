"use client";

import { useState } from "react";
import OriginalWordmark from "./OriginalWordmark";
import CategoryFace from "./CategoryFace";

const categoriesEs = [
  ["herramientas", "Herramientas"],
  ["comida", "Comida"],
  ["colecciones", "Colecciones"],
  ["oficina", "Oficina"],
  ["cuidado", "Cuidado personal"],
  ["hogar", "Hogar"],
  ["botiquin", "Botiquín"],
  ["ropa", "Ropa"],
];
const categoriesEn = [
  ["herramientas", "Tools"],
  ["comida", "Food"],
  ["colecciones", "Collections"],
  ["oficina", "Office"],
  ["cuidado", "Personal care"],
  ["hogar", "Home"],
  ["botiquin", "Medicine"],
  ["ropa", "Clothes"],
];

export default function BrandFilm({ children, locale = "es" }) {
  const english = locale === "en";
  const [chapter, setChapter] = useState("story");
  const tabs = english ? [["story", "Our story"], ["name", "The name"], ["categories", "The categories"]] : [["story", "La historia"], ["name", "El nombre"], ["categories", "Las categorías"]];
  const categories = english ? categoriesEn : categoriesEs;
  return <section className="brand-viewport" id={english ? "story" : "marca"} aria-label={english ? "The story behind Ordivy" : "De dónde nace Ordivy: nuestra historia"}>
    <div className="brand-viewport-inner v2-shell">
      <header className="brand-viewport-head"><p className="v2-eyebrow v2-eyebrow--dark">{english ? "IT ALL STARTS AT HOME" : "TODO EMPIEZA EN CASA"}</p><h2>{english ? "Where Ordivy began." : "De dónde nace Ordivy."}</h2></header>
      <div className="brand-chapters" role="tablist" aria-label={english ? "Explore our story" : "Explora nuestra historia"}>{tabs.map(([id, label])=><button key={id} id={"brand-tab-"+id} type="button" role="tab" aria-selected={chapter===id} aria-controls={"brand-panel-"+id} onClick={()=>setChapter(id)}>{label}</button>)}</div>
      <div className="brand-chapter" role="tabpanel" id={"brand-panel-"+chapter} aria-labelledby={"brand-tab-"+chapter} key={chapter}>
        {chapter === "story" ? <div className="brand-story-content"><div><p>{english ? "It started with searching for things I knew I owned but could not remember where I had put them." : "Todo empezó buscando cosas que sabía que tenía, pero no recordaba dónde había guardado."}</p><p>{english ? "I began organizing everything in sections and wanted to record what I had, where I kept it, and how it was arranged." : "Empecé a organizar mis cosas por partes y quise dejarlo todo anotado: qué tenía, dónde lo guardaba y cómo lo había organizado."}</p><p>{english ? "That became Ordivy: an app to record and organize my things, check what I own, and find exactly where everything is." : "De ahí nació Ordivy: una app donde tener mis cosas registradas y organizadas, consultar lo que tengo y preguntarle dónde encontrar lo que busco."}</p></div><div className="brand-story-logo" aria-hidden="true">{children}</div></div> : null}
        {chapter === "name" ? <div className="brand-name-content"><div className="brand-name-mark"><OriginalWordmark /></div><div className="brand-name-definitions">{(english ? [["Order", "Bring order to what you own."], ["Difference", "Buy better. Waste less."], ["Inventory", "Know what you own and where it is."]] : [["Order", "Poner orden en lo que tienes."], ["Difference", "Comprar mejor. Desperdiciar menos."], ["Inventory", "Saber qué tienes y dónde está."]]).map(([name, description])=><div key={name}><h3>{name}</h3><p>{description}</p></div>)}</div></div> : null}
        {chapter === "categories" ? <ul className="brand-viewport-categories">{categories.map(([id,name])=><li key={id}><CategoryFace id={id} name={name} /></li>)}</ul> : null}
      </div>
      <footer className="brand-viewport-outro"><strong>{english ? "Order makes the difference." : "El orden marca la diferencia."}</strong><span>{english ? "Remember what you own. Buy only what you need." : "Recuerda lo que tienes. Compra solo lo que necesitas."}</span></footer>
    </div>
  </section>;
}
