import React, { useContext } from "react";

import "./Cart.css";

import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const Cartctx = useContext(CartContext);
  let totalAmount = 0;
  const ItemList = (
    <ul className="cart-items">
      {Cartctx.items.map((item) => {
        totalAmount += item.price * item.quantity;

        return (
          <li>
            <h3>
              Name:{item.name} || Quantity:{item.quantity} || Price :{" "}
              {item.price}
            </h3>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.cartFunc}>
      {ItemList}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.cartFunc}>
          Close
        </button>
        <button className="order">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
