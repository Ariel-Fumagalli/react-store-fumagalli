import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../firebase/index';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {    
    
    const [dataItem, setDataItem] = useState([]);   
    const {id} = useParams();

    useEffect(() => { 

        const db = getFirestore();
        const itemCollection = db.collection('items');    
        const itemId = itemCollection.doc(id.substr(1));
        
        itemId.get().then(doc => {
            if (!doc.exists) {
                console.log('Item no encontrado')
                return;
            }
            setDataItem({ id: doc.id, ...doc.data() }); 
        })
        
    }, [id]);

    return(
        <div className="item-detail-container">
            <ItemDetail item={dataItem} />            
        </div>        
    );
}

export default ItemDetailContainer;