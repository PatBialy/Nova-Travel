import React from "react";
import { Link } from "react-router-dom";
import styles from "./TourCard.module.css";

const TourCard = ({ tour }) => {
  return (
    <div className={styles.card}>
      <img src={tour.images[0]} alt={tour.title} className={styles.cardImage} />
      <div className={styles.content}>
        <h2>{tour.title}</h2>
        <p>{tour.description}</p>
        <p>{tour.date}</p>
        <p>{tour.price}</p>
        <Link to={`/tours/${tour.id}`} className={styles.link}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
