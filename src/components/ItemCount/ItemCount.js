import React, { useState } from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd, bg, addCartStatus, viewCartStatus }) => {

    const [items, setItems] = useState(initial)

    const addItem = () => {
        items < stock ? setItems(items + 1) : alert(`Actualmente solo disponemos de ${stock} unidades en stock`)
    }

    const removeItem = () => {
        items >= 2 && setItems(items - 1)
    }

    return(
        <>
            <div className="cont-itemCount">
                <i className="counterButton remove-ico" onClick={removeItem}></i>
                <span className="counterAmount">{items}</span>
                <i className="counterButton add-ico" onClick={addItem}></i>
            </div>
            <button className={addCartStatus ? 'btn-addCart hidden' : 'btn-addCart'} style={{backgroundColor: `${bg}`}} onClick={ () =>onAdd(items) }>agregar al carrito</button>
            <Link to='/cart' className={viewCartStatus ? 'btn-view-cart' : 'btn-view-cart hidden'}>ver carrito</Link>            
        </>        
    );
}

export default ItemCount;