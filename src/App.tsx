import "./App.css";
import React from "react";
import Header from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MyProfile from "./components/Profile/ProfileInfo/MyProfile";
import LoginPage from "./components/Login/LoginPage";
import { RootState, StoreType } from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { useTypedSelector } from "./hooks/useTypedSelector";


const App: React.FC = () => {

  const {usersPage, auth, dialogsPage, profilePage} = useTypedSelector(state => state)

  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Header />

          <div className="wrapper-center-app">
            <NavBar />
            {/*friendsOnline = {props.friendsOnline}*/}

            <main className="main-app">
              <Routes>
                <Route path="/dialogs/" element={<DialogsContainer dialogsPage = {dialogsPage}/>} />
                <Route
                  path="/profile/:id"
                  element={<ProfileContainer profilePage={profilePage} />}
                />
                <Route path="/users" element={<UsersContainer />} />
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
