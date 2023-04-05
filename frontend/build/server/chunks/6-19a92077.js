import { r as redirect } from './index-1dce6fb5.js';

const load = async ({ locals, fetch, params: { id } }) => {
  if (locals.user.id !== id)
    throw redirect(307, "/" + id);
  const data = await fetch("http://localhost:4200/api/user/links").then((res) => res.json());
  if (data.redirect === true)
    throw redirect(307, data.url);
  if (data.url !== "/" + id)
    throw redirect(307, data.url);
  return {
    user: locals.user,
    links: data.links
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-3f34fabc.js')).default;
const file = '_app/immutable/entry/_id_-page.svelte.a983855c.js';
const server_id = "src/routes/[id]/+page.server.ts";
const imports = ["_app/immutable/entry/_id_-page.svelte.a983855c.js","_app/immutable/chunks/index.de3e9b61.js","_app/immutable/chunks/ErrorBox.ba74f28f.js","_app/immutable/chunks/singletons.fbfc1bf7.js"];
const stylesheets = ["_app/immutable/assets/_page.c0ccbb7d.css","_app/immutable/assets/ErrorBox.26f04502.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-19a92077.js.map
