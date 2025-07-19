import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_UVXhDWBn.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Victo/OneDrive/Documents/kea/4.%20semester/hovednavn_website-with_database_cms/","cacheDir":"file:///C:/Users/Victo/OneDrive/Documents/kea/4.%20semester/hovednavn_website-with_database_cms/node_modules/.astro/","outDir":"file:///C:/Users/Victo/OneDrive/Documents/kea/4.%20semester/hovednavn_website-with_database_cms/dist/","srcDir":"file:///C:/Users/Victo/OneDrive/Documents/kea/4.%20semester/hovednavn_website-with_database_cms/src/","publicDir":"file:///C:/Users/Victo/OneDrive/Documents/kea/4.%20semester/hovednavn_website-with_database_cms/public/","buildClientDir":"file:///C:/Users/Victo/OneDrive/Documents/kea/4.%20semester/hovednavn_website-with_database_cms/dist/","buildServerDir":"file:///C:/Users/Victo/OneDrive/Documents/kea/4.%20semester/hovednavn_website-with_database_cms/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.Bj5qBI7l.css"},{"type":"external","src":"/_astro/_id_.D1jLxYjR.css"}],"routeData":{"route":"/about/[id]","isIndex":false,"type":"page","pattern":"^\\/about\\/([^/]+?)\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/about/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.Bj5qBI7l.css"},{"type":"external","src":"/_astro/_id_.D1jLxYjR.css"},{"type":"inline","content":"details[data-astro-cid-zx3jizji][open] p[data-astro-cid-zx3jizji]{display:block;max-height:500px;opacity:1;transition:max-height .3s ease,opacity .3s ease}details[data-astro-cid-zx3jizji][open] i[data-astro-cid-zx3jizji]{transform:rotate(-180deg)}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.Bj5qBI7l.css"},{"type":"external","src":"/_astro/_id_.D1jLxYjR.css"}],"routeData":{"route":"/concerts","isIndex":false,"type":"page","pattern":"^\\/concerts\\/?$","segments":[[{"content":"concerts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/concerts.astro","pathname":"/concerts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/GalleryContainer.D33CdkPq.css"},{"type":"external","src":"/_astro/_id_.D1jLxYjR.css"},{"type":"external","src":"/_astro/gallery.Bj5qBI7l.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";.gslide .gslide-image{height:60vh;width:60vw}.gvideo-local{height:60vh;width:85vw}.gslide-description{background-color:transparent!important;margin-top:0;color:#fff}.gslide-media.gslide-image{height:60vh;width:fit-content}.gslide-media.gslide-image img{width:100%;height:100%;object-fit:cover;display:block}.gslide-desc{font-style:italic;font-size:2rem}.gnext.gbtn svg{fill:#fff!important;stroke:#fff!important}\n"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.Bj5qBI7l.css"},{"type":"external","src":"/_astro/_id_.D1jLxYjR.css"}],"routeData":{"route":"/music","isIndex":false,"type":"page","pattern":"^\\/music\\/?$","segments":[[{"content":"music","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/music.astro","pathname":"/music","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.Bj5qBI7l.css"},{"type":"external","src":"/_astro/_id_.D1jLxYjR.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/about/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/concerts.astro",{"propagation":"none","containsHead":true}],["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/pages/music.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about/[id]@_@astro":"pages/about/_id_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/concerts@_@astro":"pages/concerts.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/music@_@astro":"pages/music.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DliuzoD_.mjs","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ScrollToTopBtn.astro?astro&type=script&index=0&lang.ts":"_astro/ScrollToTopBtn.astro_astro_type_script_index_0_lang.B0w8XKGn.js","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.DzMjk66o.js","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/GalleryContainer.astro?astro&type=script&index=0&lang.ts":"_astro/GalleryContainer.astro_astro_type_script_index_0_lang.DbkCyqHQ.js","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/RecordPlayer.astro?astro&type=script&index=0&lang.ts":"_astro/RecordPlayer.astro_astro_type_script_index_0_lang.DnhoVz0h.js","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.DVVrnXui.js","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/LandingPageFooter.astro?astro&type=script&index=0&lang.ts":"_astro/LandingPageFooter.astro_astro_type_script_index_0_lang.sK0pxP7l.js","C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ConcertCardContent.astro?astro&type=script&index=0&lang.ts":"_astro/ConcertCardContent.astro_astro_type_script_index_0_lang.CabOIwZ5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ScrollToTopBtn.astro?astro&type=script&index=0&lang.ts","const o=document.querySelector(\".scroll-to-top-btn\");window.addEventListener(\"scroll\",t);o?.addEventListener(\"click\",l);function t(){Math.floor(window.scrollY)>300?(o?.classList.remove(\"-right-12\"),o?.classList.add(\"right-6\")):(o?.classList.add(\"-right-12\"),o?.classList.remove(\"right-6\"))}function l(){window.scrollTo({top:0,left:0,behavior:\"smooth\"})}"],["C:/Users/Victo/OneDrive/Documents/kea/4. semester/hovednavn_website-with_database_cms/src/components/ConcertCardContent.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"concert_date\"),n=t.textContent.trim(),o=new Date(n),e=new Intl.DateTimeFormat(\"da-DK\",{dateStyle:\"full\",timeStyle:\"long\",timeZone:\"Europe/Copenhagen\"}).format(o);console.log(e);t.textContent=e;"]],"assets":["/_astro/_id_.D1jLxYjR.css","/_astro/gallery.Bj5qBI7l.css","/favicon.ico","/_redirects","/_astro/GalleryContainer.astro_astro_type_script_index_0_lang.DbkCyqHQ.js","/_astro/GalleryContainer.D33CdkPq.css","/_astro/Hero.astro_astro_type_script_index_0_lang.DzMjk66o.js","/_astro/index.CH_iu5NA.js","/_astro/LandingPageFooter.astro_astro_type_script_index_0_lang.sK0pxP7l.js","/_astro/Navigation.astro_astro_type_script_index_0_lang.DVVrnXui.js","/_astro/RecordPlayer.astro_astro_type_script_index_0_lang.DnhoVz0h.js","/_astro/_commonjsHelpers.gnU0ypJ3.js","/images/map_marker/map_marker.webp","/images/logos/hovednavn_logo-svg.svg","/images/logos/hovednavn_logo.png","/recordings/covers/doev.webp","/recordings/covers/doktorman.webp","/recordings/covers/familien-danmark.webp","/recordings/covers/jorden-er-flad.webp","/recordings/covers/latin.webp","/recordings/covers/sikke-dog-en-dejlig-dag.webp","/recordings/covers/velkommen-til-dk.webp","/recordings/audio/doev.mp3","/recordings/audio/doktorman.mp3","/recordings/audio/familien-danmark.mp3","/recordings/audio/jorden-er-flad.mp3","/recordings/audio/latin.mp3","/recordings/audio/sikke-dog-en-dejlig-dag.mp3","/recordings/audio/velkommen-til-dk.mp3","/images/about/about_cards/anders_christensen.webp","/images/about/about_cards/julian_falck.webp","/images/about/about_cards/lasse_storgaard.webp","/images/about/about_cards/samuel_himmelstrup.webp","/images/about/about_cards/simon_dyhr.webp","/images/concert/hero/hero_bg.webp","/images/about/hero/about_hero_bg.webp","/images/landing_page/hero/hero_bg.jpg","/images/concert/concert_cards/concert_card_bg.webp","/images/music/hero/hero_bg.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"4+e6UPiLvwv8q3j3j+d3F7A29o7i8gQkptVqoinHgmI=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
