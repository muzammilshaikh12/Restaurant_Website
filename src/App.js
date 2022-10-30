import React, { Fragment } from "react";

import Header from "../src/Components/Layout/Header";

import MainMeals from "./Components/Meals/MainMeals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MainMeals />
      </main>
    </Fragment>
  );
}

export default App;
