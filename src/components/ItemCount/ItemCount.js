import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [items, setItems] = useState(initial)

    const addItem = () => {
        items < stock ? setItems(items + 1) : alert(`Actualmente solo disponemos de ${stock} unidades en stock`)
    }

    const removeItem = () => {
        items >= 2 &&
        setItems(items - 1)
    }

    return(
        <div className="cont-count-add">
            <div className="cont-itemCount">
                <i className="counterButton remove-ico" onClick={removeItem}></i>
                <span className="counterAmount">{items}</span>
                <i className="counterButton add-ico" onClick={addItem}></i>
            </div>
            <button className="btn-addCart" onClick={ () =>onAdd(items) }>agregar al carrito</button>
        </div>        
    );
}

export default ItemCount;