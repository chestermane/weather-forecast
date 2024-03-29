import React from "react";
import { FiMapPin } from "react-icons/fi";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <FiMapPin />
      <p>9555 Kings Charter Drive, Ashland VA 23005</p>
    </div>
  );
}

export default Header;
