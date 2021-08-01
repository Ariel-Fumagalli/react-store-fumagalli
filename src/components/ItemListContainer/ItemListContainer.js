import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../firebase/index';
import { useParams } from 'react-router';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [fadeOutContainer, setFadeOutContainer] = useState(false);
    const {categoryId} = useParams(); 

    const applyFade = () =>{ 
        setFadeOutContainer(true);                
    }

    useEffect(() =>{ 

        const db = getFirestore();
        const itemCollection = db.collection('items');        
 
        if(!categoryId){            
            itemCollection.get().then(querySnapshot => {
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) ))});
        } else {
            const category = itemCollection.where('categoryId', '==', categoryId);
            category.get().then(querySnapshot => {
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) ))});
        }

    }, [categoryId]);

    return(
        <div className={!fadeOutContainer ? 'ItemListContainer' : 'ItemListContainer fade-out'}>
            <div className="section-name-container"> 
                { !categoryId ? <h2 className="title-home">Muebles de Diseño</h2> : <h2>{categoryId}</h2> }
            </div>
            <ItemList items={items} fade={applyFade} /> 
        </div>        
    );
}

export default ItemListContainer;