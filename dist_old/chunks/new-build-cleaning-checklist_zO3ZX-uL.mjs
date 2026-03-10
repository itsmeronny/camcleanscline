import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$NewBuildCleaningChecklist = createComponent(($$result, $$props, $$slots) => {
  const title = "New Build Cleaning Checklist";
  const description = "Checklist for cleaning a newly built property before handover or occupancy.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "after-builders" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Newly constructed properties require a detailed clean before they are ready for occupation.</p> <h2>Typical residue</h2> <p>Dust, adhesive, plaster particles and packaging debris are commonly present.</p> <h2>Checklist approach</h2> <p>Professional cleaners follow systematic room-by-room procedures to prepare new builds for handover.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/new-build-cleaning-checklist.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/new-build-cleaning-checklist.astro";
const $$url = "/guides/new-build-cleaning-checklist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$NewBuildCleaningChecklist,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
