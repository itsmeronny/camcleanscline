DEV_LOG
Status
Programmatic SEO matrix stable and deployed. Authority inheritance implemented. Internal linking architecture fully operational. Guide cluster system expanded. Guide hub clustering implemented. Bidirectional authority flow established between guides and service hubs. Service to guide reverse linking implemented. Location hub authority layer implemented. Conversion layer added to service-location pages. Lead capture page implemented. Trust layer implemented with supporting informational pages. Schema layer expanded. Google Search Console verification completed. Google Search Console sitemap submitted and processed. Production domain canonicalisation completed. Cloudflare Pages deployment active.
Structured data rendering issue identified and resolved at source level. JSON-LD injection logic corrected across layout and SEO components. Astro rendering behaviour verified during build phase.
Authority cluster expansion executed across:
End of Tenancy Cleaning After Builders Cleaning Deep Cleaning Carpet Cleaning
Guide reinforcement blocks implemented:
guide to service links guide to guide lateral linking service to guide reinforcement
Guide slug protection workflow implemented via GUIDE_SLUGS inventory. GUIDE_SLUGS regeneration workflow verified via terminal workflow. Live guide slug uniqueness check executed against generated guide paths. No duplicate live guide slugs detected.
Global navigation layer implemented across Layout.astro:
Home How CamCleans Works Cleaner Standards Cleaning Checklist Contact Get a Quote (primary CTA)
Trust and credibility pages deployed:
/how-camcleans-works /cleaner-standards /cleaning-checklist
Conversion reinforcement added to service-location template:
above fold CTA block trust signals direct quote pathway
Lead intake system implemented.
Cleaner supply intake:
/join-cleaners page implemented Cleaner application form implemented POST /cleaner-application endpoint implemented Cloudflare Pages Function created Email delivery integrated via Resend API Applications delivered to camcleansnetwork@gmail.com Confirmation redirect implemented to /application-received
Customer enquiry intake:
/contact page upgraded to structured enquiry form POST /contact-enquiry endpoint implemented Cloudflare Pages Function created Email delivery integrated via Resend API Enquiries delivered to camcleansnetwork@gmail.com Confirmation redirect implemented to /enquiry-received
Structured quote intake system implemented.
Quote system:
/quote page implemented structured job data capture introduced
form fields implemented for:
postcode property type bedrooms bathrooms clean type preferred date
customer details capture implemented for:
name email phone
quote pathway integrated into navigation and service pages primary conversion CTA updated to "Get a Quote"
Quote pricing engine implemented.
Pricing logic includes:
base service pricing bedroom scaling multipliers bathroom additive pricing property type multipliers cleaner payout calculation platform margin calculation
Pricing stability hardening implemented.
Pricing engine improvements:
fallback logic introduced to prevent NaN outputs additional property types supported bungalow multiplier implemented other property multiplier implemented defensive calculations added for missing values
minimum automated quote floor implemented: 120 GBP maximum automated quote ceiling implemented: 600 GBP
manual quote redirect implemented for over cap jobs to /manual-quote-required
Spam protection layer implemented.
Quote form spam mitigation:
hidden honeypot field added to form automated bot submissions filtered honeypot validation implemented in Cloudflare function
Quote request validation and communications hardening implemented.
Quote backend protections:
UK postcode format validation implemented invalid postcode submissions rejected
customer confirmation email implemented admin lead notification retained
customer confirmation subject implemented:
CamCleans Quote Request Received
Email infrastructure upgraded.
Email transport updates:
Resend sending domain verified for camcleans.co.uk DKIM verified SPF verified MX verified
sender upgraded from Resend sandbox sender to verified domain sender
quote emails now sent from:
quotes@camcleans.co.uk
Navigation reinforcement:
quote link added to global navigation quote CTA integrated into service-location pages cleaner recruitment link added to footer recruitment messaging integrated across site
Cloudflare Pages Functions layer verified operational.
Active backend endpoints:
/cleaner-application /contact-enquiry /quote-request
Deployment workflow simplified.
package.json deploy script implemented:
npm run deploy
Current deploy workflow:
npm run build npm run deploy
Repository hygiene pass completed.
Repository cleanup:
operational files isolated into docs/ops guide control files isolated into docs/guide-control lead data isolated into data project root cleaned to runtime relevant structure stray junk file removed temporary slug audit workflow executed
Critical rendering fault identified and resolved.
GuideLinks component previously attempted array methods on object based data structures. Incorrect .find() usage on services object caused render chain failure. Incorrect prop wiring in service template also caused undefined service references.
Location sampling logic corrected to use Object.values().
Corrections applied:
GuideLinks.astro service lookup corrected to services[serviceSlug] location iteration corrected to Object.values(locations)
services/[slug].astro component prop corrected to serviceSlug
Full build reset executed.
rm -rf dist .astro npm run build
Homepage generation restored. dist/index.html successfully generated.
Branding system implemented.
Brand asset structure created:
docs/branding CamCleans_master.pdf CamCleans_icon_master.pdf
public/brand camcleans-logo.svg camcleans-icon.svg
Brand assets converted from vector source to production SVG format. Repository branding directory established for source preservation.
Brand identity integration implemented.
Logo integrated into Layout navigation. Structured data updated to reference brand logo. Favicon infrastructure introduced. Header logo rendering verified across all pages.
Robots indexing fault identified and resolved.
Cloudflare Pages runtime injected:
X-Robots-Tag: noindex
Root cause: Pages Functions runtime behaviour.
Resolution: public/_headers override implemented.
Header override:
/* X-Robots-Tag: all
Override verified in build output:
dist/_headers
Verification:
curl -I https://camcleans.co.uk
returns:
x-robots-tag: all
Site confirmed indexable by search engines.
Cloudflare asset routing issue identified and resolved.
Symptom:
specific static asset paths returned HTML fallback instead of image content.
Diagnosis:
Cloudflare Pages asset manifest mismatch during deployment resulted in HTML fallback being served for certain static assets.
Resolution:
static brand assets rebuilt and redeployed via deterministic build workflow.
Verified asset delivery:
/brand/camcleans-email.png
Verification:
curl -I https://camcleans.co.uk/brand/camcleans-email.png
returns:
content-type: image/png
Brand asset layer finalised.
Production asset set:
public/brand
camcleans-email.png camcleans-logo.svg camcleans-icon.svg camcleans-og.png icon-192.png icon-512.png
Branding system now fully operational for:
email templates social previews PWA icons layout navigation logo structured data logo reference
System builds deterministically.
Latest confirmed build:
516 static pages generated.