import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return(
        <div className="ItemListContainer">
            <h2 style={{fontSize: '30vw', color:"rgb(170, 170, 170)"}}>{greeting}</h2>
        </div>        
    );
}

export default ItemListContainer;
