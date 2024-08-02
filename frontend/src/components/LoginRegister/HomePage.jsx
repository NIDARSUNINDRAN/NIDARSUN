
import React from 'react';
import '../styling/HomePage.css';

const HomePage = () => {
  const cardData = [
    {
      title: "Engine Repair",
      image: "/images/close-up-car-engine.jpg",
      description: "Learn about common engine issues and how to fix them."
    },
    {
      title: "Oil Change",
      image:  "images/mechanic-pouring-oil-into-car-engine.jpg",
      description: "Step-by-step guide on changing your vehicle's oil."
    },
    {
      title: "Brake Maintenance",
      image: "images/mechanic-changing-brake-discs-car-service.jpg",
      description: "Tips for maintaining and repairing your vehicle's brakes."
    },
    {
      title: "Tire Care",
      image: "images/outdoors-cobblestone-texture-with-car-wheel.jpg",
      description: "How to take care of your tires and when to replace them."
    },
    {
      title: "Battery Replacement",
      image: "/images/battery.jpg",
      description: "Instructions for replacing your car's battery."
    },
    {
      title: "Transmission Repair",
      image: "/images/transmission.jpg",
      description: "Common transmission problems and how to resolve them."
    },
    {
      title: "Suspension Repair",
      image: "/images/suspension.jpg",
      description: "Guide to diagnosing and fixing suspension issues."
    },
    {
      title: "AC Repair",
      image: "/images/ac.jpg",
      description: "How to troubleshoot and repair your car's AC system."
    },
    {
      title: "Electrical Issues",
      image: "/images/problem.jpg",
      description: "Tips for diagnosing and repairing electrical problems."
    },
    {
      title: "Interior Cleaning",
      image: "/images/interior.jpg",
      description: "Best practices for keeping your car's interior clean."
    }
  ];

  return (
    <div className="home-page">
      <h1>Vehicle Repair Hub</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>Contact us:</p>
        <p>Email: contact@vehiclerepairhub.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Repair Lane, Mechanic City, AutoState, 12345</p>
      </footer>
    </div>
  );
};

export default HomePage;
