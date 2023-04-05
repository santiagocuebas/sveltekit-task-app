import { c as create_ssr_component, h as each, e as escape } from './index2-1f46a731.js';

const css = {
  code: ".error-container.svelte-s8njrl{display:flex;align-items:center;width:100%;height:min-content;padding:20px;border:1px solid #e6df88;outline:1px solid #e6df88;border-radius:4px;background-color:#f2f8a1;font-weight:700}.error-box.svelte-s8njrl{width:100%}.error-list.svelte-s8njrl{padding-left:20px}.error-delete.svelte-s8njrl{display:flex;justify-content:center;align-items:center;padding:8px;border:none;border-radius:50%;background-color:#000000;color:#f2f8a1;cursor:pointer}.error-icon.svelte-s8njrl{width:16px;height:16px}",
  map: null
};
const ErrorBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hide } = $$props;
  let { errors } = $$props;
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css);
  return `<div class="error-container svelte-s8njrl"><div class="error-box svelte-s8njrl"><p>The following errors have been found:</p>
		<ul class="error-list svelte-s8njrl">${each(Object.keys(errors), (value) => {
    return `<li>${escape(errors[value])}
				</li>`;
  })}</ul></div>
	<button class="error-delete svelte-s8njrl"><i class="error-icon fa-solid fa-xmark svelte-s8njrl"></i></button>
</div>`;
});

export { ErrorBox as E };
//# sourceMappingURL=ErrorBox-8b3c8438.js.map
