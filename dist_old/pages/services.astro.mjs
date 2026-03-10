import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
import { s as services } from '../chunks/services_Csqkc2cL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Professional Cleaning Services | CamCleans";
  const description = "Explore professional cleaning services offered by CamCleans across the United Kingdom.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonicalPath": "/services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Professional Cleaning Services</h1> <p>
CamCleans connects customers with professional cleaners across the United Kingdom.
Our services support landlords, property managers, developers and businesses
requiring specialist cleaning before occupation, handover or inspection.
</p> <h2>Available Services</h2> <ul> ${Object.values(services).map((service) => renderTemplate`<li> <a${addAttribute(`/services/${service.slug}`, "href")}> ${service.name} </a> </li>`)} </ul> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/services/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
