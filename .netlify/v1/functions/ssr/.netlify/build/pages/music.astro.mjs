import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, k as renderScript, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_BUWjPPDY.mjs';
import { a as $$ScrollToTopBtn, b as $$Main, $ as $$SectionHeader, c as $$PageIntroText } from '../chunks/PageIntroText_DYTZZo7T.mjs';
import 'clsx';
import { d as fetchMusicData } from '../chunks/supabase_MN9fKV65.mjs';
import { $ as $$Hero } from '../chunks/Hero_SbLUOcwK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$RecordPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecordPlayer;
  const { class: className, id } = Astro2.props;
  const musicData = await fetchMusicData();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${className} relative flex flex-col items-center py-8 rounded-2xl mb-12 bg-[var(--record-player-bg-color)] w-[300px] h-[fit] overflow-hidden md:w-[800px] md:flex-row md:justify-between px-20`, "class")}> <div class="relative flex flex-col items-center justify-start gap-8"> <!-- Vinyl --> <div class="container vinyl-container relative h-[150px] w-[150px] bg-black rounded-full" id="vinyl_container"> <div class="absolute top-[50%] left-[50%] -translate-[50%] rounded-full vinyl-hole h-[15px] w-[15px] bg-black z-[2000]" id="vinyl_hole"></div> <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[97%] w-[97%] p-2 object-cover rounded-full z-[500]" id="cover_image" alt="vinyl image" height="100%" width="100%" loading="lazy"> </div> <!-- src='/recordings/covers/doev.webp' --> <!-- Track Data Container --> <div class="container track-data-container-and-controls-container" id="track_data_and_controls_container"> <div class="track-data-container w-[200px] whitespace-nowrap" id="track_data_container"> <h3 class="track-title text-xl text-center" id="track_title"></h3> <div class="overflow-hidden w-full bg-white rounded-full h-2.5 mt-4"> <div class="bg-[var(--progress-bar-inner-bg-color)] h-2.5 rounded-full" id="progress_bar"></div> </div> <div class="container length-info-container flex justify-between mt-2" id="length_info_container"> <h4 class="start-time track-duration-color" id="start_time">0:00</h4> <h4 class="full-time track-duration-color" id="end_time">3:56</h4> </div> </div> </div> <!-- Controls Container --> <div class="container controls-container flex items-center justify-center h-[30px] w-full gap-6 -mt-2" id="controls_container"> <button class="btn control-btn previous-song-btn text-2xl cursor-pointer" id="previous_song_btn" aria-label="previous song"> <i class="fa-solid fa-backward"></i> </button> <button class="btn control-btn play-pause-song-btn text-3xl cursor-pointer" id="play_pause_song_btn" aria-label="play and pause song"> <i class="fa-solid fa-play"></i> </button> <button class="btn control-btn next-song-btn text-2xl cursor-pointer" id="next_song_btn" aria-label="next song"> <i class="fas fa-forward"></i> </button> </div> </div> <!-- Track List Container --> <button class="absolute top-4 text-white right-4 btn toggle-mobile-track-list-btn cursor-pointer rotate-[0] text-xl transition-rotate duration-400 ease-in-out md:none" id="toggle_mobile_track_list_btn" aria-label="toggle playlist"> <i class="fas fa-list md:none"></i> </button> <div class="track-list-container absolute mt-7 z-[1000] backdrop-blur-2xl w-full h-[275px] rounded-b-2xl top-[500px] border-t-2 border-t-white transition-top duration-400 ease-in-out md:-top-[100px] md:w-[50%] md:right-0 md:h-[500px] md:flex md:flex-col md:justify-center md:border-t-none md:border-l-2 border-l-white" id="track_list_container"> <h2 class="flex justify-between px-6 py-4"> <span class="text-white md:text-xl">Track:</span> <span class="text-white md:text-xl">Længde:</span> </h2> <ul class="paragraph-font track-list flex flex-col px-6 h-[150px] overflow-y-scroll md:h-[200px]"> ${musicData.map((trackInfo, index) => renderTemplate`<li class="py-2 m-0 flex justify-between items-center text-md text-white hover:text-[var(--track-list-text-hover-color)] cursor-pointer border-b border-white last:border-b-0 transition duration-150 ease-in md:py-4"${addAttribute(trackInfo.song_number, "data-song-number")}> <span class="track-name">${trackInfo.track_title}</span> <span class="track-duration">${trackInfo.track_end_time}</span> </li>`)} </ul> </div> </div> ${renderScript($$result, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/RecordPlayer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/RecordPlayer.astro", void 0);

const $$Music = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Musik", "navItems": navItems }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-start"> ${renderComponent($$result2, "Section", $$Section, { "class": `h-screen relative`, "id": "music" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "heroHeaderText": "Musik", "heroImageSrc": "/images/concert/hero/hero_bg.webp", "heroImageAlt": "hero music image", "loading": "lazy" })} ` })} ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "class": "-mb-12", "sectionHeaderText": "Hvordan lyder Hovednavn?" })} ${renderComponent($$result3, "PageIntroText", $$PageIntroText, { "pageIntroText": "Velkommen til vores musikalske univers. Her kan du f\xE5 en forsmag p\xE5, hvad vi har at byde p\xE5 - om det er lette melodier eller mere eftert\xE6nksomme tekster, har vi helt sikkert noget for dig! S\xE5 giv det et lyt, og s\xE5 ses vi forh\xE5bentlig til en koncert eller to." })} ${renderComponent($$result3, "RecordPlayer", $$RecordPlayer, {})} ` })} </div> ` })} ${renderComponent($$result, "ScrollToTopBtn", $$ScrollToTopBtn, {})}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/music.astro", void 0);

const $$file = "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/music.astro";
const $$url = "/music";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Music,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
