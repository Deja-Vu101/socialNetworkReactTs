import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../redux/auth-reducer";

const HeaderContainer = () => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.auth.login)
  const isAuth = useSelector(state => state.auth.isAuth)

  useEffect(()=>{
    authMe(dispatch)
    //axios
    //.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
    //.then((res) => {
    //  if (res.data.resultCode === 0) {
    //    const {id, email, login} = res.data.data
    //    dispatch(setUserDataAC(id, email, login))
    //  }
    //})
  }, [])

 

  return (
    <header>
      <Header login = {login} isAuth = {isAuth}/>
    </header>
  );
};

export default HeaderContainer;
