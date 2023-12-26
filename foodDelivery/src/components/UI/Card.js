import React from "react";
import classes from "./Card.module.css";
// import MealItem from "../Meals/MealItem/MealItem";
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
