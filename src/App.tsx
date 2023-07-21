import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MyProfile from "./components/Profile/ProfileInfo/MyProfile";
import LoginPage from "./components/Login/LoginPage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { useTypedSelector } from "./hooks/useTypedSelector";
import FriendsContainer from "./components/Friends/FriendsContainer";
import { useTypedDispatch } from "./hooks/useTypedDispatch/useTypedDispatch";

const App: React.FC = () => {
  const { authMe } = useTypedDispatch();
  const { auth, dialogsPage, profilePage } = useTypedSelector((state) => state);

  useEffect(() => {
    authMe();
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Header isAuth={auth.isAuth} login={auth.login} />

          <div className="wrapper-center-app">
            <NavBar />

            <main className="main-app">
              <Routes>
                <Route
                  path="/dialogs/"
                  element={<DialogsContainer dialogsPage={dialogsPage} />}
                />
                <Route
                  path="/profile/:id"
                  element={<ProfileContainer profilePage={profilePage} />}
                />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/friends" element={<FriendsContainer />} />
                <Route
                  path="/profile/"
                  element={<MyProfile myProfilePage={profilePage} />}
                />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
