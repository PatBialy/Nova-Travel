import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navToggle} onClick={toggleMenu}>
        {menuVisible ? <span>&#x2716;</span> : <span>&#x2630;</span>}
      </div>
      <ul className={`${styles.navList} ${menuVisible ? styles.active : ""}`}>
        <li>
          <Link to="/" className={styles.navLink} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className={styles.navLink} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contactus" className={styles.navLink} onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
