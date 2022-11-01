import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemtoCartHandler = (item) => {
    setItems([...items, item]);
    console.log("Before Re-rendering", cartContext);
  };

  const removeItemfromCartHandler = () => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemtoCartHandler,
    removeItem: removeItemfromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      {console.log(cartContext, "After-Rerendering !!!!!")}
    </CartContext.Provider>
  );
};

export default CartProvider;
