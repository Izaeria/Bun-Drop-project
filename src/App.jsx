import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import Confirmation from "./pages/Confirmation/Confirmation";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<FoodDisplay />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
