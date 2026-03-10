import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$DepositDeductionCleaningGuide = createComponent(($$result, $$props, $$slots) => {
  const title = "Deposit Deduction Cleaning Guide";
  const description = "Understand common cleaning issues that cause deposit deductions at the end of a tenancy.";
  const canonical = "/guides/deposit-deduction-cleaning-guide";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "canonicalPath": canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Deposit Deduction Cleaning Guide</h1> <p>Cleaning issues are one of the most common causes of tenancy deposit deductions.</p> </section> <section> <h2>Common Issues</h2> <ul> <li>Kitchen grease</li> <li>Bathroom limescale</li> <li>Carpet stains</li> <li>Oven residue</li> </ul> </section> <section> <h2>How to Avoid Deductions</h2> <ul> <li>Deep clean before inspection</li> <li>Follow inventory condition</li> <li>Use professional cleaning when required</li> </ul> </section> <section> <p><a href="/services/end-of-tenancy-cleaning">End of Tenancy Cleaning Service</a></p> </section> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/deposit-deduction-cleaning-guide.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/deposit-deduction-cleaning-guide.astro";
const $$url = "/guides/deposit-deduction-cleaning-guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DepositDeductionCleaningGuide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
