import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Join CamCleans | Cleaning Work Opportunities Across the UK", "description": "Independent cleaners and cleaning companies across the UK can apply to join the CamCleans cleaning network. Access residential, tenancy, commercial and post-construction cleaning opportunities.", "canonicalPath": "/join-cleaners" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Join the CamCleans Cleaning Network</h1> <p>
CamCleans works with independent cleaners and professional cleaning companies across the United Kingdom.
We receive cleaning enquiries from landlords, property managers, businesses and developers and work with
trusted cleaning professionals to complete these jobs.
</p> <p>
If you are an experienced cleaner or operate a cleaning company, you can apply to join the CamCleans cleaning network.
</p> <h2>Who We Work With</h2> <ul> <li>Independent domestic cleaners</li> <li>End of tenancy cleaning specialists</li> <li>Commercial cleaning companies</li> <li>Carpet cleaning professionals</li> <li>Post-construction cleaning teams</li> <li>Airbnb turnover cleaners</li> <li>Deep cleaning specialists</li> <li>Cleaning businesses expanding into new areas</li> </ul> <h2>Why Join CamCleans</h2> <ul> <li>Access cleaning enquiries in your area</li> <li>Work across residential and commercial properties</li> <li>Flexible job opportunities</li> <li>Opportunity to grow your cleaning business</li> <li>Work with landlords, developers and businesses</li> </ul> <h2>Apply to Join</h2> <form action="/cleaner-application" method="POST" enctype="application/x-www-form-urlencoded"> <p> <label>Name<br> <input type="text" name="name" required> </label> </p> <p> <label>Business Name<br> <input type="text" name="business_name"> </label> </p> <p> <label>Email<br> <input type="email" name="email" required> </label> </p> <p> <label>Phone<br> <input type="tel" name="phone" required> </label> </p> <p> <label>Postcode<br> <input type="text" name="postcode" required> </label> </p> <p> <label>Areas You Cover<br> <input type="text" name="areas"> </label> </p> <p> <label>Services Offered<br> <input type="text" name="services"> </label> </p> <p> <label>Years Experience<br> <input type="number" name="experience"> </label> </p> <p> <label>Public Liability Insurance<br> <select name="insurance"> <option value="">Select</option> <option>Yes</option> <option>No</option> </select> </label> </p> <p> <button type="submit">Apply to Join the Cleaning Network</button> </p> </form> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/join-cleaners/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/join-cleaners/index.astro";
const $$url = "/join-cleaners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
