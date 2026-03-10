import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$HowOftenShouldYouDeepClean = createComponent(($$result, $$props, $$slots) => {
  const title = "How Often Should You Deep Clean";
  const description = "Recommended frequency for deep cleaning a home.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "deep-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Most households benefit from periodic deep cleaning to remove buildup not addressed by routine cleaning.</p> <h2>Typical frequency</h2> <p>Many properties schedule deep cleaning once or twice per year.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-often-should-you-deep-clean.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-often-should-you-deep-clean.astro";
const $$url = "/guides/how-often-should-you-deep-clean";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HowOftenShouldYouDeepClean,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
