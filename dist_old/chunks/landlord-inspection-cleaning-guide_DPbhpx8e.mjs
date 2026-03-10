import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$LandlordInspectionCleaningGuide = createComponent(($$result, $$props, $$slots) => {
  const title = "Landlord Inspection Cleaning Guide";
  const description = "Guide to preparing a rental property for landlord inspection at the end of a tenancy.";
  const canonical = "/guides/landlord-inspection-cleaning-guide";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "canonicalPath": canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Landlord Inspection Cleaning Guide</h1> <p>Landlord inspections focus on cleanliness, damage and maintenance.</p> </section> <section> <h2>Inspection Areas</h2> <ul> <li>Kitchen grease and appliances</li> <li>Bathroom limescale</li> <li>Carpet cleanliness</li> <li>Window frames and glass</li> </ul> </section> <section> <h2>Preparation Steps</h2> <ul> <li>Remove personal items</li> <li>Complete full property clean</li> <li>Check fixtures and fittings</li> </ul> </section> <section> <p><a href="/services/end-of-tenancy-cleaning">Professional End of Tenancy Cleaning</a></p> </section> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/landlord-inspection-cleaning-guide.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/landlord-inspection-cleaning-guide.astro";
const $$url = "/guides/landlord-inspection-cleaning-guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LandlordInspectionCleaningGuide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
