import { Dispatch } from "redux";
import { GetItemsType, UsersActionTypes, actionsUsers } from "../users-reducer";
import axios from "axios";
import { UserType } from "../../types/types";

export const fetchFriends = () => {
	return async (dispatch: Dispatch<UsersActionTypes>) => {
	  try {
		 dispatch(actionsUsers.toggleIsFetchingAC(true));
 
		 const res = await axios.get<GetItemsType>(
			`https://social-network.samuraijs.com/api/1.0/users?count=${100}`,
			{ withCredentials: true }
		 );
		 const friends = res.data.items.filter(
			(friend) => friend.followed
		 ) as UserType[];
		 dispatch(actionsUsers.setFriendsAC(friends));
 
		 dispatch(actionsUsers.toggleIsFetchingAC(false));
	  } catch (error) {
		 console.log(error);
	  }
	};
 };