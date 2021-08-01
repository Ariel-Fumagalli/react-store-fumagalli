import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const [fadeOutDetail, setFadeOutDetail] = useState(false);
    const { addItem } = useCartContext();

    const onAdd = (quantity) =>{ 
        addItem(item, quantity);                
    }    

    let history = useHistory();

    const clickBack = () => {    
        setFadeOutDetail(true); 
        setTimeout(() => {
            history.goBack(); 
        }, 800);         
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number)
    };

    return(
        <>      
            <div className={!fadeOutDetail ? 'item-detail-card' : 'item-detail-card fade-out'} id={item.id}>                

                <div className="item-detail-img">
                    <button type="button" onClick={ () => clickBack()} />
                    <span style={{backgroundColor: `${item.bg_color}`}}></span>
                    <img src={item.pictureUrl} alt={item.title} ></img>
                </div>

                <div className="item-detail-description">
                    <div>                        
                        <h2>{item.title}</h2>
                        <h4>{item.description}</h4>

                        <ul>
                            <li><strong>Material</strong> - {item.material}</li>
                            <li><strong>Terminación</strong> - {item.terminacion}</li>
                            <li><strong>Tapizado</strong> - {item.tapizado}</li>
                            <li><strong>Medidas</strong> - {item.medidas}</li>
                        </ul>

                        <div className="item-price-and-count">
                            <p>${formatNumber(item.price)}</p>                            
                            <ItemCount id={item.id} stock={item.stock} initial={1} onAdd={onAdd} bg={item.bg_color} />
                        </div>

                    </div>
                </div>                       

            </div>
        </>        
    );        
}
    
export default ItemDetail;