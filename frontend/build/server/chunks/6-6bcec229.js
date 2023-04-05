import axios from 'axios';
import { r as redirect } from './index-1dce6fb5.js';
import { D as DIR } from './config-47e8fa8f.js';

const load = async ({ locals, cookies, params: { id } }) => {
  if (!locals.user)
    throw redirect(307, "/login");
  if (locals.user?.id !== id)
    throw redirect(307, "/" + id);
  const token = cookies.get("authenticate");
  const data = await axios({
    method: "GET",
    url: DIR + "/api/user/links",
    headers: { "Cookie": `authenticate=${token}` },
    withCredentials: true
  }).then((res) => res.data);
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
const component = async () => (await import('./_page.svelte-f66dc12d.js')).default;
const file = '_app/immutable/entry/_id_-page.svelte.84e316f5.js';
const server_id = "src/routes/[id]/+page.server.ts";
const imports = ["_app/immutable/entry/_id_-page.svelte.84e316f5.js","_app/immutable/chunks/index.da558d89.js","_app/immutable/chunks/singletons.79454f86.js","_app/immutable/chunks/config.1b14bc65.js"];
const stylesheets = ["_app/immutable/assets/_page.730d720d.css","_app/immutable/assets/config.d5551569.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-6bcec229.js.map
