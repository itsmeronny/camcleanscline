import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$CarpetCleaningDryingTime = createComponent(($$result, $$props, $$slots) => {
  const title = "Carpet Cleaning Drying Time";
  const description = "Typical drying times after professional carpet cleaning.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "carpet-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>After cleaning, carpets need time to dry before normal use.</p> <h2>Typical timeframe</h2> <p>Most carpets dry within several hours depending on ventilation and humidity.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/carpet-cleaning-drying-time.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/carpet-cleaning-drying-time.astro";
const $$url = "/guides/carpet-cleaning-drying-time";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CarpetCleaningDryingTime,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
