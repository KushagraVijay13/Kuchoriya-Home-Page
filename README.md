# Kuchoriya TechSoft Pvt. Ltd. — Homepage Redesign

A complete, modern, high-performance, responsive and conversion-focused redesign of the official homepage for **Kuchoriya TechSoft Pvt. Ltd.** (https://kuchoriyatechsoft.com/).

This project is built with **React 19, TypeScript, Lucide Icons, and Tailwind CSS**, bundled using a high-speed local compiler into self-contained static assets ready for instant evaluation and deployment.

---

## 🚀 Quick Deployment Guide

This project is 100% static and self-contained. You can deploy it to any hosting provider in seconds:

### Option 1: Vercel / Netlify / Cloudflare Pages
- **Build Command:** `node build.js --prod`
- **Publish Directory:** `.` (root directory containing `index.html` and `dist/`)

### Option 2: GitHub Pages
- Run `node build.js --prod`
- Push `index.html` and the `dist/` directory to your repository's `main` branch or `gh-pages` branch.
- In GitHub Repo Settings → Pages → Select branch `/ (root)`.

### Option 3: Apache / Nginx / Static Web Server
- Copy `index.html` and the `dist/` directory directly to `/var/www/html/` or your web root.

---

## 📦 Local Installation & Dependencies (D: Drive)

All libraries, frameworks, types, and compiler tools are installed **100% locally inside the D: drive** within this project folder (`D:\Kuchoriya homepage redesign\node_modules`), ensuring zero files are written to the C: drive:

### Installed Libraries:
- **`react` (^19.0.0):** Modern React component framework.
- **`react-dom` (^19.0.0):** High-performance DOM renderer.
- **`scheduler` (^0.25.0):** Concurrent React task scheduler.
- **`lucide-react` (^0.475.0):** Comprehensive SVG icon system.
- **`esbuild` (^0.25.0):** Lightning-fast JS/TS bundler and minifier.
- **`typescript` (^5.0.0):** Type-safe JavaScript compiler.
- **`@types/react`, `@types/react-dom`, `@types/node`:** Complete TypeScript definitions.
- **`dist/tailwind.js`:** Standalone Tailwind CSS engine (stored in D: drive).
- **`dist/confetti.js`:** Canvas-confetti animation engine (stored in D: drive).

---

## 🛠️ Build & Run Commands

All scripts run directly out of `D:\Kuchoriya homepage redesign`:

```powershell
# Development build with source maps
node build.js

# Production minified build (~415 KB standalone bundle, 0 warnings)
node build.js --prod

# TypeScript strict type check (0 errors)
node ./node_modules/typescript/bin/tsc --noEmit

# Start local HTTP server
node server.js
```

---

## 🎨 Visual Design & Architecture Highlights

1. **Authentic Software Engineering Graphic Art:**
   - Replaced generic fuzzy AI blurs with bespoke SVG engineering schematics:
     - Distributed system architecture blueprint (API Gateways, Microservices, Event Buses).
     - Vector database cylinders (`pgvector`), K8s pods, and neural pipeline network graphs.
     - Mobile runtime wireframes and animated circuit bus streams with Kuchoriya orange accents (`#FA5413`).
2. **Interactive Software Telemetry Showcase:**
   - Tab switcher for **AI Engine**, **Cloud SaaS**, and **Mobile Sync**, each rendering domain-specific vector architectural graphs and live terminal execution streams.
3. **Sector Showcase & Real Work Visuals:**
   - Horizontal category pill bar with immediate visual updates (0-scroll jump, fixed-height container).
   - High-fidelity product visuals for OTT streaming, HIPAA EMR clinical records, Fintech OCR, and Sixt contactless mobility.
4. **Interactive Milestone Cost & Timeline Estimator:**
   - Lets prospective clients choose platform, project maturity, and add-ons for instant budget ranges, sprint timelines, and squad breakdowns.
   - 1-click **"Lock in this Estimate"** prefills the consultation inquiry form.
5. **SEO & AEO Optimizations:**
   - Validated Open Graph and Twitter Card tags.
   - Comprehensive JSON-LD structured data for `Organization` and `FAQPage`.
   - Clean semantic HTML with zero broken internal links.
