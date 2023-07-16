import axios from "axios";
import { ProfileType, UsersType } from "../types/types";
import { InferActionsType } from "./redux-store";
import { APP_NAME } from "./users-reducer";
import { Dispatch } from "redux";


const ADD_POST = `${APP_NAME}/profile-reducer/ADD_POST` as const;
const UPDATE_NEW_POST_CHANGE = `${APP_NAME}/profile-reducer/UPDATE_NEW_POST_CHANGE` as const;
const SET_USER_PROFILE = `${APP_NAME}/profile-reducer/SET_USER_PROFILE` as const;
const TOGGLE_IS_FETCHING = `${APP_NAME}/profile-reducer/TOGGLE_IS_FETCHING` as const;

let initialState = {
  users: [
    {
      author: "user1",
      message: "qwerty111",
    },
    {
      author: "user2",
      message: "qwerty2",
    },
    {
      author: "user3",
      message: "qwerty3",
    },
    {
      author: "user4",
      message: "qwerty4",
    },
    {
      author: "user5",
      message: "qwerty5",
    },
  ] as Array<UsersType>,
  newPostText: "Hi, how are you?",
  profile: {} as ProfileType,
  isFetching: false,
};

type InitialStateType = typeof initialState;

type ActionsType = InferActionsType<typeof actions>

export const actions = {
  addPostActionCreator: (text: string) => ({type: ADD_POST, usersText: text}),
  updateNewPostChangeActionCreator: (text: string) => ({type: UPDATE_NEW_POST_CHANGE, newText: text}),
  toggleIsFetchingAC: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}),
  setUserProfileAC: (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile})
}

const profileReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        author: "Saimon",
        message: action.usersText,
      };
      return {
        ...state,
        users: [...state.users, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_CHANGE: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default: {
      return state;
    }
  }
};




export const myProfile = (dispatch: Dispatch<ActionsType>) => {
  dispatch(actions.toggleIsFetchingAC(true));
  axios
    .get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${2}`, {
      withCredentials: true,
    })
    .then((response) => {
      dispatch(actions.toggleIsFetchingAC(false));
      dispatch(actions.setUserProfileAC(response.data));
    });
};


export const userProfile = (dispatch: Dispatch<ActionsType>, id: number) => {
  dispatch(actions.toggleIsFetchingAC(true));
  axios
    .get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
    .then((response) => {
      dispatch(actions.toggleIsFetchingAC(false));
      dispatch(actions.setUserProfileAC(response.data));
    });
};

export default profileReducer;
