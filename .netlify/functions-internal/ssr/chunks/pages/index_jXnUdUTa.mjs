/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_Tj6vjdcQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex items-center justify-center h-screen"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/mnt/sda2/Projects/magical-main/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<button class="bg-black text-white rounded-lg justify-center" data-astro-cid-j7pv25f6> <div class="dot-spinner" id="loading" data-astro-cid-j7pv25f6> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> <div class="dot-spinner__dot" data-astro-cid-j7pv25f6></div> </div> <span class="span-dis" data-astro-cid-j7pv25f6>Send</span> </button> ` })}  `;
}, "/mnt/sda2/Projects/magical-main/src/pages/index.astro", void 0);

const $$file = "/mnt/sda2/Projects/magical-main/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
