import "./App.css";
import React from "react";
import Header from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/ProfileContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MyProfile from "./components/Profile/ProfileInfo/MyProfile";
import LoginPage from "./components/Login/LoginPage";
import { StoreType } from "./redux/redux-store";

type OwnPropsType = {
  store: StoreType;
};

const App: React.FC<OwnPropsType> = (props) => {
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
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route
                  path="/profile/:id"
                  element={<Profile store={props.store} />}
                />
                <Route path="/users" element={<UsersContainer />} />
                <Route
                  path="/profile/"
                  element={<MyProfile store={props.store} />}
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
