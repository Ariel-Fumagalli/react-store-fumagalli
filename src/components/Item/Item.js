import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

    const Item = ({ id, picture, title, price, bgColor }) => {

        return(
            <div className="itemCard" id={id}>               
                
                <div className="img-item-container">
                    <img src={picture} alt={title}></img>
                    <span style={{backgroundColor: `${bgColor}`}}></span>
                </div>

                <div>
                    <div>
                        <h2>{title}</h2>
                        <p>-</p>
                        <p>${price}</p>
                        <p>-</p>
                        <Link to={`/item/:${id}`}>ver</Link> 
                    </div>
                       
                </div>           
            </div>        
        );
    }
    
    export default Item;


