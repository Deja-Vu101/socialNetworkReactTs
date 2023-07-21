import { Dispatch } from "react";
import { AuthActionTypes, actionsAuth } from "../auth-reducer";
import { AuthMeType } from "../../types/types";
import axios from "axios";

export const authMe = () => {
	return async (dispatch: Dispatch<AuthActionTypes>) => {
	  try {
		 const res = await axios.get<AuthMeType>(
			"https://social-network.samuraijs.com/api/1.0/auth/me",
			{ withCredentials: true }
		 );
		 if (res.data.resultCode === 0) {
			const { email, id, login } = res.data.data;
			dispatch(actionsAuth.setUserDataAC(id, email, login));
		 }
	  } catch (error) {
		 console.log(error);
	  }
	};
 };