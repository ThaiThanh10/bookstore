import React, { useState } from "react";
import { Collapse, Input, Radio, Space } from "antd";
const { Panel } = Collapse;
const { TextArea } = Input;
const inputStyle = {
  border: "1px solid #eae8e4",
  padding: "7px",
  fontSize: "16px",
  ":focus": {
    border: "1px solid #000",
  },
};

const UICheckout = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const [value, setValue] = useState(1);
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="container  translate-y-[-20px] flex justify-between items-center mt-[70px] pb-[30px] ">
        <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
          Shop
        </h1>
        <h1 className="text-[18px]">Home / Shop / Cart / Checkout</h1>
      </div>
      <div className="py-[65px] bg-[#fff6f6] ">
        <div className="container">
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] mb-[30px] text-center ">
            Your cart
          </h1>
          <div>
            <div className="flex justify-between items-center border border-solid bg-[#fff] border-[#eae8e4] mb-[30px] ">
              <Input
                style={inputStyle}
                placeholder="Coupon Code"
              />
              <button className=" p-[8px] cursor-pointer w-[195px] font-semibold text-[16px] ">
                Apply Coupon
              </button>
            </div>
            <div className="flex justify-between items-start  ">
              <div className="w-[72%] py-[32px] px-[24px] bg-[#fff]">
                <h1 className="title mb-[30px]">Billing Details</h1>
                <div>
                  <div className="flex justify-between items-start mb-[20px]">
                    <div className="w-[47%]">
                      <label className="label">First name</label>
                      <Input style={inputStyle} />
                    </div>
                    <div className="w-[47%]">
                      <label className="label">Last name</label>
                      <Input style={inputStyle} />
                    </div>
                  </div>
                  <div className="flex justify-between items-start  mb-[20px]">
                    <div className="w-[47%]">
                      <label className="label">Phone</label>
                      <Input style={inputStyle} />
                    </div>
                    <div className="w-[47%]">
                      <label className="label">Email</label>
                      <Input style={inputStyle} />
                    </div>
                  </div>
                  <div className=" mb-[20px]">
                    <label className="label">Country</label>
                    <Input style={inputStyle} />
                  </div>
                  <div className=" mb-[20px]">
                    <label className="label">Address</label>
                    <Input style={inputStyle} />
                  </div>
                  <div className=" mb-[35px]">
                    <label className="label">Postcode</label>
                    <Input style={inputStyle} />
                  </div>
                  <div className=" mb-[20px]">
                    <label className="label">Additional Information</label>
                    <TextArea style={inputStyle} rows={5} placeholder="Order Notes (Optional) "  />
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
                <Collapse onChange={onChange}>
                  <Panel header="Cart Totals" key="1">
                    <h1>Subtotal: </h1>
                  </Panel>
                  <Panel header="Shipping" key="2">
                    <Radio.Group onChange={onChangeRadio} value={value}>
                      <Space direction="vertical">
                        <Radio value={1}> Free Ship</Radio>
                        <Radio value={2}>Flat rate: $15</Radio>
                        <Radio value={3}>Local Pickup: $8</Radio>
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
                    <h1>Total: </h1>
                  </Panel>
                </Collapse>
                <button className="bg-[#000] mt-[30px] w-full rounded-0 py-4 px-10 text-white text-[20px] button ">
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
