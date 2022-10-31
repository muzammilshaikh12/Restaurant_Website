import React, { Fragment } from "react";

import Header from "../src/Components/Layout/Header";

import MainMeals from "./Components/Meals/MainMeals";

import Cart from './Components/Cart/Cart'

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <MainMeals />
      </main>
    </Fragment>
  );
}

export default App;
