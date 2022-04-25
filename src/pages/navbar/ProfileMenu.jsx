import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { NetworkContext } from "../../apis/ContextApi";
import "./profilemenu.css";
const ProfileMenu = () => {
  let { isLoggedIn, fname, phone, handleLogout } = useContext(NetworkContext);
  return (
    <section className="profileMenu">
      <div className="welcomeBlock">
        {isLoggedIn ? (
          <Fragment>
            <h6>hello {fname}</h6>
            <p>{phone}</p>
          </Fragment>
        ) : (
          <>
            <h6>welcome</h6>
            <p>To access account and manage orders</p>
            <Link to="/signup">login / signup</Link>
          </>
        )}
      </div>
      <div className="primaryLinks">
        <a href="">orders</a>
        <a href="">wishlist</a>
        <a href="">gift cards</a>
        <a href="">contact us</a>
        <a href="">
          myntra insider <span>new</span>
        </a>
      </div>
      <div className="secondaryLinks">
        <a href="">myntra credit</a>
        <a href="">coupons</a>
        <a href="">saved cards</a>
        <a href="">saved addresses</a>
      </div>
      {isLoggedIn ? (
        <>
          <div className="profileLinks">
            <a href="">edit profile</a>
            <a href="#" onClick={handleLogout}>
              logout
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProfileMenu;
