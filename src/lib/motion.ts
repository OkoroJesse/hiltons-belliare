import type { Variants } from "framer-motion";

/**
 * motion.ts — Shared Framer Motion variants for Hiltons Bellaire
 * Premium easing: [0.22, 1, 0.36, 1] — a fast-out-slow-in curve
 */

export const ease = [0.22, 1, 0.36, 1] as const;
export const easeSoft = [0.25, 0.46, 0.45, 0.94] as const;

// ─── Fade-up: universal scroll reveal ────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

// ─── Fade in only (no transform) — for reduced-motion or subtle elements ─────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeSoft },
  },
};

// ─── Stagger container: parent that staggers children ────────────────────────
export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// ─── Stagger container with its own entrance ─────────────────────────────────
export const staggerFadeUp: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0 },
  },
};

// ─── Hero image: scale from 1.07 → 1.0 + fade ────────────────────────────────
export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.07 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease },
  },
};

// ─── Hero overlay ─────────────────────────────────────────────────────────────
export const heroOverlay: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: easeSoft },
  },
};

// ─── Hero location pill: slides up ───────────────────────────────────────────
export const heroLabel: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: 0.55 },
  },
};

// ─── Hero headline line: staggered per line ───────────────────────────────────
export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

// ─── Hero supporting text ─────────────────────────────────────────────────────
export const heroSubtext: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: 0.05 },
  },
};

// ─── Hero CTA buttons row ─────────────────────────────────────────────────────
export const heroCta: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: 0.1 },
  },
};

// ─── Hero stats strip ─────────────────────────────────────────────────────────
export const heroStrip: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: 0.15 },
  },
};

// ─── Section eyebrow label ────────────────────────────────────────────────────
export const sectionLabel: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
};

// ─── Room card: staggered reveal ─────────────────────────────────────────────
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

// ─── Image masked reveal (clip-path or simple fade+scale) ───────────────────
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease },
  },
};

// ─── Slide in from right (for image column in split layouts) ─────────────────
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

// ─── Slide in from left ───────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

// ─── Modal backdrop ───────────────────────────────────────────────────────────
export const backdropVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.25, ease: easeSoft },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: easeSoft },
  },
};

// ─── Modal panel ──────────────────────────────────────────────────────────────
export const modalVariant: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: { duration: 0.2, ease: easeSoft },
  },
};

// ─── Booking platform row ─────────────────────────────────────────────────────
export const platformRow: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease },
  },
};

// ─── Header entrance ─────────────────────────────────────────────────────────
export const headerEntrance: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};
