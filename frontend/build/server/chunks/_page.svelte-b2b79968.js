import { c as create_ssr_component, v as validate_component } from './index2-1f46a731.js';
import { F as Form, I as Input } from './Input-47b3114e.js';
import { E as ErrorBox } from './ErrorBox-8b3c8438.js';

const css = {
  code: "button.svelte-1oeoi8g{width:100%;background-color:#2177c7;padding:13px;border:none;outline:1px solid #2177c7;border-radius:6px;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-1oeoi8g:hover{background-color:#2187d7;outline:1px solid #2187d7}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errors = {};
  let visible = false;
  const changeErrorBox = (value) => visible = value;
  const setErrors = (data) => errors = data;
  $$result.css.add(css);
  return `<div class="form-container"><h2 class="form-title">Log in</h2>
	${validate_component(Form, "Form").$$render(
    $$result,
    {
      action: "http://localhost:4200/api/auth/login",
      change: changeErrorBox,
      errors: setErrors
    },
    {},
    {
      default: () => {
        return `${visible ? `${validate_component(ErrorBox, "ErrorBox").$$render($$result, { hide: changeErrorBox, errors }, {}, {})}` : ``}
		${validate_component(Input, "Input").$$render(
          $$result,
          {
            className: "input-login",
            type: "email",
            name: "email",
            text: "Email"
          },
          {},
          {}
        )}
		${validate_component(Input, "Input").$$render(
          $$result,
          {
            className: "input-login",
            type: "password",
            name: "password",
            text: "Password"
          },
          {},
          {}
        )}
		<button class="svelte-1oeoi8g">Login
		</button>`;
      }
    }
  )}
	<div class="form-footer">Don&#39;t have an account?
		<a class="form-link" href="/signup">Subscribe!</a></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b2b79968.js.map
