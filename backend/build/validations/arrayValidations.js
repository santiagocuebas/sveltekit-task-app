import { body, param } from 'express-validator';
import { isValidEmail, isMatchPassword, isRegisterUser, isCorrectPassword, isValidLink } from './customValidators.js';
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
export const arrayLink = [
    body('title', 'Invalid title')
        .exists({ checkFalsy: true }).bail()
        .isString().bail()
        .isLength({ min: 5, max: 60 })
        .customSanitizer((value) => {
        const firstLetter = value.at(0);
        return value.replace(firstLetter, firstLetter.toUpperCase());
    }),
    body('url', 'Invalid url')
        .exists({ checkFalsy: true }).bail()
        .isURL().bail()
        .isLength({ max: 255 }),
    body('description', 'Invalid description')
        .isString().bail()
        .isLength({ max: 255 })
];
export const arrayEditLink = [
    param('id')
        .exists({ checkFalsy: true }).bail()
        .custom(isValidLink),
    body('title', 'Invalid title')
        .exists({ checkFalsy: true }).bail()
        .isString().bail()
        .isLength({ min: 5, max: 60 })
        .customSanitizer((value) => {
        const firstLetter = value.at(0);
        return value.replace(firstLetter, firstLetter.toUpperCase());
    }),
    body('url', 'Invalid url')
        .exists({ checkFalsy: true }).bail()
        .isURL().bail()
        .isLength({ max: 255 }),
    body('description', 'Invalid description')
        .isString().bail()
        .isLength({ max: 255 })
];