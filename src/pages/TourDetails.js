import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { tours } from "../data/toursData";
import styles from "./TourDetails.module.css";

Modal.setAppElement("#root"); // to avoid accessibility issues

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!tour) return <div>Tour not found</div>;

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
      <h1 className={styles.title}>{tour.title}</h1>
      <div className={styles.details}>
        <p className={styles.description}>
          <strong>Description:</strong>{" "}
          <span
            style={{
              color: "#2ebdec",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {tour.description}
          </span>
        </p>
        <p className={styles.date}>
          <strong>Date:</strong>{" "}
          <span
            style={{
              color: "#2ebdec",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {tour.date}
          </span>
        </p>
        <p className={styles.price}>
          <strong>Price:</strong>{" "}
          <span
            style={{
              color: "#2ebdec",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {tour.price}
          </span>
        </p>
        <p className={styles.itinerary}>
          <strong>Itinerary:</strong>
        </p>
        <pre
          style={{
            color: "#2ebdec",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {tour.itinerary}
        </pre>
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
          &times;
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
