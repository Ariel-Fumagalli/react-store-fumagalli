import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';


    const ItemList = ({items}) => {

        return(
            <div className="items-container">                
                {items.map((e, i) => {
                    return (                    
                        <Item id={e.id} picture={e.pictureUrl} title={e.title} description={e.description} price={e.price} key={i}/> 
                    );
                })}
            </div>        
        );        
    }
    
    export default ItemList;
    