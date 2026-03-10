import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$BathroomDeepCleaningGuide = createComponent(($$result, $$props, $$slots) => {
  const title = "Bathroom Deep Cleaning Guide";
  const description = "How bathrooms are deep cleaned to remove limescale and bacteria.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "deep-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Bathrooms require thorough descaling and sanitising during deep cleaning.</p> <h2>Main tasks</h2> <p>Cleaning grout, descaling taps and scrubbing tiles are core tasks.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/bathroom-deep-cleaning-guide.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/bathroom-deep-cleaning-guide.astro";
const $$url = "/guides/bathroom-deep-cleaning-guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BathroomDeepCleaningGuide,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
