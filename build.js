import * as esbuild from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';

console.log('--- Starting Kuchoriya Redesign Build ---');

const isProd = !process.argv.includes('--dev');
const outdir = 'dist';

if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir, { recursive: true });
}

// 1. Bundle TypeScript & React from local node_modules
try {
  const result = await esbuild.build({
    entryPoints: ['src/main.tsx'],
    bundle: true,
    outfile: `${outdir}/bundle.js`,
    define: {
      'process.env.NODE_ENV': isProd ? '"production"' : '"development"'
    },
    minify: isProd,
    sourcemap: !isProd,
    target: ['es2020'],
    loader: {
      '.tsx': 'tsx',
      '.ts': 'ts',
      '.css': 'css'
    }
  });

  const jsSize = (fs.statSync(`${outdir}/bundle.js`).size / 1024).toFixed(1);
  console.log(`✔ JavaScript bundled successfully: ${outdir}/bundle.js (${jsSize} KB)`);
} catch (err) {
  console.error('✖ JavaScript build failed:', err);
  process.exit(1);
}

// 2. Copy/Bundle CSS
try {
  fs.copyFileSync('src/styles/main.css', `${outdir}/bundle.css`);
  fs.copyFileSync('src/styles/main.css', 'bundle.css');
  const cssSize = (fs.statSync(`${outdir}/bundle.css`).size / 1024).toFixed(1);
  console.log(`✔ CSS bundled successfully: ${outdir}/bundle.css (${cssSize} KB)`);
} catch (err) {
  console.error('✖ CSS build failed:', err);
  process.exit(1);
}

// 3. Mirror assets into dist/dist/ and root
try {
  const nestedDist = path.join(outdir, 'dist');
  if (!fs.existsSync(nestedDist)) {
    fs.mkdirSync(nestedDist, { recursive: true });
  }
  fs.copyFileSync(`${outdir}/bundle.js`, `${nestedDist}/bundle.js`);
  fs.copyFileSync(`${outdir}/bundle.css`, `${nestedDist}/bundle.css`);
  if (fs.existsSync(`${outdir}/tailwind.js`)) {
    fs.copyFileSync(`${outdir}/tailwind.js`, `${nestedDist}/tailwind.js`);
    fs.copyFileSync(`${outdir}/tailwind.js`, 'tailwind.js');
  }
  if (fs.existsSync(`${outdir}/confetti.js`)) {
    fs.copyFileSync(`${outdir}/confetti.js`, `${nestedDist}/confetti.js`);
    fs.copyFileSync(`${outdir}/confetti.js`, 'confetti.js');
  }
  fs.copyFileSync(`${outdir}/bundle.js`, 'bundle.js');
  console.log(`✔ Mirrored assets into ${nestedDist} and root`);
} catch (err) {
  console.warn('⚠ Could not mirror assets:', err);
}

// 4. Generate fully bulletproof index.html (both root and dist)
try {
  const cssContent = fs.readFileSync('src/styles/main.css', 'utf-8');
  let html = fs.readFileSync('index.html', 'utf-8');

  // Inject inlined CSS to completely eliminate CSS 404s
  const styleTag = `\n  <!-- Inlined Core CSS (Zero HTTP 404 risk) -->\n  <style id="kuchoriya-core-styles">\n${cssContent}\n  </style>\n  <link rel="stylesheet" href="./bundle.css" />\n  <link rel="stylesheet" href="./dist/bundle.css" />`;
  
  html = html.replace(/<!-- Bundled CSS -->[\s\S]*?<link rel="stylesheet"[^>]*>/i, styleTag);

  // Use CDN with local fallbacks for Tailwind and Confetti
  const tailwindCDN = `  <!-- Tailwind CSS Engine with Dual CDN + Local Fallback -->\n  <script src="https://cdn.tailwindcss.com"></script>\n  <script>window.tailwind || document.write('<script src="./tailwind.js"><\\/script><script src="./dist/tailwind.js"><\\/script>')</script>\n  <script>\n    function configureTailwind() {\n      if (typeof tailwind !== 'undefined') {\n        tailwind.config = {\n          theme: {\n            container: {\n              center: true,\n              padding: '1.25rem'\n            },\n            extend: {\n              colors: {\n                brand: {\n                  orange: '#FA5413',\n                  'orange-hover': '#E04403',\n                  'orange-light': '#FFF2EB',\n                  dark: '#0B0F17',\n                  surface: '#101622',\n                  card: '#181C23'\n                }\n              },\n              fontFamily: {\n                sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif']\n              }\n            }\n          }\n        };\n      }\n    }\n    configureTailwind();\n    if (typeof tailwind === 'undefined') {\n      window.addEventListener('DOMContentLoaded', configureTailwind);\n      window.addEventListener('load', configureTailwind);\n    }\n  </script>\n  <!-- Canvas Confetti Engine with Dual CDN + Local Fallback -->\n  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>\n  <script>window.confetti || document.write('<script src="./confetti.js"><\\/script><script src="./dist/confetti.js"><\\/script>')</script>`;

  html = html.replace(/<!-- Local Frontend Styling Engine[\s\S]*?<script src="[^"]*confetti\.js"><\/script>/i, tailwindCDN);

  // Self-healing bundle script loader
  const bundleScript = `  <!-- Bundled React Application with Self-Healing Multi-Path Fallback -->\n  <script src="./bundle.js" onerror="this.onerror=null;this.src='./dist/bundle.js';"></script>`;
  html = html.replace(/<!-- Bundled React Application[\s\S]*?<script src="[^"]*bundle\.js"[^>]*><\/script>/i, bundleScript);

  // Write to both root and dist
  fs.writeFileSync('index.html', html, 'utf-8');
  fs.writeFileSync(`${outdir}/index.html`, html, 'utf-8');
  console.log(`✔ Production HTML generated for both root and ${outdir}/index.html`);
} catch (err) {
  console.error('✖ Failed to generate production HTML:', err);
  process.exit(1);
}

// 5. Clean up any legacy redirects
try {
  if (fs.existsSync(`${outdir}/_redirects`)) {
    fs.unlinkSync(`${outdir}/_redirects`);
  }
  if (fs.existsSync('_redirects')) {
    fs.unlinkSync('_redirects');
  }
} catch (err) {}

console.log('--- Build completed successfully using local node_modules! ---');
