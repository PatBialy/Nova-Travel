import React from "react";
import ServiceItem from "./ServiceItem";
import travelagency from "../assets/travelagency.png";
import airline from "../assets/airline.png";
import cargoShip from "../assets/cargoShip.png";
import moneytransfer from "../assets/moneytransfer.png";
import incometax from "../assets/incometax.png";
import grouptravel from "../assets/grouptravel.JPG";
import notarypublic from "../assets/notarypublic.JPG";
import passport from "../assets/passport.JPG";
import styles from "./Services.module.css";

const Services = () => {
  const services = [
    {
      title: "Travel Agency",
      description: "Explore the world with our travel agency services.",
      imageUrl: travelagency,
    },
    {
      title: "Group Travel Planning",
      description:
        "Let us handle the details while you focus on creating lasting memories.",
      imageUrl: grouptravel,
    },
    {
      title: "Express Shipping",
      description: "Fast and reliable shipping worldwide.",
      imageUrl: airline,
    },
    {
      title: "Cargo Shipping",
      description: "Safe and efficient cargo shipping.",
      imageUrl: cargoShip,
    },
    {
      title: "Money Transfer",
      description: "Hassle-free international money transfers.",
      imageUrl: moneytransfer,
    },
    {
      title: "Notary Public",
      description: "Certified document notarization.",
      imageUrl: notarypublic,
    },
    {
      title: "Income Tax",
      description: "Expert assistance for income tax matters.",
      imageUrl: incometax,
    },
    {
      title: "Travel Documentation",
      description:
        "Assist with travel documentation and visa services for your journey.",
      imageUrl: passport,
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesTitle}>
        <span className={styles.gradientText}>Nova Travel Services</span>
      </h1>
      <div className={styles.serviceItems}>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
