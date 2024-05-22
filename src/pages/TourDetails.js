import React from "react";
import { useParams } from "react-router-dom";
import { tours } from "../data/toursData";
import styles from "./TourDetails.module.css";

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>{tour.title}</h1>
      <div className={styles.gallery}>
        {tour.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${tour.title} ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
      <p>{tour.date}</p>
      <p>{tour.price}</p>
      <h2>Itinerary</h2>
      <pre>{tour.itinerary}</pre>
    </div>
  );
};

export default TourDetails;
