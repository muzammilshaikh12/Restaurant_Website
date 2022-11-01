import React, { useContext } from "react";

import CartContext from "../../../store/cart-context";

import Input from "../../UI/Input";

import "./MealForm.css";

const MealForm = (props) => {
  const Cartctx = useContext(CartContext);

  const addItemtoCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount" + props.id).value;
    Cartctx.addItem({ ...props.item, quantity: quantity });
    //  console.log(Cartctx, 'Meal Form.....!!!!!')
  };
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button onClick={addItemtoCart}>+ Add</button>
    </form>
  );
};

export default MealForm;
