import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Cart = () => {
  const { cartItems, menuItems_list, removeFromCart, getTotalCartPrice } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title-menu">
          <p>CART ITEMS</p>
          <p>TITLE</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
          <p>REMOVE</p>
        </div>
        <br />
        <hr />
        {menuItems_list.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img className="cart-items-image" src={item.image} alt="" />
                  <p className="uppercase">{item.title}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  {/* Removes one item at a time */}
                  <img
                    onClick={() => removeFromCart(item.id)}
                    className="trash-icon"
                    src={assets.trashcan}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null; // Ensure you return null if the condition is not met
        })}
      </div>
      <div className="cart-bottom">
        <div>
          <div className="cart-total-details">
            <p>SUBTOTAL</p>
            <p>${getTotalCartPrice()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>SHIPPING</p>
            <p>${3}</p>
          </div>

          <hr />
          <div className="cart-total-details">
            <b className="cart-total">TOTAL</b>
            <b className="cart-total">${getTotalCartPrice() + 3}</b>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="checkout-button"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
