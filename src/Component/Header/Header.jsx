import React from "react";
import styles from "./Header.module.css";
import logo from "./../../img/github.png";
import SearchUsers from "./SearchForm";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.img}>
        <img src={logo} />
      </div>
      <div className={styles.textarea}>
        <SearchUsers />
      </div>
    </div>
  );
};

export default Header;
