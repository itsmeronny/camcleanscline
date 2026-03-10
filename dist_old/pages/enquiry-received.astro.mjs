import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Enquiry Received | CamCleans", "description": "Your cleaning enquiry has been received.", "canonicalPath": "/enquiry-received" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Enquiry Received</h1> <p>
Thank you for contacting CamCleans.
</p> <p>
Your cleaning enquiry has been received and will be reviewed shortly.
</p> <p>
If suitable cleaners are available in your area we will contact you.
</p> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/enquiry-received/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/enquiry-received/index.astro";
const $$url = "/enquiry-received";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
