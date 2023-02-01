import { CustomValidator } from 'express-validator';
import { matchPassword } from '../libs/bcrypt.js';
import { User, Link } from '../models/index.js';

export const isValidEmail: CustomValidator = async (email: string) => {
	const user = await User.findOneBy({ email });
	console.log(email);

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

export const isCorrectPassword: CustomValidator = async (value: string, { req }) => {
	const email = req.body.email;
	
	const user = await User.findOneBy({ email });

	if (user === null) throw new Error('Password not match');
	
	const match = await matchPassword(value, user.getPassword);

	if (!match) throw new Error('Password not match');

	return true;
};

export const isValidLink: CustomValidator = async (id: string) => {
	const link = await Link.findOneBy({ id });

	if (link === null) throw new Error('The link not exist');

	return true;
}; 
