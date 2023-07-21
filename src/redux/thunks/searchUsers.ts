import { Dispatch } from "redux";
import { GetItemsType, UsersActionTypes, actionsUsers } from "../users-reducer";
import axios from "axios";

export const searchUser = (searchQuery: string) => {
	return async (dispath: Dispatch<UsersActionTypes>) => {
	  try {
		 dispath(actionsUsers.toggleIsFetchingAC(true));
		 const res = await axios.get<GetItemsType>(
			`https://social-network.samuraijs.com/api/1.0/users`,
			{
			  params: {
				 term: searchQuery,
			  },
			}
		 );
		 dispath(actionsUsers.toggleIsFetchingAC(false));
		 dispath(actionsUsers.setUsersAC(res.data.items));
	  } catch (error) {
		 console.log(error);
	  }
	};
 };