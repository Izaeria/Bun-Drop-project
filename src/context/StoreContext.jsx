import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [menuItems_list, setMenuItemsList] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/menuItems_list")
      .then((response) => response.json())
      .then((data) => setMenuItemsList(data))
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
    }));
  };

  const getTotalCartPrice = () => {
    let totalPrice = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const item = menuItems_list.find((menuItem) => menuItem.id === itemId);
        if (item) {
          totalPrice += item.price * cartItems[itemId];
        }
      }
    }
    return totalPrice;
  };

  const getTotalCartAmount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalCount += cartItems[itemId];
      }
    }
    return totalCount;
  };

  const getCart = () => cartItems;

  const contextValue = {
    menuItems_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartPrice,
    getCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
