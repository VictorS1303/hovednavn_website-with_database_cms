import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, k as renderScript, i as renderComponent, j as renderSlot, l as renderHead } from './astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */
/* empty css                           */

const $$Astro$6 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Logo;
  const {
    src = "/images/logos/hovednavn_logo-svg.svg",
    alt = "Logo",
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")} height="100%" width="100%"${addAttribute(`logo h-14 md:h-16 w-auto ${className}`, "class")}>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Logo.astro", void 0);

const $$Astro$5 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { class: className, id, navItems = [] } = Astro2.props;
  const activePage = new URL(Astro2.request.url).pathname.replace(/\/$/, "");
  const isHome = activePage === "/";
  const isSingleView = activePage.startsWith("/about/") && activePage !== "/about";
  return renderTemplate`${!isSingleView && renderTemplate`${maybeRenderHead()}<button class="btn mobile-menu-toggle-btn text-white z-[5000] fixed top-6 right-6 text-2xl cursor-pointer transition-right duration-400 ease-in md:hidden" id="mobile_menu_toggle_btn" aria-label="toggle menu"><i class="fas fa-bars"></i></button>`}${isSingleView && renderTemplate`<nav${addAttribute(`${className} h-[70px] backdrop-blur-2xl relative top-0 z-[1000] w-full px-6 transition-right duration-400 ease-in md:fixed md:backdrop-blur-none md:left-0 md:top-0 md:flex md:justify-center md:h-20 md:w-screen md:px-12 md:items-center`, "class")} id="main_nav_single"><div class="absolute top-4 left-4 md:static md:translate-x-0 md:bottom-auto md:left-auto">${isSingleView ? renderTemplate`<a href="/about" class="text-[var(--single-view-back-btn-text-color)] text-2xl static top-0 z-[1000]"><i class="fas fa-arrow-left text-2xl cursor-pointer"></i></a>` : isHome ? renderTemplate`${renderComponent($$result, "Logo", $$Logo, { "src": "/images/logos/hovednavn_logo-svg.svg" })}` : renderTemplate`<a href="/">${renderComponent($$result, "Logo", $$Logo, { "src": "/images/logos/hovednavn_logo-svg.svg" })}</a>`}</div><ul class="paragraph-font flex flex-col h-full items-center justify-center gap-8 uppercase text-xl text-white shadow-none md:flex-row md:static md:ml-auto md:gap-8">${navItems.map((navItem) => renderTemplate`<li class="text-2xl font-bold"><a${addAttribute(navItem.href, "href")}${addAttribute(`${navItem.href === activePage ? "text-[var(--secondary-text-color)] pointer-events-none" : "hover:text-[var(--secondary-text-color)] transition-text ease-in duration-150"}`, "class")}>${navItem.text}</a></li>`)}</ul></nav>`}${!isSingleView && renderTemplate`<nav${addAttribute(`${className} backdrop-blur-3xl fixed top-0 z-[1000] pt-12 h-full w-[250px] -right-[250px] px-6 text-center transition-right duration-400 ease-in md:fixed md:backdrop-blur-none md:left-0 md:top-0 md:flex md:justify-center md:h-20 md:w-screen md:px-12 md:items-center`, "class")} id="main_nav"><div class="absolute bottom-8 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:bottom-auto md:left-auto">${isHome ? renderTemplate`${renderComponent($$result, "Logo", $$Logo, { "src": "/images/logos/hovednavn_logo-svg.svg" })}` : renderTemplate`<a href="/">${renderComponent($$result, "Logo", $$Logo, { "src": "/images/logos/hovednavn_logo-svg.svg" })}</a>`}</div><ul class="primary-font flex flex-col h-full items-center justify-center gap-8 uppercase text-xl text-white shadow-none md:flex-row md:static md:ml-auto md:gap-8">${navItems.map((navItem) => renderTemplate`<li class="text-2xl font-bold"><a${addAttribute(navItem.href, "href")}${addAttribute(`${navItem.href === activePage ? "text-[var(--secondary-text-color)] pointer-events-none" : "hover:text-[var(--secondary-text-color)] transition-text ease-in duration-150"}`, "class")}>${navItem.text}</a></li>`)}</ul></nav>`}${renderScript($$result, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`${className}`, "class")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </footer>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$SocialIconsContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialIconsContainer;
  const { list = [], class: className = "", id = "", color = "", hoverColor = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`${className}`, "class")}${addAttribute(id, "id")}${addAttribute({ color, "--hover-color": hoverColor || "inherit" }, "style")} data-astro-cid-4glglbgx> <ul class="flex gap-8" data-astro-cid-4glglbgx> ${list.map(({ icon, href, target, color: color2 }) => renderTemplate`<li data-astro-cid-4glglbgx> <a${addAttribute(href, "href")}${addAttribute(target, "target")} rel="noopener noreferrer" class="text-2xl transition-text duration-150 ease-in" data-astro-cid-4glglbgx> <i${addAttribute(`${icon} transition-text duration-150 ease-in`, "class")}${addAttribute(color2, "color")}${addAttribute(hoverColor, "hoverColor")} data-astro-cid-4glglbgx></i> </a> </li>`)} </ul> </article> `;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/SocialIconsContainer.astro", void 0);

