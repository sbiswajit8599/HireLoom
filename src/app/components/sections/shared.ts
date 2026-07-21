export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export const jakarta = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
export const inter = { fontFamily: "'Inter', sans-serif" };
