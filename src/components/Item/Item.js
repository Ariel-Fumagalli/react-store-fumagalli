import React from 'react';
import './Item.css';

    const Item = ({ id, picture, title, description, price }) => {

        return(
            <div className="itemCard" id={id}>
                <img src={picture} alt={title} ></img>
                <p className="product-name">{title}</p>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>               
            </div>        
        );
    }
    
    export default Item;


