import jwt from 'jsonwebtoken';
import { SECRET } from '../config.js';
export const isLoggedIn = (req, res, next) => {
    try {
        const token = req.cookies['authenticate'];
        if (token === undefined)
            throw 'Error';
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded.user;
        return next();
    }
    catch {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
export const isNotLoggedIn = (req, res, next) => {
    try {
        const token = req.cookies['authenticate'];
        if (token === undefined)
            throw 'Error';
        jwt.verify(token, SECRET);
        return res.status(401).json({ message: 'Logged' });
    }
    catch {
        return next();
    }
};
