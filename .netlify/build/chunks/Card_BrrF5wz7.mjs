import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, k as renderScript, r as renderTemplate, i as renderComponent } from './astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import { a as $$Overlay } from './Hero_SbLUOcwK.mjs';
import 'clsx';

const $$Astro$3 = createAstro();
const $$ConcertCardContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ConcertCardContent;
  const {
    concertDate,
    concertLocation,
    concertEvent,
    concertPrice,
    concertTarget
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container concert-card-content-container absolute top-0 left-0 flex flex-col justify-between px-3 py-4 z-[1000] h-full w-full text-white overflow-hidden"> <h2 class="text-xl m-2 text-[var(--secondary-text-color)] font-bold" id="concert_date"> ${concertDate} </h2> <div class="flex flex-col justify-between container map-container absolute inset-0 z-50 h-full w-full translate-y-[100%] transition-translate duration-400 ease-in"> <!-- <div
      class='container map-control-container flex justify-around items-center z-[300] px-3 h-10 bg-white'
      id='map_control_container'>
      <a href={concertEvent} target={concertTarget} id='show_event_btn'
        >Vis event</a
      >
    </div> --> </div> <h3 class="date text-xl text-[var(--secondary-text-color)] font-bolder" id="date"></h3> <div class="container location-and-price-container flex justify-between items-center text-base/10 px-2"> <div> <h2 class="location text-[25px] font-bold text-base/7"> ${concertLocation} </h2> <p class="price paragraph-font text-xl font-bolder mt-2" id="price"> ${concertPrice} kr.
</p> </div> <div class="group flex flex-col gap-2 justify-center text-center items-center cursor-pointer"> <i class="fas fa-calendar text-xl transition-colors duration-150 ease-in group-hover:text-[var(--secondary-text-color)]"></i> <a${addAttribute(concertEvent, "href")} target="_blank" class="self-end text-xl paragraph-font whitespace-nowrap transition-colors duration-150 ease-in group-hover:text-[var(--secondary-text-color)]">
Vis event
</a> </div> </div> </div> ${renderScript($$result, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ConcertCardContent.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ConcertCardContent.astro", void 0);

const $$Astro$2 = createAstro();
const $$ArtistCardContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArtistCardContent;
  const { artistName, artistBandRole } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="artist-card-content-container absolute bottom-3 text-center text-white text-base/7"> <h3 class="artist-name text-[23px]" id="artist_name"> ${artistName} </h3> <p class="band-role text-[18px]" id="band_role">${artistBandRole}</p> </div>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ArtistCardContent.astro", void 0);

const $$Astro$1 = createAstro();
const $$ConcertCancelOverlay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ConcertCancelOverlay;
  const {
    class: className = "",
    id,
    concertCancelOverlayText,
    concertCancelOverlayImage
  } = Astro2.props;
  return renderTemplate`${concertCancelOverlayText && renderTemplate`${maybeRenderHead()}<div${addAttribute(`absolute inset-0 bg-[var(--concert-card-cancel-overlag-bg-color)] text-white text-3xl uppercase flex items-center justify-center font-bold ${className}`, "class")}${addAttribute(id, "id")}><h3 class="-rotate-[45deg] text-4xl whitespace-nowrap z-[10000]">${concertCancelOverlayText}</h3><img${addAttribute(concertCancelOverlayImage, "src")} class="absolute opacity-40 object-cover h-[175px] w-[175px]" alt="concert card"></div>`}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ConcertCancelOverlay.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    class: className,
    id,
    src,
    isConcertCard,
    isConcertCancelled = false,
    concertCancelOverlayImage,
    concertCancelOverlayText,
    concertDate,
    concertLocation,
    concertPrice,
    isArtistCard,
    artistName,
    artistBandRole,
    concertEvent,
    concertTarget
  } = Astro2.props;
  return renderTemplate`${isArtistCard ? renderTemplate`${maybeRenderHead()}<a${addAttribute(`/about/${id}`, "href")}><article${addAttribute(`${className} paragraph-font relative h-[325px] w-[300px] flex justify-center`, "class")}${addAttribute(id, "id")}><img${addAttribute(src, "src")} class="h-full w-full object-cover" alt="artist card image">${renderTemplate`${renderComponent($$result, "Overlay", $$Overlay, {})}`}${renderComponent($$result, "ArtistCardContent", $$ArtistCardContent, { "artistName": artistName, "artistBandRole": artistBandRole })}</article></a>` : isConcertCancelled ? renderTemplate`<article${addAttribute(`${className} relative h-[325px] w-[300px] flex items-center justify-center`, "class")}${addAttribute(id, "id")}>${renderComponent($$result, "ConcertCancelOverlay", $$ConcertCancelOverlay, { "concertCancelOverlayText": concertCancelOverlayText, "concertCancelOverlayImage": concertCancelOverlayImage })}</article>` : isConcertCard ? renderTemplate`<article${addAttribute(`${className} relative h-[325px] w-[300px] overflow-hidden`, "class")}${addAttribute(id, "id")}><img${addAttribute(src, "src")} class="h-full w-full object-cover" alt="concert card image">${renderTemplate`${renderComponent($$result, "Overlay", $$Overlay, {})}`}${renderComponent($$result, "ConcertCardContent", $$ConcertCardContent, { "concertEvent": concertEvent, "concertTarget": concertTarget, "concertEvent": concertEvent, "concertDate": concertDate, "concertLocation": concertLocation, "concertPrice": concertPrice })}</article>` : null}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Card.astro", void 0);

export { $$Card as $ };
