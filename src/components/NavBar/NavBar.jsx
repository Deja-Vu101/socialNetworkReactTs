import React from "react";
import { NavLink } from "react-router-dom";
//import FriendsOnline from "./FriendsOnline";

const NavBar = (props) => {
  return (
    <div className="navWrapper">
      <nav className="nav-leftBar">
        <div className="nav-leftBar-item">
          <NavLink to="/profile">Profile</NavLink>
        </div>

        <div className="nav-leftBar-item">
          <NavLink to="/dialogs">Messages</NavLink>
        </div>

        <div className="nav-leftBar-item">
          <NavLink to="/news">News</NavLink>
        </div>

        <div className="nav-leftBar-item">
          <NavLink to="/users">Users</NavLink>
        </div>
        <div className="nav-leftBar-item">
          <NavLink to="/friends">Friends</NavLink>
        </div>

        <div className="nav-leftBar-item">
          <NavLink to="/setings">Settings</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
