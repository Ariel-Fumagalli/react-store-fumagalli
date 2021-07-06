import React, { useContext, useState } from 'react';

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ defaultCart = [], children }) {
    
  const [cart, setCart] = useState(defaultCart);
  const [quantityItemsAdded, setQuantityItemsAdded] = useState(0);

  function isInCart({ id }) {
    const findToId = cart.find(x => x.item.id === id);
    return id === undefined ? undefined : findToId !== undefined;
  }
  

  function addItem( item, quantity ) {

    if ( isInCart(item) ) {
      const toChange = cart.find(x => x.item.id === item.id);
      toChange.quantity += quantity;
      setQuantityItemsAdded(quantityItemsAdded + quantity)
    } else{ 
      setCart( [...cart, {item, quantity}] );
      setQuantityItemsAdded(quantityItemsAdded + quantity) 
    }   
  }


  function removeItem( itemId, quantity  ) {
    const filtredItems = cart.filter(x => x.item.id !== itemId);
    setCart(filtredItems);
    setQuantityItemsAdded(quantityItemsAdded - quantity)     
  }


  function clear() {
    setCart(defaultCart);
    setQuantityItemsAdded(0)   
  }


  return (
    <CartContext.Provider value={{ cart, quantityItemsAdded, addItem, removeItem, clear }}> {children} </CartContext.Provider>
  );

}