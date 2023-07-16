import React from "react";
import sendMessage from "../../img/sendMessage.png";
import DialogsItem from "./DialogsItemAndMessage/DialogsItem";
import Message from "./DialogsItemAndMessage/Message";
import { Navigate } from "react-router-dom";
import { InitialStateType } from "../../redux/dialogs-reducer";
import { InitialAuthStateType } from "../../redux/auth-reducer";



export type OwnPropsType = {
  dialogsPage: InitialStateType,
  isAuth: InitialAuthStateType,
  sendMessage: (text: string) => void,
  messageChange: (text: string) => void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
  
  if (!props.isAuth) return <Navigate to={'/login'} />

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageText = state.newMessageText;

     
    let onAddMessage = () => {
      props.sendMessage(newMessageText);
    }

    let onMessageChange = (text: string) => {
      
      props.messageChange(text);
    }
   
  return (<>
    <div className="dialogs">
      <div className="dialogs-items">{dialogsElements}</div>

      <div className="messages">{messagesElements}</div>
    </div>
    <div className="areaText">
    <div className="my-message">
    <textarea placeholder="Your message"  className='my-message-textarea' rows={2} cols={100} value = {newMessageText}  onChange = {(e) => onMessageChange(e.target.value)} />
    <button className="btnSendMessage" onClick = {onAddMessage}> <img className="sendMessage" src={sendMessage} alt="Send Message" /> </button>
    </div>
    </div>
    </>
  );
};


export default Dialogs;
