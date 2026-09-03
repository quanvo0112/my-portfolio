import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Appends a build-time timestamp to the entry <script> and <link> tags in
// index.html so the browser can never serve a stale HTML that references old
// hashed bundles.  GitHub Pages does not support custom Cache-Control headers,
// so this is the only reliable way to bust the browser cache on every deploy.
function cacheBustIndexHtml() {
  const ts = Date.now();
  return {
    name: 'cache-bust-index',
    transformIndexHtml(html) {
      return html.replace(
        /(<script type="module"[^>]*src=")([^"]+)(")/,
        `$1$2?t=${ts}$3`,
      ).replace(
        /(<link rel="stylesheet"[^>]*href=")([^"]+)(")/,
        `$1$2?t=${ts}$3`,
      );
    },
  };
}

// Project site: https://quanvo0112.github.io/my-portfolio/
// `base` MUST match the repo name (leading + trailing slash) or every
// JS/CSS/asset request 404s and the page renders blank.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), cacheBustIndexHtml()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
