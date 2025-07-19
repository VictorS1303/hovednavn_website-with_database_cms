import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, k as renderScript, i as renderComponent } from '../chunks/astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_BUWjPPDY.mjs';
import { a as $$ScrollToTopBtn, b as $$Main, $ as $$SectionHeader, c as $$PageIntroText } from '../chunks/PageIntroText_DYTZZo7T.mjs';
/* empty css                                   */
/* empty css                                   */
import 'clsx';
import { c as fetchGalleryData } from '../chunks/supabase_MN9fKV65.mjs';
import { $ as $$Hero } from '../chunks/Hero_SbLUOcwK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$GalleryImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryImage;
  const { class: className, id, src, alt, data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(`${className} gslide-image h-[300px] w-[300px] object-cover`, "class")}${addAttribute(id, "id")}${addAttribute(src, "src")}${addAttribute(alt, "alt")}>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/GalleryImage.astro", void 0);

const $$GalleryContainer = createComponent(async ($$result, $$props, $$slots) => {
  const galleryData = await fetchGalleryData();
  return renderTemplate`${maybeRenderHead()}<div class="container gallery-container mx-auto flex flex-col flex-wrap justify-center items-center w-full pb-16 gap-6 md:flex-row"> ${galleryData.map((galleryItem) => renderTemplate`<a${addAttribute(galleryItem.gallery_image, "href")} class="glightbox"${addAttribute(galleryItem.gallery_image_text, "data-description")}> ${renderComponent($$result, "GalleryImage", $$GalleryImage, { "src": galleryItem.gallery_image })} </a>`)} </div> ${renderScript($$result, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/GalleryContainer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/GalleryContainer.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galleri", "navItems": navItems }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "h-screen relative flex items-center justify-center", "id": "concerts" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "heroHeaderText": "Galleri", "heroImageSrc": "/images/about/hero/about_hero_bg.webp", "heroImageAlt": "hero concert image", "loading": "lazy" })} ` })} ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "class": "-mb-12", "sectionHeaderText": "Galleri" })} ${renderComponent($$result3, "PageIntroText", $$PageIntroText, { "pageIntroText": "Her vil du kunne finde billeder og videoer fra koncerter og andet. Kig endeligt!" })} ` })} ${renderComponent($$result2, "GalleryContainer", $$GalleryContainer, {})} ` })} ${renderComponent($$result, "ScrollToTopBtn", $$ScrollToTopBtn, {})}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
