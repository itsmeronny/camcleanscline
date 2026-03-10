import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/Layout_BVJC5qpX.mjs';
import { s as services } from '../../../chunks/services_Csqkc2cL.mjs';
import { l as locations } from '../../../chunks/locations_MXkpsYmU.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://camcleans.co.uk");
async function getStaticPaths() {
  const paths = [];
  for (const service of Object.values(services)) {
    for (const location of Object.values(locations)) {
      paths.push({
        params: {
          service: service.slug,
          location: location.slug
        }
      });
    }
  }
  return paths;
}
const $$location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$location;
  const { service, location } = Astro2.params;
  const serviceData = services[service];
  const locationData = locations[location];
  if (!serviceData || !locationData) {
    throw new Error("Page data missing");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${serviceData.name} in ${locationData.name}`, "description": `${serviceData.name} available in ${locationData.name}. Book trusted professional cleaning services.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="service-location-container"> <header> <h1>${serviceData.name} in ${locationData.name}</h1> </header> <section class="conversion-box"> <h2>Get a Cleaning Quote in 60 Seconds</h2> <p>
Professional <strong>${serviceData.name}</strong> available in <strong>${locationData.name}</strong>.
Fast response, vetted cleaners, and flexible scheduling.
</p> <ul> <li>✔ Vetted local cleaners</li> <li>✔ Flexible availability</li> <li>✔ Fixed quote before work begins</li> </ul> <p> <a href="/quote" class="quote-button">Get a Quote</a> </p> </section> <section> <p>
Professional ${serviceData.name.toLowerCase()} services are available in ${locationData.name}.
Our platform connects customers with experienced cleaners delivering reliable and
high-quality results.
</p> </section> <hr> <section class="service-benefits"> <h2>Why Choose Professional Cleaning</h2> <ul> <li>Experienced professional cleaners</li> <li>Specialist cleaning equipment</li> <li>Reliable service standards</li> <li>Flexible booking availability</li> </ul> </section> <hr> <section class="service-cta"> <h2>Request a Quote</h2> <p>
Submit a cleaning enquiry and receive quotes from available cleaners in ${locationData.name}.
</p> <p> <a href="/quote">Get a Cleaning Quote</a> </p> </section> </article> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/services/[service]/[location].astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/services/[service]/[location].astro";
const $$url = "/services/[service]/[location]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$location,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
