import { message } from 'antd';
import { createContext, useEffect, useState } from 'react';



export const MainContext = createContext();


const MainProvider = ({ children }) => {

    const [isModalLogin, setIsModalLogin] = useState(false);

    const [userInfo, setUserInfo] = useState({});

    const [isLogin, setIsLogin] = useState(false);

    const handleLogout = () => {
        message.success("Logout successfully");
        setIsLogin(false);
        setUserInfo({});
        localStorage.removeItem("isLogin");
        localStorage.removeItem("userInfo");
    }


    useEffect(() => {
        const _islogin = localStorage.getItem("isLogin");
        const _userInfo = localStorage.getItem("userInfo");

        if (_islogin == "true") {
            setIsLogin(true);
            setUserInfo(JSON.parse(_userInfo));
        }

    }, [])

    return (
        <MainContext.Provider value={{
            isModalLogin, setIsModalLogin,
            userInfo, setUserInfo,
            isLogin, setIsLogin,
            handleLogout
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
