import React, { useContext, useEffect, useState } from "react";
import { Collapse, Input, Radio, Space, message } from "antd";
import { MainContext } from "@/components/context/MainProvider";
import { useRouter } from "next/router";
const { Panel } = Collapse;
const UICart = () => {
  const { count, listCart, setListCart } = useContext(MainContext);
  const [total, setTotal] = useState();
  const router = useRouter();
  const onChange = (key) => {
    console.log(key);
  };
  const [value, setValue] = useState(1);
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleDelete = (key) => {
    console.log("key---->", key);
    const newList = listCart.filter((it) => it.authors.id !== key);
    console.log("🚀newList---->", newList);
    setListCart(newList);
    message.success("Remove Successfully");
  };
  const itemPrice = listCart.map((it) => it.price * it.quantity);
  const totalPrice = itemPrice.reduce((acc, currentItem) => {
    return acc + currentItem;
  }, 0);
  const finalTotal = totalPrice;
  const handleCheckout = () => {
    router.push("/checkout");
  };
  useEffect(() => {
    setTotal(finalTotal);
  }, []);

  console.log("🚀totalPrice---->", totalPrice);
  return (
    <div>
      <div className="container pt-[60px]  flex justify-between items-center pb-[30px] ">
        <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
          Shop
        </h1>
        <h1 className="text-[18px]">Home / Shop / Cart</h1>
      </div>
      <div className="py-[65px] bg-[#fff6f6] ">
        <div className="container">
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] mb-[30px] text-center ">
            Your cart
          </h1>
          <div className="flex justify-between items-start ">
            <div className="w-[72%]">
              <table className="w-full border-collapse bg-[#fff] ">
                <thead>
                  <tr>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/2 ">
                      Product
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                      Price
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/5">
                      Quantity
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/10  ">
                      Total
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/10">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listCart &&
                    listCart.map((it, i) => (
                      <tr key={i}>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/2 ">
                          {it.title}
                        </td>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                          {it.price}
                        </td>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/5">
                          {it.quantity}
                        </td>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                          {it.quantity * it.price}
                        </td>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                          <button onClick={() => handleDelete(it.authors.id)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center w-full gap-x-[40px] bg-[#fff] mt-[20px] py-[13px] px-[25px] ">
                <h1 className="title    ">Total</h1>
                <h1 className="title">{total}</h1>
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
              <button
                onClick={handleCheckout}
                className="bg-[#000] mt-[30px] w-full rounded-0 py-4 px-10 text-white text-[20px] button "
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UICart;
