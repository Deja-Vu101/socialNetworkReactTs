import React from "react";
import profileAvatar from "../../../img/profile-avatar.png";
import NO_AVATAR from "../../../img/no-avatar.webp";
import { ProfileType } from "../../../types/types";

interface OwnPropsType {
  profile: ProfileType;
}

const ProfileInfo: React.FC<OwnPropsType> = ({
  profile: {
    fullName,
    //contacts,
    lookingForAJob,
    lookingForAJobDescription,
    userId,
    aboutMe,
    photos,
  },
}) => {
  return (
    <>
      <img
        className="img-main"
        src={photos.large || (photos.small ? photos.small : NO_AVATAR)}
        alt="wqwe"
      />

      <div className="my-user">
        <img
          className="img-main"
          src={photos.large || (photos.small ? photos.small : NO_AVATAR)}
          alt="wqwe"
        />

        <div className="profile-information">
          {fullName ?? <h2>{fullName}</h2>}
          {aboutMe ? <p>About me: {aboutMe}</p> : null}
          {lookingForAJob ? (
            <p>Job: {lookingForAJobDescription}</p>
          ) : (
            <p>Job: not looking for a job</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
