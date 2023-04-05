import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty } from './index2-1f46a731.js';

const css$1 = {
  code: "form.svelte-wh5sep{display:flex;flex-wrap:wrap;width:min-content;height:min-content;gap:12px}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action } = $$props;
  let { method = "POST" } = $$props;
  let { change } = $$props;
  let { errors } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.method === void 0 && $$bindings.method && method !== void 0)
    $$bindings.method(method);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css$1);
  return `<form${add_attribute("action", action, 0)}${add_attribute("method", method, 0)} class="svelte-wh5sep">${slots.default ? slots.default({}) : ``}
</form>`;
});
const css = {
  code: ".input-login.svelte-1lacid9{width:400px;padding:16px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}.input-login.svelte-1lacid9:focus{outline:2px solid #1989f1}.input-signup.svelte-1lacid9{width:360px;padding:14px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}.input-signup.svelte-1lacid9:focus{outline:2px solid #1989f1}.input-upload.svelte-1lacid9{width:430px;padding:14px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}.input-upload.svelte-1lacid9:focus{outline:2px solid #1989f1}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { text } = $$props;
  let { name } = $$props;
  let { className } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  return `<input class="${escape(null_to_empty(className), true) + " svelte-1lacid9"}"${add_attribute("type", type, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", text, 0)}>`;
});

export { Form as F, Input as I };
//# sourceMappingURL=Input-47b3114e.js.map
