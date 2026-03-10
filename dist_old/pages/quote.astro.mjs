import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Get a Cleaning Quote | CamCleans";
  const description = "Request a cleaning quote for end of tenancy cleaning, deep cleaning, after builders cleaning or carpet cleaning.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonicalPath": "/quote" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Request a Cleaning Quote</h1> <p>
Provide a few details about the property and cleaning service required.
A CamCleans cleaner will review the request and respond.
</p> <form method="POST" action="/quote-request"> <label for="postcode">Postcode</label><br> <input id="postcode" name="postcode" required><br><br> <label for="property_type">Property Type</label><br> <select id="property_type" name="property_type" required> <option value="">Select</option> <option value="flat">Flat / Apartment</option> <option value="house">House</option> <option value="bungalow">Bungalow</option> <option value="other">Other</option> </select><br><br> <label for="bedrooms">Bedrooms</label><br> <select id="bedrooms" name="bedrooms" required> <option value="">Select</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5+</option> </select><br><br> <label for="bathrooms">Bathrooms</label><br> <select id="bathrooms" name="bathrooms" required> <option value="">Select</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4+</option> </select><br><br> <label for="clean_type">Cleaning Type</label><br> <select id="clean_type" name="clean_type" required> <option value="">Select</option> <option value="end-of-tenancy">End of Tenancy Cleaning</option> <option value="deep-clean">Deep Cleaning</option> <option value="after-builders">After Builders Cleaning</option> <option value="carpet-clean">Carpet Cleaning</option> </select><br><br> <label for="date_required">Preferred Date</label><br> <input type="date" id="date_required" name="date_required"><br><br> <label for="notes">Additional Notes</label><br> <textarea id="notes" name="notes"></textarea><br><br> <label for="name">Your Name</label><br> <input id="name" name="name" required><br><br> <label for="email">Email</label><br> <input type="email" id="email" name="email" required><br><br> <label for="phone">Phone</label><br> <input id="phone" name="phone"><br><br> <div style="position:absolute;left:-9999px;top:-9999px;"> <label for="company">Company</label> <input id="company" name="company" type="text" autocomplete="off"> </div> <button type="submit">Request Quote</button> </form> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/quote/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/quote/index.astro";
const $$url = "/quote";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
