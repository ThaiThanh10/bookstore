import { message } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { DATA_PAGE_1 } from "../website/pages/UIHomepage/DATA_PAGE_1";
export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [count, setCount] = useState(0);
  const [listCart, setListCart] = useState([]);

  const handleLogout = () => {
    message.success("Log Out Successfully");
    setIsLogin(false);
    setUserInfo({});
    setCount(0)
    localStorage.clear()
    // localStorage.removeItem("isLogin");
    // localStorage.removeItem("userInfo");
  };
  const handleAdd = (id) => {
    const newListCart = [...listCart];
    const itemId = DATA_PAGE_1.filter((it) => it.authors.id == id);
    // setListCart([...listCart, itemId[0]]);
    // console.log("🚀itemId---->", itemId);
    const findSameItem = (element) => element.authors.id === id;
    const isSameItem = listCart.findIndex(findSameItem);
    // const isSameItem = listCart.findIndex(
    //   (element) => element.authors.id === id
    // );
    if (isSameItem === -1) {
      itemId[0].quantity = 1;
      setListCart([...listCart, itemId[0]]);
      message.success("Item has been added successfully");
    } else {
      newListCart[isSameItem].quantity += 1;
      // itemId[0].quantity += 1;
      // setListCart([...listCart]);
      setListCart(newListCart);
      message.success("Item has been added successfully");
    }
  };

  useEffect(() => {
    const _userInfo = localStorage.getItem("userInfo");
    const _isLogin = localStorage.getItem("isLogin");
    const _count = localStorage.getItem("count");
    const _listCart = localStorage.getItem("listCart");
    if (_userInfo) {
      const user = JSON.parse(_userInfo || " ");
      const list = JSON.parse(_listCart );
      setUserInfo(user);
      setIsLogin(_isLogin);
      setCount(_count);
      setListCart(list)
      return;
    }
  }, []);

  return (
    <MainContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLogin,
        setIsLogin,
        handleLogout,
        count,
        setCount,
        listCart,
        setListCart,
        handleAdd,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
