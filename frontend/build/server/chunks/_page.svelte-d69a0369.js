import { c as create_ssr_component, v as validate_component } from './index2-f58250d6.js';
import { F as Form } from './Form-3e1dc022.js';
import { D as DIR } from './config-47e8fa8f.js';

const css = {
  code: "input.svelte-dp9icz{width:360px;padding:14px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}input.svelte-dp9icz:focus{outline:2px solid #1989f1}button.svelte-dp9icz{width:min-content;height:min-content;margin:auto;padding:8px 32px;border:none;border-radius:6px;background-color:#37a063;font-size:18px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-dp9icz:hover{background-color:#37b063}",
  map: null
};
let visible = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const setErrors = (data) => data;
  $$result.css.add(css);
  return `<div class="form-container"><h2 class="form-title">Sign up</h2>
	${validate_component(Form, "Form").$$render(
    $$result,
    {
      action: DIR + "/api/auth/signup",
      show: visible,
      errors: setErrors
    },
    {},
    {
      default: () => {
        return `${``}
		<input type="text" name="firstname" placeholder="Firstname" class="svelte-dp9icz">
		<input type="text" name="lastname" placeholder="Lastname" class="svelte-dp9icz">
		<input type="email" name="email" placeholder="Email" class="svelte-dp9icz">
		<input type="password" name="password" placeholder="Password" class="svelte-dp9icz">
		<input type="password" name="confirmPassword" placeholder="Confirm Password" class="svelte-dp9icz">
		<button class="svelte-dp9icz">Register
		</button>`;
      }
    }
  )}
	<div class="form-footer"><a class="form-link" href="/login">Already have an account?</a></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d69a0369.js.map
