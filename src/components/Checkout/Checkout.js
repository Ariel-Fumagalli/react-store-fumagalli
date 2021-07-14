import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/index';
import firebase from 'firebase/app';

const Checkout = () => {

    const { cart, clear } = useCartContext();
    const [ userInfo, setUserInfo ] = useState({ name: '', phone: '', email: '' });
    const [ itemsBuy, setItemsBuy ] = useState([]); 
    const [ price, setPrice ] = useState(0);
    const [ orderId, setOrderId ] = useState();


    useEffect(() => {

      const itemsBuy = cart.map((e) => {      
        return ({ id: e.item.id, title: e.item.title, price: e.item.price });
      });

      setItemsBuy(itemsBuy)  

      let total = 0;

      cart.map((e) => {        
        total += e.item.price * e.quantity;         
        return total;
      });

      setPrice(total)  

    }, [cart]);


    const handleInputChange = (event) => {
      setUserInfo({ ...userInfo, [event.target.name] : event.target.value })
    };


    const sendData = (event) => {
      event.preventDefault();
      saveOrder();
      clear();
    };


    const saveOrder = () => {

      const db = getFirestore();
      const order = db.collection('orders');

      const newOrder = {
        buyer: userInfo,                    
        items: itemsBuy,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: price
      };

      order.add(newOrder).then(({ id }) => {
        setOrderId(id);
          console.log(`Elemento creado. ID: ${id}`);
      }).catch(error => {
          console.log(error);
      });
    };   
    

    return( 

        <div className="checkout-container"> 

            <div className="items-to-buy">
                <h4>Vas a comprar</h4>
                
                {cart.map((e, i) => {
                  
                    return (                            
                        <div id={e.item.id} key={i} className="item-buy">

                            <div className="img-item">
                                <img src={e.item.pictureUrl} alt={e.item.title}></img>
                            </div>
                            
                            <div className="title-item">
                                <p>{e.item.title} ( x{e.quantity} )</p>
                            </div>

                            <div className="price-item">
                                <p>${e.item.price * e.quantity}</p>
                            </div>

                        </div>                     
                    );
                })}

                <div className="total-price">
                    <p>Total: {price}</p>
                </div>

            </div>
           
            <div className="pay-contairner">

              <form onSubmit={ sendData } >  

                <div id="cont-nombre" className="cont-campo">
                  <input type="text" name="name" placeholder="Nombre" onChange={ handleInputChange } />
                  {/* <p className="input-error">Por favor, colocá correctamente tu nombre</p> */}
                </div> 

                <div id="cont-telefono" className="cont-campo">
                  <input type="text" name="phone" placeholder="Teléfono" onChange={ handleInputChange } />
                  {/* <p className="input-error">Por favor, colocá tu número sin espacios en blanco</p> */}
                </div>

                <div id="cont-email" className="cont-campo">
                  <input type="text" name="email" placeholder="E-mail" onChange={ handleInputChange } />
                  {/* <p className="input-error">Debes colocar correctamente tu email</p> */}
                </div> 

                <div id="form-error">
                  {/* <p>Por favor, completá el formulario correctamente</p> */}
                </div> 
                
                <button type="submit" >Confirmar compra</button>
                
              </form>  

              {/* <button onClick={ () => saveOrder() } >enviar</button> */}

              <p>Tu ID de compra es: {orderId}</p>              

            </div>

        </div>           
    );    
}

export default Checkout;