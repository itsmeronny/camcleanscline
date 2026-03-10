PROJECT_CONTEXT

Project Name
CamCleans

Purpose
CamCleans is a national UK cleaning lead-generation platform built using static-first architecture and deterministic programmatic SEO. The platform captures customer enquiries and quote requests, then routes leads to cleaners within the CamCleans network.

Core Architecture
The system is intentionally designed to run at near-zero operating cost.

Stack:
Astro static generation
Node 20
Cloudflare Pages
Cloudflare Pages Functions
Resend email API

Key characteristics:
fully static site generation
deterministic build output
no runtime database
minimal backend (only form handling)
all pages generated at build time

Platform Scale
13 services
18 UK locations

Generated pages:
234 service-location pages
13 service hubs
18 location hubs
242 authority guides
1 guide hub
1 homepage
1 cleaner application page
1 enquiry page
1 quote intake page
2 confirmation pages
3 trust pages

Total:
516 static pages

SEO Model
Search architecture is an authority pyramid:

Guides
↓
Service hubs
↓
Service-location pages
↑
Location hubs

This creates a closed authority loop between informational and commercial pages.

Internal linking is deterministic and controlled to prevent cannibalisation.

Monetisation
Lead-generation model.

Customer journey:
service page → enquiry or quote → lead captured → cleaner assigned → commission retained.

Infrastructure
Hosting:
Cloudflare Pages

Backend functions:
/cleaner-application
/contact-enquiry
/quote-request

Email transport:
Resend API

Verified sender:
quotes@camcleans.co.uk

Brand Infrastructure
Production brand assets:

public/brand/camcleans-email.png
public/brand/camcleans-logo.svg
public/brand/camcleans-icon.svg
public/brand/camcleans-og.png
public/brand/icon-192.png
public/brand/icon-512.png

Design masters stored in:

docs/branding/

Operational Status
Architecture stable.
Deployment stable.
Search indexing enabled.
516 pages live.
Lead capture operational.
Cleaner intake operational.

Current Strategic Phase
Indexing Observation Phase.

During this phase the system must NOT change architecture or expand the SEO matrix.

Focus areas:
observe indexing
monitor impressions
analyse ranking emergence
improve conversion messaging
expand cleaner supply network

Authoritative System Files
Every development session must load these files:

MASTER_STATE.md
DEV_LOG.md
TREE.md
GUIDE_SLUGS.md
PROJECT_CONTEXT.md

These files together define the complete system state and prevent architecture drift.