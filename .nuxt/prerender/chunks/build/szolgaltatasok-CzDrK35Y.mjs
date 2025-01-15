import { u as useHead, b as __nuxt_component_0$2, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue/server-renderer/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ufo/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ipx/dist/index.mjs';

const _sfc_main = {
  __name: "szolgaltatasok",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Szolg\xE1ltat\xE1sok"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subpage-content subpage-services-content" }, _attrs))}><section><div class="services-content position-relative"><div class="page__header page__header--right"><h3 class="page__header__h3 text-color-w text-transform-uppercase"> SZOLG\xC1LTAT\xC1SOK </h3></div><div class="servive-grid servive-grid--margin-bottom grid-3"><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "service-box__img",
        src: "/img/services/gepjarmubiztositas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> G\xE9pj\xE1rm\u0171 biztos\xEDt\xE1s </h3><p class="service-box__description text-color"> Nyugodt utaz\xE1st \xE9s v\xE9delmet ny\xFAjt minden kilom\xE9teren, balesetekt\u0151l kezdve a v\xE1ratlan meghib\xE1sod\xE1sokig. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "gepjarmu-biztositas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tov\xE1bb `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                class: "page-link__img position-relative",
                src: "/img/partners/right-arrow.svg",
                alt: "Biztos Alkuszom"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "service-box__img",
        src: "/img/services/utazasbiztositas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> UTASbiztos\xEDt\xE1s </h3><p class="service-box__description text-color"> A gondtalan kalandok z\xE1loga, amely biztons\xE1got ny\xFAjt a vil\xE1g b\xE1rmely pontj\xE1n, legyen sz\xF3 v\xE1ratlan esem\xE9nyekr\u0151l vagy eg\xE9szs\xE9g\xFCgyi s\xFCrg\u0151ss\xE9gekr\u0151l. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "utasbiztositas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tov\xE1bb `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                class: "page-link__img position-relative",
                src: "/img/partners/right-arrow.svg",
                alt: "Biztos Alkuszom"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "service-box__img",
        src: "/img/services/tanulobiztositas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> TANUL\xD3biztos\xEDt\xE1s </h3><p class="service-box__description text-color"> A tanul\xF3biztos\xEDt\xE1s biztos h\xE1tt\xE9r a di\xE1kok sz\xE1m\xE1ra, hogy nyugodtan \xF6sszpontos\xEDthassanak tanulm\xE1nyaikra, mik\xF6zben v\xE9delemben r\xE9szes\xFClnek az \xE9let v\xE1ratlan esem\xE9nyei ellen. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "tanulobiztositas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tov\xE1bb `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                class: "page-link__img position-relative",
                src: "/img/partners/right-arrow.svg",
                alt: "Biztos Alkuszom"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="servive-grid grid-3"><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "service-box__img",
        src: "/img/services/rendezveny_biztositas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> RENDEZV\xC9NYSZOLG\xC1LAT </h3><p class="service-box__description text-color"> Biztos\xEDt\xE1saink magukban foglalj\xE1k a felel\u0151ss\xE9gbiztos\xEDt\xE1st, a rendezv\xE9ny helysz\xEDn\xE9nek v\xE9delm\xE9t, valamint az egyedi ig\xE9nyekhez igazod\xF3 kock\xE1zatkezel\xE9st, biztos\xEDtva ezzel a rendezv\xE9ny zavartalan lebonyol\xEDt\xE1s\xE1t.. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "rendezvenyszolgalat",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tov\xE1bb `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                class: "page-link__img position-relative",
                src: "/img/partners/right-arrow.svg",
                alt: "Biztos Alkuszom"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "service-box__img",
        src: "/img/services/karbejelentes.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> K\xE1rbejelent\xE9s </h3><p class="service-box__description text-color"> A k\xE1rbejelent\xE9si folyamatunk sor\xE1n a biztos\xEDt\xE1si alkusz szak\xE9rt\u0151i seg\xEDts\xE9get \xE9s t\xE1mogat\xE1st ny\xFAjtanak az \xFCgyfeleknek, hogy a k\xE1rbejelent\xE9s gyorsan \xE9s z\xF6kken\u0151mentesen t\xF6rt\xE9njen. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "karbejentes",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tov\xE1bb `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                class: "page-link__img position-relative",
                src: "/img/partners/right-arrow.svg",
                alt: "Biztos Alkuszom"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "service-box__img",
        src: "/img/services/szemelyes_tanacsadas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> Szem\xE9lyes tan\xE1csad\xE1s </h3><p class="service-box__description text-color"> szem\xE9lyre szabott tan\xE1csad\xE1sunkkal biztos\xEDtjuk, hogy minden \xFCgyf\xE9l megkapja az egy\xE9ni ig\xE9nyeinek megfelel\u0151 biztos\xEDt\xE1si tan\xE1csokat \xE9s megold\xE1sokat, biztos\xEDtva ezzel az optim\xE1lis v\xE9delmet \xE9s nyugalmat. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "szemelyes-tanacsadas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tov\xE1bb `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                class: "page-link__img position-relative",
                src: "/img/partners/right-arrow.svg",
                alt: "Biztos Alkuszom"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/szolgaltatasok.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=szolgaltatasok-CzDrK35Y.mjs.map
