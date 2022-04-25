import React from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";

const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <Link to="/">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-hm-logohmlogobrand-logologos-821523995206jiskp.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
