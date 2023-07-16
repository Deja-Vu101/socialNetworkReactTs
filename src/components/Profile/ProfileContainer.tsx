import React, { useEffect } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { StoreType } from "../../redux/redux-store";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface OwnPropsType {
  store: StoreType;
}

const ProfileContainer: React.FC<OwnPropsType> = ({ store }) => {
  const { profile, isFetching } = useTypedSelector(
    (state) => state.profilePage
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    userProfile(dispatch, Number(id));
  }, []);

  console.log(profile, 'profile');
  
  
  return (
    <div className="profile">
      {isFetching || Object.keys(profile).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <ProfileInfo profile = {profile}/>
          {/*<MyPostsContainer  wdwd = {store.}/>*/}
        </div>
      )}
    </div>
  );
};

export default ProfileContainer;
