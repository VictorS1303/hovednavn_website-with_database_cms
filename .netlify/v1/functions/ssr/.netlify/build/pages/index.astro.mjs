import { c as createComponent, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_BUWjPPDY.mjs';
import { $ as $$Hero } from '../chunks/Hero_SbLUOcwK.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      href: "/about",
      text: "Om"
    },
    {
      href: "/music",
      text: "Musik"
    },
    {
      href: "/concerts",
      text: "Koncerter"
    },
    {
      href: "/gallery",
      text: "Galleri"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Velkommen", "navItems": navItems }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": `h-screen relative overflow-hidden`, "id": "music" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "heroHeaderText": "Hovednavn", "heroImageSrc": "/images/landing_page/hero/hero_bg.jpg", "heroImageAlt": "hero music image", "loading": "lazy" })} ` })} ` })}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/index.astro", void 0);

const $$file = "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
