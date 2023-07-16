import { DialogType, MessageType } from "../types/types";
import { InferActionsType } from "./redux-store";
import { APP_NAME } from "./users-reducer";

const ADD_MESSAGE = `${APP_NAME}/dialogs-reducer/ADD-MESSAGE`as const;
const UPDATE_NEW_MESSAGE_CHANGE = `${APP_NAME}/dialogs-reducer/UPDATE_NEW_MESSAGE_CHANGE`as const;



let initialState = {
	messagesData: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "Yo" },
		{ id: 4, message: "Yo" },
		{ id: 5, message: "Yo" },
	] as Array<MessageType>,
	dialogsData: [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Sveta" },
		{ id: 3, name: "Sasha" },
		{ id: 4, name: "Maks" },
		{ id: 5, name: "Denis" },
		{ id: 6, name: "Andrey" },
	] as Array<DialogType>,
	newMessageText: ""
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch(action.type){
		case ADD_MESSAGE:{
			let newMessage = {
				id: 6,
				message: action.messagesData,
			};
			return {
				...state,
				messagesData: [...state.messagesData, newMessage],
				newMessageText: ''
			}
		}
		case UPDATE_NEW_MESSAGE_CHANGE:{
			return  {
				...state,
				newMessageText: action.newMessage
			};
		}
		default:
			return state;
	}
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
	addMessageActionCreator: (text: string) => ({type: ADD_MESSAGE, messagesData: text}),
	updateNewMessageChangeActionCreator: (text: string) => ({type: UPDATE_NEW_MESSAGE_CHANGE, newMessage: text})
}


export default dialogsReducer;