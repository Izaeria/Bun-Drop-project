import React from "react";
import "./Confirmation.css";
import { assets } from "../../assets/assets";

//Få en random delivery time med maximal 1.5 timmar
const getRandomDeliveryTime = () => {
  const maxMinutes = 90;
  return Math.floor(Math.random() * maxMinutes);
};

//Formaterar delivery time i timmar och minuter
const getFormattedDeliveryTime = (minutesUntilDelivery) => {
  const hours = Math.floor(minutesUntilDelivery / 60);
  const minutes = minutesUntilDelivery % 60;
  return { hours, minutes };
};

const Confirmation = () => {
  const randomMinutesUntilDelivery = getRandomDeliveryTime();
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
