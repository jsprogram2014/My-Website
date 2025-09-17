// src/lib/assetUrl.js
export const assetUrl = (path) =>
  new URL(path, import.meta.env.BASE_URL).toString();
