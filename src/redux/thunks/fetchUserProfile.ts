import { Dispatch } from "redux";
import { ProfileActionTypes, actionsProfile } from "../profile-reducer";
import axios from "axios";
import { ProfileType } from "../../types/types";

export const fetchUserProfile = (id?: number) => {
	return async (dispatch: Dispatch<ProfileActionTypes>) => {
	  try {
		 dispatch(actionsProfile.toggleIsFetchingAC(true));
		 const res = await axios.get<ProfileType>(
			`https://social-network.samuraijs.com/api/1.0/profile/${id ? id : 2}`,
			{
			  withCredentials: true,
			}
		 );
		 dispatch(actionsProfile.setUserProfileAC(res.data));
		 dispatch(actionsProfile.toggleIsFetchingAC(false));
	  } catch (error) {
		 console.log(error);
	  }
	};
 };