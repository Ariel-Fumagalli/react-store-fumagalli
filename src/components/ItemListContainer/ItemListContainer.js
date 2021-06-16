import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ImgDemo from '../../assets/images/sillon_herbie_1.png';
import ImgDemo2 from '../../assets/images/sillon_de_sala_zoe.jpg';
import ImgDemo3 from '../../assets/images/silla_berlioz.jpg';
import ImgDemo4 from '../../assets/images/silla_alaska.jpg';

import { useParams } from 'react-router';


const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    const {categoryId} = useParams();


    useEffect(() =>{ 

        const productList = [
            { id: 'sillon-herbie', title: 'Sillón Herbie', categoryId:'Sillones', description: 'Sillón Herbie de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Tela para exterior', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo, price: 16500, stock: 20, bg_color:'#fff09b' },

            { id: 'sillon-zoe', title: 'Sillón Zoe', categoryId:'Sillones', description: 'Sillón Herbie de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Tela para exterior', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo2, price: 16500, stock: 20, bg_color:'#8ca9ff' },

            { id: 'silla-berlioz', title: 'Silla Berlioz', categoryId:'Sillas', description: 'Sillón Herbie de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Tela para exterior', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo3, price: 16500, stock: 20, bg_color:'#fff09b' },
            
            { id: 'silla-alaska', title: 'Silla Alaska', categoryId:'Sillas', description: 'Sillón Herbie de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Tela para exterior', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo4, price: 16500, stock: 20, bg_color:'#8ca9ff' },

            { id: 'sillon-Harrison', title: 'Sillón Harrison', categoryId:'Sofás', description: 'Sillón Herbie de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Tela para exterior', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo, price: 16500, stock: 20, bg_color:'#fff09b' },
            
            { id: 'sillon-Hendrix', title: 'Sillón Hendrix', categoryId:'Sofás', description: 'Sillón Herbie de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Tela para exterior', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo2, price: 16500, stock: 20, bg_color:'#8ca9ff' }
          ];

        const call = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!categoryId) {
                    resolve( productList );
                }
                else{
                    resolve( productList.filter(f => f.categoryId === categoryId ) );
                }                
            }, 2000);
        });
        
        call.then(data => {
            setItems(data)
        });

    }, [categoryId]);


    return(
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemList items={items} /> 
        </div>        
    );
}

export default ItemListContainer;