import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$RemovingCementDustFromFloors = createComponent(($$result, $$props, $$slots) => {
  const title = "Removing Cement Dust From Floors";
  const description = "How cement and construction dust is removed from flooring after building work.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "after-builders" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Cement dust forms a fine powder that settles across flooring after renovation work.</p> <h2>Why cement dust spreads</h2> <p>Fine particles travel easily through the property during construction activity.</p> <h2>Cleaning method</h2> <p>HEPA vacuuming followed by damp microfibre cleaning removes cement residue effectively.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/removing-cement-dust-from-floors.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/removing-cement-dust-from-floors.astro";
const $$url = "/guides/removing-cement-dust-from-floors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$RemovingCementDustFromFloors,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
