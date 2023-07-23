import Dialogs from "./Dialogs";
import { DialogsPageType, actions } from "../../redux/dialogs-reducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import List from "../List";
import DialogsWS from "./DialogsWS";



interface OwnPropsType {
  dialogsPage: DialogsPageType;
}

const DialogsContainer: React.FC<OwnPropsType> = ({ dialogsPage }) => {
  //const dispatch = useDispatch();
  //const [textareaValue, setTextareaValue] = useState(
  //  dialogsPage.newMessageText
  //);

  //useEffect(() => {
  //  setTextareaValue(dialogsPage.newMessageText);
  //}, [dialogsPage.newMessageText]);

  //const onMessageChange = (text: string) => {
  //  setTextareaValue(text);
  //  dispatch(actions.updateNewMessageChangeAC(text));
  //};
  //const onAddMessage = () => {
  //  dispatch(actions.addMessageAC(textareaValue));
  //};

  //const ws = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  
 
  //useEffect(() =>{
  //  ws.addEventListener('message', (e) =>{
  //    //setMessage(JSON.parse(e.data))
  //    console.log(e, 'data');
      
  //  })
  //}, [])
  //const dialogs = [1]
  return (
    <>
    {/*<List 
    items={dialogs}
    renderItem={(dialogs) => <DialogsWS   />}
    />*/}
    {/*{dialogs.map(d => <DialogsWS   /> )}*/}
    <div style={{height: '500px', overflow: 'scroll'}}>
       <DialogsWS />
    </div>
   
      {/*<Dialogs
        dialogsPage={dialogsPage}
        onMessageChange={onMessageChange}
        textareaValue={textareaValue}
        onAddMessage={onAddMessage}
      />*/}
    </>
  );
};

export default DialogsContainer;

//let mapStateToProps = (state: AppStateType) => {
//  return {
//    dialogsPage: state.dialogsPage,
//    isAuth: state.auth.isAuth,
//  };
//};
//let mapDispatchToProps = (dispatch: any) => {
//  return {
//    sendMessage: (text: string) => {
//      dispatch(actions.addMessageActionCreator(text));
//    },
//    messageChange: (text: string) => {
//      dispatch(actions.updateNewMessageChangeActionCreator(text));
//    },
//  };
//};

//let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

//export default DialogsContainer;
