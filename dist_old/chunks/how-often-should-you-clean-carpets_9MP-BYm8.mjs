import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$HowOftenShouldYouCleanCarpets = createComponent(($$result, $$props, $$slots) => {
  const title = "How Often Should You Clean Carpets";
  const description = "Recommended frequency for professional carpet cleaning.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "carpet-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Carpets accumulate dust, allergens and oils over time.</p> <h2>Typical frequency</h2> <p>Most households benefit from professional carpet cleaning once every 12–18 months.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-often-should-you-clean-carpets.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-often-should-you-clean-carpets.astro";
const $$url = "/guides/how-often-should-you-clean-carpets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HowOftenShouldYouCleanCarpets,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
