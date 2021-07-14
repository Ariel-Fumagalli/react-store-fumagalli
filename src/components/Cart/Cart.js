import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Cart = () => {

    const { cart, removeItem, clear } = useCartContext();
    let totalPrice = 0;

    return (
        <>
        {cart.length === 0 &&
            <div className="cart-empty-container">
                <p>Todavía no agregastes ítems</p>
                <Link to='/' className="explorar">explorar productos</Link>
            </div>           
        }

        {cart.length !== 0 &&
        <div className="cart-container">
               
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
                                <ItemCount id={e.item.id} stock={e.item.stock} initial={e.quantity} />
                            </div>

                            <div className="price-item">
                                <p>${e.item.price * e.quantity}</p>
                            </div>

                            <div className="remove-item">
                                <button onClick={ () => removeItem(e.item.id, e.quantity) }>remover item</button>
                            </div>

                        </div>                     
                    );
                })}

                <div className="total-price">
                    <button onClick={ () => clear() } className="clear-cart-btn">vaciar carrito</button>
                    <p>Total: {totalPrice}</p>
                </div>

                <Link to='/Checkout' className="btn-buy-cart">Comprar carrito</Link> 

        </div> }
  
        </>
    );
  };
  
  export default Cart;
  