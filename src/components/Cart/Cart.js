import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    let name = '';
    let id ;
    for (const info of cart) {
        name = info.strMeal;
        id=info.idMeal
    }
    return (
        <div className='details'>
            <p>ID : {id }</p>
            <h4>{ name}</h4>
        </div>
    );
};

export default Cart;