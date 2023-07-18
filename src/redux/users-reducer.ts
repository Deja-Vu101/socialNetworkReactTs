import axios from "axios";
import { UserType } from "../types/types";
import { Dispatch } from "redux";
import { InferActionsType } from "./redux-store";

export const APP_NAME = "first-app/my-app/src/redux";

const SET_FRIENDS = `${APP_NAME}/users-reducer/setFriendsAC` as const;
const SET_USERS = `${APP_NAME}/users-reducer/SET_USERS` as const;
const PAGE_WALK = `${APP_NAME}/users-reducer/PAGE_WALK` as const;
const TOGGLE_IS_FETCHING =
  `${APP_NAME}/users-reducer/TOGGLE_IS_FETCHING` as const;

let initialState = {
  users: [] as Array<UserType>,
  currentPage: 1 as number,
  isFetching: false,
  friends: [] as Array<UserType>,
};

type InitialStateType = typeof initialState;

type ActionsType = InferActionsType<typeof actions>;

export const actions = {
  setFriendsAC: (friends: Array<UserType>) => ({ type: SET_FRIENDS, friends }),
  setUsersAC: (users: Array<UserType>) => ({ type: SET_USERS, users }),
  pageWalkAC: (page: number) => ({ type: PAGE_WALK, page }),
  toggleIsFetchingAC: (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }),
};

const usersReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case PAGE_WALK: {
      return {
        ...state,
        currentPage: (state.currentPage = action.page),
      };
    }

    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_FRIENDS: {
      return { ...state, friends: [...state.friends, ...action.friends] };
    }
    default:
      return state;
  }
};

type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export const fetchUsers = (currentPage: number) => {
  return async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch(actions.toggleIsFetchingAC(true));
      const res = await axios.get<GetItemsType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`,
        { withCredentials: true }
      );
      dispatch(actions.setUsersAC(res.data.items));
      dispatch(actions.toggleIsFetchingAC(false));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchFriends = () => {
  return async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch(actions.toggleIsFetchingAC(true));

      for (let index = 1; index < 6; index++) {
        const res = await axios.get<GetItemsType>(
          `https://social-network.samuraijs.com/api/1.0/users?page=${index}`,
          { withCredentials: true }
        );
        dispatch(actions.setFriendsAC(res.data.items));
      }
      dispatch(actions.toggleIsFetchingAC(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUserFollow = (id: number) => {
  return async (dispatch: Dispatch<ActionsType>) => {
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
  return async (dispatch: Dispatch<ActionsType>) => {
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

export const searchUser = (searchQuery: string) => {
  return async (dispath: Dispatch<ActionsType>) => {
    try {
      dispath(actions.toggleIsFetchingAC(true));
      const res = await axios.get(
        `https://social-network.samuraijs.com/api/1.0/users`,
        {
          params: {
            term: searchQuery,
          },
        }
      );
      dispath(actions.toggleIsFetchingAC(false));
      dispath(actions.setUsersAC(res.data.items));
    } catch (error) {
      console.log(error);
    }
  };
};

export default usersReducer;
