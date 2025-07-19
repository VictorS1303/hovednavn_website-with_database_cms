import { c as createComponent, d as createAstro, m as maybeRenderHead, r as renderTemplate, i as renderComponent, f as addAttribute } from '../chunks/astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import { a as fetchTimelineCardsData, s as supabase, f as fetchArtistsData } from '../chunks/supabase_MN9fKV65.mjs';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_BUWjPPDY.mjs';
import { $ as $$SectionHeader, a as $$ScrollToTopBtn, b as $$Main, c as $$PageIntroText } from '../chunks/PageIntroText_DYTZZo7T.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Hero } from '../chunks/Hero_SbLUOcwK.mjs';
import { $ as $$Card } from '../chunks/Card_BrrF5wz7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$TimelineCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimelineCard;
  const {
    class: className,
    id,
    timelineCardTitle,
    timelineCardDescriptionText
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="timeline-card overflow-hidden bg-[var(--timeline-card-bg-color)] paragraph-font w-[275px] md:w-[500px] px-6 py-4 text-md shadow-md rounded-lg" data-astro-cid-zx3jizji> <summary class="timeline-card-header flex items-center justify-between gap-4 cursor-pointer text-xl text-white font-bold" data-astro-cid-zx3jizji> ${timelineCardTitle} <i class="fas fa-chevron-down peer-open:rotate-180" data-astro-cid-zx3jizji></i> </summary> <p class="timeline-card-description-text text-base text-wrap md:text-lg lg:text-xl leading-snug tracking-wide mt-6 text-white border-t-2 border-white pt-4 peer-hidden" data-astro-cid-zx3jizji> ${timelineCardDescriptionText} </p> </details> <!-- Custom CSS to manage transitions and maintain width consistency --> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/TimelineCard.astro", void 0);

const $$Astro = createAstro();
const $$TimelineContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimelineContainer;
  const { class: className, id } = Astro2.props;
  const timelineCardsData = await fetchTimelineCardsData();
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center w-[80vw] overflow-hidden"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "sectionHeaderText": "Hvem er Hovednavn?" })} <div class="relative flex flex-col justify-between space-y-6"> <div class="absolute -z-2 w-2 h-full bg-[var(--timeline-card-bg-color)] shadow-md left-1/2 transform -translate-x-1/2"></div> ${timelineCardsData.map((timelineCard, index) => renderTemplate`${renderComponent($$result, "TimelineCard", $$TimelineCard, { "timelineCardTitle": timelineCard.timeline_card_header_text, "timelineCardDescriptionText": timelineCard.timeline_card_body_text })}`)} </div> </div>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/TimelineContainer.astro", void 0);

const $$ArtistCardsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const { data: artistData, error } = await supabase.from("artists").select("*");
  console.log(artistData);
  if (error) {
    throw new Error(`Failed to fetch artists: ${error.message}`);
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col mt-16"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "sectionHeaderText": "Hvem best\xE5r vi af?" })} <div class="concert-cards-container flex flex-wrap justify-center" id="artist_cards_container"> ${artistData.map((artistCard) => renderTemplate`<a${addAttribute(`/about/${artistCard.id}`, "href")}> ${renderComponent($$result, "Card", $$Card, { "class": "artist-card m-4", "id": artistCard.id, "src": artistCard.artist_image, "isArtistCard": true, "showOverlay": true, "artistName": artistCard.artist_name, "artistBandRole": artistCard.artist_band_role })} </a>`)} </div> </div>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ArtistCardsContainer.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
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
  const artistData = await fetchArtistsData();
  console.log(artistData);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Om", "navItems": navItems }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "h-screen relative flex items-center justify-center", "id": "concerts" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "heroHeaderText": "Om", "heroImageSrc": "/images/about/hero/about_hero_bg.webp", "heroImageAlt": "hero concert image", "loading": "lazy" })} ` })}  ${renderComponent($$result2, "Main", $$Main, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "class": "-mb-12", "sectionHeaderText": "Velkommen til Hovednavn" })} ${renderComponent($$result3, "PageIntroText", $$PageIntroText, { "pageIntroText": "Hej og velkommen til! Vi hedder Hovednavn og best\xE5r af fem gutter, der holder af at spille musik sammen. Her p\xE5 siden har du mulighed for at l\xE6re os bedre at kende - alt fra, hvordan Hovednavn blev til samt om os hver is\xE6r personligt." })} ${renderComponent($$result3, "TimelineContainer", $$TimelineContainer, {})} ${renderComponent($$result3, "ArtistCardsContainer", $$ArtistCardsContainer, { "showOverlay": true })} ` })} ` })} ${renderComponent($$result, "ScrollToTopBtn", $$ScrollToTopBtn, {})}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/about.astro", void 0);

const $$file = "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
