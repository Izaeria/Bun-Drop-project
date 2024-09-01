import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <ul className="navbar-menu">
          <Link to="/" onClick={() => setMenu("home")}>
            Home
          </Link>
          <Link to="/menu" onClick={() => setMenu("menu")}>
            Menu
          </Link>
        </ul>
        <Link to="/">
          <img src={assets.logoBlack} alt="Logo" className="logoBlack" />
        </Link>

        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("about-us")}
            className={menu === "about-us" ? "active" : ""}
          >
            about us
          </li>
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            contact
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-cart-icon">
          <Link to="./cart">
            {" "}
            <img src={assets.fortyEight} alt="" />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
