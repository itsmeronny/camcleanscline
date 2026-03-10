import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$LimescaleRemovalBeforeTenancyInspection = createComponent(($$result, $$props, $$slots) => {
  const title = "Limescale Removal Before Tenancy Inspection";
  const description = "How limescale buildup affects tenancy inspections.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "end-of-tenancy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Limescale buildup around taps, showers and tiles is a common inspection issue.</p> <h2>Cleaning focus</h2> <p>Bathrooms and kitchens should be descaled before the final inspection.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/limescale-removal-before-tenancy-inspection.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/limescale-removal-before-tenancy-inspection.astro";
const $$url = "/guides/limescale-removal-before-tenancy-inspection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LimescaleRemovalBeforeTenancyInspection,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
