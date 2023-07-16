import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

//import sideBarReducer from "./sideBar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, composeWithDevTools());


export type StoreType = typeof reducers;
export type RootState = ReturnType<StoreType>;

export type InferActionsType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
// @ts-ignore
window.store = store;

export default store;
