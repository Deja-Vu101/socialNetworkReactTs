import { Dispatch } from "redux";
import { GetItemsType, UsersActionTypes, actionsUsers } from "../users-reducer";
import axios from "axios";

export const fetchUsers = (currentPage: number) => {
	return async (dispatch: Dispatch<UsersActionTypes>) => {
	  try {
		 dispatch(actionsUsers.toggleIsFetchingAC(true));
		 const res = await axios.get<GetItemsType>(
			`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`,
			{ withCredentials: true }
		 );
 
		 dispatch(actionsUsers.setUsersAC(res.data.items));
		 dispatch(actionsUsers.toggleIsFetchingAC(false));
		 console.log(res.data.totalCount, "total");
	  } catch (error) {
		 console.log(error);
	  }
	};
 };