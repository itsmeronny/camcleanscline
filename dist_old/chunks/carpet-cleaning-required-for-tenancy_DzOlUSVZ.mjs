import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$CarpetCleaningRequiredForTenancy = createComponent(($$result, $$props, $$slots) => {
  const title = "Is Carpet Cleaning Required For Tenancy?";
  const description = "When carpet cleaning is required before moving out of a rental property.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "end-of-tenancy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Carpet condition often affects deposit returns during tenancy inspections.</p> <h2>When cleaning is expected</h2> <p>Heavy wear, stains or pet damage usually require professional carpet cleaning.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/carpet-cleaning-required-for-tenancy.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/carpet-cleaning-required-for-tenancy.astro";
const $$url = "/guides/carpet-cleaning-required-for-tenancy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CarpetCleaningRequiredForTenancy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
