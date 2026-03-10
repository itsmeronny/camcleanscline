import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$TenancyCleaningMistakesThatCostDeposits = createComponent(($$result, $$props, $$slots) => {
  const title = "Tenancy Cleaning Mistakes That Cost Deposits";
  const description = "Common cleaning mistakes that lead to deposit deductions at the end of a tenancy.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "end-of-tenancy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Many deposit deductions occur because cleaning standards do not meet landlord expectations.</p> <h2>Common issues</h2> <p>Oven grease, limescale and neglected carpets are frequent problems.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/tenancy-cleaning-mistakes-that-cost-deposits.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/tenancy-cleaning-mistakes-that-cost-deposits.astro";
const $$url = "/guides/tenancy-cleaning-mistakes-that-cost-deposits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TenancyCleaningMistakesThatCostDeposits,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
