// src/pages/TourDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { tours } from "../data/toursData";
import styles from "./TourDetails.module.css";

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) return <div>Tour not found</div>;

  return (
    <div className={styles.container}>
      <h1>{tour.title}</h1>
      <div className={styles.details}>
        <p>
          <strong>Date:</strong> {tour.date}
        </p>
        <p>
          <strong>Price:</strong> {tour.price}
        </p>
        <p>
          <strong>Itinerary:</strong>
        </p>
        <pre>{tour.itinerary}</pre>
      </div>
      <div className={styles.gallery}>
        {tour.images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img
              src={image}
              alt={`${tour.title} ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDetails;
