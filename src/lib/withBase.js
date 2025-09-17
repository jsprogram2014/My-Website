// src/lib/withBase.js
export const withBase = (p) => {
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');
  const path = String(p).replace(/^\/+/, '');
  return `${base}/${path}`;
};