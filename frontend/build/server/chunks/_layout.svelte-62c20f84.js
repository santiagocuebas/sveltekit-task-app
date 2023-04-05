import { c as create_ssr_component } from './index2-f58250d6.js';

const css = {
  code: ".form-container{display:flex;flex-wrap:wrap;width:min-content;margin:auto;margin-top:40px;padding:20px;border-radius:12px;background-color:#ffffff;box-shadow:0 3px 10px #888888;gap:20px}.form-title{width:100%;text-align:center;font-size:24px}.form-footer{width:100%;text-align:center;font-size:18px}.form-link{font-size:18px;color:#0f6abe}.form-link:hover{color:#8303a3}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-container">${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-62c20f84.js.map
