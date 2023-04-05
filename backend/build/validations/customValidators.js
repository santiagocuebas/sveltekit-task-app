import { matchPassword } from '../libs/bcrypt.js';
import { User, Link } from '../models/index.js';
export const isValidEmail = async (email) => {
    const user = await User.findOneBy({ email });
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
    const user = await User.findOneBy({ email: req.body.email });
    if (user !== null) {
        const match = await matchPassword(value, user.password);
        if (match)
            return true;
    }
    throw new Error('Password not match');
};
export const isValidTitle = async (title, { req }) => {
    const link = await Link.findOneBy({ title, authorId: req.user.id });
    if (link !== null)
        throw new Error('The title exists');
    return true;
};
export const isValidURL = async (url, { req }) => {
    const link = await Link.findOneBy({ url, authorId: req.user.id });
    if (link !== null)
        throw new Error('The url exist');
    return true;
};
export const isValidLink = async (id) => {
    const link = await Link.findOneBy({ id });
    if (link === null)
        throw new Error('The link not exist');
    return true;
};
export const isValidTitleEdit = async (title, { req }) => {
    const link = await Link.findOneBy({ title, authorId: req.user.id });
    if (link !== null && link.id !== req.params?.id) {
        throw new Error('The title exists');
    }
    return true;
};
export const isValidURLEdit = async (url, { req }) => {
    const link = await Link.findOneBy({ url, authorId: req.user.id });
    if (link !== null && link.id !== req.params?.id) {
        throw new Error('The url exist');
    }
    return true;
};
