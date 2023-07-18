import { NavLink } from "react-router-dom";
import { UserType } from "../../types/types";
import NO_AVATAR from "../../img/no-avatar.webp";
import ButtonFollowUnfollow from "../ButtonFollowUnfollow";

interface OwnProps {
  friends: UserType;
}

const Friends: React.FC<OwnProps> = ({
  friends: { followed, id, name, photos, status },
}) => {
  return (
    <div>
      <NavLink className="user" to={`/profile/${id}`}>
        <div className="wrapperAvatarAndBtn">
          <div className="user_avatar">
            <img
              className="user_avatar_img"
              src={photos?.small != null ? photos?.small : NO_AVATAR}
              alt="avatar user"
            />
          </div>

          <ButtonFollowUnfollow followed={followed} id={id} />
        </div>

        <div className="user-card">
          <div className="wrapperFullNameAndStatus">
            <div className="user-card_fullName">
              <span className="fullName">{name}</span>
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
  );
};

export default Friends;
