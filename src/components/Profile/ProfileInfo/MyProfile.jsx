import { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  myProfile,
  setUserProfileAC,
  toggleIsFetchingAC,
} from "../../../redux/profile-reducer";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";

const MyProfile = (props) => {
  const profile = useSelector((state) => state.profilePage.profile);
  const posts = useSelector((state) => state.profilePage.users);
  const isFetching = useSelector((state) => state.profilePage.isFetching);
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch();

  
  useEffect(() => {
    myProfile(dispatch);
  }, [dispatch]);

  if (!isAuth) return <Navigate to={'/login'} />
  return (
    <>
	
      {isFetching ? <h2>LOADING... </h2> : <ProfileInfo {...profile} />}

      <MyPostsContainer {...posts} />
    </>
  );
};

export default MyProfile;
