import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderSlot } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from './Layout_BVJC5qpX.mjs';

const $$Astro = createAstro("https://camcleans.co.uk");
const $$GuideLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuideLayout;
  const { title, description, canonicalPath = "/" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonicalPath": canonicalPath }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> ${renderSlot($$result2, $$slots["default"])} <hr> <h2>Need Professional Cleaning Help?</h2> <p>
CamCleans connects customers with professional cleaners across the United Kingdom.
If you require end of tenancy cleaning, deep cleaning, after builders cleaning
or carpet cleaning, you can request a quote.
</p> <p> <a href="/quote">Request a Cleaning Quote</a> </p> <hr> <h2>Are You a Professional Cleaner?</h2> <p>
CamCleans is expanding its national cleaner network.
Professional cleaners can apply to receive local cleaning job enquiries.
</p> <p> <a href="/join-cleaners">Apply to Join the CamCleans Cleaner Network</a> </p> </article> ` })}`;
}, "/Users/aaronjames/Documents/camcleanscline/src/layouts/GuideLayout.astro", void 0);

export { $$GuideLayout as $ };
