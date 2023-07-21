import React from "react";
import Header from "./Header";


interface OwnProps {
  isAuth: boolean;
  login: string | null;
}

const HeaderContainer: React.FC<OwnProps> = ({ isAuth, login }) => {
  return (
    <header>
      <Header login={login} isAuth={isAuth} />
    </header>
  );
};

export default HeaderContainer;
