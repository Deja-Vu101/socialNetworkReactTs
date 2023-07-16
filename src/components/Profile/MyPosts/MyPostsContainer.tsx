
import MyPosts from "./MyPosts";
import React from "react";
import { UsersType } from "../../../types/types";

interface OwnPropsType {
  users: UsersType
  newPostText: string
}

const MyPostsContainer: React.FC<OwnPropsType> = ({newPostText, users}) => {
  return <MyPosts users ={users} newPostText = {newPostText}/>;
};

export default MyPostsContainer;

//let mapStateToProps = (state) => {
//  return {
//    users: state.profilePage.users,
//    newPostText: state.profilePage.newPostText,
//  }
//}

//let mapDispatchToProps = (dispatch) => {
//  return {
//    updateNewPostChange: (text) => {
//      dispatch(actions.updateNewPostChangeActionCreator(text));
//    },
//    addPost: (text) => {
//      dispatch(actions.addPostActionCreator(text));
//    }
//  }
//}
//let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

//export default MyPostsContainer;
