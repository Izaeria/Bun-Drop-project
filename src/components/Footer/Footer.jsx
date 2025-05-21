import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  console.log("Footer component rendered");
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-menu">
          <li>
            ADRESS
            <p> P Sherman 42</p>
            <p> Wallaby Way</p>
            <p>Sydney</p>
          </li>
          <li>
            HOURS
            <p>Monday—Friday: 8am-9pm</p>
            <p>Saturday: 9am-9pm</p>
            <p>Sunday: 9am-7:30pm</p>
          </li>
          <div className="footer-payment-icons">
            <img src={assets.mastercard} alt="" className="mastercard-icon" />
            <img src={assets.visa} alt="" className="visa-icon" />
            <img src={assets.swish} alt="" className="swish-icon" />
          </div>
          <li>
            FOLLOW US
            <div className="footer-sm-icons">
              <img src={assets.instagram} alt="" className="instagram-icon" />
              <img src={assets.facebook} alt="" className="facebook-icon" />
              <img src={assets.twitter} alt="" className="twitter-icon" />
            </div>
          </li>
          <li>
            SERVICE <p>Contact</p>
            <p>Cookie Policy</p>
            <p>FAQ</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
