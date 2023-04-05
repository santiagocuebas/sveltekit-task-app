import { User, Link } from '../models/index.js';
export const getUserId = async () => {
    const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += validChar.charAt(Math.random() * validChar.length);
    }
    const user = await User.findOneBy({ id });
    if (user !== null)
        getUserId();
    return id;
};
export const getLinkId = async () => {
    const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let i = 0; i < 32; i++) {
        id += validChar.charAt(Math.random() * validChar.length);
    }
    const link = await Link.findOneBy({ id });
    if (link !== null)
        getLinkId();
    return id;
};
