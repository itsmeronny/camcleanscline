import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Professional Cleaning Checklist", "description": "Typical tasks included in professional cleaning services." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>Professional Cleaning Checklist</h1> <p>
Professional cleaning services normally follow a checklist to ensure
consistent results.
</p> <h2>Kitchen</h2> <ul> <li>Worktops cleaned</li> <li>Sinks cleaned</li> <li>Appliance exteriors wiped</li> <li>Floors vacuumed and mopped</li> </ul> <h2>Bathrooms</h2> <ul> <li>Toilet sanitised</li> <li>Shower and bath cleaned</li> <li>Sinks and taps cleaned</li> <li>Mirrors wiped</li> </ul> <h2>Living Areas</h2> <ul> <li>Dusting surfaces</li> <li>Vacuuming carpets</li> <li>Mopping hard floors</li> </ul> </article> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/cleaning-checklist/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/cleaning-checklist/index.astro";
const $$url = "/cleaning-checklist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
