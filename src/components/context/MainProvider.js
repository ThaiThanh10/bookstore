import { message } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { DATA_PAGE_1 } from "../website/pages/UIHomepage/DATA_PAGE_1";
export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [count, setCount] = useState(0);
  const [listCart, setListCart] = useState([]);
  const [formTotal, setFormTotal] = useState({
    subTotal: 0,
    shipping: 0,
    total: 0,
  });
  const [result, setResult] = useState(DATA_PAGE_1);
  const [valueInput, setValueInput] = useState();
  const [wishlist, setWishlist] = useState([]);
  const [total, setTotal] = useState();
  const [orderInfo, setOrderInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: userInfo.email,
    country: "",
    address: "",
    note: "",
    total: "",
  });
  const handleWishlist = (it) => {
    const newList = [...wishlist];
    const findSameItem = (element) => element.id === it.id;
    const isSameItem = wishlist.findIndex(findSameItem);
    if (isSameItem === -1) {
      it.isLike = true;
      newList.push(it);
      setWishlist(newList);
      message.success("Item has been added successfully");
    } else {
      it.isLike = false;
      const result = newList.filter((it) => it.isLike == true );
      console.log('🚀result---->', result);
      setWishlist(result);
      localStorage.setItem('wishlist',JSON.stringify(result))
      message.success("Item has been removed ");
    }
    
  };
  const handleLogout = () => {
    message.success("Log Out Successfully");
    setIsLogin(false);
    setUserInfo({});
    setCount(0);
    localStorage.clear();
    // localStorage.removeItem("isLogin");
    // localStorage.removeItem("userInfo");
  };

  const handleAdd = (item) => {
    const newListCart = [...listCart];
    const findSameItem = (element) => element.id === item.id;
    const isSameItem = listCart.findIndex(findSameItem);
    if (isSameItem === -1) {
      item.quantity = 1;
      newListCart.push(item);
      setListCart(newListCart);
      message.success("Item has been added successfully");
    } else {
      newListCart[isSameItem].quantity += 1;
      setListCart(newListCart);
      message.success("Item has been added successfully");
    }
  };
  const handleDelete = (item) => {
    console.log('🚀item---->', item);
    const newList = listCart.filter((it) => it.authors.id !== item.authors.id);
    setListCart(newList);
    console.log('🚀newList---->', newList);
    const itemPrice = newList.map((it) =>
      parseFloat((it.price * it.quantity).toFixed(2))
    );
    const totalPrice = itemPrice.reduce((acc, currentItem) => {
      return acc + currentItem;
    }, 0);
    setTotal(totalPrice.toFixed(2));
    message.success("Remove Successfully");
  };
  const handleAmount = (id, isIncrease) => {
    const selectedItem = listCart.findIndex((ele) => ele.authors.id == id);
    const newList = [...listCart];
    if (isIncrease) {
      newList[selectedItem].quantity += 1;
      setListCart(newList);
      handleTotal();
    } else {
      if (newList[selectedItem].quantity == 1) {
        return null;
      }
      if (newList[selectedItem].quantity) {
        newList[selectedItem].quantity -= 1;
        setListCart(newList);
        handleTotal();
      }
      return;
    }
  };
  const handleTotal = () => {
    const itemPrice = listCart.map((it) =>
      parseFloat((it.price * it.quantity).toFixed(2))
    );
    const totalPrice = itemPrice.reduce((acc, currentItem) => {
      return acc + currentItem;
    }, 0);
    setTotal(totalPrice.toFixed(2));
  };
  useEffect(() => {
    const _userInfo = localStorage.getItem("userInfo");
    const _isLogin = localStorage.getItem("isLogin");
    const _count = localStorage.getItem("count");
    const _listCart = localStorage.getItem("listCart");
    const _wishlist = localStorage.getItem("wishlist");
    if (_userInfo) {
      const user = JSON.parse(_userInfo || " ");
      setUserInfo(user);
      setIsLogin(_isLogin);
    }
    if (_listCart) {
      const list = JSON.parse(_listCart);
      setCount(_count);
      setListCart(list);
    }
    if (_wishlist) {
      const list = JSON.parse(_wishlist);
      setWishlist(list);
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
        formTotal,
        setFormTotal,
        result,
        setResult,
        valueInput,
        setValueInput,
        wishlist,
        setWishlist,
        handleWishlist,
        handleDelete,
        total,
        setTotal,
        handleAmount,handleTotal,orderInfo, setOrderInfo
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
