import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";

import "./Foods.css";
const Foods = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  const bringData = (food) => {
      const newCart = [...cart, food];
      setCart(newCart)
  };
  return (
    <div className="food-container">
      <div className="meal-container">
        {meals.map((meal) => (
          <Meal bringData={bringData} key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
      <div className="cart-container">
        <div className="info">
                  <h2>Order Food {cart.length}</h2>
                  <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Foods;
