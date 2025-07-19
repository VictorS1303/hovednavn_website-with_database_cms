import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, j as renderSlot } from '../../chunks/astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
/* empty css                                      */
import { $ as $$Layout, a as $$Section } from '../../chunks/Section_BUWjPPDY.mjs';
import { f as fetchArtistsData } from '../../chunks/supabase_MN9fKV65.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SingleViewLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SingleViewLayout;
  const { name, age, about, image, backArrow } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": name }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "bg-[var(--body-bg-color)] text-red-400 h-full w-full" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="single-view-container my-12 flex flex-col gap-8 px-8 md:flex-row md:justify-center md:items-center md:gap-12 md:h-screen"> <img${addAttribute(image, "src")} alt="{name}'s image" class="w-full h-[300px] object-cover md:h-[500px] md:w-[500px] md:object-fit"> <div class="paragraph-font flex flex-col gap-6 h-full md:w-1/2 md:justify-center md:h-fit"> <div> <h2 class="text-red-800 text-3xl mb-2 md:text-4xl">Navn</h2> <h3 class="text-black text-xl md:text-2xl md:leading-8">${name}</h3> </div> <div> <h2 class="text-red-800 text-3xl mb-2 md:text-4xl">Alder</h2> <h3 class="text-black text-xl md:text-2xl md:leading-8">${age}</h3> </div> <div> <h2 class="text-red-800 text-3xl mb-2 md:text-4xl">Om</h2> <p class="text-black text-xl leading-6 md:text-2xl md:leading-8"> ${about} </p> </div> </div> ${renderSlot($$result3, $$slots["default"])} </div> ` })} ` })}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/layouts/SingleViewLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const artists = await fetchArtistsData();
  return artists.map((artist) => ({
    params: { id: artist.id },
    props: { artist }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { artist } = Astro2.props;
  console.log(artist.id);
  return renderTemplate`${renderComponent($$result, "SingleViewLayout", $$SingleViewLayout, { "name": artist.artist_name, "image": artist.artist_image, "age": artist.artist_age, "about": artist.artist_info })}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/about/[id].astro", void 0);

const $$file = "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/about/[id].astro";
const $$url = "/about/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
