import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ImgDemo from '../../assets/images/sillon_herbie_1.png';
import ImgDemo2 from '../../assets/images/sillon_de_sala_zoe.png';
import ImgDemo3 from '../../assets/images/silla_berlioz.png';
import ImgDemo4 from '../../assets/images/silla_alaska.png';
import ImgDemo5 from '../../assets/images/sofa_chester.png';
import ImgDemo6 from '../../assets/images/sofa_saha.png';

import { useParams } from 'react-router';


const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const {categoryId} = useParams();


    useEffect(() =>{ 

        const productList = [
            { id: '1', title: 'Sillón Herbie', categoryId:'Sillones', description: 'Sillón de un cuerpo. Estructura fabricada en madera de Lapacho con tratamiento para exteriores. Almohadones de asiento y respaldo tapizados en tela para exteriores color natural.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Tela para exterior', medidas: '75 cm x 90 cm x 80 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo, price: 16500, stock: 20, bg_color:'#fff09b' },

            { id: '2', title: 'Sillón Zoe', categoryId:'Sillones', description: 'Sillón con lineas rectas cromadas y una superficie suave. Combina una estructura de acero inoxidable pulido espejo con un asiento tapizado en pana Porsche color negro.', material: 'Acero pulido', terminacion: 'Brillante, Tapizado', tapizado: 'Pana', medidas: '70 cm x 80 cm x 76 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo2, price: 24300, stock: 15, bg_color:'#aac0ff' },

            { id: '3', title: 'Silla Berlioz', categoryId:'Sillas', description: 'Silla de comedor elegante y con rasgos sutiles y delicados. Fabricada con madera de guindo lustrada en color negro semimate y tapizada en Pana Touch color beige con tratamiento matelacé. Terminada con tachas platil que le dan este detalle distintivo.', material: 'Madera de Guindo', terminacion: 'Semimate, Tapizado', tapizado: 'Pana', medidas: '51 cm x 59 cm x 102 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo3, price: 12000, stock: 60, bg_color:'#d3ffbb' },
            
            { id: '4', title: 'Silla Alaska', categoryId:'Sillas', description: 'Silla moderna que combina sutilmente lineas rectas y curvas. Fabricada con madera de guindo laqueado en color negro semimate y tapizada en pana Touch en color gris oscuro.', material: 'Madera de Guindo', terminacion: 'Semimate, Tapizado', tapizado: 'Pana', medidas: '54 cm x 81 cm x 52 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo4, price: 18500, stock: 20, bg_color:'#b6e1ff' },

            { id: '5', title: 'Sofá Chester', categoryId:'Sofás', description: 'Sofá clásico que nunca pasa de moda. Elaborado con una estructura robusta de madera de guindo, tapizado con cuero Stargrain en color chocolate y termiando con tachas en color oxide semimante.', material: 'Madera de Guindo', terminacion: 'Capitone, Tapizado', tapizado: 'Cuero', medidas: '240 cm x 110 cm x 73 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo5, price: 80500, stock: 20, bg_color:'#aeffcd' },
            
            { id: '6', title: 'Sofá Saha', categoryId:'Sofás', description: 'Sofá fabricado en madera y tapizado en Oxford Plata. Con patas de aluminio pulido y almohadones decorativos.', material: 'Madera', terminacion: 'Tapizado', tapizado: 'Pana', medidas: '220 cm x 100 cm x 78 cm', entrega: '60 días hábiles', pictureUrl:ImgDemo6, price: 46300, stock: 20, bg_color:'#ffdede' }
          ];

        const call = new Promise((resolve, reject) => {
            setTimeout(() => {

                !categoryId ? resolve( productList ) : resolve( productList.filter(f => f.categoryId === categoryId ) )                

            }, 2000);
        });
        
        call.then(data => {
            setItems(data)
        });

    }, [categoryId]);


    let title;

    if(!categoryId) {
        title = 'Home';       
    } else{
        title = categoryId; 
    };       


    return(
        <div className="ItemListContainer">
            <div className="greeting-container">                
                <h2>{title}</h2>
            </div>
            <ItemList items={items} /> 
        </div>        
    );
}

export default ItemListContainer;