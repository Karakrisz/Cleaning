import { u as useHead } from "../server.mjs";
import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dokumentumok",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dokumentumok"
    });
    const documents = ref([
      "/document/eu_baleseti_bejelento.pdf",
      "/document/felmondo_nyilatkozat_nem_elet.pdf",
      "/document/gk_adasveteli_toltheto.pdf",
      "/document/gk_kolcsonadasi_eng_hun.pdf",
      "/document/uzembentartszerz.pdf"
    ]);
    const showDocuments = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subpage-content subpage-content-document text-center" }, _attrs))}><section><button class="subpage-content-document__btn text-transform-uppercase text-color-w f-600 cursor"> Dokumentumok megjelenítése </button>`);
      if (showDocuments.value) {
        _push(`<ul class="subpage-content-document__ul"><!--[-->`);
        ssrRenderList(documents.value, (doc) => {
          _push(`<li class="subpage-content-document__ul__li"><a class="subpage-content-document__ul__li__link text-color"${ssrRenderAttr("href", doc)} target="_blank" download>${ssrInterpolate(doc.split("/").pop())}</a></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dokumentumok.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dokumentumok-B0A3sARh.js.map
