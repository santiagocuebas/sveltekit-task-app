const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.jpeg","favicon.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c31d2a11.js","imports":["_app/immutable/entry/start.c31d2a11.js","_app/immutable/chunks/index.de3e9b61.js","_app/immutable/chunks/singletons.fbfc1bf7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.87c147ce.js","imports":["_app/immutable/entry/app.87c147ce.js","_app/immutable/chunks/index.de3e9b61.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-ed1ae9d1.js'),
			() => import('./chunks/1-e6ee9ec3.js'),
			() => import('./chunks/2-7f84dad0.js'),
			() => import('./chunks/3-0d9645fc.js'),
			() => import('./chunks/4-6c4841f8.js'),
			() => import('./chunks/5-7d3a15b8.js'),
			() => import('./chunks/6-19a92077.js')
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
