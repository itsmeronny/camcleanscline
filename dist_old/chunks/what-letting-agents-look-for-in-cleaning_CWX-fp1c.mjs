import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$WhatLettingAgentsLookForInCleaning = createComponent(($$result, $$props, $$slots) => {
  const title = "What Letting Agents Look For In Cleaning";
  const description = "Cleaning standards letting agents typically inspect at the end of a tenancy.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "end-of-tenancy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Letting agents perform structured inspections before approving deposit returns.</p> <h2>Focus areas</h2> <p>Kitchens, bathrooms and flooring receive the closest inspection.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/what-letting-agents-look-for-in-cleaning.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/what-letting-agents-look-for-in-cleaning.astro";
const $$url = "/guides/what-letting-agents-look-for-in-cleaning";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$WhatLettingAgentsLookForInCleaning,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
