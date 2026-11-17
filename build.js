import * as esbuild from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';

console.log('--- Starting Kuchoriya Redesign Build ---');

const isProd = process.argv.includes('--prod');
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
  const cssSize = (fs.statSync(`${outdir}/bundle.css`).size / 1024).toFixed(1);
  console.log(`✔ CSS bundled successfully: ${outdir}/bundle.css (${cssSize} KB)`);
} catch (err) {
  console.error('✖ CSS build failed:', err);
  process.exit(1);
}

// 3. Generate production dist/index.html with self-contained relative paths
try {
  let html = fs.readFileSync('index.html', 'utf-8');
  html = html.replace(/\.\/dist\/bundle\.css/g, './bundle.css');
  html = html.replace(/\.\/dist\/tailwind\.js/g, './tailwind.js');
  html = html.replace(/\.\/dist\/confetti\.js/g, './confetti.js');
  html = html.replace(/\.\/dist\/bundle\.js/g, './bundle.js');
  fs.writeFileSync(`${outdir}/index.html`, html, 'utf-8');
  console.log(`✔ Production HTML generated: ${outdir}/index.html`);
} catch (err) {
  console.error('✖ Failed to generate production HTML:', err);
  process.exit(1);
}

// 4. Copy _redirects if present
try {
  if (fs.existsSync('_redirects')) {
    fs.copyFileSync('_redirects', `${outdir}/_redirects`);
    console.log(`✔ Redirects copied: ${outdir}/_redirects`);
  }
} catch (err) {
  console.warn('⚠ Could not copy _redirects:', err);
}

console.log('--- Build completed successfully using local node_modules! ---');
