import { c as create_ssr_component, v as validate_component, e as escape, h as each, d as add_attribute } from './index2-1f46a731.js';
import { format } from 'timeago.js';
import { E as ErrorBox } from './ErrorBox-8b3c8438.js';

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
  code: ".link-content.svelte-zo9ooq.svelte-zo9ooq{display:flex;position:relative;align-content:space-between;flex-wrap:wrap;max-width:200px;max-height:200px;padding:5px;border-radius:8px;box-shadow:0 1px 10px -4px #222222}i.svelte-zo9ooq.svelte-zo9ooq{display:none;position:absolute;width:20px;height:20px;right:0;margin:5px 5px 0 0;background-color:#ffffff;font-size:20px;font-weight:700;cursor:pointer}.link-content.svelte-zo9ooq:hover>i.svelte-zo9ooq{display:block}h2.svelte-zo9ooq.svelte-zo9ooq{width:100%;overflow-x:hidden;text-overflow:ellipsis;font-size:24px}a.svelte-zo9ooq.svelte-zo9ooq{display:inline-block;overflow-x:hidden;text-overflow:ellipsis;color:#3682f3}a.svelte-zo9ooq.svelte-zo9ooq:hover{color:#863ae9}.link-description.svelte-zo9ooq.svelte-zo9ooq{width:100%;height:80px;overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis}.link-createdAt.svelte-zo9ooq.svelte-zo9ooq{margin-left:auto}",
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
  return `<div class="link-content svelte-zo9ooq"><i class="fa-solid fa-plus svelte-zo9ooq"></i>
  <h2 class="svelte-zo9ooq">${escape(link.title)}</h2>
  <a${add_attribute("href", link.url, 0)} target="_blank" rel="noreferrer" class="svelte-zo9ooq">${escape(link.url)}</a>
  <div class="link-description svelte-zo9ooq">${escape(link.description)}</div>
  <p class="link-createdAt svelte-zo9ooq">${escape(format(link.createdAt))}</p>
</div>`;
});
const css$1 = {
  code: "form.svelte-tz3m6w{display:flex;flex-wrap:wrap;width:min-content;height:min-content;gap:12px}input.svelte-tz3m6w{width:430px;padding:14px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}input.svelte-tz3m6w:focus{outline:2px solid #1989f1}textarea.svelte-tz3m6w{width:100%;padding:14px;border:none;outline:1px solid #aaaaaa;border-radius:6px;font-size:16px}textarea.svelte-tz3m6w:focus{outline:2px solid #1989f1}.delete-link.svelte-tz3m6w{width:66%;background-color:#ca1212;padding:13px;border:none;outline:1px solid #ca1212;border-radius:6px;font-size:18px;font-weight:700;color:#ffffff;cursor:pointer}.delete-link.svelte-tz3m6w:hover{background-color:#da1212;outline:1px solid #da1212}.edit-link.svelte-tz3m6w{width:31%;background-color:#7c7777;margin-left:auto;padding:13px;border:none;outline:1px solid #7c7777;border-radius:6px;font-size:18px;font-weight:700;color:#ffffff;cursor:pointer}.edit-link.svelte-tz3m6w:hover{background-color:#8c8787;outline:1px solid #8c8787}",
  map: null
};
const EditLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action } = $$props;
  let { method = "POST" } = $$props;
  let { change } = $$props;
  let { links } = $$props;
  let { link } = $$props;
  let { changeVisibility } = $$props;
  let { errors } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.method === void 0 && $$bindings.method && method !== void 0)
    $$bindings.method(method);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.changeVisibility === void 0 && $$bindings.changeVisibility && changeVisibility !== void 0)
    $$bindings.changeVisibility(changeVisibility);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css$1);
  return `<form${add_attribute("action", action, 0)}${add_attribute("method", method, 0)} class="svelte-tz3m6w">${slots.default ? slots.default({}) : ``}
  <input type="text" name="title" placeholder="Title" class="svelte-tz3m6w"${add_attribute("value", link.title, 0)}>
  <input type="text" name="url" placeholder="URL" class="svelte-tz3m6w"${add_attribute("value", link.url, 0)}>
	<textarea name="description" placeholder="Description" rows="5" spellcheck="false" class="svelte-tz3m6w">${link.description || ""}</textarea>
	<button class="delete-link svelte-tz3m6w">Delete
	</button>
	<button class="edit-link svelte-tz3m6w">Edit
	</button>
</form>`;
});
const css = {
  code: ".link-absolute.svelte-seixv5{display:flex;position:fixed;width:100vw;height:100vh;top:0;bottom:0;background-color:#000000aa;z-index:200}.link-occult.svelte-seixv5{display:flex;position:absolute;justify-content:center;align-items:center;width:50px;height:50px;right:0;margin-top:25px;margin-right:40px;border:none;border-radius:50%;background-color:#f02a2a;font-size:32px;font-weight:700;color:#ffffff;cursor:pointer}.link-occult.svelte-seixv5:hover{background-color:#f72323}.link-add.svelte-seixv5{margin:auto;margin-top:140px;padding:20px;border-radius:8px;background-color:#ffffff;box-shadow:0 2px 10px #777777}.main-container.svelte-seixv5{min-width:460px;min-height:calc(100vh - 56px)}.link-user.svelte-seixv5{width:fit-content;margin:auto;margin-top:20px;font-size:32px;font-weight:700}.links-container.svelte-seixv5{display:grid;justify-content:center;grid-template-columns:repeat(auto-fit, 200px);grid-auto-rows:200px;width:80%;min-width:460px;max-width:1120px;min-height:75vh;margin:20px auto;padding:20px;border-radius:12px;background-color:#ffffff;box-shadow:0 4px 10px #aaaaaa;gap:20px}.link-button.svelte-seixv5{align-self:center;width:80px;height:80px;margin:auto;border:none;border-radius:50%;background-color:#2b4de6;font-size:40px;font-weight:700;color:#ffffff;box-shadow:0 0 10px -2px #2626ac;cursor:pointer}.link-button.svelte-seixv5:hover{background-color:#2b4df6}.link-message.svelte-seixv5{display:flex;justify-content:center;align-content:center;flex-wrap:wrap;padding:5px;text-align:center;font-size:18px;font-weight:500;gap:25px}.link-save.svelte-seixv5{width:max-content;height:min-content;padding:8px 32px;border:none;border-radius:12px;background-color:#2b4de6;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}.link-save.svelte-seixv5:hover{background-color:#2b4df6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { links, user } = data;
  let errors = {};
  let visibleEdit = false;
  let visibleEditError = false;
  let link = null;
  let changeVisibilityEdit = (value, values) => {
    link = values;
    visibleEdit = value;
  };
  let changeVisibilityEditError = (value) => visibleEditError = value;
  const setErrors = (data2) => errors = data2;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${``}

${visibleEdit ? `<div class="link-absolute svelte-seixv5"><button class="link-occult svelte-seixv5">-
	</button>
	<div class="link-add svelte-seixv5">${validate_component(EditLink, "Edit").$$render(
      $$result,
      {
        action: `http://localhost:4200/api/link/edit/${link.id}`,
        changeVisibility: changeVisibilityEditError,
        errors: setErrors,
        change: changeVisibilityEdit,
        links,
        link
      },
      {
        change: ($$value) => {
          changeVisibilityEdit = $$value;
          $$settled = false;
        },
        links: ($$value) => {
          links = $$value;
          $$settled = false;
        },
        link: ($$value) => {
          link = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${visibleEditError ? `${validate_component(ErrorBox, "ErrorBox").$$render($$result, { hide: changeVisibilityEditError, errors }, {}, {})}` : ``}`;
        }
      }
    )}</div></div>` : ``}

${validate_component(Nav, "Nav").$$render($$result, { id: user.id }, {}, {})}
<div class="main-container svelte-seixv5"><div class="link-user svelte-seixv5">Welcome ${escape(user.firstname)} ${escape(user.lastname)}</div>

	<div class="links-container svelte-seixv5">${links.length > 0 ? `${each(links, (link2) => {
      return `${validate_component(Link, "Link").$$render(
        $$result,
        { link: link2, change: changeVisibilityEdit },
        {
          change: ($$value) => {
            changeVisibilityEdit = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}
			<button class="link-button svelte-seixv5">+
			</button>` : `<div class="link-message svelte-seixv5">Haven&#39;t saved any links yet?
				<button class="link-save svelte-seixv5">Starts now!
				</button></div>`}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3f34fabc.js.map
