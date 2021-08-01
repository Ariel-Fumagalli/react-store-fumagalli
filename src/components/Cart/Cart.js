import React, { useState } from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import Checkout from '../Checkout/Checkout';
import xBlackIco from '../../assets/icons/x-black-ico.svg';
import emptyCart from '../../assets/icons/empty-cart.svg';

const Cart = () => {

    const [ checkoutStatus, setCheckoutStatus ] = useState(false);
    const { cart, removeItem, clear } = useCartContext();
    
    let totalPrice = 0;    

    const changeCheckoutStatus = (status) =>{ 
        setCheckoutStatus(status);             
    } 

    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number)
    };

    return ( 
        <>
        {cart.length === 0 &&
            <div className="cart-empty-container fade-in-cart">
                <p>Todavía no agregastes ítems</p>
                <Link to='/' className="explorar">explorar productos</Link>
            </div>           
        }

        {cart.length !== 0 &&
        <div className="cart-container fade-in-cart">
            <h4>Tus items</h4>
               
                {cart.map((e, i) => {
                    
                    totalPrice +=  e.item.price * e.quantity;

                    return (                            
                        <div id={e.item.id} key={i} className="cart-item">

                            <div className="img-item">
                                <img src={e.item.pictureUrl} alt={e.item.title}></img>
                                <span style={{backgroundColor: `${e.item.bg_color}`}}></span>
                            </div>
                            
                            <div className="title-item">
                                <h4>{e.item.title}</h4>                                
                            </div>                           

                            <div className="quantity-item">                                
                                <ItemCount id={e.item.id} stock={e.item.stock} initial={e.quantity} />
                            </div>

                            <div className="price-item">                                
                                <p><span>$</span>{formatNumber(e.item.price * e.quantity)}</p>
                            </div>

                            <div className="remove-item">
                                <button onClick={ () => removeItem(e.item.id, e.quantity) }><img src={xBlackIco} alt="Quitar item" /></button>
                            </div>

                        </div>                     
                    );
                })}

                <div className="to-order">
                    <button onClick={ () => clear() } className="clear-cart-btn"><img src={emptyCart} alt="vaciar carrito" /><span>vaciar carrito</span></button>
                    <p><span>Total</span> <strong>$</strong>{formatNumber(totalPrice)}</p>
                    <button onClick={ () => setCheckoutStatus(true) } className="btn-buy-cart">Comprar carrito</button> 
                </div>
                                          
        </div> }

        { checkoutStatus && 
        <Checkout status={changeCheckoutStatus} />  
        }      
  
        </>
    );
  };
  
  export default Cart;  