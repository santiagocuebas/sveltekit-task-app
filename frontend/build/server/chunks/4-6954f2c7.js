import { r as redirect } from './index-1dce6fb5.js';

const load = async ({ locals }) => {
  if (locals.user)
    throw redirect(307, "/" + locals.user.id);
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-1ea24b89.js')).default;
const file = '_app/immutable/entry/(auth)-login-page.svelte.58abf7aa.js';
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = ["_app/immutable/entry/(auth)-login-page.svelte.58abf7aa.js","_app/immutable/chunks/index.da558d89.js","_app/immutable/chunks/Form.279805c6.js","_app/immutable/chunks/config.1b14bc65.js"];
const stylesheets = ["_app/immutable/assets/_page.5870f696.css","_app/immutable/assets/Form.7d861374.css","_app/immutable/assets/config.d5551569.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-6954f2c7.js.map
