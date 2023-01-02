import { CustomValidator } from 'express-validator';
import { matchPassword } from '../libs/bcrypt.js';
import { User } from '../models/index.js';

export const isValidEmail: CustomValidator = async (email: string) => {
	const user = await User.findOneBy({ email });

	if (user !== null) throw new Error('Email already in use');

	return true;
};

export const isMatchPassword: CustomValidator = async (value, { req }) => {
	if (value !== req.body.password) throw new Error('Password not match');

	return true;
};

export const isRegisterUser: CustomValidator = async (email: string) => {
	const user = await User.findOneBy({ email });

	if (user === null) throw new Error('The user no exists');

	return true;
};

export const isCorrectPassword: CustomValidator = async (email: string, { req }) => {
	const user = await User.findOneBy({ email });

	if (user === null) throw new Error('Password not match');
	
	const match = await matchPassword(req.body.password, user.password);

	if (!match) throw new Error('Password not match');

	return true;
};
