import React, {useEffect} from "react";
import sendMessage from "../../img/sendMessage.png";
import DialogsItem from "./DialogsItemAndMessage/DialogsItem";
import { Navigate } from "react-router-dom";
import List from "../List";
import { DialogType, MessageType } from "../../types/types";
import { DialogsPageType } from "../../redux/dialogs-reducer";
import MessageItem from "./DialogsItemAndMessage/MessageItem";



export type OwnPropsType = {
  dialogsPage: DialogsPageType;
  textareaValue: string
  onMessageChange: (text: string) => void
  onAddMessage: () => void
  //isAuth: InitialAuthStateType,
  //sendMessage: (text: string) => void,
  //messageChange: (text: string) => void
};

const Dialogs: React.FC<OwnPropsType> = ({
  dialogsPage: { dialogsData, messagesData, newMessageText },
  onMessageChange,
  textareaValue,
  onAddMessage
}) => {
  //if (!props.isAuth) return <Navigate to={'/login'} />

  //let state = props.dialogsPage;

  //let dialogsElements = state.dialogsData.map((d) => (
  //  <DialogsItem name={d.name} id={d.id} />
  //));
  //let messagesElements = state.messagesData.map((m) => (
  //  <Message message={m.message} />
  //));

  //let newMessageText = state.newMessageText;

  //  let onAddMessage = () => {
  //    props.sendMessage(newMessageText);
  //  }

  //  let onMessageChange = (text: string) => {

  //    props.messageChange(text);
  //  }

 

  return (
    <>
      <div className="dialogs">
        <div className="dialogs-items">
          <List
            items={dialogsData}
            renderItem={(dialogsData: DialogType) => (
              <DialogsItem
                name={dialogsData.name}
                id={dialogsData.id}
                key={dialogsData.id}
              />
            )}
          />
        </div>

        <div className="messages">
          <List
            items={messagesData}
            renderItem={(messagesData: MessageType) => (
              <MessageItem
                key={messagesData.id}
                message={messagesData.message}
              />
            )}
          />
        </div>
      </div>

      <div className="areaText">
        <div className="my-message">
          <textarea placeholder="Your message"  
          className='my-message-textarea' 
          rows={2} cols={100} value = {textareaValue}  
          onChange = {(e) => onMessageChange(e.target.value)} />
          <button className="btnSendMessage" onClick = {onAddMessage}> <img className="sendMessage" src={sendMessage} alt="Send Message" /> </button>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
