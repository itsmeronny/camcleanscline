import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$PostConstructionWindowCleaning = createComponent(($$result, $$props, $$slots) => {
  const title = "Post Construction Window Cleaning";
  const description = "How windows should be cleaned safely after building or renovation work.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "after-builders" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Windows often collect plaster dust, paint splatter and adhesive residue during construction.</p> <h2>Common residue</h2> <p>Paint, silicone and dust frequently adhere to glass and frames after renovation.</p> <h2>Cleaning approach</h2> <p>Professional cleaning removes residue carefully without scratching glass or damaging frames.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/post-construction-window-cleaning.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/post-construction-window-cleaning.astro";
const $$url = "/guides/post-construction-window-cleaning";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PostConstructionWindowCleaning,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
