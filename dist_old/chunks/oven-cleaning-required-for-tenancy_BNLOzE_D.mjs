import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$OvenCleaningRequiredForTenancy = createComponent(($$result, $$props, $$slots) => {
  const title = "Is Oven Cleaning Required For Tenancy?";
  const description = "Why oven cleaning is one of the most common issues in tenancy inspections.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "end-of-tenancy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Ovens are frequently checked during end-of-tenancy inspections.</p> <h2>Typical issues</h2> <p>Grease buildup and burnt residue often lead to deposit deductions.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/oven-cleaning-required-for-tenancy.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/oven-cleaning-required-for-tenancy.astro";
const $$url = "/guides/oven-cleaning-required-for-tenancy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$OvenCleaningRequiredForTenancy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
