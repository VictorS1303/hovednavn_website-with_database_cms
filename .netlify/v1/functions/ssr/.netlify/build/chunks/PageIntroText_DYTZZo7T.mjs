import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, k as renderScript, r as renderTemplate, j as renderSlot } from './astro/server_UVXhDWBn.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$3 = createAstro();
const $$ScrollToTopBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ScrollToTopBtn;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`${className} scroll-to-top-btn fixed bottom-14 -right-12 bg-[var(--scroll-to-top-btn-bg-color)] h-12 w-12 rounded-full border-2 border-[var(--scroll-to-top-btn-border-color)] cursor-pointer shadow-md hover:bg-[var(--scroll-to-top-btn-hover-bg-color)] z-[3000] active:scale-95 transition-bg duration-150 ease-in transition-right group`, "class")}${addAttribute(id, "id")} aria-label="scroll to top"> <i class="fas fa-arrow-up text-[var(--scroll-to-top-btn-border-color)] group-hover:text-[var(--scroll-to-top-btn-hover-color)] transition-color duration-150 ease-in"></i> </button> ${renderScript($$result, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ScrollToTopBtn.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ScrollToTopBtn.astro", void 0);

const $$Astro$2 = createAstro();
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Main;
  const { class: customClass = "", pageIntroText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-12 justify-center items-center py-16"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Main.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const { class: className, id, sectionHeaderText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`${className}`, "class")}${addAttribute(id, "id")}> <h2 class="text-center text-[var(--section-headings-text-color)] text-2xl mb-4 font-bold md:text-4xl"> ${sectionHeaderText} </h2> </header>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/SectionHeader.astro", void 0);

const $$Astro = createAstro();
const $$PageIntroText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageIntroText;
  const { class: className, id, pageIntroText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(`${className} paragraph-font text-2xl page-intro-text text-center px-6 md:max-w-[65ch]`, "class")}${addAttribute(id, "id")}> ${pageIntroText} </h3>`;
}, "C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/PageIntroText.astro", void 0);

export { $$SectionHeader as $, $$ScrollToTopBtn as a, $$Main as b, $$PageIntroText as c };
