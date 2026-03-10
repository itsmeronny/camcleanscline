import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$EndOfTenancyCleaningCostGuide = createComponent(($$result, $$props, $$slots) => {
  const title = "End of Tenancy Cleaning Cost Guide (UK)";
  const description = "Typical end of tenancy cleaning prices in the UK and what affects the cost.";
  const canonical = "/guides/end-of-tenancy-cleaning-cost-guide";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "canonicalPath": canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>End of Tenancy Cleaning Cost Guide</h1> <p>Costs vary depending on property size and cleaning intensity.</p> </section> <section> <h2>Typical Price Ranges</h2> <ul> <li>Studio / 1 bed: £90 – £150</li> <li>2 bed property: £140 – £220</li> <li>3–4 bed property: £200 – £400+</li> </ul> </section> <section> <h2>Cost Factors</h2> <ul> <li>Property size</li> <li>Carpet cleaning</li> <li>Oven cleaning</li> <li>Condition of property</li> </ul> </section> <section> <p><a href="/services/end-of-tenancy-cleaning">View End of Tenancy Cleaning Service</a></p> </section> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/end-of-tenancy-cleaning-cost-guide.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/end-of-tenancy-cleaning-cost-guide.astro";
const $$url = "/guides/end-of-tenancy-cleaning-cost-guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EndOfTenancyCleaningCostGuide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
