import Summary from "./Summary";

import AvailaibleMeals from "./AvailaibleMeals";
import { Fragment } from "react";

const MainMeals = () => {
  return (
    <Fragment>
      <Summary />
      <AvailaibleMeals />
    </Fragment>
  );
};

export default MainMeals;
