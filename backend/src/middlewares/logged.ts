import { Direction } from '../global.js';

export const isLoggedIn: Direction = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	return res.json({ url: '/' });
};

export const isNotLoggedIn: Direction = (req, res, next) => {
	if (!req.isAuthenticated()) return next();
	return res.json({ url: req.user.id });
};
