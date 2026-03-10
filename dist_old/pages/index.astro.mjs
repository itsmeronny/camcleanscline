import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BVJC5qpX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "CamCleans | Professional Cleaning Services Across the UK";
  const description = "Professional cleaning services across the United Kingdom including end of tenancy cleaning, deep cleaning, after builders cleaning and carpet cleaning.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonicalPath": "/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Professional Cleaning Services Across the United Kingdom</h1> <p>
CamCleans connects customers with professional cleaners across the UK.
We specialise in end of tenancy cleaning, deep cleaning, after builders cleaning,
and carpet cleaning services.
</p> <p>
Our cleaner network operates nationwide and supports both residential
and landlord property cleaning requirements.
</p> <hr> <h2>Are You a Professional Cleaner?</h2> <p>
CamCleans is expanding its national cleaner network.
If you operate a professional cleaning service, you can apply to receive
local cleaning job opportunities in your area.
</p> <p>
Applications are reviewed and approved cleaners may receive
local job enquiries submitted through the CamCleans platform.
</p> <p> <a href="/join-cleaners">Apply to Join the CamCleans Cleaner Network</a> </p> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/pages/index.astro", void 0);

const $$file = "/Users/aaronjames/Documents/camcleanscline/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
