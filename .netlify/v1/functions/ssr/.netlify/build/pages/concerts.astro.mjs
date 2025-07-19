import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import { b as fetchConcertData } from '../chunks/supabase_MN9fKV65.mjs';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_BUWjPPDY.mjs';
import { b as $$Main, $ as $$SectionHeader, c as $$PageIntroText, a as $$ScrollToTopBtn } from '../chunks/PageIntroText_DYTZZo7T.mjs';
import { $ as $$Hero } from '../chunks/Hero_SbLUOcwK.mjs';
import { $ as $$Card } from '../chunks/Card_BrrF5wz7.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$TicketPurchaseInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TicketPurchaseInfo;
  const { class: className, ticketPurchaseInfoText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`${className} mx-4 mt-4 paragraph-text text-xl font-semibold text-center whitespace-nowrap lg:text-left md:mt-0`, "class")}> ${ticketPurchaseInfoText} </p>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/TicketPurchaseInfo.astro", void 0);

const $$Astro = createAstro();
const $$ConcertCardsContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConcertCardsContainer;
  const { concertCards, showOverlay } = Astro2.props;
  console.log(concertCards);
  return renderTemplate`${maybeRenderHead()}<div class="mx-12"> <div class="concert-cards-container flex flex-wrap justify-center"> ${concertCards?.map((concertCard) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "m-4", "src": `${concertCard.concert_image}`, "isConcertCard": true, "showOverlay": showOverlay, "concertDate": concertCard.concert_date, "concertLocation": concertCard.concert_location, "concertPrice": concertCard.concert_price, "concertEvent": concertCard.concert_event, "concertCancelOverlayImage": concertCard.concert_cancelled_overlay_image, "concertCancelOverlayText": concertCard.concert_cancelled_overlay_text, "concertTarget": "_blank", "isConcertCancelled": concertCard.is_concert_cancelled })}`)} </div> ${renderComponent($$result, "TicketPurchaseInfo", $$TicketPurchaseInfo, { "ticketPurchaseInfoText": "Billetter kan k\xF8bes i d\xF8ren" })} </div>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ConcertCardsContainer.astro", void 0);

const prerender = false;
const $$Concerts = createComponent(async ($$result, $$props, $$slots) => {
  const concertCards = await fetchConcertData();
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Koncerter", "navItems": navItems }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "h-screen relative flex items-center justify-center", "id": "concerts" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "heroHeaderText": "Koncerter", "heroImageSrc": "/images/concert/hero/hero_bg.webp", "heroImageAlt": "hero concert image", "loading": "lazy" })} ` })} ${renderComponent($$result2, "Main", $$Main, { "class": "relative" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "class": "-mb-12", "sectionHeaderText": "Kom ud at feste med os" })} ${renderComponent($$result3, "PageIntroText", $$PageIntroText, { "pageIntroText": "Vi tager naturligvis ud og spiller for jer allesammen - unge som gamle! S\xE5 find et sted n\xE6r jer, og s\xE5 ses vi til en svingom eller to; for hvis der er en, vi helst vil optr\xE6de for, er det dig!" })} ${renderComponent($$result3, "ConcertCardsContainer", $$ConcertCardsContainer, { "concertCards": concertCards })} ` })} ${renderComponent($$result2, "ScrollToTopBtn", $$ScrollToTopBtn, {})} ` })}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/concerts.astro", void 0);

const $$file = "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/concerts.astro";
const $$url = "/concerts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Concerts,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
