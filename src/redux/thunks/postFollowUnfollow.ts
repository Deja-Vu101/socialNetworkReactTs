import { Dispatch } from "redux";
import { UsersActionTypes } from "../users-reducer";
import axios from "axios";


export const postUserFollow = (id: number) => {
	return async (dispatch: Dispatch<UsersActionTypes>) => {
	  try {
		 await axios.post(
			`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
			{ followed: true },
			{ withCredentials: true }
		 );
	  } catch (error) {
		 console.log(error);
	  }
	};
 };
 export const postUserUnfollow = (id: number) => {
	return async (dispatch: Dispatch<UsersActionTypes>) => {
	  try {
		 await axios.delete(
			`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
			{ withCredentials: true }
		 );
	  } catch (error) {
		 console.log(error);
	  }
	};
 };