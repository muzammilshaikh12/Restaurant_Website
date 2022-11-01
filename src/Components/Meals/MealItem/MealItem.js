import "./MealItem.css";

import MealForm from "./MealForm";

const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealForm item={props}/>
      </div>
    </li>
  );
};

export default MealItem;
