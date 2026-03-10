import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Application Received | CamCleans", "description": "Your cleaner network application has been received.", "canonicalPath": "/application-received" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Application Received</h1> <p>
Thank you for applying to join the CamCleans cleaning network.
</p> <p>
We review all applications from cleaners and cleaning companies.  
If suitable work opportunities arise in your area, we will contact you.
</p> <p>
You can now close this page.
</p> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/application-received/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/application-received/index.astro";
const $$url = "/application-received";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
