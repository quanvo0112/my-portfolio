import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves every file (including index.html) with a 600s
// (10-minute) Cache-Control max-age via its Fastly CDN, and it does NOT
// support custom per-response cache headers.  In that window the browser
// serves the stale index.html straight from disk cache, so content-hashed
// bundles and ?t= query strings never get a chance to load.
//
// This plugin defeats that window with a version self-check:
//   1. It writes dist/version.json containing the build timestamp.
//   2. It inlines a tiny script into index.html that, on EVERY page load
//      (even a stale-cached one), fetch()es version.json with cache:'no-store'
//      (bypassing the CDN/browser cache) and compares it to the last version
//      it saw, which is persisted in sessionStorage.  A newer server version
//      triggers a hard reload that fetches the freshly deployed index.html
//      and its hashed bundles.
const BUILD_VERSION = String(Date.now());
const VERSION_KEY = 'my-portfolio:build-version';

function versionSelfCheck() {
  let base = '/';
  return {
    name: 'version-self-check',
    configResolved(config) {
      base = config.base;
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify({ version: BUILD_VERSION }),
      });
    },
    transformIndexHtml(html) {
      const script = [
        `(function(){`,
        `var KEY=${JSON.stringify(VERSION_KEY)};`,
        `var URL=${JSON.stringify(base)} + 'version.json';`,
        `try{`,
        `  var last=sessionStorage.getItem(KEY);`,
        `  if(!last){sessionStorage.setItem(KEY,${JSON.stringify(BUILD_VERSION)});return;}`,
        `  fetch(URL,{cache:'no-store'}).then(function(r){return r.json()})`,
        `    .then(function(d){`,
        `      var v=d&&d.version;`,
        `      if(v&&v!==last){sessionStorage.setItem(KEY,v);location.reload(true);}`,
        `    })`,
        `    .catch(function(){});`,
        `}catch(e){}`,
        `})();`,
      ].join('');
      return html.replace(
        '<meta name="theme-color" content="#f7f6f2" />',
        `<meta name="theme-color" content="#f7f6f2" />\n    <script>\n      ${script}\n    </script>`,
      );
    },
  };
}

// Project site: https://quanvo0112.github.io/my-portfolio/
// `base` MUST match the repo name (leading + trailing slash) or every
// JS/CSS/asset request 404s and the page renders blank.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), versionSelfCheck()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
