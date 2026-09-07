"use client";

import { useEffect } from 'react';
import { animate, createTimeline, stagger } from 'animejs';

const tileOrigins = [
  [-24, -18], [5, -28], [26, -10], [-30, 8],
  [0, 0], [30, 16], [-18, 28], [14, 24],
];

export default function MotionController() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    root.classList.add('anime-ready');
    const groups = [
      ['.section-title', null], ['.category-row', '.category-card'],
      ['.steps-visual', null], ['.step-list', 'li'],
      ['.feature-grid', '.feature-card'], ['.premium-panel', '.premium-copy, .premium-art'],
      ['.privacy-panel', ':scope > *'], ['.faq-list', 'details'],
      ['.download-panel', '.download-copy, .phone-stage'],
    ];
    const watched = groups.flatMap(([selector]) => [...document.querySelectorAll(selector)]);

    watched.forEach((container) => {
      const childSelector = groups.find(([selector]) => container.matches(selector))?.[1];
      const targets = childSelector ? [...container.querySelectorAll(childSelector)] : [container];
      targets.forEach((target) => {
        target.style.opacity = '0';
        target.style.transform = 'translateY(54px)';
      });
    });

    const playOrigin = () => {
      const tiles = [...document.querySelectorAll('.origin-mark .logo-tile')];
      const pairs = [...document.querySelectorAll('.origin-vector-pair')];
      const meanings = [...document.querySelectorAll('.origin-meanings small')];
      const spread = window.matchMedia('(max-width: 540px)').matches ? 46 : 105;
      tiles.forEach((tile, index) => {
        const [x, y] = tileOrigins[index];
        tile.style.opacity = '0';
        tile.style.transform = `translate(${x * 5}px, ${y * 5}px) rotate(70deg) scale(.25)`;
      });
      createTimeline({ defaults: { ease: 'outExpo' } })
        .add(tiles, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, duration: 1250, delay: stagger(105) })
        .add(tiles, { scale: [1, 1.09, 1], duration: 520, delay: stagger(45), ease: 'inOutQuad' }, '-=180')
        .add('.origin-line', { opacity: [0, 1], scaleY: [0, 1], duration: 850 }, '-=350')
        .add(pairs[0], { opacity: [0, 1], x: [-spread, -spread], y: [45, 0], duration: 850 }, '-=250')
        .add(meanings[0], { opacity: [0, 1], y: [12, 0], duration: 500 }, '-=480')
        .add(pairs[1], { opacity: [0, 1], y: [45, 0], duration: 850 }, '-=320')
        .add(meanings[1], { opacity: [0, 1], y: [12, 0], duration: 500 }, '-=480')
        .add(pairs[2], { opacity: [0, 1], x: [spread, spread], y: [45, 0], duration: 850 }, '-=320')
        .add(meanings[2], { opacity: [0, 1], y: [12, 0], duration: 500 }, '-=480')
        .add(pairs, { x: 0, duration: 560, ease: 'inOutExpo' }, '+=220')
        .add('.origin-copy', { opacity: [0, 1], y: [24, 0], duration: 800 }, '-=180');
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains('origin-stage')) playOrigin();
        else {
          const childSelector = groups.find(([selector]) => entry.target.matches(selector))?.[1];
          const targets = childSelector ? entry.target.querySelectorAll(childSelector) : entry.target;
          animate(targets, { opacity: 1, y: 0, duration: 950, delay: childSelector ? stagger(130) : 0, ease: 'outExpo' });
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    watched.forEach((item) => observer.observe(item));
    const origin = document.querySelector('.origin-stage');
    if (origin) observer.observe(origin);
    return () => { observer.disconnect(); root.classList.remove('anime-ready'); };
  }, []);

  return null;
}
