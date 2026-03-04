# DEV_LOG

## Status
Programmatic SEO matrix stable and deployed.
Authority inheritance implemented.
Internal linking architecture fully operational.
Guide cluster system expanded.
Guide hub clustering implemented.
Bidirectional authority flow established between guides and service hubs.

System builds deterministically and deploys cleanly.

Latest confirmed build:
322 static pages generated.

---

## Environment

- Astro v5.18.0
- Node v20.20.0
- Dev Container
- Dev command: `npx astro dev --host --port 4321`
- Build command: `npm run build`
- Deployment: Cloudflare Pages (static output)

---

## Current Static Scope

- 13 services
- 18 locations
- 234 service-location pages
- 13 service hub pages
- 18 location hub pages
- ~56 authority guide pages
- 1 guide hub
- 1 homepage

Total:
- 322 static pages

All pages generated deterministically.

No runtime rendering.
No runtime database.
No external fetch.

---

## Authority Layers Implemented

### 1. End of Tenancy
- Inspection-led positioning
- Deposit-risk logic
- Rental-intensity differentiation
- Landlord inspection preparation guides
- Deposit deduction prevention guides

### 2. Airbnb Cleaning
- Short-let turnover logic
- Presentation-first positioning
- High-density market emphasis

### 3. One-Off Deep Cleaning
- Neglect build-up positioning
- Urban density variation
- Move-in / property reset framing
- Property sale preparation guides

### 4. After Builders Cleaning
- Construction-grade positioning
- Renovation-heavy city logic
- Developer / contractor intent targeting
- Post-project handover framing

### 5. Carpet & Rug Cleaning
- stain removal logic
- tenancy carpet compliance
- allergy reduction positioning
- professional vs DIY comparisons

---

## Guide Cluster System

Guide clusters implemented:

- After Builders Cleaning
- End of Tenancy Cleaning
- Deep Cleaning
- Carpet Cleaning

Each cluster includes:

- multiple support guides
- cluster navigation from guide hub
- reinforcement links to commercial services

---

## Internal Link Architecture

Full authority loop implemented.

Guides  
↓  
Service hubs  
↓  
Service-location pages  
↑  
Location hubs  
↑  
Service hubs  
↑  
Guides

Supporting mechanisms:

GuideLayout  
- service reinforcement block
- related guide network

GuideLinks component  
- injected into service hubs
- pushes authority back into guide cluster

Guide hub  
- cluster-based guide discovery

Result: closed topical authority loop.

---

## Market Differentiation Logic

Static positioning logic embedded in service content:

- major city classification
- renovation-heavy city weighting
- rental-density differentiation
- service-specific contextual framing

No runtime evaluation.

All logic baked into static output.

---

## Schema Layer Active

Structured data:

- BreadcrumbList JSON-LD
- Service JSON-LD
- LocalBusiness JSON-LD

SEO infrastructure:

- canonical paths controlled
- sitemap auto-generated
- robots.txt active

No schema duplication.
No canonical conflicts.

---

## Architecture Locked

### Data Layer

- `services.ts` → structured object keyed by slug
- `locations.ts` → structured object keyed by slug

### Routing Layer

/
 /guides/*
 /services/[slug]
 /locations/[slug]
 /services/[service]/[location]

### Rendering Mode

Fully static.

Deterministic output.

Zero runtime infrastructure.

---

## Structural Freeze

Core programmatic matrix locked.

13 services × 18 locations.

No matrix expansion in this phase.

Scaling occurs via:

- authority cluster expansion
- informational guide coverage
- internal link reinforcement

---

## Current Strategic Phase

Authority Depth Expansion.

Cluster coverage now expanded beyond the original phase.

Existing clusters:

- After Builders Cleaning
- End of Tenancy Cleaning
- Deep Cleaning
- Carpet Cleaning

Guide hub now exposes cluster structure.

Next focus:

- cluster density expansion
- additional topical coverage inside existing clusters
- guide → service reinforcement
- crawl depth optimisation

No routing changes planned.
No architectural rewrites permitted.