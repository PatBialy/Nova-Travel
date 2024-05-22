import React from "react";
import { tours } from "../data/toursData";
import TourCard from "../components/TourCard";
import styles from "./Tours.module.css";

const Tours = () => {
  return (
    <div className={styles.container}>
      <h1>Tours for 2024/2025</h1>
      <div className={styles.tours}>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
