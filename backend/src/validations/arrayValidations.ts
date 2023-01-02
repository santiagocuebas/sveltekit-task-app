import { body } from 'express-validator';
import {
	isValidEmail,
	isMatchPassword,
	isRegisterUser,
	isCorrectPassword
} from './customValidators.js';

export const arraySignup = [
	body('firstname', 'Invalid field')
		.exists({ checkFalsy: true }).bail()
		.isString().bail()
		.isLength({ max: 50 }),
	body('lastname', 'Invalid field')
		.exists({ checkFalsy: true }).bail()
		.isString().bail()
		.isLength({ max: 50 }),
	body('email', 'Invalid email')
		.exists({ checkFalsy: true }).bail()
		.isEmail().normalizeEmail().bail()
		.isLength({ max: 100 }).bail()
		.custom(isValidEmail),
	body('password', 'Invalid password')
		.exists({ checkFalsy: true }).bail()
		.isString().bail()
		.isLength({ min: 8, max: 40 }).bail()
		.matches(/[0-9]/).withMessage('Password must contains a number, a lower letter, a upper letter and a special character'),
	body('confirmPassword')
		.custom(isMatchPassword)
];

export const arrayLogin = [
	body('email', 'Invalid email')
		.exists({ checkFalsy: true }).bail()
		.custom(isRegisterUser),
	body('password', 'Invalid password')
		.exists({ checkFalsy: true }).bail()
		.custom(isCorrectPassword)
];
