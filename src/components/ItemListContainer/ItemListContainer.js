import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ImgDemo from '../../assets/images/sillon_herbie_1.png';
import ImgDemo2 from '../../assets/images/sillon_de_sala_zoe.jpg';


const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    useEffect(() =>{ 

        const productList = [
            { id: 1, title: 'Sillón Herbie', description: 'Descripción de prueba 1', pictureUrl:ImgDemo, price: 1500, stock: 20 },
            { id: 2, title: 'Sillón Zoe', description: 'Descripción de prueba 2', pictureUrl:ImgDemo2, price: 1500, stock: 10 },
            { id: 3, title: 'Sillón Herbie', description: 'Descripción de prueba 3', pictureUrl:ImgDemo, price: 1500, stock: 30 },
            { id: 4, title: 'Sillón Zoe', description: 'Descripción de prueba 4', pictureUrl:ImgDemo2, price: 1500, stock: 7 }
          ];

        const call = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList);
            }, 2000);
        });
        
        call.then(data => {
            setItems(data)
        });

    }, []);


    return(
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemList items={items} /> 
            <ItemDetailContainer />             
        </div>        
    );
}

export default ItemListContainer;