import { api } from "@/config/api";
import { FormOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { PATH_API } from '@/config/path';
import { message, Modal } from "antd";
import { useContext, useState } from "react";
import { MainContext } from "@/components/context/MainProvider";

const Header = ({ }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const { isModalLogin, setIsModalLogin, userInfo, setUserInfo, isLogin, setIsLogin, handleLogout } = useContext(MainContext);



    const [form, setForm] = useState({
        email: "",
        password: "",
    });


    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: "",
    });

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const showModalRegister = () => {
        setIsModalOpen(true);
    }


    const handleChange = (e, isLogin) => {
        const name = e.target.name
        const value = e.target.value

        if (isLogin) {
            setDataLogin({
                ...dataLogin,
                [name]: value,
            })
        } else {
            setForm({
                ...form,
                [name]: value,
            })
        }
    }

    const handleRegister = async () => {
        if (!form.email && form.password) {
            return;
        }
        await api({
            url: PATH_API.login,
            method: "POST",
            data: form,
        });
        message.success("Register successfully - please login");
        handleCancel();
        showModalLogin();
    }

    const showModalLogin = () => {
        setIsModalLogin(true);
    };


    const handleLogin = async () => {

        if (!dataLogin.email && dataLogin.password) {
            return;
        }
        /* <-------  Get data from database  -------> */
        const datApi = await api({
            url: PATH_API.login,
            method: "GET",
        });
        const { data } = datApi;

        const isSuccess = data.find(it => it.email == dataLogin.email && it.password == dataLogin.password);
        if (isSuccess) {
            message.success("Login successfully");
            setIsModalLogin(false);
            setIsLogin(true);
            setUserInfo(isSuccess);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("userInfo", JSON.stringify(isSuccess));



        } else {
            message.error("Login failed");
        }

    }




    return (
        <header className='header w-full bg-slate-400'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">Task Management</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle" onClick={showModalRegister}>
                        <FormOutlined />
                    </button>

                    {
                        isLogin ?
                            <button className="btn btn-ghost btn-circle" onClick={handleLogout}>
                                <LogoutOutlined />
                            </button> :
                            <button className="btn btn-ghost btn-circle" onClick={showModalLogin}>
                                <LoginOutlined />
                            </button>
                    }

                    {/* <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> */}
                    <div>
                        {userInfo?.email && userInfo?.email}
                    </div>
                </div>
            </div>

            <Modal title="Modal Register" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <div className="flex mb-[20px]">
                    <label className="w-[200px]" htmlFor="name">Email</label>
                    <input className='input w-full border-[1px] border-black mx-[10px]' type="text" name="email" onChange={handleChange} />
                </div>
                <div className="flex  mb-[20px]">
                    <label className="w-[200px]" htmlFor="todo">Password</label>
                    <input className='input w-full border-[1px] border-black mx-[10px]' type="password" name="password" onChange={handleChange} />
                </div>
                <div className="flexCenter">
                    <button className='btn btn-success' type="primary" onClick={handleRegister}>
                        Register
                    </button>
                </div>
            </Modal>
            <Modal title="Modal Login" open={isModalLogin} footer={null} onCancel={() => setIsModalLogin(false)}>
                <div className="flex mb-[20px]">
                    <label className="w-[200px]" htmlFor="name">Email</label>
                    <input className='input w-full border-[1px] border-black mx-[10px]' type="text" name="email" onChange={(e) => handleChange(e, true)} />
                </div>
                <div className="flex  mb-[20px]">
                    <label className="w-[200px]" htmlFor="todo">Password</label>
                    <input className='input w-full border-[1px] border-black mx-[10px]' type="password" name="password" onChange={(e) => handleChange(e, true)} />
                </div>
                <div className="flexCenter">
                    <button className='btn btn-success' type="primary" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </Modal>

        </header>
    )
}

export default Header