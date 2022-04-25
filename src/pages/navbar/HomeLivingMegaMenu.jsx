import React from "react";
import Styles from "./navbar.module.css";
const HomeLivingMegaMenu = () => {
  return (
    <aside className="homeAndLiving">
      <div>
        <ul>
          <li>
            <a href="/bedding" className={Styles.beige}>
              Bed Linen &amp; Furnishing
            </a>
          </li>
          <li>
            <a href="/bedsheets">Bedsheets</a>
          </li>
          <li>
            <a href="/bedding-sets">Bedding Sets</a>
          </li>
          <li>
            <a href="/blankets-quilts-and-dohars">
              Blankets, Quilts &amp; Dohars
            </a>
          </li>
          <li>
            <a href="/pillows">Pillows &amp; Pillow Covers</a>
          </li>
          <li>
            <a href="/bed-covers">Bed Covers</a>
          </li>
          <li>
            <a href="https://www.myntra.com/diwan-set?src=bc">Diwan Sets</a>
          </li>
          <li>
            <a href="https://www.myntra.com/home-furnishing?f=Categories%3AChair%20Cover%2CChair%20Pads">
              Chair Pads &amp; Covers
            </a>
          </li>
          <li>
            <a href="https://www.myntra.com/sofa-covers">Sofa Covers</a>
          </li>
          <div className={Styles.hrLine}></div>
          <li>
            <a href="/flooring" className={Styles.beige}>
              Flooring
            </a>
          </li>
          <li>
            <a href="/carpets">Carpets</a>
          </li>
          <li>
            <a href="/floor-mats-dhurries">Floor Mats &amp; Dhurries</a>
          </li>
          <li>
            <a href="/doormats">Door Mats</a>
          </li>
        </ul>
      </div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </aside>
  );
};

export default HomeLivingMegaMenu;
