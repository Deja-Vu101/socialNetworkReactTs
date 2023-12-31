export interface DialogType {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  message: string;
};
export type UsersType = {
  author: string;
  message: string;
};
interface ContactsType{
  [key: string]: string | undefined;
};
//export type ContactsType = {
//  github: string;
//  vk: string;
//  facebook: string;
//  instagram: string;
//  twitter: string;
//  website: string;
//  youtube: string;
//  mainLink: string;
//};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  aboutMe: string
  photos: PhotosType
};
export type PhotosType = {
  small: string;
  large: string;
};
export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};
export type AuthMeType = {
	messages: Array<string>
	data:{
		id:number
		email: string
		login: string
	}
	resultCode: 0 | 1
}

export interface IProfilePage{
  users: UsersType[];
  newPostText: string;
  profile: ProfileType;
  isFetching: boolean;
}

//
export type ChatMessageType = {
  message: string,
  photo: string,
  userId: number,
  userName: string,
}