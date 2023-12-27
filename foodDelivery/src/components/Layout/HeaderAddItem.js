import React, { useState } from "react";

import classes from "./HeaderCardButton.module.css";
import AddIcon from "../Add/AddIcon";
const HeaderAddItem = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const btnClasses = `${classes.addbutton} ${
    btnIsHighLighted ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.addicon}>
        <AddIcon />
      </span>
      <span>Add Item</span>
    </button>
  );
};

export default HeaderAddItem;
