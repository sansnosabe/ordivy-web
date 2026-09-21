"use client";

import { useEffect, useRef } from "react";
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
// Hold the fully visible introduction before moving it aside. Following beats
// keep their relative spacing when the reading time changes.
const INTRO_REVEAL = 0.8;
const INTRO_HOLD = 3.5;
const INTRO_MOVE = INTRO_REVEAL + INTRO_HOLD;
const BRAND_REVEAL = INTRO_MOVE + 10.3;
const BRAND_MOVE_DURATION = 2.4;
const TIMING = {
  introReveal: INTRO_REVEAL,
  introMove: INTRO_MOVE,
  smallStart: INTRO_MOVE + 1.3,
  categoriesStart: BRAND_REVEAL + BRAND_MOVE_DURATION,
  firstCard: INTRO_MOVE + 1.4,
  cardInterval: 0.52,
  entrance: 0.6,
  travelDelay: 1,
  travelDuration: 2.2,
  mosaicFade: BRAND_REVEAL,
  mosaicFadeDuration: BRAND_MOVE_DURATION,
  word: INTRO_MOVE + 10.65,
  wordInterval: 0.55,
  signature: INTRO_MOVE + 12.7,
  promise: INTRO_MOVE + 13.8,
  end: INTRO_MOVE + 16.8,
};
const clamp = (n) => Math.max(0, Math.min(1, n));
const FINAL_STORY_SCALE = 0.76;
const smooth = (n) => {
  const t = clamp(n);
  return t * t * (3 - 2 * t);
};
// Accelerate briefly, then spend most of the journey gently coming to rest.
const settle = (n) => {
  const t = clamp(n);
  return 1 - (1 - t) ** 4 * (1 + 4 * t);
};
const bezier = (a, b, c, d, t) => (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * d;
const cardMotion = [
  { angle: -14, depth: 0.78, x: 0.08, top: true },
  { angle: 9, depth: 0.9, x: 0.56, top: true },
  { angle: -10, depth: 0.84, x: 0.91, top: true },
  { angle: 13, depth: 0.76, x: 0.06, top: false },
  { angle: -8, depth: 0.94, x: 0.31, top: true },
  { angle: 11, depth: 0.82, x: 0.87, top: false },
  { angle: -12, depth: 0.86, x: 0.36, top: false },
  { angle: 8, depth: 0.9, x: 0.62, top: false },
];

export default function BrandFilm({ children, locale = "es" }) {
  const english = locale === "en";
  const categories = english ? categoriesEn : categoriesEs;
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    const pin = root.querySelector(".bf-pin");
    const stage = root.querySelector(".bf-stage");
    const logo = root.querySelector(".bf-symbol");
    const svg = logo.querySelector("svg");
    const tiles = [...svg.children];
    const cards = [...root.querySelectorAll(".bf-card")];
    const cardContents = cards.map((card) => card.querySelector(".bf-card-content"));
    const word = root.querySelector(".bf-word");
    const parts = [...word.querySelectorAll(".v2-origin-part")];
    const definitions = [...root.querySelectorAll(".bf-definition")];
    const scenes = [".bf-opening", ".bf-search", ".bf-order"].map((selector) => root.querySelector(selector));
    const categoryItems = [...root.querySelectorAll(".bf-category-item")];
    const introTitle = root.querySelector(".bf-opening h2");
    const introEyebrow = root.querySelector(".bf-opening > span");
    const introCaption = root.querySelector(".bf-opening > p");
    const story = root.querySelector(".bf-story");
    const titleSlot = root.querySelector(".bf-title-slot");
    const warm = root.querySelector(".bf-warm");
    const backdrop = root.querySelector(".bf-final-backdrop");
    const glow = root.querySelector(".bf-glow");
    const closing = root.querySelector(".bf-closing");
    const outro = root.querySelector(".bf-outro");
    const signature = root.querySelector(".bf-signature");
    const promise = root.querySelector(".bf-promise");
    const scrollCue = root.querySelector(".bf-scroll-cue");
    const progress = root.querySelector(".bf-progress");
    const chapterWords = [...root.querySelectorAll(".bf-chapter-word")];
    const chapterLabels = [...root.querySelectorAll(".bf-progress-label")];
    const progressFill = root.querySelector(".bf-progress-fill");
    const progressCount = root.querySelector(".bf-progress-count");
    const storyParagraphs = [...scenes[2].querySelectorAll("p")];
    const order = [6, 2, 0, 7, 4, 5, 3, 1];
    const boxes = order.map((i) => tiles[i].getBBox());
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    cards.forEach((card, i) => {
      const clip = document.createElementNS(defs.namespaceURI, "clipPath");
      clip.id = `film-piece-${i}`;
      clip.setAttribute("clipPathUnits", "objectBoundingBox");
      const shape = tiles[order[i]].cloneNode(true);
      const b = boxes[i];
      shape.setAttribute("transform", `matrix(${1 / b.width} 0 0 ${1 / b.height} ${-b.x / b.width} ${-b.y / b.height})`);
      clip.append(shape);
      defs.append(clip);
    });
    svg.append(defs);
    let width,
      height,
      mobile,
      size,
      titleWidth,
      titleHeight,
      titleScale,
      wordHeight,
      finalSize,
      finalCy,
      finalTop,
      finalBrandHeight,
      storyHeight,
      storyGap,
      finalStoryTop,
      finalCategoriesTop;
    let mosaicSize, formationStoryLeft, formationStoryTop, formationLogoLeft, formationLogoCx, formationCy;
    const measure = () => {
      width = stage.clientWidth;
      height = stage.clientHeight;
      mobile = window.matchMedia("(max-width: 1000px)").matches;
      const availableHeight = height - outro.offsetHeight - (mobile ? 24 : 32);
      const categoryGap = mobile ? 8 : 10;
      const categorySize = mobile
        ? Math.min(144, (width - categoryGap) / 2)
        : Math.min(126, (width * 0.25 - categoryGap) / 2, Math.max(62, (availableHeight - 48 - categoryGap * 3) / 4));
      scenes[1].style.width = `${categorySize * 2 + categoryGap}px`;
      scenes[1].style.setProperty("--category-label-size", `${Math.min(14, Math.max(12, categorySize * 0.11))}px`);
      story.style.width = `${mobile ? width : Math.min(440, width * 0.36)}px`;
      const definitionWidth = mobile ? width : Math.min(680, width - 2 * Math.max(story.offsetWidth * FINAL_STORY_SCALE, scenes[1].offsetWidth) - 64);
      closing.style.width = `${definitionWidth}px`;
      closing.style.setProperty("--bf-definition-size", `${Math.min(44, Math.max(22, definitionWidth * 0.064))}px`);
      size = mobile ? Math.min(104, width * 0.26) : Math.min(174, Math.max(116, width * 0.125), height * 0.25);
      let initialFont = mobile ? Math.min(60, width / 5.5) : Math.min(128, width * 0.1);
      const finalFont = mobile ? 44 : Math.min(height < 560 ? 48 : 68, width * 0.052);
      introTitle.style.fontSize = `${initialFont}px`;
      if (introTitle.offsetWidth > width * 0.96) {
        initialFont *= (width * 0.96) / introTitle.offsetWidth;
        introTitle.style.fontSize = `${initialFont}px`;
      }
      titleWidth = introTitle.offsetWidth;
      titleHeight = introTitle.offsetHeight;
      titleScale = Math.min(finalFont / initialFont, (mobile ? width : titleSlot.clientWidth) / titleWidth);
      storyGap = mobile ? 28 : window.innerHeight <= 700 ? 16 : 32;
      storyHeight = titleHeight * titleScale + storyGap + scenes[2].offsetHeight;
      const wordWidth = mobile ? Math.min(300, width * 0.9) : Math.min(460, height * 0.64, width * 0.4);
      word.style.width = `${wordWidth}px`;
      word.style.left = `${(width - wordWidth) / 2}px`;
      wordHeight = word.offsetHeight;
      finalSize = mobile ? 154 : Math.min(218, height * 0.3);
      const finalLogoH = (finalSize * 380.57) / 363.88;
      finalBrandHeight = finalLogoH + 12 + wordHeight;
      const lockupHeight = finalBrandHeight + 8 + closing.offsetHeight;
      const mobileStoryBottom = mobile ? 24 + titleHeight * titleScale + scenes[2].offsetHeight + storyGap : 0;
      // The final brand has its own stage above the section's closing statement.
      finalTop = mobile ? Math.max(52, (availableHeight - lockupHeight) / 2) : Math.max(12, (availableHeight - lockupHeight) / 2);
      finalStoryTop = mobile ? 24 : Math.max(24, (availableHeight - storyHeight * FINAL_STORY_SCALE) / 2);
      finalCy = finalTop + finalLogoH / 2;
      finalCategoriesTop = mobile ? finalTop + lockupHeight + 36 : Math.max(24, (availableHeight - scenes[1].offsetHeight) / 2);
      // Start with the story and mosaic balanced as one composition. Only the
      // finished brand takes the screen centre when the sides move apart.
      mosaicSize = mobile ? Math.min(238, width * 0.73) : Math.min(420, width * 0.32, height * 0.65);
      const pairGap = Math.min(112, width * 0.07);
      formationStoryLeft = mobile ? 0 : (width - story.offsetWidth - pairGap - mosaicSize) / 2;
      formationLogoLeft = mobile ? (width - mosaicSize) / 2 : formationStoryLeft + story.offsetWidth + pairGap;
      formationLogoCx = formationLogoLeft + mosaicSize / 2;
      formationCy = mobile ? mobileStoryBottom + 32 + (mosaicSize * 380.57) / 363.88 / 2 : pin.clientHeight / 2 - stage.offsetTop;
      formationStoryTop = mobile ? 24 : Math.max(24, formationCy - storyHeight / 2);
    };
    measure();
    let time = 0,
      frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = (el, opacity, y = 0) => {
      el.style.opacity = opacity;
      el.style.transform = `translateY(${y}px)`;
      el.setAttribute("aria-hidden", opacity < 0.1 ? "true" : "false");
    };
    const draw = () => {
      const t = time;
      const move = smooth((t - TIMING.introMove) / 1.2);
      const center = smooth((t - TIMING.mosaicFade) / TIMING.mosaicFadeDuration);
      const quiet = mobile ? 1 : 1 - (1 - FINAL_STORY_SCALE) * center;
      const currentTitleScale = titleScale * quiet;
      titleSlot.style.height = `${titleHeight * currentTitleScale}px`;
      story.style.left = `${formationStoryLeft * (1 - center)}px`;
      story.style.top = mobile ? "24px" : `${formationStoryTop + (finalStoryTop - formationStoryTop) * center}px`;
      story.style.height = mobile ? "auto" : `${storyHeight * quiet}px`;
      story.style.rowGap = `${storyGap * quiet}px`;
      story.style.gridTemplateRows = mobile ? "" : `${titleHeight * currentTitleScale}px ${scenes[2].offsetHeight * quiet}px`;
      warm.style.opacity = move;
      warm.style.transform = `scale(${1.06 - 0.06 * center})`;
      backdrop.style.opacity = center;
      backdrop.style.transform = `scale(${1.04 - 0.04 * center})`;
      root.classList.toggle("bf-light", move > 0.35);
      show(scenes[0], smooth(t / TIMING.introReveal) * (1 - center));
      const cueFade = 1 - smooth((t - TIMING.introReveal) / 1.4);
      scrollCue.style.opacity = cueFade;
      scrollCue.style.transform = `translateX(-50%) translateY(${(1 - cueFade) * 8}px)`;
      const progressEnter = smooth((t - (TIMING.introMove - 0.8)) / 0.8);
      const openingHeight = mobile ? Math.min(height, window.innerHeight - stage.offsetTop - 24) : height;
      const initialX = (width - titleWidth) / 2,
        initialY = Math.max(48, (openingHeight - titleHeight) / 2);
      const targetX = story.offsetLeft + titleSlot.offsetLeft;
      const targetY = story.offsetTop + titleSlot.offsetTop;
      introTitle.style.transform = `translate(${initialX + (targetX - initialX) * move}px,${initialY + (targetY - initialY) * move + (1 - smooth(t / TIMING.introReveal)) * 20}px) scale(${1 + (currentTitleScale - 1) * move})`;
      introEyebrow.style.top = `${initialY - 48}px`;
      introCaption.style.top = `${initialY + titleHeight + 20}px`;
      show(introEyebrow, 1 - move);
      show(introCaption, 1 - move);
      const rightEnter = smooth((t - TIMING.categoriesStart) / 0.8);
      const leftEnter = smooth((t - TIMING.smallStart) / 0.8);
      show(scenes[1], rightEnter, (1 - rightEnter) * 14);
      show(scenes[2], leftEnter * (1 - center));
      storyParagraphs.forEach((paragraph, index) => {
        const reveal = smooth((t - (TIMING.smallStart + index * 1.15)) / 0.8);
        paragraph.style.opacity = reveal;
        paragraph.style.transform = `translateY(${(1 - reveal) * 22}px)`;
      });
      // Let the brand finish settling in the centre before the categories
      // enter, keeping the movement itself focused on the logo.
      const progressClearance = mobile ? 0 : Math.min(112, width * 0.09);
      scenes[1].style.left = `${mobile ? (width - scenes[1].offsetWidth) / 2 : width - scenes[1].offsetWidth - progressClearance}px`;
      scenes[1].style.top = `${finalCategoriesTop}px`;
      scenes[2].style.transform = `translateY(${(1 - leftEnter) * 24}px) scale(${quiet})`;
      categoryItems.forEach((item, i) => {
        const fade = smooth((t - TIMING.categoriesStart - i * 0.06) / 0.55);
        show(item, fade, (1 - fade) * 8);
      });
      const logoSize = mosaicSize + (finalSize - mosaicSize) * center;
      const logoH = (logoSize * 380.57) / 363.88;
      const cx = formationLogoCx + (width * 0.5 - formationLogoCx) * center;
      const cy = formationCy + (finalCy - formationCy) * center;
      logo.style.width = `${logoSize}px`;
      logo.style.left = `${cx - logoSize / 2}px`;
      logo.style.top = `${cy - logoH / 2}px`;
      // The light gathers with the categories and remains around the finished brand.
      const gathering = smooth((t - TIMING.smallStart) / 3);
      glow.style.width = `${logoSize * 3.3}px`;
      glow.style.height = `${logoH * 3.6}px`;
      glow.style.left = `${cx}px`;
      glow.style.top = `${cy + wordHeight * 0.6 * center}px`;
      glow.style.opacity = gathering * (0.35 + 0.45 * center + 0.2 * Math.sin(center * Math.PI));
      glow.style.transform = `translate(-50%,-50%) scale(${1.14 - 0.14 * center})`;
      const mobileAnchors = [
        [0.01, 0.62],
        [0.99, 0.63],
        [0.5, 0.59],
        [0.01, 0.82],
        [0.99, 0.82],
        [0.01, 0.96],
        [0.5, 0.97],
        [0.99, 0.96],
      ];
      const narrativeTop = story.offsetTop + titleSlot.offsetTop;
      const narrativeBottom = story.offsetTop + scenes[2].offsetTop + scenes[2].offsetHeight;
      // Wide entrances use the space above and below the story. On shorter
      // screens, keep their paths inside the free middle column instead.
      const topLane = Math.max(12, narrativeTop - size - 38);
      const bottomLane = Math.min(height - size - 14, narrativeBottom + 38);
      cards.forEach((card, i) => {
        const start = TIMING.firstCard + i * TIMING.cardInterval;
        const enter = smooth((t - start) / TIMING.entrance);
        const progress = clamp((t - start - TIMING.travelDelay) / TIMING.travelDuration);
        const travel = settle(progress);
        const dissolve = smooth((t - TIMING.mosaicFade) / TIMING.mosaicFadeDuration);
        const motion = cardMotion[i];
        const b = boxes[i];
        const tx = cx - logoSize / 2 + ((b.x - 116.63) / 363.88) * logoSize;
        const ty = cy - logoH / 2 + ((b.y - 116.63) / 380.57) * logoH;
        const targetW = (b.width / 363.88) * logoSize,
          targetH = (b.height / 380.57) * logoH;
        const [ax, ay] = mobileAnchors[i];
        const wide = motion.top ? narrativeTop > size + 60 : height - narrativeBottom > size + 60;
        const ix = mobile
          ? ax * (width - size)
          : wide
            ? motion.x * (width - size)
            : formationLogoLeft + motion.x * Math.max(0, width - size - formationLogoLeft);
        const iy = mobile ? ay * (height - size) : motion.top ? topLane : bottomLane;
        const float = Math.sin(clamp((t - start) / TIMING.travelDelay) * Math.PI) * 9 * (1 - travel);
        const x = bezier(ix, cx - size / 2, tx, tx, travel);
        const y = bezier(iy, iy, iy, ty, travel) + float + (1 - enter) * (motion.top ? -32 : 32);
        const depth = 1 + (motion.depth - 1) * (1 - travel);
        const angle = (motion.angle + Math.sin(enter * Math.PI) * 3) * (1 - travel);
        card.style.width = `${size}px`;
        card.style.height = `${size}px`;
        card.style.transform = `translate(${x}px,${y}px) perspective(900px) rotateX(${angle * 0.5}deg) rotateY(${-angle * 0.4}deg) rotate(${angle}deg) scale(${(1 + (targetW / size - 1) * travel) * depth},${(1 + (targetH / size - 1) * travel) * depth})`;
        card.style.setProperty("--card-air", 1 - travel);
        // Fade the illustrations over a solid brand-colour tile, rather than
        // fading the whole card into the background halfway through the morph.
        cardContents[i].style.opacity = 1 - dissolve;
        card.style.opacity = enter * (1 - smooth((dissolve - 0.94) / 0.06));
        card.style.clipPath = travel > 0.94 ? `url(#film-piece-${i})` : "";
        card.style.borderRadius = travel > 0.94 ? "0" : "20px";
        // The illustrations stay fully visible in their exact SVG silhouettes
        // until all eight have landed and the shared crossfade begins.
        tiles[order[i]].style.opacity = dissolve;
      });
      const wordTop = cy + logoH / 2 + 12;
      word.style.top = `${wordTop}px`;
      word.style.left = `${cx - word.offsetWidth / 2}px`;
      closing.style.top = `${wordTop + wordHeight + 8}px`;
      closing.style.left = `${cx}px`;
      if (mobile) scenes[1].style.top = `${wordTop + wordHeight + 8 + closing.offsetHeight + 36}px`;
      parts.forEach((part, i) => {
        const fade = smooth((t - TIMING.word - i * TIMING.wordInterval) / 1.1);
        show(part, fade, (1 - fade) * 15);
        show(definitions[i], fade, (1 - fade) * 10);
      });
      const outroFade = smooth((t - TIMING.signature + 0.4) / 1.2);
      progress.style.opacity = mobile ? progressEnter * (1 - outroFade) : 1;
      show(outro, outroFade, (1 - outroFade) * 32);
      show(signature, smooth((t - TIMING.signature) / 1.1), (1 - smooth((t - TIMING.signature) / 1.1)) * 8);
      show(promise, smooth((t - TIMING.promise) / 1));
      const chapterTimes = [TIMING.introReveal, TIMING.introMove, TIMING.smallStart + 2.2, TIMING.mosaicFade];
      let activeChapter = 0;
      chapterTimes.forEach((start, index) => {
        if (t >= start) activeChapter = index;
      });
      chapterWords.forEach((word, index) => {
        const start = chapterTimes[index];
        const end = chapterTimes[index + 1] ?? TIMING.end;
        const enter = smooth((t - start) / 0.85);
        const leave = 1 - smooth((t - (end - 0.9)) / 0.9);
        const visibility = enter * leave;
        word.style.opacity = visibility;
        word.style.transform = `translate(-50%,-50%) scale(${0.88 + 0.12 * enter}) translateY(${(1 - enter) * 28}px)`;
      });
      chapterLabels.forEach((label, index) => label.classList.toggle("is-active", index === activeChapter));
      progressCount.textContent = `0${activeChapter + 1}`;
      progressFill.style.setProperty("--bf-progress", clamp((t - TIMING.introReveal) / (TIMING.end - TIMING.introReveal)));
      pin.style.setProperty("--bf-light-x", `${18 + 64 * clamp((t - TIMING.introReveal) / (TIMING.end - TIMING.introReveal))}%`);
    };
    const updateFromScroll = () => {
      frame = 0;
      if (reduced) {
        time = TIMING.end;
      } else {
        const rect = root.getBoundingClientRect();
        const distance = Math.max(1, root.offsetHeight - window.innerHeight);
        const progress = clamp(-rect.top / distance);
        time = TIMING.introReveal + progress * (TIMING.end - TIMING.introReveal);
      }
      draw();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateFromScroll);
    };
    const resize = new ResizeObserver(() => {
      measure();
      updateFromScroll();
    });
    resize.observe(stage);
    resize.observe(closing);
    resize.observe(outro);
    resize.observe(introTitle);
    resize.observe(scenes[1]);
    resize.observe(scenes[2]);
    window.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      defs.remove();
      window.removeEventListener("scroll", onScroll);
      // React can preserve DOM nodes during local edits; leave no old animation styles behind.
      [
        logo,
        word,
        warm,
        backdrop,
        glow,
        closing,
        outro,
        signature,
        promise,
        scrollCue,
        progress,
        progressFill,
        progressCount,
        story,
        ...chapterWords,
        ...storyParagraphs,
        introTitle,
        introEyebrow,
        introCaption,
        titleSlot,
        ...scenes,
        ...categoryItems,
        ...parts,
        ...definitions,
        ...cards,
        ...cardContents,
        ...tiles,
      ].forEach((el) => el.removeAttribute("style"));
      chapterLabels.forEach((label) => label.classList.remove("is-active"));
      pin.style.removeProperty("--bf-light-x");
      root.classList.remove("bf-light");
    };
  }, []);

  return (
    <section
      className="brand-film"
      id={english ? "story" : "marca"}
      ref={rootRef}
      aria-label={english ? "The story behind Ordivy" : "De dónde nace Ordivy: nuestra historia"}
    >
      <div className="bf-pin">
        <div className="bf-warm" />
        <div className="bf-final-backdrop" aria-hidden="true" />
        <div className="bf-topline">
          <span>ORDIVY</span>
          <span>{english ? "IT ALL STARTS AT HOME." : "TODO EMPIEZA EN CASA."}</span>
        </div>
        <div className="bf-scroll-cue" aria-hidden="true">
          <span>{english ? "Scroll to explore" : "Desliza para descubrir"}</span>
          <i>↓</i>
        </div>
        <div className="bf-chapter-words" aria-hidden="true">
          {(english ? ["LOST", "FIND", "ORGANIZE", "REMEMBER"] : ["PERDER", "ENCONTRAR", "ORDENAR", "RECORDAR"]).map((word) => (
            <span className="bf-chapter-word" key={word}>
              {word}
            </span>
          ))}
        </div>
        <div className="bf-progress" aria-hidden="true">
          <div className="bf-progress-counter">
            <strong className="bf-progress-count">01</strong>
            <span>/ 04</span>
          </div>
          <div className="bf-progress-track">
            <i className="bf-progress-fill" />
          </div>
          <div className="bf-progress-labels">
            {(english
              ? ["The clutter", "The search", "The system", "The difference"]
              : ["El desorden", "La búsqueda", "El sistema", "La diferencia"]
            ).map((label) => (
              <span className="bf-progress-label" key={label}>
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="bf-stage" key="brand-film-stage-v10">
          <div className="bf-scene bf-opening">
            <span>{english ? "A story that starts at home" : "Una historia muy de casa"}</span>
            <h2>
              {english ? (
                <>
                  Where
                  <br />
                  <em>Ordivy</em> began.
                </>
              ) : (
                <>
                  De dónde
                  <br />
                  nace <em>Ordivy.</em>
                </>
              )}
            </h2>
            <p>{english ? "From something we all recognize." : "De algo que nos suena a todos."}</p>
          </div>
          <div className="bf-story">
            <div className="bf-title-slot" aria-hidden="true" />
            <div className="bf-scene bf-order">
              <p>
                {english
                  ? "It started with searching for things I knew I owned but could not remember where I had put them."
                  : "Todo empezó buscando cosas que sabía que tenía, pero no recordaba dónde había guardado."}
              </p>
              <p>
                {english
                  ? "I began organizing everything in sections and wanted to record what I had, where I kept it, and how it was arranged."
                  : "Empecé a organizar mis cosas por partes y quise dejarlo todo anotado: qué tenía, dónde lo guardaba y cómo lo había organizado."}
              </p>
              <p>
                {english
                  ? "That became Ordivy: an app to record and organize my things, check what I own, and find exactly where everything is."
                  : "De ahí nació Ordivy: una app donde tener mis cosas registradas y organizadas, consultar lo que tengo y preguntarle dónde encontrar lo que busco."}
              </p>
            </div>
          </div>
          <div className="bf-glow" aria-hidden="true" />
          <div className="bf-symbol" aria-hidden="true">
            {children}
          </div>
          <div className="bf-cards" aria-hidden="true">
            {categories.map(([id, name]) => (
              <div className="bf-card" key={id}>
                <CategoryFace id={id} name={name} />
              </div>
            ))}
          </div>
          <div className="bf-word">
            <OriginalWordmark />
          </div>
          <div className="bf-closing">
            <div className="bf-definitions">
              <div className="bf-definition">
                <b>Order</b>
                <p>
                  {english ? (
                    <>
                      Bring order to
                      <br /> what you own.
                    </>
                  ) : (
                    <>
                      Poner orden en
                      <br /> lo que tienes.
                    </>
                  )}
                </p>
              </div>
              <div className="bf-definition">
                <b>Difference</b>
                <p>
                  {english ? (
                    <>
                      Buy better.
                      <br /> Waste less.
                    </>
                  ) : (
                    <>
                      Comprar mejor.
                      <br /> Desperdiciar menos.
                    </>
                  )}
                </p>
              </div>
              <div className="bf-definition">
                <b>Inventory</b>
                <p>
                  {english ? (
                    <>
                      Know what you own
                      <br /> and where it is.
                    </>
                  ) : (
                    <>
                      Saber qué tienes
                      <br /> y dónde está.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <aside
            className="bf-scene bf-search bf-category-summary"
            aria-label={english ? "Categories that form the logo" : "Categorías que forman el logo"}
          >
            <ul className="bf-category-list">
              {categories.map(([id, name]) => (
                <li className="bf-category-item" key={id}>
                  <CategoryFace id={id} name={name} />
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="bf-outro">
          <p className="bf-signature">
            {english ? (
              <>
                Order
                <br />
                <span>makes the difference.</span>
              </>
            ) : (
              <>
                El orden
                <br />
                <span>marca la diferencia.</span>
              </>
            )}
          </p>
          <p className="bf-promise">
            {english ? (
              <>
                Remember what you own.
                <br />
                <strong>Buy only what you need.</strong>
              </>
            ) : (
              <>
                Recuerda lo que tienes.
                <br />
                <strong>Compra solo lo que necesitas.</strong>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
