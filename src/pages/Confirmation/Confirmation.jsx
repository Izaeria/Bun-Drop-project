import React from "react";
import "./Confirmation.css";
import { assets } from "../../assets/assets";

// Function to get a random delivery time within a max of 1.5 hours
const getRandomDeliveryTime = () => {
  const maxMinutes = 90; // Maximum delivery time in minutes (1.5 hours)
  return Math.floor(Math.random() * maxMinutes); // Random number between 0 and maxMinutes
};

// Function to format delivery time (in hours and minutes)
const getFormattedDeliveryTime = (minutesUntilDelivery) => {
  const hours = Math.floor(minutesUntilDelivery / 60);
  const minutes = minutesUntilDelivery % 60;
  return { hours, minutes };
};

const Confirmation = () => {
  const randomMinutesUntilDelivery = getRandomDeliveryTime(); // Get random delivery time
  const deliveryTime = getFormattedDeliveryTime(randomMinutesUntilDelivery);

  return (
    <div className="confirmation">
      <h1>THANK YOU FOR YOUR ORDER</h1>
      <h2>ESTIMATED TIME UNTIL DROP-OFF:</h2>
      <img src={assets.logoBlackIcon} alt="" />
      <p className="delivery-time">
        {deliveryTime.hours} HOURS, {deliveryTime.minutes} MINUTES
      </p>
    </div>
  );
};

export default Confirmation;
