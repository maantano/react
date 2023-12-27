import React, { useEffect, useState } from "react";
import classes from "./Available.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { Description } from "@mui/icons-material";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httperror, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://customhook-d4e12-default-rtdb.firebaseio.com/meals.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await res.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Is Loading...</p>
      </section>
    );
  }

  if (httperror) {
    return (
      <section className={classes.mealsError}>
        <p>{httperror}</p>
      </section>
    );
  }
  //   const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section>
      <ul className={classes.meals}>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
