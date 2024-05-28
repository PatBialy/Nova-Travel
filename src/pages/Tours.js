// src/pages/Tours.js
import React from "react";
import { tours } from "../data/toursData";
import TourCard from "../components/TourCard";

const Tours = () => {
  return (
    <div>
      <h1>Our Tours</h1>
      <div className="tour-list">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
