export interface IAuthResponse {
	accessToken: string;
	user: IUser;
}

export interface IUser {
	_id: string;
	name: string;
	email: string;
	avatar: string;
}
