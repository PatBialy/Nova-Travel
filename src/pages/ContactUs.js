import React from "react";
import styles from "./ContactUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import bird from "../assets/bird.PNG";

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Nova Travel</h1>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faMapMarker} className={styles.icon} />
          <p>10 Market Street, Passaic, New Jersey</p>
        </div>

        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a
            href="mailto:novatravel10@outlook.com"
            className={styles.emailLink}
          >
            novatravel10@outlook.com
          </a>
        </div>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <p>201-906-9101</p>
        </div>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <ul className={styles.officeHoursList}>
            <li>Mon - Fri: 10:00 AM - 6:00 PM</li>
          </ul>
        </div>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <ul className={styles.officeHoursList}>
            <li>Sat - Sun: 10:00 AM - 3:00 PM</li>
          </ul>
        </div>

        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/profile.php?id=61550777231462"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://www.instagram.com/novatravelnj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <img src={bird} alt="bird" className={styles.image} />
      <h3 className={styles.contactTitle2}>
        We Look Forward To Seeing You Soon !
      </h3>
    </div>
  );
};

export default ContactUs;
