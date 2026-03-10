import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "How CamCleans Works", "description": "Learn how CamCleans connects customers with trusted professional cleaners." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>How CamCleans Works</h1> <p>
CamCleans connects customers with experienced professional cleaners across the UK.
Our platform allows customers to request cleaning services quickly while ensuring
cleaners meet professional standards.
</p> <h2>Step 1 — Submit a Cleaning Request</h2> <p>
Customers submit a simple enquiry describing the cleaning service they need and
their location.
</p> <h2>Step 2 — Cleaner Availability</h2> <p>
Available cleaners operating in the area can respond with availability and service details.
</p> <h2>Step 3 — Confirm the Booking</h2> <p>
Once availability and details are confirmed, the cleaning service can be scheduled
at a convenient time.
</p> <h2>Professional Standards</h2> <ul> <li>Experienced cleaners</li> <li>Reliable service quality</li> <li>Flexible availability</li> <li>Clear service expectations</li> </ul> </article> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/how-camcleans-works/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/how-camcleans-works/index.astro";
const $$url = "/how-camcleans-works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
