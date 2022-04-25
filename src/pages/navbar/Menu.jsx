import React from "react";
import HomeLivingMegaMenu from "./HomeLivingMegaMenu";
import KidsMegaMenu from "./KidsMegaMenu";
import MenMegaMenu from "./MenMegaMenu";
import Styles from "./navbar.module.css";
import WomenMegaMenu from "./WomenMegaMenu";

const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
      <nav>
        <ul>
          <li
            className="drop-btn
          "
          >
            <a href="">Men</a>
            <div className={Styles.dropdown}>
              <MenMegaMenu />
            </div>
          </li>
          <li>
            <a href="">Women</a>
            <div className={Styles.dropdown}>
              <WomenMegaMenu />
            </div>
          </li>
          <li className={Styles.orangeBorder}>
            <a href="">Kids</a>
            <div className={Styles.dropdown}>
              <KidsMegaMenu />
            </div>
          </li>
          <li>
            <a href="" className={Styles.beigeBorder}>
              Home&Living
            </a>
            <div className={Styles.dropdown}>
              <HomeLivingMegaMenu />
            </div>
          </li>
          <li>
            <a href="">Beauty</a>
          </li>
          <li>
            <a href="">
              Studio<sup>new</sup>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
