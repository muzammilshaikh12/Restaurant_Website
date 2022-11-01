import React, {useState } from "react";

import Header from "../src/Components/Layout/Header";

import MainMeals from "./Components/Meals/MainMeals";

import Cart from "./Components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App() {
  const [CartisShown, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartRemoveHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {CartisShown && <Cart cartFunc = {cartRemoveHandler}/>}
      <Header cartFunc = {cartShowHandler}/>
      <main>
        <MainMeals />
      </main>
    </CartProvider>
  );
}

export default App;
