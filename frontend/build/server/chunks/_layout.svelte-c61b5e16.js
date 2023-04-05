import { c as create_ssr_component } from './index2-1f46a731.js';

const css = {
  code: "*{margin:0;padding:0;font-size:16px;font-family:'Quicksand', Courier, monospace}h1, h2, h3, h4, h5, h6{margin:0;padding:0}textarea{resize:none}a{color:#000000;text-decoration:none}.main-container{display:grid;align-items:flex-start;justify-content:center;grid-auto-columns:1fr;grid-auto-rows:min-content;width:100%;min-height:100vh;background-color:#edf2f7}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c61b5e16.js.map
