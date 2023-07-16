import { connect } from "react-redux";
import { actions } from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (text: string) => {
      dispatch(actions.addMessageActionCreator(text));
    },
    messageChange: (text: string) => {
      dispatch(actions.updateNewMessageChangeActionCreator(text));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
