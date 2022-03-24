import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt="" /> 
            <div className='link'>
                <a href="/shop">Food</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact</a>
                <a href="/about"> About</a>
            </div>
        </nav>
    );
};

export default Header;
