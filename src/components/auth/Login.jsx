import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NetworkContext } from "../../apis/ContextApi";
import "./login.css";

const Login = () => {
  let [uPhone, setUPhone] = useState("");
  let [uPass, setUPass] = useState("");
  let { userAuth } = useContext(NetworkContext);
  let navigate = useNavigate();
  let handleSubmit = e => {
    e.preventDefault();
    userAuth(uPhone, uPass);
    navigate("/");
  };
  return (
    <section className="loginBlock">
      <article>
        <div className=" imgBlock">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg"
            alt=""
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="heading">
            <p>
              <b>login</b>
            </p>
          </div>
          <div className="form-control">
            <input
              type="tel"
              placeholder="+91 | Mobile Number"
              value={uPhone}
              name="uPhone"
              onChange={e => {
                setUPhone(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              value={uPass}
              name="uPass"
              onChange={e => {
                setUPass(e.target.value);
              }}
            />
          </div>
          <p className="terms-conditions">
            By continuing, I agree to the <a href="">Terms of Use</a> &
            <a href="">Privacy Policy</a>
          </p>
          <div className="form-control">
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <p className="registerLink">
            Don't have an account yet? <Link to="/signup">Register now</Link>
          </p>
        </form>
      </article>
    </section>
  );
};

export default Login;
