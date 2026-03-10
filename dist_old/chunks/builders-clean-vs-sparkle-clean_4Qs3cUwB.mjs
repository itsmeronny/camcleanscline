import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$BuildersCleanVsSparkleClean = createComponent(($$result, $$props, $$slots) => {
  const title = "Builders Clean vs Sparkle Clean";
  const description = "Understanding the difference between a builders clean and a sparkle clean after construction work.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "after-builders" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Construction projects often require two stages of cleaning: the builders clean and the sparkle clean.</p> <h2>Builders Clean</h2> <p>This stage removes heavy debris, plaster dust, paint splatter and construction residue left after building work.</p> <h2>Sparkle Clean</h2> <p>The sparkle clean occurs after the builders clean and prepares the property for presentation, handover or occupation.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/builders-clean-vs-sparkle-clean.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/builders-clean-vs-sparkle-clean.astro";
const $$url = "/guides/builders-clean-vs-sparkle-clean";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BuildersCleanVsSparkleClean,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
