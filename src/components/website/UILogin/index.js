import { useState } from "react";

import "./style.scss";

// import the icons you need
import FormLogin from "@/components/website/UILogin/FormLogin";
import FormSignUp from "@/components/website/UILogin/FormSignUp";

const UILogin = () => {
  const [isRightPanel, setIsRightPanel] = useState(true);

  return (
    <div className="ui-login px-[20px]">
      <div
        className={`container my-[150px] ${
          isRightPanel ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <FormSignUp />
        <FormLogin />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setIsRightPanel(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setIsRightPanel(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Created with <i className="fa fa-heart" /> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default UILogin;
