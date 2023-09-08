import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`${styles.hero} ${
        isHomePage ? styles.homepageBackground : ""
      }`}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome To Nova Travel</h1>
        <h2 className={styles.heroSubtitle}>Explore The World With Us</h2>
      </div>
    </div>
  );
};

export default Hero;
