import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = () => {
  const { menuItems_list } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Hanterar by av kategori
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter beroende på  vald kategori
  const filteredItems = menuItems_list.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="food-display" id="food-display">
      <h2>OUR MENU</h2>

      <div className="category-filters">
        <button onClick={() => handleCategoryChange("All")}>All</button>
        <button onClick={() => handleCategoryChange("Burger")}>Burgers</button>
        <button onClick={() => handleCategoryChange("Sides")}>Sides</button>
        <button onClick={() => handleCategoryChange("Drink")}>Drinks</button>
        <button onClick={() => handleCategoryChange("Dressing")}>
          Dressings
        </button>
        <button onClick={() => handleCategoryChange("Dessert")}>
          Desserts
        </button>
      </div>

      <div className="food-display-list">
        {filteredItems.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
