import React from "react";
import styles from "./ServiceItem.module.css";

const ServiceItem = ({ title, description, imageUrl }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.imageContainer} style={backgroundImageStyle}></div>
      <h2 className={styles.serviceTitle}>{title}</h2>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
};

export default ServiceItem;
