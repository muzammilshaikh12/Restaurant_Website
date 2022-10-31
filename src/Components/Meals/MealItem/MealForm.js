import Input from "../../UI/Input";

import "./MealForm.css";

const MealForm = (props) => {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
