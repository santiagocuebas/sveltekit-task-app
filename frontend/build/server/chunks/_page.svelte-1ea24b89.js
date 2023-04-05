import { c as create_ssr_component, v as validate_component } from './index2-f58250d6.js';
import { F as Form } from './Form-3e1dc022.js';
import { D as DIR } from './config-47e8fa8f.js';

const css = {
  code: "input.svelte-1sfgfj1{width:400px;padding:16px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}input.svelte-1sfgfj1:focus{outline:2px solid #1989f1}button.svelte-1sfgfj1{width:100%;background-color:#2177c7;padding:13px;border:none;outline:1px solid #2177c7;border-radius:6px;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-1sfgfj1:hover{background-color:#2187d7;outline:1px solid #2187d7}",
  map: null
};
let visible = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const setErrors = (data) => data;
  $$result.css.add(css);
  return `<div class="form-container"><h2 class="form-title">Log in</h2>
	${validate_component(Form, "Form").$$render(
    $$result,
    {
      action: DIR + "/api/auth/login",
      show: visible,
      errors: setErrors
    },
    {},
    {
      default: () => {
        return `${``}
		<input type="email" name="email" placeholder="Email" class="svelte-1sfgfj1">
		<input type="password" name="password" placeholder="Password" class="svelte-1sfgfj1">
		<button class="svelte-1sfgfj1">Login
		</button>`;
      }
    }
  )}
	<div class="form-footer">Don&#39;t have an account?
		<a class="form-link" href="/signup">Subscribe!</a></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1ea24b89.js.map
