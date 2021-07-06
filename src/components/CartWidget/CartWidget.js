import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { quantityItemsAdded } = useCartContext();
    
    return(
        <Link to='/cart' className={quantityItemsAdded !== 0 ? 'cart-widget active' : 'cart-widget'}>
            {quantityItemsAdded !== 0 && <span>{quantityItemsAdded}</span> }            
        </Link>        
    );  
}

export default CartWidget;