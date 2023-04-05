import axios from 'axios';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ILink, IUser } from '$lib/global';
import { DIR } from '$lib/config.js';

export const load = (async ({ locals, cookies, params: { id } }) => {
	if (!locals.user) throw redirect(307, '/login');

	if (locals.user?.id !== id) throw redirect(307, '/' + id);

	const token = cookies.get('authenticate');
	
	const data = await axios({
		method: 'GET',
		url: DIR + '/api/user/links',
		headers: { 'Cookie': `authenticate=${token}` },
		withCredentials: true
	}).then(res => res.data);

	return {
		user: locals.user as IUser,
		links: data.links as ILink[]
	};
}) satisfies PageServerLoad;
