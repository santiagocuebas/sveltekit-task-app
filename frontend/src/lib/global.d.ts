export interface IUser {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	createdAt: Date;
}

export interface ILink {
	id: string;
	authorId: string;
	title: string;
	url: string;
	description: string;
	createdAt: Date;
}

export interface ResponseData {
	[index: string]: DataItem | ILink | string | boolean;
}

export interface DataItem {
	[index: string]: string | boolean | number;
}
