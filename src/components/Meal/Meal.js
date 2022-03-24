import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { strMeal, strMealThumb } = props.meal;
    const { bringData } = props;
    const mealName=strMeal.slice(0,22)
    return (
      <div className="meal">
        <img src={strMealThumb} alt="" />
        <h2>{mealName}</h2>

        <button className="add-btn" onClick={()=>bringData(props.meal)}>
          Add to Cart
          <span className="icon">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </span>
        </button>
      </div>
    );
};

export default Meal;