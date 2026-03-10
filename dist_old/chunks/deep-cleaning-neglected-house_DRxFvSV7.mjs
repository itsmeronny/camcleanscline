import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$DeepCleaningNeglectedHouse = createComponent(($$result, $$props, $$slots) => {
  const title = "Deep Cleaning A Neglected House";
  const description = "Steps required to restore heavily neglected properties.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "deep-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Neglected homes require intensive cleaning to remove accumulated dirt and debris.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/deep-cleaning-neglected-house.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/deep-cleaning-neglected-house.astro";
const $$url = "/guides/deep-cleaning-neglected-house";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$DeepCleaningNeglectedHouse,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
