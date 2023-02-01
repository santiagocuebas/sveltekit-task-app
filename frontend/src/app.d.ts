import { IUser } from './lib/global.js';

declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare global {
	namespace App {
		interface Locals {
			user: IUser;
		}
	}
}
