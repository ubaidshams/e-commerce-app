import React from "react";
import AuthMenu from "./AuthMenu";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import Styles from "./navbar.module.css";

const Navbar = ({ isLoggedIn, phone, fname, handleLogout }) => {
  return (
    <section id={Styles.navbarBlock}>
      <article>
        <Logo />
        <Menu />
        <Search />
        <AuthMenu
          isLoggedIn={isLoggedIn}
          phone={phone}
          fname={fname}
          handleLogout={handleLogout}
        />
      </article>
    </section>
  );
};

export default Navbar;
