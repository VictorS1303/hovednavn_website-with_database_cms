import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderComponent, k as renderScript } from './astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Overlay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Overlay;
  const {
    class: className = "",
    id,
    isConcertCancelled = false,
    isArtistCard,
    concertCancelOverlayText
  } = Astro2.props;
  return renderTemplate`${isConcertCancelled ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`absolute inset-0 bg-red h-full w-full text-3xl flex items-center justify-center text-white font-bold ${className}`, "class")}${addAttribute(id, "id")}>${concertCancelOverlayText}</div>` : isArtistCard ? renderTemplate`<div${addAttribute(`absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none ${className}`, "class")}${addAttribute(id, "id")}></div>` : renderTemplate`<div${addAttribute(`absolute inset-0 bg-black/50 pointer-events-none ${className}`, "class")}${addAttribute(id, "id")}></div>`}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Overlay.astro", void 0);

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    class: className,
    id,
    heroHeaderText,
    heroImageSrc,
    heroImageAlt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-full w-full overflow-hidden"${addAttribute(id, "id")}> <header class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] uppercase"> <h1 class="hero-heading-text hero-heading-text-color whitespace-nowrap tracking-wider text-[44px] invisible md:text-8xl"> ${heroHeaderText} </h1> </header> <img${addAttribute(heroImageSrc, "src")}${addAttribute(heroImageAlt, "alt")} height="100%" width="100%" class="w-full h-screen object-cover absolute top-0 left-0" loading="lazy"> ${renderComponent($$result, "Overlay", $$Overlay, { "class": "bg-black/100 hero-overlay" })} </div> ${renderScript($$result, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Hero.astro", void 0);

export { $$Hero as $, $$Overlay as a };
