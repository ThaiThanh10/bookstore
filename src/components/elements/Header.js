import asset from "@/plugins/assets";
import {
  CloseOutlined,
  DownOutlined,
  LoginOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Badge, Drawer, Modal, message, Popover } from "antd";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { MainContext } from "../context/MainProvider";
import Link from "next/link";
import "./header.css";
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const REGEX_PASSWORD = /^.{8,}$/;
import styled from "styled-components";
import { useRouter } from "next/router";
import { api } from "@/config/api";
import { DATA_PAGE_1 } from "../website/pages/UIHomepage/DATA_PAGE_1";
const RedLink = styled.a`
  color: red;
`;

const dataCate = [
  "All",
  "Magazine",
  "Novel",
  "Life",
  "Arts",
  "Comics",
  "Education & Reference",
  "Humanities & Social & Sciences",
  "Science & Technology",
  "Kids",
  "Sports",
];

const Header = () => {
  const {
    userInfo,
    setUserInfo,
    setIsLogin,
    isLogin,
    handleLogout,
    count,
    listCart,
    valueInput,
    setValueInput,
    setResult,
    handleDelete,
    total,
    handleAmount,
    handleTotal,
    setCount,
  } = useContext(MainContext);
  const router = useRouter();
  const title = (
    <div className="border-b border-b-solid border-b-[#eae8e4] mb-[15px] py-[15px] ">
      {userInfo.name ? (
        <h1 className="text">Hello, {userInfo.name}</h1>
      ) : (
        <h1 className="text">Hello, {userInfo.email}</h1>
      )}
    </div>
  );
  const content = (
    <div>
      <div
        onClick={() => {
          router.push("/account");
        }}
        className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
      >
        <p className="text ml-[10px]  ">My Account</p>
      </div>
      <div
        onClick={() => {
          router.push("/account/wishlist");
        }}
        className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
      >
        <p className="text ml-[10px]  ">Wishlists</p>
      </div>
      <div
        onClick={() => {
          router.push("/order");
        }}
        className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
      >
        <p className="text ml-[10px]  ">Order</p>
      </div>
      <div
        onClick={handleLogout}
        className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
      >
        <p className="text ml-[10px]  ">Log Out</p>
      </div>
    </div>
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState({});
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const handleChangeSearch = (ev) => {
    const value = ev.target.value;
    setValueInput(value);
  };
  const handleSearch = () => {
    const newData = [...DATA_PAGE_1];
    const result = newData.filter(
      (it) =>
        it.title.toLowerCase().includes(valueInput?.toLowerCase()) ||
        it.authors.name.toLowerCase().includes(valueInput?.toLowerCase())
    );
    setResult(result);
  };

  const handleChange = (ev, isLogin) => {
    const value = ev.target.value;
    const name = ev.target.name;
    if (isLogin) {
      setFormLogin({ ...formLogin, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const regis = async () => {
    let err = {};
    if (!form.name) {
      err.name = "Please enter Name";
      setError(err);
      return;
    }
    if (!form.email) {
      err.email = "Please enter Email";
      setError(err);
      return;
    }
    if (!form.password) {
      err.password = "Please enter Password";
      setError(err);
      return;
    }
    if (!REGEX_PASSWORD.test(form.password)) {
      err.emailWrongRegexPassword = "It should be at least 8 characters!";
      setError(err);
      return;
    }
    if (!REGEX_EMAIL.test(form.email)) {
      err.emailWrongRegex = "It should be a valid email address!";
      setError(err);
      return;
    }
    const isErr = Object.keys(err);
    if (!isErr.length) {
      console.log("Register Successfully", form);
      setForm({
        ...form,
        email: "",
        password: "",
      });
    }
    await axios
      .post("https://testapi.io/api/thaithanh10/resource/Register", form)
      .then(
        message.success("Register Successfully"),
        setTabSignIn(true),
        setTabSignUp(false)
      );
  };
  const handleSignIn = async () => {
    var dataApi = [];
    let err = {};
    const res = await api({
      url: "https://testapi.io/api/thaithanh10/resource/Register",
      method: "GET",
    });
    if (res) {
      dataApi = res.data;
    }
    // await axios
    //   .get("https://testapi.io/api/thaithanh10/resource/Register")
    //   .then(function (res) {
    //     dataApi = res.data.data;
    //   });
    const isSuccess = dataApi.find(
      (item) =>
        item.email == formLogin.email && item.password == formLogin.password
    );
    if (isSuccess) {
      message.success("Login Successfully");
      setUserInfo(isSuccess);
      localStorage.setItem("userInfo", JSON.stringify(isSuccess));
      localStorage.setItem("isLogin", true);
      setFormLogin({
        email: "",
        password: "",
      });
      setIsLogin(true);
      handleCancel();
    } else {
      err.invalidAccount = "Wrong email or password, please try again";
      setError(err);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCart = () => {
    localStorage.setItem("count", count);
    localStorage.setItem("listCart", JSON.stringify(listCart));
    router.push("/cart");
  };
  const [tabSignIn, setTabSignIn] = useState(false);
  const [tabSignUp, setTabSignUp] = useState(false);

  const handleTabModal = (ev, isSignIn) => {
    setIsModalOpen(true);
    if (isSignIn) {
      setTabSignIn(true);
      setTabSignUp(false);
    } else {
      setTabSignUp(true);
      setTabSignIn(false);
    }
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setCount(listCart.length);
    handleTotal();
  }, [listCart]);

  return (
    <header>
      <Drawer
        size="large"
        title="Your Cart"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex justify-between items-center ">
          <h1 className="title w-full mb-[30px]  ">TOTAL: {total}</h1>
          <button
            onClick={handleCart}
            className="w-[100px] px-[10px] py-[5px] border border-solid border-[#000] button bg-[#000] text-white  "
          >
            View Cart
          </button>
        </div>
        {listCart.map((it, i) => (
          <div
            key={i}
            className="flex justify-between items-start border border-solid border-[#eae8e4] p-[10px] "
          >
            <div>
              <img src={`https://picsum.photos/seed/${it.id}/120/180`} /* src={asset(`${it.img}`)}  */alt="" />
            </div>
            <div className="text-left w-2/5">
              <h1 className="text">{it.title}</h1>
              <h1 className="text my-[20px] ">{it.price}</h1>
              <div className="p-[5px]  flex justify-around items-center gap-x-[15px] text-left border border-b-solid border-b-[#eae8e4] ">
                <button
                  onClick={() => handleAmount(it.authors.id)}
                  className="text"
                >
                  -
                </button>
                <p className="text"> {it.quantity}</p>
                <button
                  className="text"
                  onClick={() => handleAmount(it.authors.id, true)}
                >
                  +
                </button>
              </div>
            </div>
            <button className="mr-[20px]" onClick={() => handleDelete(it)}>
              <CloseOutlined />
            </button>
          </div>
        ))}
      </Drawer>
      <div className=" fixed top-0 left-0 w-screen bg-[#fff] z-10 ">
        <div className="flex justify-between items-center relative flex-wrap py-[13px] px-[60px] ">
          <div className="flex justify-between items-center">
            <a>
              <Link href="/">
                <img src={asset("/images/logo.svg")} alt="" />
              </Link>
            </a>
            <ul className="flex justify-center items-center gap-x-[50px] ml-[80px] mt-[5px] ">
              {/* <div className=" dropDown  ">
                <Link
                  className="flex justify-center items-center dropbtn"
                  href="/"
                >
                  <p className="text mr-[8px] ">Home</p>
                  <DownOutlined />
                </Link>
                <div className="dropdown-content">
                  <li>
                    <p className="navItem  ">Home 1</p>
                  </li>
                  <li>
                    <p className="navItem  ">Home 2</p>
                  </li>
                  <li>
                    <p className="navItem  ">Home 3</p>
                  </li>
                  <li>
                    <p className="navItem  ">Home 4</p>
                  </li>
                  <li>
                    <p className="navItem  ">Home 5</p>
                  </li>
                </div>
              </div> */}
              <div className="dropDown">
                <Link
                  className="flex justify-center items-center dropbtn "
                  href="/shoplist"
                >
                  <p className="text mr-[8px] ">Categories</p>
                  <DownOutlined />
                </Link>
                <div className="dropdown-content ">
                  {dataCate.map((it, i) => (
                    <li key={i}>
                      <p className="navItem">{it}</p>
                    </li>
                  ))}
                </div>
              </div>
              <div className=" dropDown  ">
                <Link
                  className="flex justify-center items-center dropbtn"
                  href="/"
                >
                  <p className="text mr-[8px] ">Shop</p>
                  <DownOutlined />
                </Link>
                <div className="dropdown-content">
                  <li>
                    <Link href="/shoplist">
                      <p className=" navItem ">Shop List</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/productdetail">
                      <p className=" navItem ">Product Detail</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/order">
                      <p className=" navItem ">Order</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart">
                      <p className=" navItem ">Shop Cart</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/checkout">
                      <p className=" navItem ">Shop Checkout</p>
                    </Link>
                  </li>
                </div>
              </div>
              <div>
                <Link
                  className="flex justify-center items-center"
                  href="/error"
                >
                  <p className="text mr-[8px] ">Blog</p>
                  <DownOutlined />
                </Link>
              </div>
              <div className=" dropDown  ">
                <span className="flex justify-center items-center dropbtn">
                  <p className="text mr-[8px] ">Others</p>
                  <DownOutlined />
                </span>
                <div className="dropdown-content">
                  <li>
                    {" "}
                    <Link href="/error">
                      <p className=" navItem ">404</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <p className=" navItem ">About Us</p>
                    </Link>
                    {/* <RedLink>About Us</RedLink> */}
                  </li>
                  <li>
                    <Link href="/contact">
                      <p className=" navItem ">Contact Us</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <p className=" navItem ">FAQ</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <p className=" navItem ">Pricing Table</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/term">
                      <p className=" navItem ">Term Conditions</p>
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <div>
            <div className="flex gap-x-[30px] items-center mb-[7px]    ">
              <div className="flex items-center bg-[#f6f5f3] py-[4px] ">
                <input
                  onChange={handleChangeSearch}
                  className="form-control bg-[#f6f5f3] min-w-[300px]  px-[10px] py-[5px] text-[16px] mr-[10px] outline-none border-white"
                  type="search"
                  placeholder="Search for Books by Keyword ..."
                />
                <button
                  onClick={handleSearch}
                  className=" outline-none px-[7px]  mb-[4px]    "
                >
                  <SearchOutlined />
                </button>
              </div>
              <div className="flex justify-center items-center pb-[5px] gap-x-[30px]">
                {isLogin ? (
                  <span
                    style={{
                      clear: "both",
                      whiteSpace: "nowrap",
                    }}
                    className="flex gap-x-[40px]"
                  >
                    <Popover
                      placement="bottomRight"
                      title={title}
                      content={content}
                      trigger="click"
                    >
                      {" "}
                      <UserOutlined />
                    </Popover>
                    <a onClick={handleLogout}>
                      <LogoutOutlined />
                    </a>
                  </span>
                ) : (
                  <span className="flex gap-x-[40px]">
                    <a>
                      <UserAddOutlined onClick={handleTabModal} />
                    </a>
                    <a>
                      <LoginOutlined
                        onClick={(ev) => handleTabModal(ev, true)}
                      />
                    </a>
                  </span>
                )}
                <a>
                  <Badge count={count}>
                    <ShoppingCartOutlined onClick={showDrawer} />
                  </Badge>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width={700}
        footer={null}
      >
        <div /* className=" bg-[#eff1f3] " */>
          <Title style={{ margin: "0 auto" }} level={3}>
            Please Log In To Continue
          </Title>
          <div className="flex justify-between items-center mt-[30px] ">
            <button
              onClick={(ev) => handleTabModal(ev, true)}
              className={`w-1/2 text-[20px]  p-[10px_0]  ${
                tabSignIn ? "bg-[#fff]" : "bg-[#eff1f3]"
              } `}
            >
              Sign In
            </button>
            <button
              onClick={handleTabModal}
              className={`w-1/2 text-[20px]  p-[10px_0]   ${
                tabSignUp ? "bg-[#fff]" : "bg-[#eff1f3]"
              } `}
            >
              Sign Up
            </button>
          </div>
          {tabSignUp && (
            <div className=" pb-[20px] bg-[#fff]">
              <div className="flex justify-center items-start gap-y-[15px] flex-col p-[20px_30px] ">
                <label className="text">Name</label>
                <input
                  onChange={handleChange}
                  value={form.name}
                  className=" border-[1px] mr-[18px] bg-[#fff] w-full px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                />
                {err.name && (
                  <span className="text text-red-500">{err.name}</span>
                )}
                <label className="text">Email</label>
                <input
                  onChange={handleChange}
                  value={form.email}
                  className=" border-[1px] mr-[18px] bg-[#fff] w-full px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
                  type="text"
                  name="email"
                  placeholder="abc@gmail.com"
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                {err.email && (
                  <span className="text text-red-500">{err.email}</span>
                )}
                {err.emailWrongRegex && (
                  <span className="text text-red-500">
                    {err.emailWrongRegex}
                  </span>
                )}
                <label className="text">Password</label>
                <input
                  onChange={handleChange}
                  value={form.password}
                  className=" border-[1px] mr-[18px] bg-[#fff] w-full px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {err.password && (
                  <span className="text text-red-500">{err.password}</span>
                )}
                {err.emailWrongRegexPassword && (
                  <span className="text text-red-500">
                    {err.emailWrongRegexPassword}
                  </span>
                )}

                <div className="w-full flexCenter ">
                  <button
                    className="btn btn-secondary px-[20px] py-[7px] mt-[20px] "
                    onClick={regis}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <span class="w-4/5 text-center border-b border-[#979faf] border-solid mx-auto block h-[1px] "></span>
              <h1 className="text mx-auto mt-[20px] text-center ">
                Or Sign Up With{" "}
              </h1>
              <div className="flex justify-center items-center gap-x-[15px] p-[20px_30px] ">
                <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
                  <img src={asset("/images/facebook-logo-icon.png")} alt="" />
                </button>
                <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
                  <img src={asset("/images/logo_google_icon.png")} alt="" />
                </button>
                <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
                  <img src={asset("/images/github_icon.png")} alt="" />
                </button>
              </div>
              <p className="block text-center text-neutral-700 dark:text-neutral-300">
                Bạn đã có tài khoản?{" "}
                <span className="text-green-600 relative">
                  Đăng nhập
                  <a
                    // href="/login"
                    absolute="1"
                    className="jsx-3681395932 app-link absolute w-full h-full top-0 left-0"
                  ></a>
                </span>
              </p>
            </div>
          )}
          {tabSignIn && (
            <div className=" pb-[20px] bg-[#fff]">
              <div className="flex justify-center items-start gap-y-[15px] flex-col  p-[20px_30px] bg-[#fff] ">
                <label className="text">Email</label>
                <input
                  onChange={(ev) => handleChange(ev, true)}
                  value={formLogin.email}
                  className=" border-[1px] mr-[18px] bg-[#fff] w-full px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <label className="text">Password</label>
                <input
                  onChange={(ev) => handleChange(ev, true)}
                  value={formLogin.password}
                  className=" border-[1px] mr-[18px] bg-[#fff] w-full px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {err.invalidAccount && (
                  <span className="text text-red-500">
                    {err.invalidAccount}
                  </span>
                )}
                <div className="w-full flexCenter">
                  <button
                    onClick={handleSignIn}
                    className="btn btn-secondary px-[20px] py-[7px] mt-[20px]"
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <span class="w-4/5 text-center border-b border-[#979faf] border-solid mx-auto block h-[1px] "></span>
              <h1 className="text mx-auto mt-[20px] text-center ">
                Or Sign In With{" "}
              </h1>
              <div className="flex justify-center items-center gap-x-[15px] p-[20px_30px] ">
                <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
                  <img src={asset("/images/facebook-logo-icon.png")} alt="" />
                </button>
                <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
                  <img src={asset("/images/logo_google_icon.png")} alt="" />
                </button>
                <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
                  <img src={asset("/images/github_icon.png")} alt="" />
                </button>
              </div>
              <p className="block text-center text-neutral-700 dark:text-neutral-300">
                Bạn chưa có tài khoản?{" "}
                <span className="text-green-600 relative">
                  Đăng ký
                  <a
                    // href="/login"
                    absolute="1"
                    className="jsx-3681395932 app-link absolute w-full h-full top-0 left-0"
                  ></a>
                </span>
              </p>
            </div>
          )}
        </div>
      </Modal>
      <span className="w-screen h-[1px] bg-[#eae8e4] block  "></span>
    </header>
  );
};

export default Header;
