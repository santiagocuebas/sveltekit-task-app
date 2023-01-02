import { Router } from 'express';
import passport from 'passport';
import { validate } from '../middlewares/validation.js';
import { arraySignup, arrayLogin } from '../validations/arrayValidations.js';

const router = Router();

router.post(
	'/signup',
	validate(arraySignup),
	passport.authenticate('signup'),
	(req, res) => {
		console.log(req.user);
		res.json(req.user);
	}
);

router.post(
	'/login',
	validate(arrayLogin),
	passport.authenticate('login'),
	(req, res) => {
		console.log(req.user);
		res.json(req.user);
	}
);

router.post(
	'/logout',
	(req, res, next) => {
		req.logout(err => {
			if (err) return next();
			res.json({ url: '/' });
		});
	}
);

export default router;
