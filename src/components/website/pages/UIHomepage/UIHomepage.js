import asset from "@/plugins/assets";
import { RightOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DATA_PAGE_1 } from "./DATA_PAGE_1.js";
import { DATA_BEST_SELLING } from "./DATA_BEST_SELLING.js";
import Item from "./Item.js";
import { MainContext } from "@/components/context/MainProvider.js";
import DealBox from "./DealBox.js";
import wishlist from "@/pages/account/wishlist/index.js";

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

export const BiographiesBooks = () => {
  return (
    <div className="w-1/3 flex  border-solid border-[1px] border-[#eae8e4] transition-all duration-[0.2s] ease-[ease-in-out] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)]  p-[30px] ">
      <img src="https://picsum.photos/180/220" alt="" />
      <div className="ml-[20px] flex flex-col gap-y-[15px] ">
        <h1 className="text-[16px] text-red-500 ">Hard Cover</h1>
        <h1 className="line-clamp-2 text-[20px] text-bold ">
          The Rural Diaries: Love, Livestock, and Big Life Lessons Down on
          Mischief Farm
        </h1>
        <h1 className="text-[18px]">Hillaru Burton</h1>
        <h1 className="text-[18px]">$15</h1>
      </div>
    </div>
  );
};

const UIHomepage = () => {
  const { isLogin, count, setCount, listCart, handleAdd, handleWishlist,wishlist } =
    useContext(MainContext);
  const handleBuy = (item) => {
    console.log("🚀itemBUy---->", item);
    handleAdd(item);
  };
  useEffect(() => {
    if (listCart) {
      setCount(listCart.length);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [listCart, wishlist]);

  return (
    <div>
      {/* Banner */}
      <section className="banner mb-[95px] ">
        <div className="container flex justify-between items-center py-[105px]">
          <div className="w-1/2">
            <p className="text-[#beb4b4] text-[24px] font-extrabold uppercase ">
              The Bookworm Editors&apos;
            </p>
            <h1 className="text-[#000] text-semibold text-[56px] py-[15px] ">
              Featured Books of the <br />{" "}
              <span className="text-[#000] font-extrabold text-[56px]">
                February
              </span>{" "}
            </h1>
            <button className="bg-[#000] rounded-0 btn-wide py-3 text-white text-[20px] button ">
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
      {/*Categories */}
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
      {/*Best Sellings */}
      <section>
        <div className="container mb-[95px] overflow-hidden ">
          <div className="mb-[30px] flex justify-between items-center">
            <h1 className="title ">Best Selling</h1>
            <button className="flex justify-center items-center gap-x-[13px] text-[18px] hover:text-red-500  ">
              View All
              <RightOutlined />
            </button>
          </div>
          <div className="grid grid-cols-5 ">
            {DATA_PAGE_1.map(
              (it, i) =>
                i < 5 && (
                  <Item
                    iconWishlist={it.isLike}
                    handleWishlist={() => handleWishlist(it)}
                    img={it.img}
                    className="bg-[#000]"
                    onClick={() => handleAdd(it)}
                    key={i + 1}
                    title={it.title}
                    authors={it.authors.name}
                    price={it.price}
                  />
                )
            )}
          </div>
        </div>
      </section>
      {/*Featured Books */}
      <section>
        <div className="container mb-[95px]">
          <h1 className="title text-center mb-[25px]">Featured Books</h1>
          <ul className="flex justify-center items-center gap-x-[40px] text-[#7c6e65] mb-[25px] ">
            <li className="text py-[15px] hover:text-[#000]">Featured</li>
            <li className="text py-[15px] hover:text-[#000]">On Sale</li>
            <li className="text py-[15px] hover:text-[#000]">Most Viewed</li>
          </ul>
          <div>
            <div className="grid grid-cols-6">
              {DATA_PAGE_1.map(
                (it, i) =>
                  i < 6 && (
                    <Item
                      iconWishlist={it.isLike}
                      handleWishlist={() => handleWishlist(it)}
                      img={it.img}
                      className="bg-[#000]"
                      onClick={() => handleBuy(it)}
                      key={i + 1}
                      title={it.title}
                      authors={it.authors.name}
                      price={it.price}
                    />
                  )
              )}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-6">
              {DATA_PAGE_1.map(
                (it, i) =>
                  i >= 6 && (
                    <Item
                      iconWishlist={it.isLike}
                      handleWishlist={() => handleWishlist(it)}
                      img={it.img}
                      className="bg-[#000]"
                      onClick={() => handleAdd(it.authors.id)}
                      key={i + 1}
                      title={it.title}
                      authors={it.authors.name}
                      price={it.price}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </section>
      {/*Deals */}
      <section className="bg-[#fff6f6]  mb-[95px]">
        <div className="container py-[90px] ">
          <div className="mb-[30px] flex justify-between items-center">
            <h1 className="title font-bold ">Deals of the Week</h1>
            <button className="flex justify-center items-center gap-x-[13px] text-[18px] hover:text-red-500  ">
              View All
              <RightOutlined />
            </button>
          </div>
          <div className="flex">
            <DealBox />
            <DealBox />
          </div>
        </div>
      </section>
      {/*New Releases */}
      <section className="mb-[95px]">
        <div className="container">
          <h1 className="title text-center mb-[40px]">New Release</h1>
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
            <div className="w-[70%] grid grid-cols-4 ">
              {DATA_PAGE_1.map(
                (it, i) =>
                  i < 8 && (
                    <Item
                      iconWishlist={it.isLike}
                      handleWishlist={() => handleWishlist(it)}
                      style={{ width: "1/3" }}
                      img={it.img}
                      onClick={() => handleBuy(it)}
                      key={i + 1}
                      title={it.title}
                      authors={it.authors.name}
                      price={it.price}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </section>
      {/*Biographies Books */}
      <section>
        <div className="container mb-[95px]">
          <div className="container ">
            <div className="mb-[30px] flex justify-between items-center">
              <h1 className="title font-bold ">Biographies Books</h1>
              <button className="flex justify-center items-center gap-x-[13px] text-[18px] hover:text-red-500  ">
                View All
                <RightOutlined />
              </button>
            </div>
          </div>
          <div className="flex">
            <BiographiesBooks />
            <BiographiesBooks />
            <BiographiesBooks />
          </div>
        </div>
      </section>
      {/*Favorites Authors */}
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
      {/* <section className="bg-[#fff6f6] mb-[95px] py-[50px]">
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
      </section> */}
    </div>
  );
};

export default UIHomepage;
