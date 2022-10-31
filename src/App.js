import React, { Fragment, useState } from "react";

import Header from "../src/Components/Layout/Header";

import MainMeals from "./Components/Meals/MainMeals";

import Cart from "./Components/Cart/Cart";

function App() {
  const [CartisShown, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartRemoveHandler = () => {
    setCartShow(false);
  };

  return (
    <Fragment>
      {CartisShown && <Cart cartFunc = {cartRemoveHandler}/>}
      <Header cartFunc = {cartShowHandler}/>
      <main>
        <MainMeals />
      </main>
    </Fragment>
  );
}

export default App;
