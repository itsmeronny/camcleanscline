import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$TenancyCleaningTimelineBeforeMovingOut = createComponent(($$result, $$props, $$slots) => {
  const title = "Tenancy Cleaning Timeline Before Moving Out";
  const description = "Recommended timeline for preparing a rental property for inspection.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "end-of-tenancy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Cleaning should begin several days before the final inspection.</p> <h2>Planning the process</h2> <p>Staggering tasks helps ensure nothing is missed before the landlord visit.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/tenancy-cleaning-timeline-before-moving-out.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/tenancy-cleaning-timeline-before-moving-out.astro";
const $$url = "/guides/tenancy-cleaning-timeline-before-moving-out";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TenancyCleaningTimelineBeforeMovingOut,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
