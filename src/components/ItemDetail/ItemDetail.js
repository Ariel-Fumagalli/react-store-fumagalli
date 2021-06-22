import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

    const ItemDetail = ({item}) => {

    const [addCartStatus, setAddCartStatus] = useState(false);
    const [viewCartStatus, setViewCartStatus] = useState(false);

    const onAdd = (quantityToAdd) =>{
        /* let unidades = 'unidades'
        if(quantityToAdd < 2){
            unidades = 'unidad'
        } */

        setAddCartStatus(true);
        setViewCartStatus(true);

        // alert(`Agregaste ${quantityToAdd} ${unidades} al carrito`);          

    }

        return(
            <>      
                <div className="item-detail-card" id={item.id}>

                    <div className="item-detail-img" style={{backgroundColor: `${item.bg_color}`}}> 
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
                                <li><strong>Entrega</strong> - {item.entrega}</li>
                            </ul>

                            <div className="item-price-and-count">
                                <p>${item.price}</p>                            
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} bg={item.bg_color} addCartStatus={addCartStatus} viewCartStatus={viewCartStatus}/>
                            </div>

                        </div>
                    </div>                       

                </div>
            </>        
        );        
    }
    
    export default ItemDetail;