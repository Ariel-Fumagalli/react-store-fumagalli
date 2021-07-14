import React, { useState } from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemCount = ({ id, stock, initial, onAdd, bg }) => {

    const [quantity, setQuantity] = useState(initial);

    const { cart, addItemQuantity, removeItemQuantity } = useCartContext();
    
    const itemInCart = cart.find(x => x.item.id === id); 
   
    const add = () => {
        if (itemInCart && itemInCart.quantity === stock) {
            return;
        } else if (itemInCart){ 
            addItemQuantity(itemInCart)
        }
        quantity < stock && setQuantity(quantity + 1)
    }

    const remove = () => {
        if (itemInCart && itemInCart.quantity <= 1) {
            return;
        } else if (itemInCart){ 
            removeItemQuantity(itemInCart) 
        }
        quantity >= 2 && setQuantity(quantity - 1)
    }

    return(
        <>
            <div className={itemInCart ? 'cont-itemCount hide-in-detail' : 'cont-itemCount'}>
                <i className="counterButton remove-ico" onClick={remove}></i>
                <span className="counterAmount">{quantity}</span>
                <i className="counterButton add-ico" onClick={add}></i>
            </div>

            { !itemInCart ? <button className="btn-addCart" style={{backgroundColor: `${bg}`}} onClick={ () =>onAdd(quantity) }>agregar al carrito</button> : <Link to='/cart' className="btn-view-cart">ver carrito</Link> }        
        </>        
    );
}

export default ItemCount;