import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_BVJC5qpX.mjs';
import { s as services } from '../../chunks/services_Csqkc2cL.mjs';
import { l as locations } from '../../chunks/locations_MXkpsYmU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://camcleans.co.uk");
async function getStaticPaths() {
  return Object.values(locations).map((location) => ({
    params: { slug: location.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const location = locations[slug];
  if (!location) {
    throw new Error("Location not found");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Cleaning Services in ${location.name}`, "description": `Professional cleaning services available in ${location.name}.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="location-container"> <header> <h1>Cleaning Services in ${location.name}</h1> </header> <section> <p>
Professional cleaning services are available throughout ${location.name}. 
Our platform connects customers with trusted cleaners for specialist services 
including tenancy cleaning, deep cleaning, after builders cleaning and carpet cleaning.
</p> </section> <hr> <section class="location-services"> <h2>Available Cleaning Services</h2> <ul> ${Object.values(services).map((service) => renderTemplate`<li> <a${addAttribute(`/services/${service.slug}/${location.slug}`, "href")}> ${service.name} in ${location.name} </a> </li>`)} </ul> </section> <hr> <section class="location-core-services"> <h2>Popular Cleaning Services</h2> <ul> <li><a href="/services/end-of-tenancy-cleaning/">End of Tenancy Cleaning</a></li> <li><a href="/services/one-off-deep-cleaning/">Deep Cleaning</a></li> <li><a href="/services/after-builders-cleaning/">After Builders Cleaning</a></li> <li><a href="/services/carpet-rug-cleaning/">Carpet & Rug Cleaning</a></li> </ul> </section> </article> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/locations/[slug].astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/locations/[slug].astro";
const $$url = "/locations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
