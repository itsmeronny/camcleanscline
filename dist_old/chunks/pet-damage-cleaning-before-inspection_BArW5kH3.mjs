import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$PetDamageCleaningBeforeInspection = createComponent(($$result, $$props, $$slots) => {
  const title = "Pet Damage Cleaning Before Inspection";
  const description = "Cleaning steps required when pets have lived in a rental property.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "carpet-cleaning" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Pets often leave hair, odours and marks that require additional cleaning.</p> <h2>Preparation</h2> <p>Deep cleaning carpets and upholstery helps remove lingering pet residue.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/pet-damage-cleaning-before-inspection.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/pet-damage-cleaning-before-inspection.astro";
const $$url = "/guides/pet-damage-cleaning-before-inspection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PetDamageCleaningBeforeInspection,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
