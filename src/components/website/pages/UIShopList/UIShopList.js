import React from "react";
import { Collapse, Breadcrumb } from "antd";
import "./shoplist.css";
import { DATA_PAGE_1 } from "../UIHomepage/DATA_PAGE_1";
import Item from "../UIHomepage/Item";
const { Panel } = Collapse;
const dataCate = [
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
  return (
    <div className="mb-[90px]">
      <div>
        <div className="container pt-[70px] flex justify-between items-center pb-[30px] ">
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
            Shop
          </h1>
          <h1 className="text-[18px]">Home / Shop</h1>
        </div>
        <span className="w-screen h-[1px] bg-[#eae8e4] block mb-[95px] "></span>
        <div className="container flex justify-between items-start ">
          <div className="w-1/4">
            <Collapse>
              <Panel header="Categories">
                {dataCate.map((it, i) => (
                  <p key={i} className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]">
                    <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                      {it}
                    </p>
                  </p>
                ))}
              </Panel>
              <Panel header="Languages">
                {dataLang.map((it, i) => (
                  <p
                    key={i * 3}
                    className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]"
                  >
                    <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                      {it}
                    </p>
                  </p>
                ))}
              </Panel>
              <Panel header="Format">
                {dataFormat.map((it, i) => (
                  <p
                    key={i * 2}
                    className="py-[7px] px-[5px]  hover:bg-[#f7f7f7]"
                  >
                    <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                      {it}
                    </p>
                  </p>
                ))}
              </Panel>
            </Collapse>
          </div>
          <div className="w-[73%]">
            <div className="mb-[20px] py-[10px] ">
              <h1 className="text-[18px]">Showing 1–12 of 126 results</h1>
            </div>
            <div className=" grid grid-cols-4 ">
              {DATA_PAGE_1.map((it, i) => (
                <Item
                  onClick={() => handleAdd(it.authors.id)}
                  key={i + 1}
                  title={it.title}
                  authors={it.authors.name}
                  price={it.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIShopList;
