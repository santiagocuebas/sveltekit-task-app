import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals.user) throw redirect(307, '/' + locals.user.id);
}) satisfies PageServerLoad;