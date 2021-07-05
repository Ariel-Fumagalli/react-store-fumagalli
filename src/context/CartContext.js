import React, { useContext, useState } from 'react';

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ defaultCart = [], children }) {
    
  const [cart, setCart] = useState(defaultCart);


  function isInCart({ id }) {
    const findToId = cart.find(x => x.item.id === id);
    return id === undefined ? undefined : findToId !== undefined;
  }
  

  function addItem( item, quantity ) {

    if ( isInCart(item) ) {
      const toChange = cart.find(x => x.item.id === item.id);
      toChange.quantity += quantity;
      console.log(cart);
    } else{ 
      setCart( [...cart, {item, quantity}] );  
    }   
  }


  function removeItem( id ) {
    const filtredItems = cart.filter(x => x.item.id !== id);
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