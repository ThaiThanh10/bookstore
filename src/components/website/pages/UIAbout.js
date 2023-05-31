import asset from "@/plugins/assets";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const iconStyle = { width: "56px", height: "68px" };
export const TeamBox = ({ imgSrc, name, position }) => {
  return (
    <div className=" border border-solid border-[#eae8e4] pt-[22px] pb-[20px] px-[20px]  ">
      <img
        className="mb-[16px]  aspect-[0.88] "
        src={asset(`${imgSrc}`)}
        alt=""
      />
      <h1 className=" text-[18px] text-[#161619] mb-[16px]  ">{name}</h1>
      <p className=" text-[16px] text-[#161619]   ">{position}</p>
    </div>
  );
};

const UIAbout = () => {
  return (
    <div className="pt-[80px]">
      <h1 className=" text-[32px] tracking-[2px] font-semibold text-center mb-[60px] ">
        About Us
      </h1>
      <img
        className=" w-full h-auto "
        src={asset("/images/img-about.jpg")}
        alt=""
      />
      <div className="max-w-[1050px] translate-y-[-30%] bg-[#fff] mx-auto p-[48px_24px_0_72px]  ">
        <h1 className=" text-[40px] tracking-[1px] font-semibold  ">
          Welcome to Bookworm
        </h1>
        <p className="text my-[42px] italic ">
          &apos; Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model search for eolved over sometimes by
          accident, sometimes on purpose &apos;
        </p>
        <h2 className=" text-[22px] font-semibold mb-[30px]  ">
          What we really do ?
        </h2>
        <p className="text mb-[30px] ">
          Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
          fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
          vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices
          massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui
          mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.
          Pellentesque vitae eros eget enim mollis placerat. Aliquam non
          tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin
          sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean
          dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit
          amet condimentum mi ligula sit amet augue. Pellentesque vitae eros
          eget enim mollis placerat.
        </p>
        <div className=" flex items-start justify-between ">
          <div className="w-[47%]">
            <h2 className=" text-[22px] font-semibold mb-[20px]  ">
              Our Vision
            </h2>
            <p className="text">
              Pellentesque sodales augue eget ultricies ultricies. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Curabitur sagittis ultrices condimentum.
            </p>
          </div>
          <div className="w-[47%]">
            <h2 className=" text-[22px] font-semibold mb-[20px]  ">
              Our Vision
            </h2>
            <p className="text">
              Pellentesque sodales augue eget ultricies ultricies. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Curabitur sagittis ultrices condimentum.
            </p>
          </div>
        </div>
      </div>
      <div className=" container flex items-center justify-between mb-[90px] ">
        <div className="text-center mb-3 ">
          <div className="text-[50px] font-semibold mb-[7px] ">45M</div>
          <span className="text-[22px]">Active Readers</span>
        </div>
        <div className="text-center mb-3 ">
          <div className="text-[50px] font-semibold mb-[7px] ">+6k</div>
          <span className="text-[22px]">Total Pages</span>
        </div>
        <div className="text-center mb-3 ">
          <div className="text-[50px] font-semibold mb-[7px] ">30.6M</div>
          <span className="text-[22px]">Buyers Activie</span>
        </div>
        <div className="text-center ">
          <div className="text-[50px] font-semibold mb-[7px] ">283</div>
          <span className="text-[22px]">Cup Of Coffe</span>
        </div>
      </div>
      <div className="container mb-[90px]">
        <h1 className=" text-[32px] tracking-[2px] font-semibold text-center mb-[60px] ">
          Why Us
        </h1>
        <div className="flex justify-between items-center">
          <div>
            <FontAwesomeIcon style={iconStyle} color="#f75454" icon={faTruck} />
            <h1 className=" text-[22px] font-medium mt-[15px] mb-[10px]  ">
              Free Delivery
            </h1>
            <p className="text max-w-[320px] ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              style={iconStyle}
              color="#f75454"
              icon={faCreditCard}
            />
            <h1 className=" text-[22px] font-medium mt-[15px] mb-[10px]  ">
              Secure Payment
            </h1>
            <p className="text max-w-[320px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              style={iconStyle}
              color="#f75454"
              icon={faCircleCheck}
            />
            <h1 className=" text-[22px] font-medium mt-[15px] mb-[10px]  ">
              Money Back Guarantee
            </h1>
            <p className="text max-w-[320px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              style={iconStyle}
              color="#f75454"
              icon={faInfoCircle}
            />
            <h1 className=" text-[22px] font-medium mt-[15px] mb-[10px]  ">
              24/7 Support
            </h1>
            <p className="text max-w-[320px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-[90px]  ">
        <h1 className=" text-[32px] tracking-[2px] font-semibold text-center mb-[60px] ">
          Our Team
        </h1>
        <div className="flex items-start ">
          <TeamBox
            imgSrc="/images/abdreKowalsy.png"
            name="Andre Kowalsy"
            position="Client Care"
          />
          <TeamBox
            imgSrc="/images/thomasSnow.png"
            name="Thomas Snow"
            position="CEO/Founder"
          />
          <TeamBox
            imgSrc="/images/susanMcCain.png"
            name="Susan McCain"
            position="Packaging Girl"
          />
          <TeamBox
            imgSrc="/images/pamelaDoe.png"
            name="Pamela Doe"
            position="Delivery Driver"
          />
          <TeamBox
            imgSrc="/images/susanMcCain.png"
            name="Anna Baranov"
            position="Support"
          />
        </div>
      </div>
      <div className="container mb-[90px] ">
        <h1 className=" text-[32px] tracking-[2px] font-semibold text-center mb-[60px] ">
          Company Partners
        </h1>
        <div className="flex justify-between items-center">
          <img src={asset("/images/themeForest.png")} alt="" />
          <img src={asset("/images/codeCanyon.png")} alt="" />
          <img src={asset("/images/audioJungle.png")} alt="" />
          <img src={asset("/images/3docean.png")} alt="" />
          <img src={asset("/images/codeCanyon.png")} alt="" />
          <img src={asset("/images/themeForest.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UIAbout;
