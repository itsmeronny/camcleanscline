import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$HowLongDoesDeepCleaningTake = createComponent(($$result, $$props, $$slots) => {
  const title = "How Long Does Deep Cleaning Take";
  const description = "Estimated time required for a professional deep clean.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "deep-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>The duration of a deep clean depends on property size and condition.</p> <h2>Typical timeframe</h2> <p>Most homes require several hours to complete a full deep cleaning process.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-long-does-deep-cleaning-take.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-long-does-deep-cleaning-take.astro";
const $$url = "/guides/how-long-does-deep-cleaning-take";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HowLongDoesDeepCleaningTake,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
