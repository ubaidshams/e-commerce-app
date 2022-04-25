import React from "react";
import Styles from "./navbar.module.css";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";

const AuthMenu = ({ isLoggedIn, fname, phone, handleLogout }) => {
  return (
    <div className={Styles.authMenuBlock}>
      <ul>
        <li>
          <span className="center">
            <FaUser />
          </span>
          <span>
            <Link to="/profile">Profile</Link>
          </span>
          <div className={Styles.profileDropdown}>
            <ProfileMenu
              isLoggedIn={isLoggedIn}
              fname={fname}
              phone={phone}
              handleLogout={handleLogout}
            />
          </div>
        </li>
        <li>
          <span className="center">
            <FaHeart />
          </span>
          <span>
            <a href="#">wishlist</a>
          </span>
        </li>
        <li>
          <span className="center">
            <FaShoppingBag />
          </span>
          <span>
            <a href="#">bag</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AuthMenu;
