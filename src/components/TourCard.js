// src/components/TourCard.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./TourCard.module.css";

const TourCard = ({ tour }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={tour.images[0]} // Assuming the first image is used as the card image
          alt={tour.title}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.content}>
        <h2>{tour.title}</h2>
        <p>Date: {tour.date}</p>
        <p>Price: {tour.price}</p>
        <Link to={`/tours/${tour.id}`} className={styles.link}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
