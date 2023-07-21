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
const SET_TOTAL_COUNT_USERS =
  `${APP_NAME}/users-reducer/SET_TOTAL_COUNT_USERS` as const;

const initialState = {
  users: [] as Array<UserType>,
  currentPage: 1 as number,
  isFetching: false,
  friends: [] as Array<UserType>,
  totalCount: 0,
};

type InitialStateType = typeof initialState;

export type UsersActionTypes = InferActionsType<typeof actionsUsers>;

export const actionsUsers = {
  setFriendsAC: (friends: Array<UserType>) => ({ type: SET_FRIENDS, friends }),
  setUsersAC: (users: Array<UserType>) => ({
    type: SET_USERS,
    users,
  }),
  pageWalkAC: (page: number) => ({ type: PAGE_WALK, page }),
  toggleIsFetchingAC: (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }),
  setTotalCountUsers: (totalCount: number) => ({
    type: SET_TOTAL_COUNT_USERS,
    totalCount,
  }),
};

const usersReducer = (
  state = initialState,
  action: UsersActionTypes
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
      const newFriends = action.friends.filter(
        (friend) =>
          !state.friends.some(
            (existingFriend) => existingFriend.id === friend.id
          )
      );
      return { ...state, friends: [...state.friends, ...newFriends] };
    }
    case SET_TOTAL_COUNT_USERS:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export default usersReducer;
