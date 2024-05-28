// src/pages/TourDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { tours } from "../data/toursData";
import styles from "./TourDetails.module.css";

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!tour) return <div>Tour not found</div>;

  const isMobile = window.innerWidth <= 768;

  const openModal = (image) => {
    if (!isMobile) {
      setSelectedImage(image);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <h1>{tour.title}</h1>
      <div className={styles.details}>
        <p className={styles.description}>
          <strong>Description:</strong> {tour.description}
        </p>
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
          <div
            key={index}
            className={styles.imageContainer}
            onClick={() => openModal(image)}
            style={{ cursor: isMobile ? "default" : "pointer" }}
          >
            <img
              src={image}
              alt={`${tour.title} ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Expanded view"
            className={styles.expandedImage}
          />
        )}
      </Modal>
    </div>
  );
};

export default TourDetails;
