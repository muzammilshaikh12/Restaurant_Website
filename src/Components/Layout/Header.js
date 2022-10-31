import React, { Fragment } from "react";

import CartButton  from "./CartBtn";

import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Muzz_Meals</h1>
       <CartButton onClick={props.cartFunc}/>
      </header>
      <div className="main-image">
        <img
          src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true'
          alt='Yummy Food!!!'
        />
      </div>
    </Fragment>
  );
};

export default Header;
