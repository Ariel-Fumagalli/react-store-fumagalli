import React, { useContext, useState } from 'react';

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ defaultCart = [], children }) {
    
  const [cart, setCart] = useState(defaultCart);
  

  function isInCart({ id }) {
    const findToId = cart.find(x => x.aggregatedItem.id === id);
    return id === undefined ? undefined : findToId !== undefined;
  }
  

  function addItem( item, quantity ) {
    if ( isInCart(item) ) {
      console.log('Ya agregaste este item al carrito.');
      return;
    }    
    const aggregatedItem = {
      "id" : item.id,      
      "title" : item.title,
      "cantidad" : quantity
    }    
    setCart( [...cart, {aggregatedItem}] );     
  }


  function removeItem( id ) {
    const filtredItems = cart.filter(x => x.aggregatedItem.id !== id);
    setCart(filtredItems);    
  }


  function clear() {
    setCart(defaultCart);
  }


  console.log(cart);

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear }}> {children} </CartContext.Provider>
  );

}