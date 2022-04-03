import React, { useState } from "react";
import SignupForm from "./signup/SignupForm";
import LoginForm from "./login/LoginForm";
import "./auth.css";

function Authorize() {
  const [isSignup, setValue] = useState(true);

  const toggleFormDiv = () => {
    setValue(!isSignup);
  };

  return (
    <div class="">
      <div
        style={{ border: "1px solid", borderRadius: "none" }}
        className={
          isSignup
            ? "wrapper__area sign-up__Mode-active shadow-lg border"
            : "wrapper__area shadow-lg border"
        }
        id="wrapper_Area"
      >
        {/* <!-- Forms Area --> */}
        <div class="forms__area">
          {/* <!-- Login Form --> */}
          <LoginForm></LoginForm>

          {/* <!-- End Login Form --> */}
          <SignupForm></SignupForm>
          {/* <!-- Sign Up Form --> */}
        </div>
        {/* End Forms Area */}

        {/* <!-- Aside Area --> */}
        <div class="aside__area" id="aside_Area">
          <div class="login__aside-info">
            <h4>Hello</h4>
            <img
              src="https://d.top4top.io/p_1945xjz2y1.png"
              alt={`Person with a laptop`}
            />
            <p>Enter your personal details and start journey with us</p>
            <button
              onClick={() => toggleFormDiv()}
              class="side-btn"
              id="aside_signUp_Btn"
            >
              Sign Up
            </button>
          </div>
          <div class="sign-up__aside-info">
            <h4>Welcome</h4>
            <img
              src="https://e.top4top.io/p_1945sidbp2.png"
              alt={"Person on a rocket"}
            />
            <p>
              To Keep connected with us please login with your personal info
            </p>
            <button
              onClick={() => toggleFormDiv()}
              class="side-btn"
              id="aside_signIn_Btn"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorize;
