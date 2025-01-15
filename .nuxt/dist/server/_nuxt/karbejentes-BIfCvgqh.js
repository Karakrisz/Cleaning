import { u as useHead, b as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
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
  __name: "karbejentes",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Kárbejelentés"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subpage-content subpage-two-services-content subpage-services-content--bg-color" }, _attrs))}><div class="subpage-services__img-text-box bg-color-w d-flex"><div class="subpage-services__img-text-box__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "subpage-services__img-text-box__img-box__img",
        src: "/img/subpage-services/karbejelentes.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="subpage-services__img-text-box__text-box"><h4 class="subpage-services__img-text-box__text-box__h4 f-700"> Kárbejelentés </h4><p class="subpage-services__img-text-box__text-box__p"> A kárbejelentési folyamatunk során a biztosítási alkusz szakértői segítséget és támogatást nyújtanak az ügyfeleknek, hogy a kárbejelentés gyorsan és zökkenőmentesen történjen. Tudjuk, hogy a kár bekövetkezte stresszes időszak lehet, ezért minden tőlünk telhetőt megteszünk, hogy egyszerűsítsük és felgyorsítsuk a folyamatot. </p><h5 class="subpage-services__img-text-box__text-box__h5 f-700"> Miért érdemes minket választani a kárbejelentés kezelésére? </h5><ul class="subpage-services__img-text-box__text-box__ul"><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Személyre szabott segítség:</strong> Szakértő csapatunk minden ügyféllel egyénileg foglalkozik, biztosítva, hogy minden kárbejelentés a lehető legnagyobb figyelmet kapja. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Gyors feldolgozás:</strong> Azonnali intézkedéseket teszünk a bejelentés feldolgozására, hogy minimálisra csökkentsük a kellemetlenségeket. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Átlátható kommunikáció:</strong> Folyamatos tájékoztatást nyújtunk az ügyintézés állapotáról, hogy ügyfeleink mindig tisztában legyenek a folyamatokkal. </li></ul><ul class="subpage-services__img-text-box__text-box__ul"><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> Hogyan működik a kárbejelentési folyamatunk? </h6><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Bejelentés:</strong> Ügyfeleink könnyen bejelenthetik a kárt telefonon, online, vagy személyesen irodáinkban. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Adatgyűjtés:</strong> Részletes információkat gyűjtünk az esetről, beleértve a kárról készült fényképeket és dokumentumokat. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Szakértői értékelés:</strong> Szakértőink felülvizsgálják az adatokat és meghatározzák a kár mértékét. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Megállapodás és kifizetés:</strong> Gyorsan dolgozunk a kártérítési összeg meghatározásán és a kifizetésen, hogy ügyfeleink mielőbb helyreállíthassák életüket vagy üzleti tevékenységüket. </li><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> További támogatás </h6><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Jogi tanácsadás:</strong> Jogászaink segítséget nyújtanak abban, hogy az ügyfelek érdekeit hatékonyan képviseljük. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Ideiglenes megoldások:</strong> Szükség esetén segítünk ideiglenes helyreállítási megoldásokat találni. </li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/karbejentes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=karbejentes-BIfCvgqh.js.map
