import React, { useState } from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom';

const ItemCount = ({ id, stock, initial, onAdd, onRemove, bg, addCartClicked }) => {

    const [quantity, setQuantity] = useState(initial)

    const addItem = () => {
        quantity < stock ? setQuantity(quantity + 1) : alert(`Actualmente solo disponemos de ${stock} unidades en stock`)
    }

    const removeItem = () => {
        quantity >= 2 && setQuantity(quantity - 1)
    }

    return(
        <>
            <div className="cont-itemCount">
                <i className="counterButton remove-ico" onClick={removeItem}></i>
                <span className="counterAmount">{quantity}</span>
                <i className="counterButton add-ico" onClick={addItem}></i>
            </div>

            { !addCartClicked ? <button className="btn-addCart" style={{backgroundColor: `${bg}`}} onClick={ () =>onAdd(quantity) }>agregar al carrito</button> : <Link to='/cart' className="btn-view-cart">ver carrito</Link> }        

            <button onClick={ () =>onRemove(id) }>remover item</button>    
        </>        
    );
}

export default ItemCount;