import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config.js';
export const getSerializedCookie = (user) => {
    const token = jwt.sign({
        user: {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30
    }, SECRET);
    return serialize('authenticate', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: '/'
    });
};
