import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

    const Item = ({ id, picture, title, price, bgColor }) => {

        return(
            
            <div className="itemCard">               
                
                <div className="item-img">
                    <img src={picture} alt={title} />
                    <span style={{backgroundColor: `${bgColor}`}}></span>
                </div>

                <div className="img-description">
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