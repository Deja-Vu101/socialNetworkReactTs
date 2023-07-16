import axios from "axios";
import React, { useEffect } from "react";
// @ts-ignore
import NO_AVATAR from "../../img/no-avatar.webp";
import { NavLink} from "react-router-dom";
import { getUsers } from "../../redux/users-reducer";
import { useDispatch } from "react-redux";
import { UserType} from "../../types/types";

type PropsType = {
  currentPage: number
  totalCount: number
  pageSize: number
  isFetching: boolean
  pageWalk: (page: number) => void
  users: Array<UserType>
  unFollow: (usersId: number) => void
  follow: (usersId: number) => void
}

const Users: React.FC<PropsType> = ({currentPage, totalCount, pageSize, isFetching, pageWalk, users, unFollow, follow}) => {

  const dispatch = useDispatch()
  useEffect(() => {
    getUsers(dispatch, currentPage)
  }, [currentPage]);

  const pagesCount = totalCount / pageSize;
  let pages = [];
  for (let index = 0; index <= pagesCount; index++) {
    pages.push(index);
  }

  return (
    <>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        pages.map((p) => (
          <span
            className={currentPage == p + 1 ? "currentPage" : "page"}
            key={p}
            onClick={() => pageWalk(p + 1)}
          >
            {p + 1}
          </span>
        ))
      )}
      {users.map((u, index) => (
        <div key={index}>
          <NavLink className="user" to={`/profile/${u.id}`} >
            <div className="wrapperAvatarAndBtn">
              <div className="user_avatar">
                <img
                  className="user_avatar_img"
                  src={u.photos.small != null ? u.photos.small : NO_AVATAR}
                  alt="avatar user"
                />
              </div>

              {/*<div className="user_btn">
                {u.followed ? (
                  <button
                    onClick={() => {
                      axios
                      .get('')
                      unFollow(u.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      follow(u.id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>*/}
            </div>

            <div className="user-card">
              <div className="wrapperFullNameAndStatus">
                <div className="user-card_fullName">
                  <span className="fullName">
                    {index + 1}
                    {u.name}
                  </span>
                </div>

                <div className="user-card_status">
                  <span className="status">{u.status}</span>
                </div>
              </div>

              <div className="user-card_location">
                <p className="user-card_location_country">u.location.country</p>
                <p className="user-city">u.location.city</p>
              </div>
            </div>
          </NavLink>
          <div className="user_btn">
                {u.followed ? (
                  <button
                    onClick={() => {
                      axios
                      .get('')
                      unFollow(u.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      follow(u.id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
        </div>
      ))}
    </>
  );
};

export default Users;
