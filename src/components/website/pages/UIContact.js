import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UIContact = () => {
  return (
    <div className="max-w-[1050px] p-[48px_16px_0_72px] mx-auto bg-[#fff] mb-[90px] ">
      <h1 className=" text-[40px] font-semibold tracking-wide leading-[48px] text-left  ">
        Contact Information
      </h1>
      <p class="medium italic my-[48px] text-[18px] font-medium ">
        We will answer any questions you may have about our online sales, rights
        or partnership service right here.
      </p>
      <div className="flex  items-start mb-[60px] ">
        <div className="w-[47%]">
          <h1 className="text-[22px] leading-[24px] mb-[28px] ">
            New York Office
          </h1>
          <address class="text-[18px] mb-[32px]">
            <span class="mb-2 font-medium text-dark">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United
              States
            </span>
          </address>
          <div className="flex flex-col ">
            <a href="mailto:sale@bookworm.com" class="text-[18px] mb-[32px]">
              sale@bookworm.com
            </a>
            <a href="tel:+1246-345-0695" class="text-[18px] ">
              +1 246-345-0695
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-[22px] leading-[24px] mb-[28px] ">
            New York Office
          </h1>
          <address class="text-[18px] mb-[32px]">
            <span class="mb-2 font-medium text-dark">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United
              States
            </span>
          </address>
          <div className="flex flex-col ">
            <a href="mailto:sale@bookworm.com" class="text-[18px] mb-[32px]">
              sale@bookworm.com
            </a>
            <a href="tel:+1246-345-0695" class="text-[18px] ">
              +1 246-345-0695
            </a>
          </div>
        </div>
      </div>
      <div className="mb-[80px]">
        <h1 className="text-[22px] leading-[24px] mb-[28px] ">Social Media</h1>
        <ul className="w-1/4 flex justify-between items-center ">
          <li>
            <svg
              width="18px"
              height="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {" "}
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </li>
          <li>
            <svg
              width="18px"
              height="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </li>
          <li>
            <svg
              width="18px"
              height="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
          </li>
          <li>
            <svg
              width="18px"
              height="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </li>
          <li>
            <svg
              width="18px"
              height="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
            </svg>
          </li>
        </ul>
      </div>
      <div>
        <h1 className=" text-[40px] font-semibold tracking-wide leading-[48px] text-left mb-[30px] ">
          Get In Touch
        </h1>
        <div>
          <div className="flex  items-start gap-x-[30px] mb-[40px]">
            <div className="w-[48%]">
              <p className=" mb-[10px] text ">Name</p>
              <input
                className="block w-full h-[50px] text-[16px] font-normal leading-normal text-[#7c6e65] bg-white bg-clip-padding border px-4 py-[0.844rem] rounded-none border-solid border-[#dfdcd7]"
                type="text"
                name="name"
              />
            </div>
            <div className="w-[48%]">
              <p className=" mb-[10px] text ">Email</p>
              <input
                className="block w-full h-[50px] text-[16px] font-normal leading-normal text-[#7c6e65] bg-white bg-clip-padding border px-4 py-[0.844rem] rounded-none border-solid border-[#dfdcd7]"
                type="text"
                name="email"
              />
            </div>
          </div>
          <div className=" mb-[40px]">
            <p className=" mb-[10px] text ">Subject</p>
            <input
              className="block w-full h-[50px] text-[16px] font-normal leading-normal text-[#7c6e65] bg-white bg-clip-padding border px-4 py-[0.844rem] rounded-none border-solid border-[#dfdcd7]"
              type="text"
              name="subject"
            />
          </div>
          <div className=" mb-[40px]">
            <p className=" mb-[10px] text ">
              Details please! Your review helps other shoppers.
            </p>
            <textarea
              id="exampleFormControlInput4"
              className=" rounded-0 p-3 w-full text-[16px] font-normal leading-normal  border-solid border-[#dfdcd7] border"
              rows="6"
              cols="77"
              name="detail"
              placeholder="What did you like or dislike? What should other shoppers know before buying?"
            ></textarea>
          </div>
          <button className="bg-[#000] rounded-0 py-[20px] px-[48px] text-white text-[20px] button ">
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIContact;
