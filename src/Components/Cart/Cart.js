import "./Cart.css";

import Modal from '../UI/Modal'

const Cart = (props) => {
  const ItemList = (
    <ul className="cart-items">
      {[{ id: "C1", name: "Sushi", amount: 2, price: 12.99 }].map((item) =>  {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {ItemList}
      <div className="total">
        <span>Total Amount</span>
        <span>$33.25</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="order">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
