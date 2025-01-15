import { b as __nuxt_component_0$2, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderElem = ref([
      {
        title: "Biztos\xEDt\xE1s, ami Mozg\xE1sban Tart",
        description: "Biztos\xEDt\xE1si megold\xE1saink folyamatosan alkalmazkodnak az \xE9leted v\xE1ltoz\xE1saihoz. Legyen sz\xF3 karrierv\xE1lt\xE1sr\xF3l, csal\xE1dalap\xEDt\xE1sr\xF3l vagy ak\xE1r \xFAj hobbik felfedez\xE9s\xE9r\u0151l, mi mindig ott vagyunk, hogy t\xE1mogassunk \xE9s v\xE9delmezz\xFCnk.",
        button: "Tov\xE1bb"
      },
      {
        title: "Biztos\xEDt\xE1s, ami Mozg\xE1sban Tart",
        description: "Biztos\xEDt\xE1si megold\xE1saink folyamatosan alkalmazkodnak az \xE9leted v\xE1ltoz\xE1saihoz. Legyen sz\xF3 karrierv\xE1lt\xE1sr\xF3l, csal\xE1dalap\xEDt\xE1sr\xF3l vagy ak\xE1r \xFAj hobbik felfedez\xE9s\xE9r\u0151l, mi mindig ott vagyunk, hogy t\xE1mogassunk \xE9s v\xE9delmezz\xFCnk.",
        button: "Tov\xE1bb"
      },
      {
        title: "Biztos\xEDt\xE1s, ami Mozg\xE1sban Tart",
        description: "Biztos\xEDt\xE1si megold\xE1saink folyamatosan alkalmazkodnak az \xE9leted v\xE1ltoz\xE1saihoz. Legyen sz\xF3 karrierv\xE1lt\xE1sr\xF3l, csal\xE1dalap\xEDt\xE1sr\xF3l vagy ak\xE1r \xFAj hobbik felfedez\xE9s\xE9r\u0151l, mi mindig ott vagyunk, hogy t\xE1mogassunk \xE9s v\xE9delmezz\xFCnk.",
        button: "Tov\xE1bb"
      }
    ]);
    const currentSlide = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section><div class="slider-content position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "slider-content__img",
        src: "/img/slider/slider.webp",
        alt: "Biztos Alkuszom",
        format: "webp",
        height: "100%"
      }, null, _parent));
      _push(`<div class="slider-content__ab-box position-absolute"><div class="slider-content__carousel-content text-center"><div class="carousel position-relative"><div class="carousel-slide d-flex" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 100}%)` })}"><!--[-->`);
      ssrRenderList(sliderElem.value, (item, index) => {
        _push(`<div class="carousel-item"><div class="carousel-item__padding-box"><h1 class="carousel-item__h1 text-transform-uppercase text-color f-700 t-left">${ssrInterpolate(item.title)}</h1><p class="carousel-item__p text-color f-400">${ssrInterpolate(item.description)}</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "szolgaltatasok",
          class: "carousel-item__NuxtLink text-color bg-color-w f-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.button)} `);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                loading: "lazy",
                height: "100%",
                class: "carousel-item__NuxtLink__img position-relative",
                src: "/img/slider/about-r.svg",
                alt: "Biztos Alkuszom"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(item.button) + " ", 1),
                createVNode(_component_NuxtImg, {
                  loading: "lazy",
                  height: "100%",
                  class: "carousel-item__NuxtLink__img position-relative",
                  src: "/img/slider/about-r.svg",
                  alt: "Biztos Alkuszom"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="carousel__btn-content position-relative d-flex"><button class="carousel__btn-content__btn cursor">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          loading: "lazy",
          height: "100%",
          class: "carousel__btn-content__btn__img",
          src: "/img/slider/arrow-l.svg",
          alt: "Biztos Alkuszom"
        }, null, _parent));
        _push(`</button><button class="carousel__btn-content__btn cursor">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          loading: "lazy",
          height: "100%",
          class: "carousel__btn-content__btn__img",
          src: "/img/slider/arrow-r.svg",
          alt: "Biztos Alkuszom"
        }, null, _parent));
        _push(`</button></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section><div class="partners-content"><div class="page__header"><h2 class="page__header__h2 text-color-w text-transform-uppercase"> Partnerek </h2></div><div class="partners-content__img-box grid-7"><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners2.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners3.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners4.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners5.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners6.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners7.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div></div><div class="partners-content__img-box grid-7"><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners8.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners9.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners10.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners11.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners12.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners13.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="partners-content__img-box__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
        class: "partners-content__img-box__div__img",
        src: "/img/partners/partners14.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div></div></div></section><section><div class="services-content position-relative"><div class="page__header page__header--right"><h3 class="page__header__h3 text-color-w text-transform-uppercase"> SZOLG\xC1LTAT\xC1SOK </h3></div><div class="servive-grid servive-grid--margin-bottom grid-3"><div class="service-box bg-color-w position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        height: "100%",
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
              loading: "lazy",
              height: "100%",
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                loading: "lazy",
                height: "100%",
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
        loading: "lazy",
        height: "100%",
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
              loading: "lazy",
              height: "100%",
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                loading: "lazy",
                height: "100%",
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
        loading: "lazy",
        height: "100%",
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
              loading: "lazy",
              height: "100%",
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                loading: "lazy",
                height: "100%",
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
        loading: "lazy",
        height: "100%",
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
              loading: "lazy",
              height: "100%",
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                loading: "lazy",
                height: "100%",
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
        loading: "lazy",
        height: "100%",
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
              loading: "lazy",
              height: "100%",
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                loading: "lazy",
                height: "100%",
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
        loading: "lazy",
        height: "100%",
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
              loading: "lazy",
              height: "100%",
              class: "page-link__img position-relative",
              src: "/img/partners/right-arrow.svg",
              alt: "Biztos Alkuszom"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Tov\xE1bb "),
              createVNode(_component_NuxtImg, {
                loading: "lazy",
                height: "100%",
                class: "page-link__img position-relative",
                src: "/img/partners/right-arrow.svg",
                alt: "Biztos Alkuszom"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="service-bottom position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        class: "service-bottom__img",
        src: "/img/partners/bottom.webp",
        alt: "Biztos Alkuszom",
        height: "100%"
      }, null, _parent));
      _push(`<div class="service-bottom__box position-absolute bg-color-w"><h4 class="service-bottom__box__title linear-font"> &quot;N\xE1lunk a biztos\xEDt\xE1s <br> tal\xE1lkozik a bizalommal.&quot; </h4></div></div></section><section><div class="blog-content"><div class="page__header page__header--margin-top"><h2 class="page__header__h2 text-color-w text-transform-uppercase"> Blog </h2></div><div class="blog-grid grid-3"><div class="blog-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        class: "blog-box__img",
        src: "/img/blog/blog.jpg",
        alt: "Biztos Alkuszom",
        height: "100%"
      }, null, _parent));
      _push(`<div class="blog-box__text position-relative"><h3 class="blog-box__text__h3 text-transform-uppercase"> Az \xD6n Teljes \xDAtmutat\xF3ja a Lak\xE1sbiztos\xEDt\xE1s Vil\xE1g\xE1ban </h3><p class="blog-box__text__p"> Fedezze fel, hogyan v\xE1lassza ki a legmegfelel\u0151bb lak\xE1sbiztos\xEDt\xE1st \xE9letst\xEDlus\xE1hoz \xE9s ig\xE9nyeihez, mik\xF6zben megismeri a fedezetek \xE9s kedvezm\xE9nyek titkait. </p><div class="blog-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "blog-box__link-box__Nuxtlink",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Elolvasom a cikket`);
          } else {
            return [
              createTextVNode("Elolvasom a cikket")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="blog-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        class: "blog-box__img",
        src: "/img/blog/blog2.jpg",
        alt: "Biztos Alkuszom",
        height: "100%"
      }, null, _parent));
      _push(`<div class="blog-box__text position-relative"><h3 class="blog-box__text__h3 text-transform-uppercase"> V\xE1llalkoz\xF3k Biztos\xEDt\xE1si Kalauza: Hogyan V\xE9dje Meg C\xE9g\xE9t </h3><p class="blog-box__text__p"> Fedezze fel, hogyan v\xE1lassza ki a legmegfelel\u0151bb lak\xE1sbiztos\xEDt\xE1st \xE9letst\xEDlus\xE1hoz \xE9s ig\xE9nyeihez, mik\xF6zben megismeri a fedezetek \xE9s kedvezm\xE9nyek titkait. </p><div class="blog-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "blog-box__link-box__Nuxtlink",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Elolvasom a cikket`);
          } else {
            return [
              createTextVNode("Elolvasom a cikket")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="blog-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        class: "blog-box__img",
        src: "/img/blog/blog3.jpg",
        alt: "Biztos Alkuszom",
        height: "100%"
      }, null, _parent));
      _push(`<div class="blog-box__text position-relative"><h3 class="blog-box__text__h3 text-transform-uppercase"> Utaz\xE1si Biztos\xEDt\xE1s: Mi\xE9rt N\xE9lk\xFCl\xF6zhetetlen Minden K\xFClf\xF6ldi \xDAt Sor\xE1n </h3><p class="blog-box__text__p"> Ismerje meg az utaz\xE1si biztos\xEDt\xE1s jelent\u0151s\xE9g\xE9t </p><div class="blog-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "blog-box__link-box__Nuxtlink",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Elolvasom a cikket`);
          } else {
            return [
              createTextVNode("Elolvasom a cikket")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DWI9i9_U.mjs.map
