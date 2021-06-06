import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

    const onAdd = (amount) =>{

        let unidades = 'unidades'

        if(amount < 2){
            unidades = 'unidad'
        }

        alert(`Agregaste ${amount} ${unidades} al carrito`);  
    }

    return(
        <div className="ItemListContainer">
            <h2 style={{fontSize: '30vw', color:"rgb(170, 170, 170)"}}>{greeting}</h2>
            <ItemCount stock={7} initial={1} onAdd={onAdd} /> 
        </div>        
    );
}

export default ItemListContainer;
