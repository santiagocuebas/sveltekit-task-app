import { matchPassword } from '../libs/bcrypt.js';
import { User, Link } from '../models/index.js';
export const isValidEmail = async (email) => {
    const user = await User.findOneBy({ email });
    console.log(email);
    if (user !== null)
        throw new Error('Email already in use');
    return true;
};
export const isMatchPassword = async (value, { req }) => {
    if (value !== req.body.password)
        throw new Error('Password not match');
    return true;
};
export const isRegisterUser = async (email) => {
    const user = await User.findOneBy({ email });
    if (user === null)
        throw new Error('The user no exists');
    return true;
};
export const isCorrectPassword = async (value, { req }) => {
    const email = req.body.email;
    const user = await User.findOneBy({ email });
    if (user === null)
        throw new Error('Password not match');
    const match = await matchPassword(value, user.getPassword);
    if (!match)
        throw new Error('Password not match');
    return true;
};
export const isValidLink = async (id) => {
    const link = await Link.findOneBy({ id });
    if (link === null)
        throw new Error('The link not exist');
    return true;
};
