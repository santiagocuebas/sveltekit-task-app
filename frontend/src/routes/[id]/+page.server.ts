import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, fetch, params: { id } }) => {
	if (locals.user.id !== id) throw redirect(307, '/' + id);
	
	const data = await fetch('http://localhost:4200/api/user/links')
		.then(res => res.json());

	if (data.redirect === true) throw redirect(307, data.url);

	if (data.url !== '/' + id) throw redirect(307, data.url);

	return {
		user: locals.user,
		links: data.links
	};
}) satisfies PageServerLoad;
