import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { NetworkContext } from "../../apis/ContextApi";
import Axios from "../../apis/Axios";

const Register = () => {
  let [fname, setfname] = useState("");
  let [lname, setlname] = useState("");
  let [phone, setphone] = useState("");
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  let [gender, setgender] = useState("");
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let { registerAuth } = useContext(NetworkContext);
  let navigate = useNavigate();
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      // registerAuth(fname, uLName, phone, password);
      let payload = {
        fname,
        lname,
        phone,
        password,
        email,
        gender,
        isLoggedIn,
      };
      await Axios.post("/users", payload);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
    setfname("");
    setemail("");
    setgender("");
    setlname("");
    setpassword("");
    setphone("");
  };
  return (
    <section className="signupBlock">
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
              <b>signup</b>
            </p>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Frist name"
              value={fname}
              name="fname"
              onChange={e => {
                setfname(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last name"
              value={lname}
              name="lname"
              onChange={e => {
                setlname(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="tel"
              placeholder="+91 | Mobile Number"
              value={phone}
              name="phone"
              onChange={e => {
                setphone(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="abc@example.com"
              value={email}
              name="email"
              onChange={e => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              name="password"
              onChange={e => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div
            className="form-control genderContainer"
            value={gender}
            onChange={e => {
              setgender(e.target.value);
            }}
          >
            <label htmlFor="Gender">Gender</label>
            <div className="genderRadio">
              <div className="gender">
                <input type="radio" name="gender" value="male" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" name="gender" value="female" id="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <p className="terms-conditions">
            By continuing, I agree to the <a href="">Terms of Use</a> &
            <a href="">Privacy Policy</a>
          </p>
          <div className="form-control">
            <button type="submit" onClick={handleSubmit}>
              register
            </button>
          </div>
          <p className="loginLink">
            Already have an account ? <Link to="/login">Login now</Link>
          </p>
        </form>
      </article>
    </section>
  );
};

export default Register;
