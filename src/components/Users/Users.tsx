import React from "react";
// @ts-ignore
import NO_AVATAR from "../../img/no-avatar.webp";
import { NavLink} from "react-router-dom";
import {  UserType} from "../../types/types";

interface OwnPropsType extends UserType{

}

const Users: React.FC<OwnPropsType> = ({id, photos, followed, name, status}) => {



  return (
    <>
       
          
    
     
        <div key={id}>
          <NavLink className="user" to={`/profile/${id}`} >
            <div className="wrapperAvatarAndBtn">
              <div className="user_avatar">
                <img
                  className="user_avatar_img"
                  src={photos?.small != null ? photos?.small : NO_AVATAR}
                  alt="avatar user"
                />
              </div>

              <div className="user_btn">
                {followed ? (
                  <button
                    //onClick={() => {
                    //  axios
                    //  .get('')
                    //  unFollow(u.id);
                    //}}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      //follow(u.id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            </div>

            <div className="user-card">
              <div className="wrapperFullNameAndStatus">
                <div className="user-card_fullName">
                  <span className="fullName">
                    {name}
                  </span>
                </div>

                <div className="user-card_status">
                  <span className="status">{status}</span>
                </div>
              </div>

              <div className="user-card_location">
                <p className="user-card_location_country">u.location.country</p>
                <p className="user-city">u.location.city</p>
              </div>
            </div>
          </NavLink>
         
        </div>
  
    </>
  );
};

export default Users;
