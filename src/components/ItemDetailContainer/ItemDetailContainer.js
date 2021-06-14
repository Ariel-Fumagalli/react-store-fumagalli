import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import ImgDemo from '../../assets/images/sillon_herbie_1.png';


const ItemDetailContainer = () => {

    const productList = [
        { id: 1, title: 'Herbie', categoria:'Sillón', description: 'Sillón Herbie de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera.', terminacion: 'Tapizado.', tapizado: 'Tela para exterior.', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles.', pictureUrl:ImgDemo, price: 16500, stock: 20, bg_color:'#fffdd8' }
    ];
    
    const [items, setItems] = useState([]);     


    useEffect(() => { 

        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve (productList), 2000);
            });    
        };    
            getItems().then((data) => {
            setItems(data);
        });
    },);


    return(
        <div className="item-detail-container">
            <ItemDetail dataItem={items} />            
        </div>        
    );
}

export default ItemDetailContainer;