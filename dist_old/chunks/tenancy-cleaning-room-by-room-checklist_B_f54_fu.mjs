import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$GuideLayout } from './GuideLayout_DgjhLIs_.mjs';

const $$TenancyCleaningRoomByRoomChecklist = createComponent(($$result, $$props, $$slots) => {
  const title = "Tenancy Cleaning Room-by-Room Checklist";
  const description = "Complete room-by-room checklist for preparing a rental property for end-of-tenancy inspection.";
  return renderTemplate`${renderComponent($$result, "GuideLayout", $$GuideLayout, { "title": title, "description": description, "cluster": "end-of-tenancy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>End of tenancy cleaning requires a systematic approach covering every room in the property.</p> <h2>Kitchen</h2> <p>Clean appliances, cabinets, worktops and floors thoroughly.</p> <h2>Bathrooms</h2> <p>Remove limescale and clean fixtures, tiles and ventilation areas.</p> ` })} <hr> <p><strong>Related cleaning guides:</strong></p> <ul> <li><a href="/guides/end-of-tenancy-cleaning-checklist/">End of tenancy cleaning checklist</a></li> <li><a href="/guides/deep-cleaning-before-moving-in/">Deep cleaning before moving in</a></li> <li><a href="/guides/after-builders-cleaning-checklist/">After builders cleaning checklist</a></li> <li><a href="/guides/carpet-cleaning-steam-vs-shampoo/">Steam vs shampoo carpet cleaning</a></li> </ul>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/tenancy-cleaning-room-by-room-checklist.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/guides/tenancy-cleaning-room-by-room-checklist.astro";
const $$url = "/guides/tenancy-cleaning-room-by-room-checklist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TenancyCleaningRoomByRoomChecklist,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
