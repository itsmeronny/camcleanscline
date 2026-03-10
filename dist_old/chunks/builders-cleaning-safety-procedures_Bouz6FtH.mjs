import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$BuildersCleaningSafetyProcedures = createComponent(($$result, $$props, $$slots) => {
  const title = "Builders Cleaning Safety Procedures";
  const description = "Safety procedures followed during professional after builders cleaning.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "after-builders" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>After builders cleaning must be carried out carefully due to dust, debris and leftover materials.</p> <h2>Safety considerations</h2> <p>Protective equipment and controlled cleaning processes are essential when handling construction residue.</p> <h2>Professional standards</h2> <p>Professional cleaning teams follow structured safety procedures when working in newly renovated properties.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/builders-cleaning-safety-procedures.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/builders-cleaning-safety-procedures.astro";
const $$url = "/guides/builders-cleaning-safety-procedures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BuildersCleaningSafetyProcedures,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
