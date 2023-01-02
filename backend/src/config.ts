import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT as string;

export const SECRET = process.env.SECRET as string;

export const DB_HOST = process.env.DB_HOST as string;

export const DB_PORT = process.env.DB_PORT as string;

export const DB_USER = process.env.DB_USER as string;

export const DB_PASS = process.env.DB_PASS as string;

export const DB_DATABASE = process.env.DB_DATABASE as string;
