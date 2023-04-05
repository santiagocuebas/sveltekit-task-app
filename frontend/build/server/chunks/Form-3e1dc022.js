import { c as create_ssr_component, d as add_attribute } from './index2-f58250d6.js';

const css = {
  code: "form.svelte-wh5sep{display:flex;flex-wrap:wrap;width:min-content;height:min-content;gap:12px}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action } = $$props;
  let { method = "POST" } = $$props;
  let { show } = $$props;
  let { errors } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.method === void 0 && $$bindings.method && method !== void 0)
    $$bindings.method(method);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css);
  return `<form${add_attribute("action", action, 0)}${add_attribute("method", method, 0)} class="svelte-wh5sep">${slots.default ? slots.default({}) : ``}
</form>`;
});

export { Form as F };
//# sourceMappingURL=Form-3e1dc022.js.map
