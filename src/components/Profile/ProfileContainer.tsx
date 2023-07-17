import React, { useEffect } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { useParams } from "react-router-dom";
import { IProfilePage } from "../../types/types";
import { useTypedDispatch } from "../../hooks/useTypedDispatch/useTypedDispatch";

interface OwnPropsType {
  profilePage: IProfilePage;
}

const ProfileContainer: React.FC<OwnPropsType> = ({ profilePage }) => {
  const { fetchUserProfile } = useTypedDispatch();

  const { id } = useParams();

  useEffect(() => {
    fetchUserProfile(Number(id));
  }, []);

  return (
    <div className="profile">
      {profilePage.isFetching ||
      Object.keys(profilePage.profile).length == 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <ProfileInfo profile={profilePage.profile} />
          {/*<MyPostsContainer  wdwd = {store.}/>*/}
        </div>
      )}
    </div>
  );
};

export default ProfileContainer;
