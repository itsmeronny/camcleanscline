# DEV LOG

## Status
Foundation + SEO plumbing complete. Build is clean and deterministic.

## Environment
- Astro v5.18.0
- Node v20.20.0
- Dev container
- Dev command: `npx astro dev --host --port 4321`
- Build command: `npm run build`

## Resolved Issues
- Dev container freeze / zombie terminals (fixed by new terminal + clean restart)
- Port binding issue (needed `--host`)
- `services.ts` schema mismatch (array → object keyed by slug)
- `.map is not a function` + data contract break
- Broken dynamic route after folder rebuild
- Accidental filename confusion (quoted display from `ls`)

## Current Working Routes
- `/`
- `/services/[slug]`
- `/locations/[slug]`
- `/services/[service]/[location]`

## Architecture Now Stable
### Data Layer
- `src/data/services.ts` → object keyed by slug
- `src/data/locations.ts` → object keyed by slug

### Dynamic Routes
- `src/pages/services/[slug].astro`
- `src/pages/locations/[slug].astro`
- `src/pages/services/[service]/[location].astro`

### Internal Linking
- Service pages list all location variants
- Location pages list all service variants
- Full crawlability across programmatic pages

## SEO + Indexing
### Layout Meta
- Layout supports `title`, `description`, `canonicalPath`
- OG tags present

### Production Canonical Base
- `astro.config.mjs` set:
- `site: "https://camcleans.co.uk"`

### Sitemap
- Installed + enabled `@astrojs/sitemap`
- `npm run build` generates:
- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`
- Confirmed sitemap index points to:
- `https://camcleans.co.uk/sitemap-0.xml`

### Robots
- Added `public/robots.txt`
- Confirmed output: `dist/robots.txt`
- Contains sitemap reference:
- `Sitemap: https://camcleans.co.uk/sitemap-index.xml`

## Static Generation Scope
- 13 services × 18 locations = 234 service-location pages
- Total built pages reported by Astro: 266

## Next Phase
1. Content blocks (non-styled but structured)
- Service page: scope, inclusions, FAQs, CTA
- Location page: localised intro, coverage notes, CTA
- Service×Location page: unique copy template + CTA

2. Structured data (JSON-LD)
- LocalBusiness / Service (minimal, safe claims)
- BreadcrumbList

3. Navigation + footer
- Header/nav skeleton
- Footer: services list, locations list, legal links

4. Conversion plumbing (later)
- Lead form component + validation
- Submission endpoint (Cloudflare Pages/Workers later)