import axios from "axios";
import { APP_NAME } from "./users-reducer";
import { AuthMeType } from "../types/types";
import { Dispatch } from "react";
import { InferActionsType } from "./redux-store";

export type AuthActionTypes = InferActionsType<typeof actionsAuth>;

const SET_USER_DATA = `${APP_NAME}/auth-reducer/SET_USER_DATA` as const;

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

export type InitialAuthStateType = typeof initialState;

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): InitialAuthStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const actionsAuth = {
  setUserDataAC: (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: { id, email, login },
  }),
};

//export const authMe = () => {
//  return async (dispatch: Dispatch<AuthActionTypes>) => {
//    try {
//      const res = await axios.get<AuthMeType>(
//        "https://social-network.samuraijs.com/api/1.0/auth/me",
//        { withCredentials: true }
//      );
//      if (res.data.resultCode === 0) {
//        const { email, id, login } = res.data.data;
//        dispatch(actionsAuth.setUserDataAC(id, email, login));
//      }
//    } catch (error) {
//      console.log(error);
//    }
//  };
//};

export default authReducer;
