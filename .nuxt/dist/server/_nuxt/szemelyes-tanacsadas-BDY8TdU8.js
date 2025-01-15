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
  __name: "szemelyes-tanacsadas",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Személyes Tanácsadás"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subpage-content subpage-two-services-content subpage-services-content--bg-color" }, _attrs))}><div class="subpage-services__img-text-box bg-color-w d-flex"><div class="subpage-services__img-text-box__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "subpage-services__img-text-box__img-box__img",
        src: "/img/subpage-services/szemelyes_tanacsadas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="subpage-services__img-text-box__text-box"><h4 class="subpage-services__img-text-box__text-box__h4 f-700"> Személyes Tanácsadás </h4><p class="subpage-services__img-text-box__text-box__p"> Személyre szabott tanácsadásunkkal biztosítjuk, hogy minden ügyfél megkapja az egyéni igényeinek megfelelő biztosítási tanácsokat és megoldásokat, biztosítva ezzel az optimális védelmet és nyugalmat. Célunk, hogy mindenki számára elérhetővé tegyük a legmegfelelőbb biztosítási lehetőségeket. </p><h5 class="subpage-services__img-text-box__text-box__h5 f-700"> Miért válassza a személyes tanácsadásunkat? </h5><ul class="subpage-services__img-text-box__text-box__ul"><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Egyedi megközelítés:</strong> Minden ügyfelünk egyedinek számít, és megértjük, hogy mindenki más-más kihívásokkal és igényekkel rendelkezik. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Szakértői ismeretek:</strong> Csapatunk a biztosítási piac mélyreható ismeretével rendelkezik, így képes a legjobb tanácsokkal szolgálni. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Hosszú távú megoldások:</strong> Nem csak az aktuális igényekre koncentrálunk, hanem az ügyfelek hosszú távú védelmét is szem előtt tartjuk. </li></ul><h5 class="subpage-services__img-text-box__text-box__h5 f-700"> Szolgáltatásaink a személyes tanácsadás terén </h5><ul class="subpage-services__img-text-box__text-box__ul"><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> Szükségletek felmérése: </h6><li class="subpage-services__img-text-box__text-box__ul__li"> Részletes beszélgetés az Ön igényeiről, kockázatairól és várakozásairól. </li><li class="subpage-services__img-text-box__text-box__ul__li"> Személyes körülmények figyelembe vétele a lehető legjobb tanácsok biztosítása érdekében. </li><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> Biztosítási tervek összeállítása: </h6><li class="subpage-services__img-text-box__text-box__ul__li"> Különböző biztosítási lehetőségek bemutatása, magyarázata és összehasonlítása. </li><li class="subpage-services__img-text-box__text-box__ul__li"> A legjobban megfelelő biztosítási termékek és fedezetek kiválasztása. </li><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> Folyamatos támogatás és felülvizsgálat: </h6><li class="subpage-services__img-text-box__text-box__ul__li"> Rendszeres értékelés és frissítés a biztosítási fedezeteknek, hogy azok mindig az aktuális élethelyzethez igazodjanak. </li><li class="subpage-services__img-text-box__text-box__ul__li"> Gyors segítségnyújtás minden biztosítási kérdésben vagy problémában. </li></ul><h5 class="subpage-services__img-text-box__text-box__h5 f-700"> Hogyan kezdhető el a személyes tanácsadás? </h5><ul class="subpage-services__img-text-box__text-box__ul"><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Időpont egyeztetése:</strong> Vegye fel velünk a kapcsolatot, hogy egyeztessünk egy személyes konzultáció időpontját. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Személyes találkozó:</strong> Találkozzunk személyesen vagy végezzünk egy online konzultációt, hogy részletesen megismerhessük az Ön igényeit. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Testre szabott ajánlatok:</strong> Készítsünk Önnek személyre szabott ajánlatot, amely pontosan illeszkedik az igényeihez. </li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/szemelyes-tanacsadas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=szemelyes-tanacsadas-BDY8TdU8.js.map
