import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

    const ItemDetail = ({dataItem}) => {

            // Función de mensaje al añadir al carrito
    const onAdd = (amount) =>{
        let unidades = 'unidades'
        if(amount < 2){
            unidades = 'unidad'
        }
        alert(`Agregaste ${amount} ${unidades} al carrito`);  
    }

        return(
            <>                
                {dataItem.map((e, i) => {
                    return (
                    <div className="item-detail-card" id={e.id} key={i}>

                        <div className="item-detail-img" style={{backgroundColor: `${e.bg_color}`}}> 
                        <img src={e.pictureUrl} alt={e.title} ></img>
                        </div>

                        <div className="item-detail-description">
                            <div>
                                <h2>{e.title}</h2>
                                <h3>{e.categoria}</h3>
                                <h4>{e.description}</h4>

                                <ul>
                                    <li>Material: {e.material}</li>
                                    <li>Terminación: {e.terminacion}</li>
                                    <li>Tapizado: {e.tapizado}</li>
                                    <li>Medidas: {e.medidas}</li>
                                    <li>Entrega: {e.entrega}</li>
                                </ul>

                                <p className="product-price">${e.price}</p>                            
                                <ItemCount stock={7} initial={1} onAdd={onAdd} />
                            </div>
                        </div>                       

                    </div>
                    );
                })}
            </>        
        );        
    }
    
    export default ItemDetail;
    

       