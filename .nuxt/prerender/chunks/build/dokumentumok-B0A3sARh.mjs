import { u as useHead } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue/server-renderer/index.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subpage-content subpage-content-document text-center" }, _attrs))}><section><button class="subpage-content-document__btn text-transform-uppercase text-color-w f-600 cursor"> Dokumentumok megjelen\xEDt\xE9se </button>`);
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

export { _sfc_main as default };
//# sourceMappingURL=dokumentumok-B0A3sARh.mjs.map
