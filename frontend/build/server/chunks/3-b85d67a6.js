import { r as redirect } from './index-1dce6fb5.js';

const load = async ({ locals }) => {
  if (locals.user)
    throw redirect(307, "/" + locals.user.id);
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-d3723ebd.js')).default;
const file = '_app/immutable/entry/_page.svelte.208abc8d.js';
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/entry/_page.svelte.208abc8d.js","_app/immutable/chunks/index.da558d89.js"];
const stylesheets = ["_app/immutable/assets/_page.88f0a14f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-b85d67a6.js.map
