import axios from "axios";
import { UserType } from "../types/types";
import { Dispatch } from "redux";
import { InferActionsType } from "./redux-store";

export const APP_NAME = "first-app/my-app/src/redux";

const FOLLOW = `${APP_NAME}/users-reducer/FOLLOW` as const;
const UNFOLLOW = `${APP_NAME}/users-reducer/UNFOLLOW` as const;
const SET_USERS = `${APP_NAME}/users-reducer/SET_USERS` as const;
const PAGE_WALK = `${APP_NAME}/users-reducer/PAGE_WALK` as const;
const TOGGLE_IS_FETCHING =
  `${APP_NAME}/users-reducer/TOGGLE_IS_FETCHING` as const;

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5 as number,
  currentPage: 1 as number,
  isFetching: false,
};

type InitialStateType = typeof initialState;

type ActionsType = InferActionsType<typeof actions>;

export const actions = {
  followAC: (userId: number) => ({ type: FOLLOW, userId }),
  unFollowAC: (userId: number) => ({ type: UNFOLLOW, userId }),
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
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case PAGE_WALK: {
      return {
        ...state,
        currentPage: (state.currentPage = action.page),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
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

export default usersReducer;
