import React from "react";
import zosiabialy from "../assets/zosiabialy.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>Nova Travel</h1>

      <section className={styles.aboutSection}>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img
              src={zosiabialy}
              alt="zosiabialy"
              className={styles.teamMemberImage}
            />
            <h3>Zosia Bialy</h3>
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <h2>Our Mission</h2>
        <p>
          At Nova Travel, our unwavering mission is to transform your travel
          aspirations into vibrant realities. We are passionate about helping
          you explore the world, create unforgettable memories, and discover new
          adventures. Moreover, we take pride in offering a wide array of
          services, including shipping packages from America to Poland, Europe,
          and soon to destinations worldwide. Our commitment extends beyond just
          travel; we also facilitate secure money transfers, ensuring your
          financial transactions are as seamless as your journeys. We are
          fervently dedicated to curating experiences that transcend
          expectations and leave an indelible mark on your journey.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <h2>Our Story</h2>
        <p>
          Zosia Bialy is a renowned figure in the travel industry, renowned for
          her expertise in connecting travelers with exceptional destinations,
          unparalleled experiences, and top-tier services. With an illustrious
          career spanning over three decades, Zosia Bialy's journey in the
          travel business commenced in 1993. In the year 2023, fueled by an
          unwavering commitment to delivering excellence, she took a bold step
          forward, establishing her own agency, Nova Travels. Her vision extends
          beyond simply facilitating the shipment of packages worldwide; it
          aspires to craft unparalleled vacation experiences for all. Nova
          Travels stands as a testament to her dedication to providing the
          pinnacle of travel services.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to start planning your next adventure? Feel
          free to anytime. We'd love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;
