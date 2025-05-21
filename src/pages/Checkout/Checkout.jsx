import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { assets } from "../../assets/assets";

function Checkout() {
  const { getTotalCartPrice, getCart } = useContext(StoreContext);
  const [cart, setCart] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, [getCart]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);

  const validate = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email || !validateEmail(email))
      newErrors.email = "Valid email is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";

    if (paymentMethod === "card") {
      if (!cardNumber || !/^\d{4} ?\d{4} ?\d{4} ?\d{4}$/.test(cardNumber))
        newErrors.cardNumber = "Valid card number is required.";
      if (!expDate || !/^\d{2}\/\d{2}$/.test(expDate))
        newErrors.expDate = "Valid expiration date is required";
      if (!cvc || cvc.length !== 3) newErrors.cvc = "Valid CVC is required";
    } else {
      if (!phoneNumber || !validatePhoneNumber(phoneNumber))
        newErrors.phoneNumber = "Valid phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully");
      navigate("/confirmation");
    }
  };

  const subtotal = parseFloat(getTotalCartPrice()).toFixed(2);
  const deliveryFee = 3;
  const totalPrice = (parseFloat(subtotal) + deliveryFee).toFixed(2);

  return (
    <>
      <h1>Checkout</h1>
      <form className="place-order" onSubmit={handleSubmit}>
        <div className="place-order-left">
          <p className="title">DELIVERY INFO</p>
          <div className="multi-field">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="one-field">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p className="input-error">{errors.phoneNumber}</p>
            )}
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <div className="multi-field">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <p className="error">{errors.city}</p>}
            <input
              type="text"
              placeholder="Postal Code"
              value={cart.postalCode || ""}
              onChange={(e) => setCart({ ...cart, postalCode: e.target.value })}
            />
          </div>
        </div>

        <div className="place-order-right">
          <p className="title">PAYMENT</p>
          <div>
            <div className="payment-method">
              <label className="radio-custom">
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <span className="radio-circle"></span>
              </label>
              <img className="card-img" src={assets.visa} alt="" />
              <img className="card-img" src={assets.mastercard} alt="" />

              <label className="radio-custom">
                <input
                  type="radio"
                  value="swish"
                  checked={paymentMethod === "swish"}
                  onChange={() => setPaymentMethod("swish")}
                />
                <span className="radio-circle"></span>
              </label>
              <img className="swish-img" src={assets.swish} alt="" />
            </div>
            {paymentMethod === "card" && (
              <div className="bank-card">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                {errors.cardNumber && (
                  <p className="error">{errors.cardNumber}</p>
                )}

                <input
                  type="text"
                  placeholder="Exp Date (MM/YY)"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                />
                {errors.expDate && <p className="error">{errors.expDate}</p>}

                <input
                  type="text"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
                {errors.cvc && <p className="error">{errors.cvc}</p>}
              </div>
            )}
            {paymentMethod === "swish" && (
              <div className="one-field">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <p className="error">{errors.phoneNumber}</p>
                )}
              </div>
            )}
            <div className="total-amount">
              <p>Subtotal: ${subtotal}</p>
              <p>Delivery Fee: $3</p>
              <h3>Total Price: ${totalPrice}</h3>
            </div>

            <button className="checkout-button" type="submit">
              Checkout
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;
