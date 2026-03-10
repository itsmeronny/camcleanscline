import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$WhatIsIncludedInDeepCleaning = createComponent(($$result, $$props, $$slots) => {
  const title = "What Is Included In Deep Cleaning";
  const description = "Typical tasks included in a professional deep cleaning service.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "deep-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Deep cleaning includes detailed work beyond routine cleaning tasks.</p> <h2>Common inclusions</h2> <p>Appliance cleaning, grout scrubbing and detailed surface sanitation.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/what-is-included-in-deep-cleaning.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/what-is-included-in-deep-cleaning.astro";
const $$url = "/guides/what-is-included-in-deep-cleaning";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$WhatIsIncludedInDeepCleaning,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
