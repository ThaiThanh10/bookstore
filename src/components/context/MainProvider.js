import { message } from "antd";
import React, { createContext, useEffect, useState } from "react";
export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const handleLogout = () => {
    message.success("Log Out Successfully");
    setIsLogin(false);
    setUserInfo({});
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userInfo");
  };

  useEffect(() => {
    const _userInfo = localStorage.getItem("userInfo");
    const _isLogin = localStorage.getItem("isLogin");
    if (_userInfo) {
      const user = JSON.parse(_userInfo || " ");
      setUserInfo(user);
      setIsLogin(_isLogin)
      return;
    }
  }, []);

  return (
    <MainContext.Provider
      value={{ userInfo, setUserInfo, isLogin, setIsLogin,handleLogout }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
