import { c as create_ssr_component, v as validate_component } from './index2-1f46a731.js';
import { F as Form, I as Input } from './Input-47b3114e.js';
import { E as ErrorBox } from './ErrorBox-8b3c8438.js';

const css = {
  code: "button.svelte-taw14f{width:min-content;height:min-content;margin:auto;padding:8px 32px;border:none;border-radius:6px;background-color:#37a063;font-size:18px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-taw14f:hover{background-color:#37b063}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errors = {};
  let visible = false;
  const changeErrorBox = (value) => visible = value;
  const setErrors = (data) => errors = data;
  $$result.css.add(css);
  return `<div class="form-container"><h2 class="form-title">Sign up</h2>
	${validate_component(Form, "Form").$$render(
    $$result,
    {
      action: "http://localhost:4200/api/auth/signup",
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
            className: "input-signup",
            name: "firstname",
            text: "Firstname"
          },
          {},
          {}
        )}
		${validate_component(Input, "Input").$$render(
          $$result,
          {
            className: "input-signup",
            name: "lastname",
            text: "Lastname"
          },
          {},
          {}
        )}
		${validate_component(Input, "Input").$$render(
          $$result,
          {
            className: "input-signup",
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
            className: "input-signup",
            type: "password",
            name: "password",
            text: "Password"
          },
          {},
          {}
        )}
		${validate_component(Input, "Input").$$render(
          $$result,
          {
            className: "input-signup",
            type: "password",
            name: "confirmPassword",
            text: "Confirm Password"
          },
          {},
          {}
        )}
		<button class="svelte-taw14f">Register
		</button>`;
      }
    }
  )}
	<div class="form-footer"><a class="form-link" href="/login">Already have an account?</a></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-240026e4.js.map
