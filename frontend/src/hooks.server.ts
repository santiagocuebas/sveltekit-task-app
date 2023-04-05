import { redirect, type Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import jwt from 'jsonwebtoken';

export const handle = (async ({ event, resolve }) => {
	const token = event.cookies.get('authenticate');

	if (token) {
		try {
			const decoded = jwt.verify(token, env.SECRET) as jwt.JwtPayload;
			event.locals.user = decoded.user;
		} catch {
			event.cookies.delete('authenticate');
			throw redirect(307, '/login');
		}
	}

	const res = await resolve(event);
	return res;
}) satisfies Handle;
