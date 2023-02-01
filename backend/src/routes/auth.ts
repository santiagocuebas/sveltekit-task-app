import { Router } from 'express';
import { getSerializedCookie } from '../libs/serialized-cookie.js';
import { getUserId } from '../libs/get-id.js';
import { isLoggedIn, isNotLoggedIn } from '../middlewares/logged.js';
import { validate } from '../middlewares/validation.js';
import { User } from '../models/index.js';
import { arraySignup, arrayLogin } from '../validations/arrayValidations.js';
import { encryptPassword } from '../libs/bcrypt.js';

const router = Router();

router.post(
	'/login',
	isNotLoggedIn,
	validate(arrayLogin),
	async (req, res) => {
		const user = await User.findOneBy({ email: req.body.email }) as User;

		const serializedCookie = getSerializedCookie(user);

		res.set('Set-Cookie', serializedCookie);

		return res.json({ userURL: '/' + user.id });
	}
);

router.post(
	'/signup',
	isNotLoggedIn,
	validate(arraySignup),
	async (req, res) => {
		const user: User = User.create({
			id: await getUserId(),
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: await encryptPassword(req.body.password)
		});

		await user.save();

		const serializedCookie = getSerializedCookie(user);

		res.set('Set-Cookie', serializedCookie);
		
		return res.json({ userURL: '/' + user.id });
		
	}
);

router.post(
	'/logout',
	isLoggedIn,
	(_req, res) => {
		res.clearCookie('authenticate');
		return res.json({ url: '/' });;
	}
);

export default router;
