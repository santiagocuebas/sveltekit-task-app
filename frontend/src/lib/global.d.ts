export interface IUser {
	[index: string]: string;
}

export interface ResponseData {
	[index: string]: DataItem | string | boolean;
}

export interface DataItem {
	[index: string]: string | boolean | number;
}
