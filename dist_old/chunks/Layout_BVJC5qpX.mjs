import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute } from './astro/server_D5l7CbQ4.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                                                    */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://camcleans.co.uk");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonicalPath = "/" } = Astro2.props;
  const baseUrl = "https://camcleans.co.uk";
  const canonical = `${baseUrl}${canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CamCleans",
    url: baseUrl,
    description: "Professional cleaning services across the UK including end of tenancy cleaning, deep cleaning, after builders cleaning and carpet cleaning.",
    areaServed: "United Kingdom"
  };
  JSON.stringify(schema);
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="google-site-verification" content="pAsatR2k1X-eVnAENBpTB9Scyy41cSObLsYixLSqxM4"><title>', '</title><script type="application/ld+json">\n{schemaJson}\n<\/script><meta name="description"', '><link rel="canonical"', ">", '</head> <body data-astro-cid-sckkx6r4> <header data-astro-cid-sckkx6r4> <nav data-astro-cid-sckkx6r4> <a href="/" data-astro-cid-sckkx6r4>Home</a> <a href="/services" data-astro-cid-sckkx6r4>Services</a> <a href="/how-camcleans-works" data-astro-cid-sckkx6r4>How It Works</a> <a href="/cleaner-standards" data-astro-cid-sckkx6r4>Cleaner Standards</a> <a href="/cleaning-checklist" data-astro-cid-sckkx6r4>Cleaning Checklist</a> <a href="/contact" data-astro-cid-sckkx6r4>Contact</a> <a class="quote-link" href="/quote" data-astro-cid-sckkx6r4>Get a Quote</a> </nav> </header> <main data-astro-cid-sckkx6r4> ', ' </main> <footer data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>CamCleans \u2014 Professional cleaning services across the United Kingdom.</p> <div class="footer-links" data-astro-cid-sckkx6r4> <a href="/join-cleaners" data-astro-cid-sckkx6r4>Join as a Cleaner</a> </div> </footer> </body></html>'])), title, addAttribute(description, "content"), addAttribute(canonical, "href"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/aaronjames/Documents/camcleanscline/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
