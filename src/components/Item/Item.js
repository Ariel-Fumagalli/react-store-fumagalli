import React from 'react';
import './Item.css';
import { useHistory } from 'react-router-dom';

const Item = ({ id, picture, title, price, bgColor, transition }) => {

    let history = useHistory();

    const viewItem = () => {    
        transition();        
        setTimeout(() => {
            history.push(`/item/:${id}`);
        }, 600);      
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number)
    }; 

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
                    <p>${formatNumber(price)}</p>
                    <p>-</p>
                    <button type="button" onClick={ () => viewItem()}>ver</button>
                </div>                       
            </div>  
                         
        </div>      
    );
}
    
export default Item;