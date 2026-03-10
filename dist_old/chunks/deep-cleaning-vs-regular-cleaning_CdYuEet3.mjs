import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$DeepCleaningVsRegularCleaning = createComponent(($$result, $$props, $$slots) => {
  const title = "Deep Cleaning vs Regular Cleaning";
  const description = "Key differences between routine cleaning and a full deep clean.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "deep-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Regular cleaning maintains a property, while deep cleaning restores it by addressing accumulated grime.</p> <h2>Main differences</h2> <p>Deep cleaning targets neglected areas such as grout lines, vents and behind appliances.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/deep-cleaning-vs-regular-cleaning.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/deep-cleaning-vs-regular-cleaning.astro";
const $$url = "/guides/deep-cleaning-vs-regular-cleaning";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$DeepCleaningVsRegularCleaning,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
