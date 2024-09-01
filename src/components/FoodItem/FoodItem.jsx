import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({
  id,
  title,
  price,
  description,
  image,
  category,
}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item-list">
      <div className="food-item">
        <div className="food-menu-item-list">
          <img className="food-item-image" src={image} alt="" />
          {!cartItems[id] ? (
            <img
              className="add-button"
              onClick={() => addToCart(id)}
              src={assets.addIcon}
              alt=""
            />
          ) : (
            <div className="food-item-counter">
              <img
                className="remove"
                onClick={() => removeFromCart(id)}
                src={assets.removeIcon}
                alt=""
              />
              <p className="item-count">{cartItems[id]}</p>
              <img
                className="add"
                onClick={() => addToCart(id)}
                src={assets.addIcon}
                alt=""
              />
            </div>
          )}

          <div className="food-item-info">
            <div className="food-item-title">
              <p>{title}</p>
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
