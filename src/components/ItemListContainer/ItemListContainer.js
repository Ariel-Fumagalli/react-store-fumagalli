import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../firebase/index';
import { useParams } from 'react-router';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    let title;
    !categoryId ? title = 'Home' : title = categoryId; 

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
        <div className="ItemListContainer">
            <div className="greeting-container">                
                <h2>{title}</h2>
            </div>
            <ItemList items={items} /> 
        </div>        
    );
}

export default ItemListContainer;