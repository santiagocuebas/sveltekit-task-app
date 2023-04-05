import jwt from 'jsonwebtoken';
import { SECRET } from '../config.js';
export const isLoggedIn = (req, res, next) => {
    const token = req.cookies['authenticate'];
    if (token === undefined)
        return res.status(401).json({ message: 'No token' });
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded.user;
        return next();
    }
    catch (err) {
        console.error(err);
        return res.status(401).json({ message: 'Invalid token' });
    }
};
export const isNotLoggedIn = (req, res, next) => {
    const token = req.cookies['authenticate'];
    if (token === undefined)
        return next();
    try {
        jwt.verify(token, SECRET);
        return res.status(401).json({ message: 'Logged' });
    }
    catch {
        return next();
    }
};
