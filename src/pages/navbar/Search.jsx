import React from "react";
import Styles from "./navbar.module.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className={Styles.searchBlock}>
      <main style={{ position: "relative" }}>
        <span>
          <FaSearch />
        </span>
        <span>
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </span>
      </main>
    </div>
  );
};

export default Search;
