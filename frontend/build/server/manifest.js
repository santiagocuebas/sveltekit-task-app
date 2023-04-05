const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.jpeg","favicon.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.11480caf.js","imports":["_app/immutable/entry/start.11480caf.js","_app/immutable/chunks/index.da558d89.js","_app/immutable/chunks/singletons.79454f86.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e9b755d5.js","imports":["_app/immutable/entry/app.e9b755d5.js","_app/immutable/chunks/index.da558d89.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-3c0c4139.js'),
			() => import('./chunks/1-ca56500e.js'),
			() => import('./chunks/2-69d4c610.js'),
			() => import('./chunks/3-b85d67a6.js'),
			() => import('./chunks/4-6954f2c7.js'),
			() => import('./chunks/5-5828e063.js'),
			() => import('./chunks/6-6bcec229.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
