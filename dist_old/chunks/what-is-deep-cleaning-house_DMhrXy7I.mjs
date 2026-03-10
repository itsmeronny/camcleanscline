import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$WhatIsDeepCleaningHouse = createComponent(($$result, $$props, $$slots) => {
  const title = "What Is Deep Cleaning A House";
  const description = "Explanation of what deep cleaning involves compared with standard cleaning.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "deep-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Deep cleaning focuses on removing built-up dirt, grease and hidden dust that regular cleaning does not address.</p> <h2>Typical tasks</h2> <p>Cleaning behind appliances, scrubbing grout, descaling fixtures and washing high-touch surfaces.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/what-is-deep-cleaning-house.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/what-is-deep-cleaning-house.astro";
const $$url = "/guides/what-is-deep-cleaning-house";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$WhatIsDeepCleaningHouse,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
