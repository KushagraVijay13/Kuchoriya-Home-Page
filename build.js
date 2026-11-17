import * as esbuild from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';

console.log('--- Starting Kuchoriya Redesign Build ---');

const isProd = !process.argv.includes('--dev');
const outdir = 'dist';
const publicDir = 'public';

if (!fs.existsSync(outdir)) fs.mkdirSync(outdir, { recursive: true });
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

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
    sourcemap: false,
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

// 2. Prepare CSS
try {
  fs.copyFileSync('src/styles/main.css', `${outdir}/bundle.css`);
  fs.copyFileSync('src/styles/main.css', `${publicDir}/bundle.css`);
  fs.copyFileSync('src/styles/main.css', 'bundle.css');
  console.log(`✔ CSS synced across dist, public, and root`);
} catch (err) {
  console.error('✖ CSS copy failed:', err);
}

// 3. Mirror standalone bundle files across all directories
try {
  const nestedDist = path.join(outdir, 'dist');
  if (!fs.existsSync(nestedDist)) fs.mkdirSync(nestedDist, { recursive: true });

  fs.copyFileSync(`${outdir}/bundle.js`, `${nestedDist}/bundle.js`);
  fs.copyFileSync(`${outdir}/bundle.css`, `${nestedDist}/bundle.css`);

  fs.copyFileSync(`${outdir}/bundle.js`, `${publicDir}/bundle.js`);
  fs.copyFileSync(`${outdir}/bundle.js`, 'bundle.js');

  console.log(`✔ Assets mirrored to root, dist, and public`);
} catch (err) {
  console.warn('⚠ Could not mirror assets:', err);
}

// 4. Generate fully self-contained HTML (Inlined CSS + Inlined JS Bundle)
try {
  const cssContent = fs.readFileSync('src/styles/main.css', 'utf-8');
  const bundleJsContent = fs.readFileSync(`${outdir}/bundle.js`, 'utf-8');
  const templateHtml = fs.readFileSync('index.template.html', 'utf-8');

  const finalHtml = templateHtml
    .split('<!-- INLINE_CSS -->').join(cssContent)
    .split('<!-- INLINE_JS -->').join(bundleJsContent);

  fs.writeFileSync('index.html', finalHtml, 'utf-8');
  fs.writeFileSync(`${outdir}/index.html`, finalHtml, 'utf-8');
  fs.writeFileSync(`${publicDir}/index.html`, finalHtml, 'utf-8');
  console.log(`✔ Fully self-contained HTML generated across root, dist, and public!`);
} catch (err) {
  console.error('✖ Failed to generate self-contained HTML:', err);
  process.exit(1);
}

// 5. Clean up any legacy redirects
try {
  if (fs.existsSync(`${outdir}/_redirects`)) fs.unlinkSync(`${outdir}/_redirects`);
  if (fs.existsSync(`${publicDir}/_redirects`)) fs.unlinkSync(`${publicDir}/_redirects`);
  if (fs.existsSync('_redirects')) fs.unlinkSync('_redirects');
} catch (err) {}

console.log('--- Build completed successfully! ---');
