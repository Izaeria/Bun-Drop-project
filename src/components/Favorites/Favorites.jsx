import React, { useContext } from "react";
import "./Favorites.css";
import { useNavigate } from "react-router-dom";
import { menu_items } from "../../assets/assets";

import { StoreContext } from "../../context/StoreContext";

const Favorites = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="favorites-menu" id="favorites-menu">
      <div className="favorites-menu-list">
        {menu_items
          .filter((item) => item.menu_image)
          .map((item, index) => {
            const isItemInCart = cartItems[item.id] > 0;

            return (
              <div key={index} className="favorites-menu-list-item">
                <img src={item.menu_image} alt="" className="menu-image" />

                <p className="item-menu-name">{item.menu_name}</p>
                <p className="item-menu-price">${item.menu_price}</p>
              </div>
            );
          })}
      </div>
      <div className="menu-bottom menu-button">
        <div className="menu-bottom menu-button">
          <button onClick={() => navigate("/menu")}>VIEW THE MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
