import { c as create_ssr_component } from './index2-f58250d6.js';

const css = {
  code: ".main-container.svelte-y9u4ep{background-image:url('/background.jpeg');background-repeat:no-repeat;background-size:cover;background-position:center}.index-container.svelte-y9u4ep{display:flex;flex-direction:column;width:fit-content;margin:auto;margin-top:12%;gap:15px}h1.svelte-y9u4ep{text-align:center;font-size:80px;font-weight:700;color:#ffffff}h2.svelte-y9u4ep{text-align:center;font-size:32px;font-weight:500;color:#ffffff}a.svelte-y9u4ep{width:100px;margin:auto;padding:8px 16px;border-radius:6px;background-color:#3295d8;text-align:center;font-size:20px;font-weight:600;color:#ffffff}a.svelte-y9u4ep:hover{background-color:#3295e8}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-container svelte-y9u4ep"><div class="index-container svelte-y9u4ep"><h1 class="svelte-y9u4ep">Favorite Links</h1>
    <i><h2 class="svelte-y9u4ep">Store your favorite Website&#39;s Links</h2></i>
    <a href="/login" class="svelte-y9u4ep">Login</a>
    <a href="/signup" class="svelte-y9u4ep">Signup</a></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d3723ebd.js.map
