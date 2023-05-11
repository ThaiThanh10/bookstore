import asset from "@/plugins/assets";
import { RightOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DATA_PAGE_1 } from "./DATA_PAGE_1.js";
import Item from "./Item.js";
import { Space, Table, Tag, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "@/components/context/MainProvider.js";
const UIHomepage = () => {
  const { isLogin } = useContext(MainContext);

  const listAuthors = [
    {
      src: asset("/images/barbara-oneil.jpg"),
      name: "Barbara Oneil",
      published: "25",
    },
    {
      src: asset("/images/stephen-king.jpg"),
      name: "Stephen King",
      published: "25",
    },
    {
      src: asset("/images/david-walliams.jpg"),
      name: "David Walliams",
      published: "25",
    },
    {
      src: asset("/images/david-walliams.jpg"),
      name: "David Walliams",
      published: "25",
    },
    {
      src: asset("/images/david-walliams.jpg"),
      name: "David Walliams",
      published: "25",
    },
  ];
  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => handleDelete(record.authors.id)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </Space>
      ),
    },
  ];
  const [listCart, setListCart] = useState([]);
  const [total, setTotal] = useState();

  const handleSum = () => {
    const resultTotal = listCart.reduce((accumulator, item) => {
      const itemPrice = parseFloat(item.price);
      return accumulator + itemPrice;
    }, 0);
    setTotal(resultTotal);
  };
  const handleDelete = (key) => {
    console.log("key---->", key);
    const newList = listCart.filter( it => it.authors.id !== key)
    console.log('🚀newList---->', newList);
    setListCart(newList)
  };
  const handleAdd = (id) => {
    const itemId = DATA_PAGE_1.filter((it) => it.authors.id == id);
    setListCart([...listCart, itemId[0]]);
  };
  const handleCheckout = () => {
    if (isLogin) {
      message.success("Check Out Successfully");
    } else {
      message.warning("Please Log In First");
    }
  };
  useEffect(() => {
    handleSum();
  }, [listCart]);

  return (
    <div>
      <section className="banner mb-[95px] ">
        <div className="container flex justify-between items-center py-[60px]">
          <div className="w-1/2">
            <p className="text-[#beb4b4] text-[24px] font-extrabold uppercase ">
              The Bookworm Editors'
            </p>
            <h1 className="text-[#000] text-semibold text-[56px] py-[15px] ">
              Featured Books of the <br />{" "}
              <span className="text-[#000] font-extrabold text-[56px]">
                February
              </span>{" "}
            </h1>
            <button className="bg-[#000] rounded-0 btn-wide py-3 text-white text-[20px] ">
              See More
            </button>
          </div>
          <img
            className="scale-[0.75] w-1/2"
            src={asset("/images/banner.png")}
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="container  mb-[95px]">
          <div className="mb-[30px] flex justify-between items-center">
            <h1 className="title ">Categories</h1>
            <button className="flex justify-center items-center gap-x-[13px] text-[18px] hover:text-red-500  ">
              All Categories
              <RightOutlined />
            </button>
          </div>
          <div className="flex justify-between items-center  ">
            <div className="border-[1px] w-[23%]  px-[35px] py-[25px] rounded-[10px] bg-indigo-100 ">
              <img
                className="scale-[1.5]"
                src={asset("/images/gallery.png")}
                alt=""
              />
              <h1 className="text my-[20px]">Arts & Photography</h1>
              <a>Shop Now</a>
            </div>
            <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-orange-100 ">
              <img
                className="scale-[1.5]"
                src={asset("/images/chef.png")}
                alt=""
              />
              <h1 className="text my-[20px]">Food & Drink</h1>
              <a>Shop Now</a>
            </div>
            <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-pink-100 ">
              <img
                className="scale-[1.5]"
                src={asset("/images/love.png")}
                alt=""
              />
              <h1 className="text my-[20px]">Romance</h1>
              <a>Shop Now</a>
            </div>
            <div className="border-[1px] w-[23%]  px-[25px] py-[25px] rounded-[10px] bg-blue-100 ">
              <img
                className="scale-[1.5]"
                src={asset("/images/stethoscope.png")}
                alt=""
              />
              <h1 className="text my-[20px]"> Health</h1>
              <a>Shop Now</a>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[95px]">
        <div className="container">
          <h1 className="title text-center mb-[40px]">Feature Books</h1>
          <div className="flex justify-start    ">
            <div className="w-[30%] bg-[#fff6f6] px-[30px] py-[50px] ">
              <img src={asset("images/deal.png")} alt="" />
              <h1 className="text-[40px] my-[15px] font-medium text-left ">
                Get Extra
              </h1>
              <h1 className="text-[50px] my-[15px] font-extrabold text-left ">
                Sale 20%
              </h1>
              <button className="btn-wide bg-[#f52f2f] text-[#fff] my-[15px] py-[8px] text-[18px]">
                View More
              </button>
            </div>
            <div className="w-[70%] flex flex-wrap ">
              {DATA_PAGE_1.map((it, i) => (
                <Item
                  onClick={() => handleAdd(it.authors.id)}
                  key={i+1}
                  title={it.title}
                  authors={it.authors.name}
                  price={it.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" container mb-[95px]">
        <div className="mb-[30px] flex justify-between items-center">
          <h1 className="title ">Favorite Authors</h1>
          <button className="flex justify-center items-center gap-x-[13px] text-[18px] hover:text-red-500  ">
            View All
            <RightOutlined />
          </button>
        </div>
        <div className="flex justify-between items-center">
          {listAuthors.map((it, i) => (
            <div key={i + 1} className="text-center">
              <img className="rounded-full mb-[20px]" src={it.src} alt="" />
              <h1 className="mb-[10px] text-[18px] leading-[20px] font-bold ">
                {it.name}
              </h1>
              <p>{`${it.published} Published Books`}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#fff6f6] mb-[95px] py-[50px]">
        <div className="container ">
          <h1 className="title text-center">Your cart</h1>
          <Table pagination={false} columns={columns} dataSource={listCart} />;
          <div className="w-max bg-[#fff] px-[20px] py-[10px] mb-[20px] ">
            <h1 className="text">Total {total}</h1>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-[#000] rounded-0 btn-wide py-3 text-white text-[20px] "
          >
            Check out
          </button>
        </div>
      </section>
      <span className="w-screen h-[1px] bg-[#eae8e4] block mb-[95px] "></span>
    </div>
  );
};

export default UIHomepage;
