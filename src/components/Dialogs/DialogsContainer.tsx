import Dialogs from "./Dialogs";
import { DialogsPageType, actions } from "../../redux/dialogs-reducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface OwnPropsType {
  dialogsPage: DialogsPageType;
}

const DialogsContainer: React.FC<OwnPropsType> = ({ dialogsPage }) => {
  const dispatch = useDispatch();
  const [textareaValue, setTextareaValue] = useState(
    dialogsPage.newMessageText
  );

  useEffect(() => {
    setTextareaValue(dialogsPage.newMessageText);
  }, [dialogsPage.newMessageText]);

  const onMessageChange = (text: string) => {
    setTextareaValue(text);
    dispatch(actions.updateNewMessageChangeAC(text));
  };
  const onAddMessage = () => {
    dispatch(actions.addMessageAC(textareaValue));
  };
  return (
    <>
      <Dialogs
        dialogsPage={dialogsPage}
        onMessageChange={onMessageChange}
        textareaValue={textareaValue}
        onAddMessage={onAddMessage}
      />
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
