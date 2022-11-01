import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemtoCartHandler = (item) => {
    console.log(item)
    let hasItems = false;
    const newArray = [...items];
    newArray.forEach((element, index) => {
      
      if (element.name === item.name) {
        hasItems = true;
      newArray[index].quantity = Number(newArray[index].quantity) + Number(item.quantity);
      }
    });
    if (hasItems === true) {
      setItems(newArray);
    } else {
      setItems([...items, item]);
    }
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
