import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$HowCarpetCleaningWorks = createComponent(($$result, $$props, $$slots) => {
  const title = "How Carpet Cleaning Works";
  const description = "Explanation of how professional carpet cleaning removes embedded dirt and stains.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "carpet-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Professional carpet cleaning removes embedded dirt, allergens and stains that regular vacuuming cannot reach.</p> <h2>Main process</h2> <p>Technicians typically use hot water extraction or steam cleaning equipment to lift debris from deep within carpet fibres.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-carpet-cleaning-works.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/how-carpet-cleaning-works.astro";
const $$url = "/guides/how-carpet-cleaning-works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HowCarpetCleaningWorks,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
