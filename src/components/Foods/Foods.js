import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

import "./Foods.css";
const Foods = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="food-container">
      <div className="meal-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
      </div>
    </div>
  );
};

export default Foods;
