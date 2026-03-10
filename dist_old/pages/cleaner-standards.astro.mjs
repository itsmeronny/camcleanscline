import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cleaner Standards", "description": "Standards expected from cleaners working through CamCleans." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>Cleaner Standards</h1> <p>
CamCleans focuses on connecting customers with cleaners who deliver reliable,
professional cleaning services.
</p> <h2>Professional Conduct</h2> <ul> <li>Reliable attendance</li> <li>Clear communication</li> <li>Professional behaviour</li> <li>Respect for customer property</li> </ul> <h2>Service Quality</h2> <ul> <li>Consistent cleaning standards</li> <li>Appropriate cleaning equipment</li> <li>Attention to detail</li> <li>Clear service expectations</li> </ul> </article> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/cleaner-standards/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/cleaner-standards/index.astro";
const $$url = "/cleaner-standards";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
