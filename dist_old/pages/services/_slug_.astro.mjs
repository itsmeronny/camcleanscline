import { b as createAstro, c as createComponent, m as maybeRenderHead, f as addAttribute, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_BVJC5qpX.mjs';
import 'clsx';
import { s as services } from '../../chunks/services_Csqkc2cL.mjs';
import { l as locations } from '../../chunks/locations_MXkpsYmU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://camcleans.co.uk");
const $$GuideLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuideLinks;
  const { serviceSlug } = Astro2.props;
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) {
    throw new Error("GuideLinks requires a valid serviceSlug");
  }
  const sampleLocations = locations.slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<section> <h2>${service.name} Services</h2> <p>
CamCleans provides professional ${service.name.toLowerCase()} services across the United Kingdom.
Below are some locations where cleaners are available.
</p> <ul> ${sampleLocations.map((location) => renderTemplate`<li> <a${addAttribute(`/services/${service.slug}/${location.slug}`, "href")}> ${service.name} in ${location.name} </a> </li>`)} </ul> <p> <a${addAttribute(`/services/${service.slug}`, "href")}>View all ${service.name.toLowerCase()} services</a> </p> </section>`;
}, "/Users/aaronjames/Documents/camcleanscline/src/components/GuideLinks.astro", void 0);

const $$Astro = createAstro("https://camcleans.co.uk");
async function getStaticPaths() {
  return Object.values(services).map((service) => ({
    params: { slug: service.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const service = services[slug];
  if (!service) {
    throw new Error("Service not found");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": service.name, "description": service.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="service-container"> <header> <h1>${service.name}</h1> </header> <section> <p>${service.description}</p> </section> <hr> <section class="service-guides"> <h2>Helpful Cleaning Guides</h2> ${renderComponent($$result2, "GuideLinks", $$GuideLinks, { "service": slug })} </section> <hr> <section class="service-related-services"> <h2>Related Cleaning Services</h2> <ul> <li><a href="/services/end-of-tenancy-cleaning/">End of Tenancy Cleaning</a></li> <li><a href="/services/one-off-deep-cleaning/">Deep Cleaning</a></li> <li><a href="/services/after-builders-cleaning/">After Builders Cleaning</a></li> <li><a href="/services/carpet-rug-cleaning/">Carpet & Rug Cleaning</a></li> </ul> </section> </article> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/services/[slug].astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
