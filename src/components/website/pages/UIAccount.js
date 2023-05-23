import { Input, Select, Space } from "antd";
import React from "react";
const inputStyle = {
  border: "1px solid #eae8e4",
  padding: "7px",
  fontSize: "16px",
  ":focus": {
    border: "1px solid #000",
  },
};

const UIAccount = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleLogout = () => {
    console.log("Log Out Successfully");
  };
  return (
    <div>
      <div className="container flex items-start ">
        <div className="w-1/4 py-[65px]  border-r border-solid border-[#eae8e4] ">
          <h1 className=" text-[34px] font-semibold tracking-wide leading-[48px] text-left mb-[30px] ">
            My Account
          </h1>
          <div>
            <h1 className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[10px] hover:translate-x-[20px] ">
              Dashboard
            </h1>
            <h1 className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[10px] hover:translate-x-[20px] ">
              Orders
            </h1>
            <h1 className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[10px] hover:translate-x-[20px] ">
              Wishlists
            </h1>
            <h1 className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[10px] hover:translate-x-[20px] ">
              Addresses
            </h1>
            <h1
              onClick={handleLogout}
              className="text-[22px] text-[#7f7f83] cursor-pointer   transition-all duration-[0.3s] ease-[ease] my-[10px] hover:translate-x-[20px] "
            >
              Log Out
            </h1>
          </div>
        </div>
        <div className="w-3/4 pl-[65px] py-[65px] border-l border-solid border-[#eae8e4]  ">
          <h1 className=" text-[34px] font-semibold tracking-wide leading-[48px] text-left mb-[30px] ">
            Dashboard
          </h1>
          <h1 className="text-[26px] text-[#000]  my-[10px]  ">Hello</h1>
          <div>
            <div className=" grid grid-cols-3 gap-x-[20px]">
              <div className="flex justify-between items-center ">
                <label className="label mr-[15px] ">Name</label>
                <Input style={inputStyle} />
              </div>
              <div className="flex justify-center items-center gap-x-[15px] ">
                <label className="label mr-[15px] ">Gender</label>
                <Space wrap>
                  <Select
                    defaultValue={null}
                    style={{
                      width: 120,
                    }}
                    onChange={handleChange}
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
                </Space>{" "}
              </div>
              <div className="flex justify-between items-center ">
                <label className="label mr-[15px] ">Birthday</label>
                <Input style={inputStyle} />
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-x-[20px] mt-[30px]">
              <div className="flex justify-between items-center ">
                <label className="label mr-[15px] ">Phone</label>
                <Input style={inputStyle} />
              </div>
              <div className="flex justify-between items-center ">
                <label className="label mr-[15px] ">Email</label>
                <Input style={inputStyle} />
              </div>
            </div>
          </div>
          <button className="bg-[#000] mt-[50px] w-max rounded-0 py-4 px-10 text-white text-[20px] button ">
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIAccount;
