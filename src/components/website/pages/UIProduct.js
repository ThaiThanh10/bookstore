import asset from "@/plugins/assets";
import React, { useState } from "react";
import { Rate } from "antd";
import {
  DislikeOutlined,
  HeartOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { DATA_BEST_SELLING } from "./UIHomepage/DATA_BEST_SELLING";
import Item from "./UIHomepage/Item";
const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

export const ReviewBox = () => {
  return (
    <div className="w-full border-b border-b-solid border-[#eae8e4] mb-[30px] ">
      <div className="flex justify-start ">
        <h1 className=" text-[20px] font-medium tracking-wide text-left mr-[10px] mt-[6px] ">
          Amazing Story
        </h1>
        <Rate value="5" />
      </div>
      <p className="my-[13px]">
        Such an incredibly complex story! I had to buy it because there was a
        waiting list of 30+ at the local library for this book. Thrilled that I
        made the purchase
      </p>
      <p>February 22, 2020</p>
      <div className="flex justify-start items-center gap-x-[30px] py-[30px]">
        <div className="flex ">
          <LikeOutlined />
          <p className="ml-[6px]">90</p>
        </div>
        <div className="flex ">
          <DislikeOutlined />
          <p className="ml-[6px]">20</p>
        </div>
      </div>
    </div>
  );
};

const UIProduct = () => {
  const [value, setValue] = useState();
  return (
    <div className="container mb-[90px] mt-[70px] ">
      <div className=" translate-y-[-20px] flex justify-between items-center pb-[30px] ">
        <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
          Product Detail
        </h1>
        <h1 className="text-[18px]">Home / Shop / Product</h1>
      </div>
      <span className="w-screen h-[1px] bg-[#eae8e4] block scale-x-150 "></span>
      <div>
        <div className=" flex justify-normal items-start border-r-[#eae8e4] border-r border-solid  ">
          <div className="w-[40%]   ">
            <img
              className="mx-auto pt-[55px] pb-[100px] "
              src={asset("images/productDetail.jpg")}
              alt=""
            />
          </div>
          <div className="w-[60%] pt-[55px] px-[50px] border-l-[#eae8e4] border-l border-solid ">
            <div>
              <h1 className=" text-[28px] font-semibold tracking-wide leading-[48px] text-left ">
                Where the Crawdads Sing
              </h1>
              <div className="flex justify-center items-center gap-x-[20px] w-max ">
                <span>
                  <Rate tooltips={desc} value="4" />
                  {value ? (
                    <span className="text-[16px] ml-[20px] ">
                      {desc[value - 1]}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
                <p className="text-[16px]  ">(3,714)</p>
                <h1 className="text-[16px]  ">Author: Anna Banks</h1>
              </div>
              <h1 className=" text-[26px] font-medium tracking-wide leading-[24px] text-left py-[20px] ">
                $29.95 - $59.95
              </h1>
              <h1 className="text-[20px] font-medium ">Book Format: </h1>
              <div className="flex justify-between items-center w-[45%] py-[25px] ">
                <button className="text-left pb-[10px] w-[90px]  border-b-[#eae8e4] border-b border-solid hover:border-b-[#000] active:border-b-[#000] ">
                  <h1 className="text-[18px]  ">Hardcover</h1>
                  <p className="text-[18px] my-[6px] ">$9,59</p>
                </button>
                <button className="text-left pb-[10px] w-[90px] border-b-[#eae8e4] border-b border-solid hover:border-b-[#000] active:border-b-[#000] ">
                  <h1 className="text-[18px]  ">Paperback</h1>
                  <p className="text-[18px] my-[6px] ">$8,59</p>
                </button>
                <button className="text-left pb-[10px] w-[90px] border-b-[#eae8e4] border-b border-solid hover:border-b-[#000] active:border-b-[#000] ">
                  <h1 className="text-[18px]  ">Kindle</h1>
                  <p className="text-[18px] my-[6px] ">$7,59</p>
                </button>
              </div>
              <p className="pb-[35px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat.
              </p>
              <div>
                <button className="bg-[#000] rounded-0 btn-wide py-4 px-10 text-white text-[20px] button ">
                  Go Back
                </button>
              </div>
            </div>
            <div className="mt-[50px] w-full border-t-[#eae8e4] border-t border-solid   ">
              <div className=" py-[30px] flex justify-center items-center w-max gap-x-[30px] ">
                <button className="flex justify-center items-center gap-x-[15px] text-[20px] ">
                  <HeartOutlined />
                  Add to wishlist
                </button>
                <button className="flex justify-center items-center gap-x-[15px] text-[20px] ">
                  <ShareAltOutlined />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="w-screen h-[1px] bg-[#eae8e4] block scale-x-150 "></span>
      <div className=" mb-[90px]">
        <div className="flex justify-center items-center gap-x-[90px] py-[30px] ">
          <li className="text-left list-none pb-[10px] w-[135px]  border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
            <h1 className="text-[18px] mx-auto w-max ">Descriptions</h1>
          </li>
          <li className="text-left list-none pb-[10px] w-[135px] border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
            <h1 className="text-[18px] mx-auto w-max ">Product Detail</h1>
          </li>
          <li className="text-left list-none pb-[10px] w-[135px] border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
            <h1 className="text-[18px] mx-auto w-max ">Video</h1>
          </li>
          <li className="text-left list-none pb-[10px] w-[135px] border-b-[#eae8e4] border-b-[2px] border-solid hover:border-b-[#000] active:border-b-[#000] ">
            <h1 className="text-[18px] mx-auto w-max ">Review</h1>
          </li>
        </div>
        <div className="max-w-[1080px] mx-auto mb-[30px] ">
          <p>
            We aim to show you accurate product information. Manufacturers,
            suppliers and others provide what you see here, and we have not
            verified it. See our disclaimer
          </p>
          <p>
            We aim to show you accurate product information. Manufacturers,
            suppliers and others provide what you see here, and we have not
            verified it. See our disclaimer
          </p>
          <p>A Reese Witherspoon x Hello Sunshine Book Club Pick</p>
          <p>
            &apos;I can&apos;t even express how much I love this book! I
            didn&apos;t want this story to end!&apos;--Reese Witherspoon
          </p>
          <p className="my-[20px]">
            &apos;Painfully beautiful.&apos;--The New York Times Book Review
          </p>
          <p className="my-[20px]">
            &apos;Perfect for fans of Barbara Kingsolver.&apos;--Bustle
          </p>
          <p className="mb-[20px]">
            For years, rumors of the &apos;Marsh Girl&apos; have haunted Barkley
            Cove, a quiet town on the North Carolina coast. So in late 1969,
            when handsome Chase Andrews is found dead, the locals immediately
            suspect Kya Clark, the so-called Marsh Girl. But Kya is not what
            they say. Sensitive and intelligent, she has survived for years
            alone in the marsh that she calls home, finding friends in the gulls
            and lessons in the sand. Then the time comes when she yearns to be
            touched and loved. When two young men from town become intrigued by
            her wild beauty, Kya opens herself to a new life--until the
            unthinkable happens.
          </p>
          <p className="mb-[20px]">
            Perfect for fans of Barbara Kingsolver and Karen Russell, Where the
            Crawdads Sing is at once an exquisite ode to the natural world, a
            heartbreaking coming-of-age story, and a surprising tale of possible
            murder. Owens reminds us that we are forever shaped by the children
            we once were, and that we are all subject to the beautiful and
            violent secrets that nature keeps
          </p>
          <p>WHERE THE CRAWDADS LP</p>
        </div>
        <span className="w-screen h-[1px] bg-[#eae8e4] block scale-x-150 "></span>
      </div>
      <div>
        <table class="table border-none w-[1080px] mx-auto">
          <tbody className="w-full">
            <tr className="w-full border-none  ">
              <th class="px-4 w-[40%] px-xl-5 border-none border-0">
                Format:{" "}
              </th>
              <td className="border-none border-0 mx-auto">
                Paperback | 384 pages
              </td>
            </tr>
            <tr className="w-full border-none">
              <th class="px-4 w-[40%] px-xl-5 border-none border-0">
                Dimensions
              </th>
              <td className="border-none border-0">9126 x 194 x 28mm | 301g</td>
            </tr>
            <tr className="w-full border-none">
              <th class="px-4 w-[40%] px-xl-5 border-none border-0">
                Publication date:{" "}
              </th>
              <td className="border-none border-0">20 Dec 2020</td>
            </tr>
            <tr className="w-full border-none">
              <th class="px-4 w-[40%] px-xl-5 border-none border-0">
                Publisher:
              </th>
              <td className="border-none border-0">Little, Brown Book Group</td>
            </tr>
            <tr className="w-full border-none">
              <th class="px-4 w-[40%] px-xl-5 border-none border-0">
                Imprint:
              </th>
              <td className="border-none border-0">Corsair</td>
            </tr>
            <tr className="w-full border-none">
              <th class="px-4 w-[40%] px-xl-5 border-none border-0">
                Publication City/Country:
              </th>
              <td className="border-none border-0">London, United Kingdom</td>
            </tr>
            <tr className="w-full border-none">
              <th class="px-4 w-[40%] px-xl-5 border-none border-0">
                Language:
              </th>
              <td className="border-none border-0">English</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" flex justify-center items-center py-[60px] ">
        <div className="border-[1px]  w-max relative border-[#eae8e4] p-[25px] bg-[#fff] flex flex-col justify-between items-start hover:border-[#000] ">
          <img
            className="mb-3 px-4 mx-auto"
            src="https://picsum.photos/180/220"
            alt=""
          />
          <div className="overflow-hidden">
            <h1 className="title max-w-[200px]  ">
              Where The Crawdads Sing Overview
            </h1>
            <h1 className="text my-3">Solomon</h1>
          </div>
          <p className="absolute bottom-0 right-0 text-[14px] text-[#fff] bg-[#000] px-[15px] py-[5px] ">
            1:45
          </p>
        </div>
        <div className="border-[1px]  w-max relative border-[#eae8e4] p-[25px] bg-[#fff] flex flex-col justify-between items-start hover:border-[#000] ">
          <img
            className="mb-3 px-4 mx-auto"
            src="https://picsum.photos/180/220"
            alt=""
          />
          <div className="overflow-hidden">
            <h1 className="title max-w-[200px] ">
              Where The Crawdads Sing Overview
            </h1>
            <h1 className="text my-3">Solomon</h1>
          </div>
          <p className="absolute bottom-0 right-0 text-[14px] text-[#fff] bg-[#000] px-[15px] py-[5px] ">
            2:21
          </p>
        </div>
      </div>
      <div className="max-w-[1080px] mx-auto mb-[90px] ">
        <h1 className=" text-[24px] font-medium tracking-wide leading-[48px] text-left ">
          Customer Review
        </h1>
        <div className="flex justify-between mt-[30px] mb-[50px]">
          <div className="w-[45%]">
            <div className="flex">
              <div className=" flex justify-start items-center gap-x-[30px] ">
                <h1 className="text-[60px] font-bold text-left ">4.6</h1>
                <span>
                  <p className="text-[18px] text-[#161619]">3,714 reviews</p>
                  <Rate tooltips={desc} value={value} />
                </span>
              </div>
            </div>
            <div className="mt-[30px]">
              <button className=" w-[180px] py-[14px] px-[18px]  text-[18px] border border-solid border-[#000] hover:bg-[#000] hover:text-white ">
                See all reviews
              </button>
              <button className=" w-[180px] py-[14px] px-[18px]  mx-[20px] text-[18px] border border-solid border-[#000] hover:bg-[#000] hover:text-white ">
                Write a review
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-[5px] w-1/2">
            <Rate tooltips={desc} value="1" />
            <Rate tooltips={desc} value="2" />
            <Rate tooltips={desc} value="3" />
            <Rate tooltips={desc} value="4" />
            <Rate tooltips={desc} value="5" />
          </div>
        </div>
        <div>
          <h1 className=" text-[20px] font-medium tracking-wide leading-[48px] text-left mb-[30px] ">
            1-5 of 44 reviews
          </h1>
          <div>
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
          </div>
        </div>
        <div>
          <h1 className=" text-[24px] font-semibold tracking-wide leading-[48px] text-left ">
            Write a review
          </h1>
          <div className="flex justify-start items-center gap-x-[20px] mb-[30px] ">
            <h1 className=" text-[18px] font-medium tracking-wide text-left mt-[4px] ">
              Rate:{" "}
            </h1>
            <Rate tooltips={desc} onChange={setValue} value={value} />
          </div>
          <h1 className=" text-[18px] font-medium tracking-wide text-left mt-[4px] mb-[20px] ">
            Details please! Your review helps other shoppers.
          </h1>
          <textarea
            className=" block w-full text-[16px] text-[#7c6e65] border border-solid border-[#dfdcd7] mb-[30px] p-4 focus:border-[#161619] "
            rows="7"
            id="descriptionTextarea"
            placeholder="What did you like or dislike? What should other shoppers know before buying?"
          ></textarea>
          <h1 className=" text-[18px] font-medium tracking-wide text-left mt-[4px] mb-[20px] ">
            Title
          </h1>
          <input
            type="text"
            className=" w-full text-[16px] text-[#7c6e65] border border-solid border-[#dfdcd7] mb-[30px] p-4 focus:border-[#161619]   rounded-0 px-4"
            placeholder="3000 characters remaining"
          ></input>
          <button className="bg-[#000] ml-[4px] rounded-0 btn-wide py-4 px-10 text-white text-[20px] button ">
            Submit Review
          </button>
        </div>
      </div>
      <div>
        <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left mb-[30px] ">
          Customer Also Considered
        </h1>
        <div className="grid grid-cols-5 ">
          {DATA_BEST_SELLING.map((it, i) => (
            <div key={i}>
              <Item
                img={it.img}
                onClick={() => handleAdd(it.authors.id)}
                title={it.title}
                authors={it.authors.name}
                price={it.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIProduct;
