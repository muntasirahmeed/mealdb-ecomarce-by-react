import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const { strMeal, strMealThumb } = props.meal;
    const mealName=strMeal.slice(0,22)
    console.log(props.meal)
    return (
      <div className="meal">
        <img src={strMealThumb} alt="" />
        <h2>{mealName}</h2>
        
          <button className="add-btn">Add to Cart</button>

      </div>
    );
};

export default Meal;