import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemListContainer = ({ greeting, poductos }) => {


    // Función de mensaje al añadir al carrito
    const onAdd = (amount) =>{
        let unidades = 'unidades'
        if(amount < 2){
            unidades = 'unidad'
        }
        alert(`Agregaste ${amount} ${unidades} al carrito`);  
    }


    // llamar listado de productos
    const [items, setItems] = useState([]);

    useEffect(() =>{ 

        const call = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(poductos);
            }, 2000);
        });
        
        call.then(data => {
            setItems(data)
        });

    }, [poductos]);


    return(
        <div className="ItemListContainer">
            <h2 style={{fontSize: '30vw', color:"rgb(170, 170, 170)"}}>{greeting}</h2>
            <ItemCount stock={7} initial={1} onAdd={onAdd} /> 
            <ItemList items={items} /> 
            <ItemDetailContainer />             
        </div>        
    );
}

export default ItemListContainer;