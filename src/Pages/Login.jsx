import React, { useState } from "react";
import "./common.css";
import logo from "../assets/logo.png";


const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h2>{signState}</h2>

        <form action="">
          {signState === "Sign Up" ? (
            <input type="text" placeholder="your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder=" email" />
          <input type="password" placeholder="password" />

          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={() => {setSignState('Sign Up')}}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account <span onClick={() => {setSignState('Sign In')}}>Sign In Now</span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
