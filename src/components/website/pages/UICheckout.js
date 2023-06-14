import React, { useContext, useEffect, useState } from "react";
import { Collapse, Input, Radio, Space } from "antd";
import { MainContext } from "@/components/context/MainProvider";
import { api } from "@/config/api";
import { useRouter } from "next/router";
const { Panel } = Collapse;
const { TextArea } = Input;
const inputStyle = {
  border: "1px solid #eae8e4",
  padding: "7px",
  fontSize: "16px",
  marginBottom: '7px',
  ":focus": {
    border: "1px solid #000",
  },
};

const UICheckout = () => {
  const { userInfo, setTotal, total, orderInfo, setOrderInfo } =
    useContext(MainContext);

  const router = useRouter();
  const [value, setValue] = useState(1);
  const [error, setError] = useState({});
  const onChangeRadio = (e) => {
    setValue(e.target.value);
    setOrderInfo({ ...orderInfo, total: (parseInt(total) + value).toFixed(2) });
  };
  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setOrderInfo({ ...orderInfo, [name]: value });
  };
  const handleOrder = async () => {
    let err = {};
    if (!orderInfo.firstName) {
      err.firstName = "Please fill this field";
      setError(err);
      return;
    }
    if (!orderInfo.lastName) {
      err.lastName = "Please fill this field";
      setError(err);
      return;
    }
    if (!orderInfo.phone) {
      err.phone = "Please fill this field";
      setError(err);
      return;
    }
    if (!orderInfo.country) {
      err.country = "Please fill this field";
      setError(err);
      return;
    }
    if (!orderInfo.address) {
      err.address = "Please fill this field";
      setError(err);
      return;
    }
    if (!orderInfo.note) {
      setOrderInfo({ ...orderInfo, note: "none" });
    }

    await api({
      url: "https://testapi.io/api/thaithanh10/resource/OrderInformation",
      method: "POST",
      data: orderInfo,
    });
    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    localStorage.removeItem("count");
    router.push("/order");
  };
  useEffect(() => {
    orderInfo.email = userInfo.email;
    const _total = localStorage.getItem("total");
    setTotal(_total);
  }, [userInfo.email]);

  return (
    <div>
      <div className="container   flex justify-between items-center mt-[90px] py-[40px] ">
        <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
          Shop
        </h1>
        <h1 className="text-[18px]">Home / Shop / Cart / Checkout</h1>
      </div>
      <div className="py-[65px] bg-[#fff6f6] ">
        <div className="container">
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] mb-[30px] text-center ">
            Billing Details
          </h1>
          <div>
            <div className="flex justify-between items-start  ">
              <div className="w-[72%] py-[32px] px-[24px] bg-[#fff]">
                <div>
                  <div className="flex justify-between items-start mb-[20px]">
                    <div className="w-[47%]">
                      <label className="label">First name</label>
                      <Input
                        onChange={handleChange}
                        name="firstName"
                        style={inputStyle}
                      />
                      {error.firstName && (
                        <span className="text text-red-500 mt-[7px]">
                          {error.firstName}
                        </span>
                      )}
                    </div>
                    <div className="w-[47%]">
                      <label className="label">Last name</label>
                      <Input
                        onChange={handleChange}
                        name="lastName"
                        style={inputStyle}
                      />
                      {error.lastName && (
                        <span className="text text-red-500 mt-[7px]">
                          {error.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-start  mb-[20px]">
                    <div className="w-[47%]">
                      <label className="label">Phone</label>
                      <Input
                        onChange={handleChange}
                        name="phone"
                        style={inputStyle}
                      />
                      {error.phone && (
                        <span className="text text-red-500 mt-[7px]">{error.phone}</span>
                      )}
                    </div>

                    <div className="w-[47%]">
                      <label className="label">Email</label>
                      <Input value={userInfo.email} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>
                  <div className=" mb-[20px]">
                    <label className="label">Country</label>
                    <Input
                      onChange={handleChange}
                      name="country"
                      style={inputStyle}
                    />
                    {error.country && (
                      <span className="text text-red-500 mt-[7px]">{error.country}</span>
                    )}
                  </div>
                  <div className=" mb-[20px]">
                    <label className="label">Address</label>
                    <Input
                      onChange={handleChange}
                      name="address"
                      style={inputStyle}
                    />
                    {error.address && (
                      <span className="text text-red-500 mt-[7px]">{error.address}</span>
                    )}
                  </div>
                  <div className=" mb-[20px]">
                    <label className="label">Additional Information</label>
                    <TextArea
                      name="note"
                      onChange={handleChange}
                      style={inputStyle}
                      rows={5}
                      placeholder="Order Notes (Optional) "
                    />
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
                <Collapse
                  defaultActiveKey={["1", "2", "3", "4"]}
                  // onChange={onChange}
                >
                  <Panel header="Cart Totals" key="1">
                    <h1>Subtotal: {total}</h1>
                  </Panel>
                  <Panel header="Shipping" key="2">
                    <Radio.Group onChange={onChangeRadio}>
                      <Space direction="vertical">
                        <Radio value={0}> Free Ship</Radio>
                        <Radio value={15}>Flat rate: $15</Radio>
                        <Radio value={8}>Local Pickup: $8</Radio>
                        <h1>Shipping to America. </h1>
                      </Space>
                    </Radio.Group>
                  </Panel>
                  <Panel header="Coupon" key="3">
                    <div className="flex justify-between items-center border border-solid border-[#eae8e4] ">
                      <Input
                        style={{
                          border: "none",
                          outline: "none",
                          boxShadow: " none",
                          fontSize: "16px",
                        }}
                        placeholder="Coupon Code"
                      />
                      <button className=" p-[5px] w-[195px] font-semibold text-[16px] ">
                        Apply Coupon
                      </button>
                    </div>
                  </Panel>
                  <Panel header="Total" key="4">
                    <h1>
                      Total: {total && (parseInt(total) + value).toFixed(2)}
                    </h1>
                  </Panel>
                </Collapse>
                <button
                  onClick={handleOrder}
                  className="bg-[#000] mt-[30px] w-full rounded-0 py-4 px-10 text-white text-[20px] button "
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UICheckout;
