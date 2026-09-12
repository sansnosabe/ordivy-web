"use client";

import { useEffect } from 'react';
import { animate, stagger } from 'animejs';

export default function MotionV2() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('motion-v2');

    animate('[data-hero] > *', {
      opacity: [0, 1], y: [34, 0], duration: 900,
      delay: stagger(110, { start: 120 }), ease: 'outExpo',
    });
    animate('.v2-phone', {
      opacity: [0, 1], y: [70, 0], rotate: ['5deg', '1.5deg'],
      duration: 1250, delay: 280, ease: 'outExpo',
    });
    const animations = [];

    const items = [...document.querySelectorAll('[data-reveal-v2]')];
    items.forEach((item) => item.classList.add('v2-reveal-pending'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('v2-reveal-pending');
        animations.push(animate(entry.target, { opacity: [0, 1], y: [64, 0], duration: 1100, ease: 'outExpo' }));
        const children = entry.target.querySelectorAll('.v2-results article, .v2-faq-list details, li');
        if (children.length) animations.push(animate(children, {opacity:[0,1], x:[28,0], duration:850, delay:stagger(160), ease:'outExpo'}));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.revert());
      items.forEach(item => item.classList.remove('v2-reveal-pending'));
      document.documentElement.classList.remove('motion-v2');
    };
  }, []);
  return null;
}
