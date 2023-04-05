import { c as create_ssr_component, v as validate_component, e as escape, f as each, d as add_attribute } from './index2-f58250d6.js';
import { format } from 'timeago.js';

/* empty css                                                      */const css$4 = {
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
  $$result.css.add(css$4);
  return `<div class="error-container svelte-s8njrl"><div class="error-box svelte-s8njrl"><p>The following errors have been found:</p>
		<ul class="error-list svelte-s8njrl">${each(Object.keys(errors), (value) => {
    return `<li>${escape(errors[value])}
				</li>`;
  })}</ul></div>
	<button class="error-delete svelte-s8njrl"><i class="error-icon fa-solid fa-xmark svelte-s8njrl"></i></button>
</div>`;
});
const css$3 = {
  code: "nav.svelte-12cdmv3{display:flex;justify-content:space-between;align-items:center;min-width:460px;max-width:100%;height:56px;padding:0 20px;background-color:#118cbd;color:#ffffff}h2.svelte-12cdmv3{font-size:32px}ul.svelte-12cdmv3{display:flex;list-style:none;gap:5px}li.svelte-12cdmv3{font-size:17px;font-weight:600;color:#ffffff\r\n	}span.svelte-12cdmv3{font-size:17px;font-weight:600}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$3);
  return `<nav class="svelte-12cdmv3"><h2 class="svelte-12cdmv3">FAVORITED LINKS</h2>
	<ul class="svelte-12cdmv3"><a href="${"/" + escape(id, true)}"><li class="svelte-12cdmv3">Profile</li></a>
		<span class="svelte-12cdmv3">|</span>
		<a href="/logout"><li class="svelte-12cdmv3">Log out</li></a>
		<span class="svelte-12cdmv3">|</span>
		<a href="/deleteuser"><li class="svelte-12cdmv3">Delete User</li></a></ul>
</nav>`;
});
const css$2 = {
  code: ".link-content.svelte-1sq0jb7.svelte-1sq0jb7{display:grid;position:relative;grid-auto-rows:min-content min-content 1fr min-content;flex-wrap:wrap;max-width:200px;max-height:200px;padding:4px;border-radius:8px;box-shadow:0 0 3px 1px #888888;row-gap:2px}button.svelte-1sq0jb7.svelte-1sq0jb7{display:none;position:absolute;width:20px;height:20px;top:3px;right:3px;border:none;background-color:#ffffff;cursor:pointer}i.svelte-1sq0jb7.svelte-1sq0jb7{width:20px;height:20px;background-color:#ffffff;font-size:20px;font-weight:700}.link-content.svelte-1sq0jb7:hover>button.svelte-1sq0jb7{display:block}h2.svelte-1sq0jb7.svelte-1sq0jb7{width:100%;overflow-x:hidden;text-overflow:ellipsis;font-size:24px}a.svelte-1sq0jb7.svelte-1sq0jb7{display:inline-block;overflow:hidden;text-overflow:ellipsis;color:#3682f3}a.svelte-1sq0jb7.svelte-1sq0jb7:hover{color:#863ae9}.link-description.svelte-1sq0jb7.svelte-1sq0jb7{overflow-y:scroll;scrollbar-width:none;overflow-wrap:anywhere;overscroll-behavior:contain}p.svelte-1sq0jb7.svelte-1sq0jb7{margin-left:auto}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  let { change } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  $$result.css.add(css$2);
  return `<div class="link-content svelte-1sq0jb7"><button class="svelte-1sq0jb7"><i class="fa-solid fa-plus svelte-1sq0jb7"></i></button>
	<h2 class="svelte-1sq0jb7">${escape(link.title)}</h2>
	<a${add_attribute("href", link.url, 0)} target="_blank" rel="noreferrer" class="svelte-1sq0jb7">${escape(link.url)}</a>
	<div class="link-description svelte-1sq0jb7">${escape(link.description)}</div>
	<p class="svelte-1sq0jb7">${escape(format(link.createdAt))}</p>
</div>`;
});
const css$1 = {
  code: "form.svelte-1jmwhli{display:flex;flex-wrap:wrap;width:min-content;height:min-content;gap:12px}input.svelte-1jmwhli{width:430px;padding:14px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}input.svelte-1jmwhli:focus{outline:2px solid #1989f1}textarea.svelte-1jmwhli{width:100%;padding:14px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}textarea.svelte-1jmwhli:focus{outline:2px solid #1989f1}button.svelte-1jmwhli{width:66%;padding:13px;border:none;outline:1px solid #ca1212;border-radius:6px;background-color:#ca1212;font-size:18px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-1jmwhli:hover{background-color:#da1212;outline:1px solid #da1212}.edit.svelte-1jmwhli{width:31%;margin-left:auto;outline:1px solid #7c7777;background-color:#7c7777}.edit.svelte-1jmwhli:hover{background-color:#8c8787;outline:1px solid #8c8787}.add.svelte-1jmwhli{width:100%;outline:1px solid #2177c7;background-color:#2177c7}.add.svelte-1jmwhli:hover{background-color:#2187d7;outline:1px solid #2187d7}",
  map: null
};
const FormLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  let { links } = $$props;
  let { visible } = $$props;
  let { show } = $$props;
  let { errors } = $$props;
  let action = "";
  let method = "";
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css$1);
  return `<form${add_attribute("action", action, 0)}${add_attribute("method", method, 0)} class="svelte-1jmwhli">${slots.default ? slots.default({}) : ``}
  <input type="text" name="title" placeholder="Title"${add_attribute("value", link ? link.title : "", 0)} class="svelte-1jmwhli">
  <input type="text" name="url" placeholder="URL"${add_attribute("value", link ? link.url : "", 0)} class="svelte-1jmwhli">
	<textarea name="description" placeholder="Description" rows="5" spellcheck="false" class="svelte-1jmwhli">${escape(link ? link.description : "", false)}</textarea>
	${link ? `<button class="svelte-1jmwhli">Delete
		</button>
		<button class="edit svelte-1jmwhli">Edit
		</button>` : `<button class="add svelte-1jmwhli">Add Link
		</button>`}
</form>`;
});
const css = {
  code: ".link-absolute.svelte-127qptc{display:flex;position:fixed;width:100vw;height:100vh;top:0;bottom:0;background-color:#000000aa;z-index:200}.link-container.svelte-127qptc{margin:auto;margin-top:140px;padding:20px;border-radius:8px;background-color:#ffffff;box-shadow:0 2px 10px #777777}.main-container.svelte-127qptc{min-width:460px;min-height:calc(100vh - 56px)}.link-user.svelte-127qptc{width:fit-content;margin:auto;margin-top:20px;font-size:32px;font-weight:700}.links-container.svelte-127qptc{display:grid;justify-content:center;grid-template-columns:repeat(auto-fit, 200px);grid-auto-rows:200px;width:80%;min-width:460px;max-width:1120px;min-height:75vh;margin:20px auto;padding:20px;border-radius:12px;background-color:#ffffff;box-shadow:0 4px 10px #aaaaaa;gap:20px}.link-button.svelte-127qptc{align-self:center;width:80px;height:80px;margin:auto;border:none;border-radius:50%;background-color:#2b4de6;font-size:40px;font-weight:700;color:#ffffff;box-shadow:0 0 10px -2px #2626ac;cursor:pointer}.link-button.svelte-127qptc:hover{background-color:#2b4df6}.link-message.svelte-127qptc{display:flex;justify-content:center;align-content:center;flex-wrap:wrap;padding:5px;text-align:center;font-size:18px;font-weight:500;gap:25px}.link-save.svelte-127qptc{width:max-content;height:min-content;padding:8px 32px;border:none;border-radius:12px;background-color:#2b4de6;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}.link-save.svelte-127qptc:hover{background-color:#2b4df6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let errors = {};
  let visible = false;
  let visibleError = false;
  let link = null;
  let changeVisibility = (value, values) => {
    link = values;
    visible = value;
    visibleError = false;
  };
  const setErrors = (data2) => errors = data2;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${visible ? `<div class="link-absolute svelte-127qptc"><div class="link-container svelte-127qptc">${validate_component(FormLink, "Form").$$render(
      $$result,
      {
        errors: setErrors,
        visible,
        show: visibleError,
        links: data.links,
        link
      },
      {
        visible: ($$value) => {
          visible = $$value;
          $$settled = false;
        },
        show: ($$value) => {
          visibleError = $$value;
          $$settled = false;
        },
        links: ($$value) => {
          data.links = $$value;
          $$settled = false;
        },
        link: ($$value) => {
          link = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${visibleError ? `${validate_component(ErrorBox, "ErrorBox").$$render(
            $$result,
            { errors, hide: visibleError },
            {
              hide: ($$value) => {
                visibleError = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}`;
        }
      }
    )}</div></div>` : ``}

${validate_component(Nav, "Nav").$$render($$result, { id: data.user.id }, {}, {})}
<div class="main-container svelte-127qptc"><div class="link-user svelte-127qptc">Welcome ${escape(data.user.firstname)} ${escape(data.user.lastname)}</div>

	<div class="links-container svelte-127qptc">${data.links.length > 0 ? `${each(data.links, (link2) => {
      return `${validate_component(Link, "Link").$$render(
        $$result,
        { link: link2, change: changeVisibility },
        {
          change: ($$value) => {
            changeVisibility = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}
			<button class="link-button svelte-127qptc">+
			</button>` : `<div class="link-message svelte-127qptc">Haven&#39;t saved any links yet?
				<button class="link-save svelte-127qptc">Starts now!
				</button></div>`}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f66dc12d.js.map
