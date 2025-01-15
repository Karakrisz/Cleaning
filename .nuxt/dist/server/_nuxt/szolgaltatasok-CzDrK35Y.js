import { u as useHead, b as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "devalue";
import "destr";
const _sfc_main = {
  __name: "szolgaltatasok",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Szolgáltatások"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subpage-content subpage-services-content" }, _attrs))}><section><div class="services-content position-relative"><div class="page__header page__header--right"><h3 class="page__header__h3 text-color-w text-transform-uppercase"> SZOLGÁLTATÁSOK </h3></div><div class="servive-grid servive-grid--margin-bottom grid-3"><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "service-box__img",
        src: "/img/services/gepjarmubiztositas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> Gépjármű biztosítás </h3><p class="service-box__description text-color"> Nyugodt utazást és védelmet nyújt minden kilométeren, balesetektől kezdve a váratlan meghibásodásokig. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "gepjarmu-biztositas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tovább `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tovább "),
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
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> UTASbiztosítás </h3><p class="service-box__description text-color"> A gondtalan kalandok záloga, amely biztonságot nyújt a világ bármely pontján, legyen szó váratlan eseményekről vagy egészségügyi sürgősségekről. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "utasbiztositas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tovább `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tovább "),
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
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> TANULÓbiztosítás </h3><p class="service-box__description text-color"> A tanulóbiztosítás biztos háttér a diákok számára, hogy nyugodtan összpontosíthassanak tanulmányaikra, miközben védelemben részesülnek az élet váratlan eseményei ellen. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "tanulobiztositas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tovább `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tovább "),
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
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> RENDEZVÉNYSZOLGÁLAT </h3><p class="service-box__description text-color"> Biztosításaink magukban foglalják a felelősségbiztosítást, a rendezvény helyszínének védelmét, valamint az egyedi igényekhez igazodó kockázatkezelést, biztosítva ezzel a rendezvény zavartalan lebonyolítását.. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "rendezvenyszolgalat",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tovább `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tovább "),
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
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> Kárbejelentés </h3><p class="service-box__description text-color"> A kárbejelentési folyamatunk során a biztosítási alkusz szakértői segítséget és támogatást nyújtanak az ügyfeleknek, hogy a kárbejelentés gyorsan és zökkenőmentesen történjen. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "karbejentes",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tovább `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tovább "),
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
      _push(`<div class="service-box__text"><h3 class="service-box__title text-transform-uppercase text-color text-center"> Személyes tanácsadás </h3><p class="service-box__description text-color"> személyre szabott tanácsadásunkkal biztosítjuk, hogy minden ügyfél megkapja az egyéni igényeinek megfelelő biztosítási tanácsokat és megoldásokat, biztosítva ezzel az optimális védelmet és nyugalmat. </p></div><div class="service-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "szemelyes-tanacsadas",
        class: "page-link text-color-w f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tovább `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tovább "),
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
export {
  _sfc_main as default
};
//# sourceMappingURL=szolgaltatasok-CzDrK35Y.js.map
