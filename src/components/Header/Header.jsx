import React from "react";
import logo from "../../img/pngegg.png";
import { NavLink } from "react-router-dom";

const Header = ({login, isAuth}) => {

 

  return (
    <>	
      <a href="#!">
        <img className="logoApp" src={logo} alt="logo header"></img>
      </a>
      
		 {!isAuth ? <NavLink className="login" to={'/login'}>LOGIN</NavLink> : <span className="login">{login}</span> }
    </>
  );
};

export default Header;
