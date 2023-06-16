import React, { useContext, useEffect, useState } from "react";
import { api } from "@/config/api";
import { Input, Select, Space, DatePicker, message, Avatar } from "antd";
import { MainContext } from "@/components/context/MainProvider";
import { UserOutlined } from "@ant-design/icons";
import asset from "@/plugins/assets";
const inputStyle = {
  width: "100%",
  border: "1px solid #eae8e4",
  padding: "7px",
  fontSize: "16px",
  ":focus": {
    border: "1px solid #000",
  },
};

const UIDashboard = () => {
  const { userInfo } = useContext(MainContext);
  const [formInfo, setFormInfo] = useState({
    name: userInfo.name,
    gender: "",
    birthday: "",
    phone: "",
    email: userInfo.email,
    password: "",
  });
  const handleChangeGender = (value) => {
    console.log(`selected ${value}`);
    setFormInfo({ ...formInfo, gender: `${value}` });
  };
  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const onChangeDate = (date) => {
    const day = date.format("DD");
    const month = date.format("MM");
    const year = date.format("YYYY");
    setFormInfo({ ...formInfo, birthday: `${day}/${month}/${year}` });
    console.log("🚀---->", `${day}/${month}/${year}`);
  };
  const updateInfo = async () => {
    console.log("🚀formInfo.email---->", userInfo.email);
    console.log("🚀formInfo---->", formInfo);

    await api({
      url: `https://testapi.io/api/thaithanh10/resource/Register/${userInfo.id}`,
      method: "PUT",
      data: formInfo,
    });
    message.success("Update Successfully");
  };
  useEffect(() => {
    setFormInfo({
      ...formInfo,
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    });
  }, [userInfo.email]);

  return (
    <div className="w-3/4 pl-[65px] py-[65px] border-l border-solid border-[#eae8e4]  ">
      <h1 className=" text-[34px] font-semibold tracking-wide leading-[48px] text-left mb-[30px] ">
        Dashboard
      </h1>
      <h1 className="text-[26px] text-[#000]  my-[20px]  ">
        Account Information
      </h1>
      <div className="flex justify-start items-start gap-x-[20px] ">
        <div className="w-1/4 flexCenter ">
          <img src={asset('/images/avt-default.png')} alt="" />
          {/* <Avatar size={112} icon={<UserOutlined />} /> */}
        </div>
        <div className="flex flex-col justify-start items-start w-3/4 gap-y-[15px] ">
          <div className="flex justify-between items-start flex-col gap-y-[5px] w-full ">
            <label className="label mr-[15px] ">Name</label>
            <Input
              onChange={handleChange}
              name="name"
              value={userInfo.name}
              style={inputStyle}
            />
          </div>
          <div className="flex justify-between items-start flex-col gap-y-[5px] w-full ">
            <label className="label mr-[15px] ">Gender</label>
            <Space
              style={{
                width: "100%",
                display: "block",
              }}
              wrap
            >
              <Select
                style={{
                  width: "100%",
                }}
                defaultValue={userInfo.gender ? userInfo.gender : null}
                onChange={handleChangeGender}
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                ]}
              />
            </Space>
          </div>
          <div className="flex justify-between items-start flex-col gap-y-[5px] w-full ">
            <label className="label mr-[15px] ">Birthday</label>
            <Space
              direction="vertical"
              style={{
                width: "100%",
                display: "block",
              }}
            >
              <DatePicker
                style={{
                  width: "100%",
                  display: "block",
                }}
                size="large"
                onChange={onChangeDate}
              />
            </Space>
          </div>
          <div className="flex justify-between items-start flex-col gap-y-[5px] w-full ">
            <label className="label mr-[15px] ">Phone</label>
            <Input
              onChange={handleChange}
              name="phone"
              value={userInfo.phone ? userInfo.phone : formInfo.phone}
              style={inputStyle}
            />
          </div>
          <div className="flex justify-between items-start flex-col gap-y-[5px] w-full ">
            <label className="label mr-[15px] ">Email</label>
            <Input value={userInfo.email} style={inputStyle} />
          </div>
        </div>
      </div>
      <button
        onClick={updateInfo}
        className="bg-[#000] mt-[50px] w-max rounded-0 py-4 px-10 text-white text-[20px] button "
      >
        Update Information
      </button>
    </div>
  );
};

export default UIDashboard;
