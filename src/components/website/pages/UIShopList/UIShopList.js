import React, { useContext, useEffect, useState } from "react";
import { Collapse, Breadcrumb, Select, Input, message, Pagination } from "antd";
import "./shoplist.css";
import { DATA, DATA_PAGE_1, fullData } from "../UIHomepage/DATA_PAGE_1";
import Item from "../UIHomepage/Item";
import { MainContext } from "@/components/context/MainProvider";
import Link from "next/link";
import { api } from "@/config/api";
const { Panel } = Collapse;
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
const dataFormat = [
  "Audio CD",
  "Audio Book",
  "Hardcover",
  "Kindle Books",
  "Paperback",
];
const dataLang = ["English", "German", "French", "Spanish", "Turkish"];

const UIShopList = () => {
  const {
    setCount,
    listCart,
    handleAdd,
    result,
    setResult,
    valueInput,
    setValueInput,
    wishlist,
    handleWishlist,
  } = useContext(MainContext);
  // const [result, setResult] = useState(DATA_PAGE_1);
  const handleCate = (it) => {
    if (it.toLowerCase() == "all") {
      setResult(DATA_PAGE_1);
      return;
    }
    const result = DATA_PAGE_1.filter(
      (item) => item.type.toLowerCase() == it.toLowerCase()
    );
    setResult(result);
  };
  const handleSort = ({ value }) => {
    const newData = [...DATA_PAGE_1];
    if (value == "low") {
      const result = newData.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      setResult(result);
      return;
    }
    if (value == "high") {
      const result = newData.sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
      setResult(result);
    }
  };
  const handleChange = (ev) => {
    const value = ev.target.value;
    setValueInput(value);
    if (!value) {
      const newData = [...DATA_PAGE_1];
      setResult(newData);
    }
    const newData = [...DATA_PAGE_1];
    const result = newData.filter(
      (it) =>
        it.title.toLowerCase().includes(valueInput?.toLowerCase()) ||
        it.authors.name.toLowerCase().includes(valueInput?.toLowerCase())
    );
    console.log("🚀result---->", result);
    setResult(result);
  };
  const getData = async () => {
    const res = await api({
      url: "https://testapi.io/api/thaithanh10/books",
      method: "GET",
    });
    if (res) {
      message.success("Get Data Successfully");
    }
  };
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
    const dataPage = `DATA_ PAGE_${page}`;
    console.log("🚀---->", dataPage);
    setResult(DATA.splice(12,24))
  };

  useEffect(() => {
    if (listCart) {
      setCount(listCart.length);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [listCart, wishlist]);

  return (
    <div className="my-[90px]  ">
      <div>
        <div className="container flex justify-between items-center py-[30px] ">
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
            Shop
          </h1>
          <h1 className="text-[18px]">Home / Shop</h1>
        </div>
        <span className="w-screen h-[1px] bg-[#eae8e4] block mb-[95px] "></span>
        <div className="container flex justify-between items-start ">
          <div className="w-1/4">
            <Collapse defaultActiveKey={["1", "2", "3"]}>
              <Panel header="Categories" key="1">
                {dataCate.map((it, i) => (
                  <div
                    key={i}
                    className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
                  >
                    <p
                      onClick={() => handleCate(it)}
                      className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] "
                    >
                      {it}
                    </p>
                  </div>
                ))}
              </Panel>
              <Panel header="Languages" key="2">
                {dataLang.map((it, i) => (
                  <div
                    key={i * 3}
                    className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]"
                  >
                    <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                      {it}
                    </p>
                  </div>
                ))}
              </Panel>
              <Panel header="Format" key="3">
                {dataFormat.map((it, i) => (
                  <div
                    key={i}
                    className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]"
                  >
                    <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                      {it}
                    </p>
                  </div>
                ))}
              </Panel>
            </Collapse>
          </div>
          <div className="w-[73%]">
            <div className="mb-[20px] py-[10px] flex justify-between items-start ">
              <h1 className="text-[18px]">Showing 1–12 of 126 results</h1>
              <Input
                onChange={handleChange}
                style={{ width: 300 }}
                placeholder="Search"
              />
              <Select
                labelInValue
                defaultValue={{
                  value: "none",
                  label: "Sort by price",
                }}
                style={{
                  width: 230,
                }}
                onChange={handleSort}
                options={[
                  {
                    value: "low",
                    label: "Low to high",
                  },
                  {
                    value: "high",
                    label: "High to low",
                  },
                ]}
              />
            </div>
            <div className=" grid grid-cols-4 ">
              {result.map((it, i) => (
                <Link href={`/shoplist`}>
                  <Item
                    id={it.id}
                    /* img={it.img} */
                    onClick={() => handleAdd(it)}
                    iconWishlist={it.isLike}
                    handleWishlist={() => handleWishlist(it)}
                    key={i + 1}
                    title={it.title}
                    authors={it.authors.name}
                    price={it.price}
                  />
                </Link>
              ))}
            </div>
            <div>
              {!result.length && (
                <h1 className="text">There is no result for your product</h1>
              )}
            </div>
            <Pagination
              style={{
                margin: "30px auto 0",
              }}
              onChange={onChange}
              total={85}
              defaultCurrent={current}
              // showTotal={(total) => `Total ${total} items`}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIShopList;
