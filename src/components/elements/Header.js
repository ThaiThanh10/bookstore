import asset from "@/plugins/assets";
import {
  LoginOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { faPhone, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Modal, message } from "antd";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { MainContext } from "../context/MainProvider";
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const Header = () => {
  const { setUserInfo, setIsLogin, userInfo, isLogin,handleLogout } =
    useContext(MainContext);

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisOpen, setIsModalRegisOpen] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, setError] = useState({});
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

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
      .then(function (res) {
        console.log("🚀res---->", res);
        message.success("Register Successfully");
        handleRegisCancel();
        showModalLogin();
      });
  };
  const handleSignIn = async () => {
    var dataApi = [];
    await axios
      .get("https://testapi.io/api/thaithanh10/resource/Register")
      .then(function (res) {
        dataApi = res.data.data;
      });
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
      handleLoginCancel();
    }
  };

  const showModalLogin = () => {
    setIsModalLoginOpen(true);
  };
  const showModalRegis = () => {
    setIsModalRegisOpen(true);
  };
  const handleLoginCancel = () => {
    setIsModalLoginOpen(false);
  };
  const handleRegisCancel = () => {
    setIsModalRegisOpen(false);
  };
  const handleRegis = () => {};
  return (
    <header>
      <div className="border-b-[1px] border-b-[#eae8e4] border-b-solid">
        <div className="container-fluid px-[60px] ">
          <div className="flex justify-between items-center py-[8px]">
            <ul className="flex justify-between items-center gap-x-[10px] ">
              <li>
                <a href="#" className="text">
                  <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                  Can we help you?
                </a>
              </li>
              <li>
                <a href="tel:+1246-345-0695" className="text">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  +1 246-345-0695
                </a>
              </li>
            </ul>
            <ul className="flex justify-center items-center gap-x-[20px]">
              {isLogin ? (
                <span className="flex gap-x-[10px]">
                  <li>
                    <a>
                      <UserOutlined />
                    </a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>
                      <LogoutOutlined />
                    </a>
                  </li>
                </span>
              ) : (
                <span className="flex gap-x-[10px]">
                  <li>
                    <a>
                      <UserAddOutlined onClick={showModalRegis} />
                    </a>
                  </li>
                  <li>
                    <a onClick={showModalLogin}>
                      <LoginOutlined />
                    </a>
                  </li>
                </span>
              )}
              <li>
                <a>
                  <ShoppingCartOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between items-center relative flex-wrap py-[23px] px-[60px] ">
          <div className="site-branding pr-md-4">
            <a>
              <img src={asset("images/logo.svg")} alt="" />
            </a>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-x-[15px] ml-[30px] ">
              <li className="nav-item dropdown">
                <a className="text  ">Home</a>
              </li>
              <li>
                <a className=" text ">Categories</a>
              </li>
              <li>
                <a className="text   ">Shop</a>
              </li>
              <li>
                <a className="text  ">Pages</a>
              </li>
              <li>
                <a className="text  ">Blog</a>
              </li>
              <li>
                <a className="text  ">Others</a>
              </li>
            </ul>
          </div>
          <div className=" my-2 ">
            <form>
              <div>
                <input
                  className="form-control bg-[#fff] min-w-[380px] p-[10px] text-[18px] min-h-[40px] outline-none border-white"
                  type="search"
                  placeholder="Search for Books by Keyword ..."
                />
              </div>
              <button
                className="btn btn-outline-success my-2 my-sm-0 sr-only"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal open={isModalRegisOpen} onCancel={handleRegisCancel} footer={null}>
        <div className="flex justify-center items-start gap-y-[15px] flex-col">
          <Title style={{ margin: "0 auto" }} level={1}>
            Register
          </Title>
          <label className="text">Email</label>
          <input
            onChange={handleChange}
            value={form.email}
            className=" border-[1px] mr-[18px] bg-[#fff] w-full px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
            type="text"
            name="email"
            placeholder="Email"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          {err.email && <span>{err.email}</span>}
          {err.emailWrongRegex && <span>{err.emailWrongRegex}</span>}
          <label className="text">Password</label>
          <input
            onChange={handleChange}
            value={form.password}
            className=" border-[1px] mr-[18px] bg-[#fff] w-full px-[20px] py-[10px] text-[20px] min-h-[40px] outline-none border-[#000] border-solid"
            type="password"
            name="password"
            placeholder="Password"
          />
          {err.password && <span>{err.password}</span>}
          <button className="btn btn-secondary mt-[20px]" onClick={regis}>
            Register
          </button>
        </div>
      </Modal>
      <Modal open={isModalLoginOpen} onCancel={handleLoginCancel} footer={null}>
        <div className="flex justify-center items-start gap-y-[15px] flex-col">
          <Title style={{ margin: "0 auto" }} level={1}>
            Login
          </Title>
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
          <button
            onClick={handleSignIn}
            className="btn btn-secondary mt-[20px]"
          >
            Log In
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