const $$LandingPageFooter = createComponent(($$result, $$props, $$slots) => {
  const iconLinks = [
    {
      icon: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/profile.php?id=61574049239842",
      target: "_blank",
      color: "var(--primary-text-color)",
      hoverColor: "var(--secondary-text-color)"
    },
    {
      icon: "fa-brands fa-instagram",
      href: "https://www.instagram.com/hovednavn.dk/",
      target: "_blank"
    },
    {
      icon: "fa-brands fa-spotify",
      href: "https://open.spotify.com/artist/3OwrJTLlWahORBut7aEXe8",
      target: "_blank"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "class": "absolute bottom-5 left-[50%] -translate-x-[50%]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SocialIconsContainer", $$SocialIconsContainer, { "list": iconLinks, "class": "social-icons-container flex gap-4", "color": iconLinks[0].color, "hoverColor": iconLinks[0].hoverColor })} ` })} ${renderScript($$result, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/LandingPageFooter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/LandingPageFooter.astro", void 0);

const $$Astro$2 = createAstro();
const $$MainFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainFooter;
  const { class: className, id } = Astro2.props;
  const iconLinks = [
    {
      icon: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/profile.php?id=61574049239842",
      target: "_blank",
      color: "var(--footer-text-color)"
    },
    {
      icon: "fa-brands fa-instagram",
      href: "https://www.instagram.com/hovednavn.dk/",
      color: "var(--primary-text-color)",
      target: "_blank"
    },
    {
      icon: "fa-brands fa-spotify",
      href: "https://open.spotify.com/artist/3OwrJTLlWahORBut7aEXe8",
      color: "var(--primary-text-color)",
      target: "_blank"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`{className} bg-[var(--secondary-text-color)] flex justify-between px-6 items-center h-[80px] border-t-2 border-[var(--footer-text-color)]`, "class")}${addAttribute(id, "id")}> <h3 class="text-xl uppercase font-bold tracking-wide">Hovednavn</h3> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "SocialIconsContainer", $$SocialIconsContainer, { "list": iconLinks, "class": "flex gap-4", "color": iconLinks[0].color })} </footer>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/MainFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    navItems = [],
    pageIntroText,
    heroHeaderText,
    heroImageSrc,
    heroImageAlt
  } = Astro2.props;
  const activePage = new URL(Astro2.request.url).pathname;
  const isHome = activePage === "/";
  const isSingleView = activePage.startsWith("/about/");
  return renderTemplate(_a || (_a = __template([`<html lang="en" class="glightbox-open"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/ico+xml" href="/favicon.ico"><link rel="preload" href="../../src/styles/global.css" as="style" onload="this.onload=null;this.rel='stylesheet'"><meta name="generator"`, '><script src="https://kit.fontawesome.com/2a447b40ae.js" crossorigin="anonymous" async><\/script><title>', "</title>", '</head> <body class="bg-[var(--body-bg-color)] font-[var(--font-family, sans-serif)]"> <!-- Navigation --> ', " <!-- Flexible Layout --> ", " <!-- Footer --> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "navItems": navItems, "isSingleView": isSingleView }), renderSlot($$result, $$slots["default"]), !isHome && !isSingleView ? renderTemplate`${renderComponent($$result, "MainFooter", $$MainFooter, {})}` : !isSingleView ? renderTemplate`${renderComponent($$result, "LandingPageFooter", $$LandingPageFooter, {})}` : "");
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${className} h-fit relative`, "class")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Section.astro", void 0);

export { $$Layout as $, $$Section as a };
