import { c as create_ssr_component } from './index2-1f46a731.js';

const css = {
  code: ".main-container.svelte-5ltvii{background-image:url('background.jpeg');background-repeat:no-repeat;background-size:cover;background-position:center}.index-container.svelte-5ltvii{display:flex;flex-direction:column;width:fit-content;margin:auto;margin-top:12%;gap:15px}h1.svelte-5ltvii{text-align:center;font-size:80px;font-weight:700;color:#ffffff}h2.svelte-5ltvii{text-align:center;font-size:32px;font-weight:500;color:#ffffff}a.svelte-5ltvii{width:100px;margin:auto;padding:8px 16px;border-radius:6px;background-color:#3295d8;text-align:center;font-size:20px;font-weight:600;color:#ffffff}a.svelte-5ltvii:hover{background-color:#3295e8}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-container svelte-5ltvii"><div class="index-container svelte-5ltvii"><h1 class="svelte-5ltvii">Favorite Links</h1>
    <i><h2 class="svelte-5ltvii">Store your favorite Website&#39;s Links</h2></i>
    <a href="/login" class="svelte-5ltvii">Login</a>
    <a href="/signup" class="svelte-5ltvii">Signup</a></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f45fe250.js.map
