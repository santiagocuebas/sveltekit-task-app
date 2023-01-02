import { Request, Response, NextFunction } from 'express';
import { User as _User } from './models/index.js';

declare global {
	namespace Express {
		interface User extends _User {}
	}
}

export interface IUser {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	createdAt: Date;
}

export interface ILink {
	id: string;
	title: string;
	url: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}

export type Direction = (
	req: Request,
	res: Response,
	next: NextFunction
) => void;
