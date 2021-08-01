import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/index';
import firebase from 'firebase/app';
import cashIco from '../../assets/icons/cash-ico.svg';
import cardIco from '../../assets/icons/card-ico.svg';
import prevIco from '../../assets/icons/prev-ico.svg';
import xIco from '../../assets/icons/x-ico.svg';
import loaderCircle from '../../assets/icons/loader-circle.svg';

const Checkout = ({ status }) => {

    const { cart, clear } = useCartContext();

    const [ paymentStep, setPaymentStep ] = useState('methods');
    const [ checkoutClosed, setCheckoutClosed ] = useState(true);  
    const [ userInfo, setUserInfo ] = useState({ name: '', address: '', postalCode: '', phone: '', email: '' });
    const [ itemsBuy, setItemsBuy ] = useState([]); 
    const [ price, setPrice ] = useState(0);
    const [ orderId, setOrderId ] = useState('');
    const [ orderError, setOrderError ] = useState('');
    const [ nameError, setNameError ] = useState(false);    
    const [ addressError, setAddressError ] = useState(false);    
    const [ postalCodeError, setPostalCodeError ] = useState(false);   
    const [ phoneError, setPhoneError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);    
    const [ generatingOrder, setGeneratingOrder ] = useState(false);

    const nameValidator = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;      
    const addressValidator = /^[a-zA-ZÀ-ÿ0-9\s]{6,100}$/;
    const postalCodeValidator = /^\d{4}$/;
    const phoneValidator = /^\d{8,16}$/;
    const emailValidator = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


    useEffect(() => {

      const itemsBuy = cart.map((e) => {      
        return ({ id: e.item.id, title: e.item.title, quantity: e.quantity, price: e.item.price });
      });

      setItemsBuy(itemsBuy)  

      let total = 0;

      cart.map((e) => {        
        total += e.item.price * e.quantity;         
        return total;
      });

      setPrice(total)  

    }, [cart]);


    const stepSelected = (step) => { setPaymentStep(step) };    

    
    const handleInputChange = (event) => {
      setUserInfo({ ...userInfo, [event.target.name] : event.target.value })      
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
          setPaymentStep('finished'); 
          setGeneratingOrder(false); 
          clear();          
      }).catch(error => {
          setOrderError(error);
          setPaymentStep('error'); 
      });
            
    };


    const validateInputs = (event) => {
      event.preventDefault();
      if(!nameValidator.test(userInfo.name) ){
        setNameError(true);
      } else {
        setNameError(false);
      }      
      if (!addressValidator.test(userInfo.address) ){
        setAddressError(true);
      } else {
        setAddressError(false);
      } 
      if (!postalCodeValidator.test(userInfo.postalCode) ){
        setPostalCodeError(true);
      } else {
        setPostalCodeError(false);
      }
      if (!phoneValidator.test(userInfo.phone) ){
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
      if (!emailValidator.test(userInfo.email) ){
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (nameValidator.test(userInfo.name) && addressValidator.test(userInfo.address) && postalCodeValidator.test(userInfo.postalCode) && phoneValidator.test(userInfo.phone) && emailValidator.test(userInfo.email) ){        
        setGeneratingOrder(true); 
        saveOrder();
      }
    };

    
    const changeCheckoutClosed = () => { 
      setCheckoutClosed(false) 
      setTimeout(() => {
        status(false)
      }, 600);      
    };   
    

    return( 
        <div className="checkout-container">    

            <div className={checkoutClosed ? 'checkout-backdrop fade-in' : 'checkout-backdrop fade-out'} onClick={ () => changeCheckoutClosed()}></div>    
            
            <div className={checkoutClosed ? 'pay-contairner active' : 'pay-contairner inactive'}>

              { paymentStep === 'methods' &&    
                <div className="payment-methods fade-in">
                  <button onClick={ () => changeCheckoutClosed()} className="btn-s-checkout close"><img src={xIco} alt="volver al carrito" /></button>                
                  <h4>Seleccione un método de pago</h4> 

                  <div className="btns-methods">

                  <button onClick={ () => stepSelected('cash')} className="cash">
                    <img src={cashIco} alt="botón de pago en efectivo" />
                    <span>Efectivo</span>                
                  </button>

                  <button onClick={ () => stepSelected('card')} className="card">
                    <img src={cardIco} alt="botón de pago con débito o tarjeta" />
                    <span>Débito/Tarjeta</span>                  
                  </button>

                  </div>

                </div>     
              }      

              { paymentStep === 'card' && 
                <div className="card-method fade-in">
                  <button onClick={ () => stepSelected('methods')} className="btn-s-checkout prev"><img src={prevIco} alt="volver al paso anterior" /></button> 
                  <h4>Método no disponible</h4> 
                  <p>Actualmente solo aceptamos pagos en efectivo.</p>                   
                </div>
              }  

              { paymentStep === 'cash' && 
                <div className="fade-in"> 
                <button onClick={ () => stepSelected('methods')} className="btn-s-checkout prev"><img src={prevIco} alt="volver al paso anterior" /></button>

                <h4>Colocá tus datos</h4>              
                  <form onSubmit={ validateInputs }>  

                    <div className="cont-field">
                      <input type="text" name="name" placeholder="Nombre" onChange={ handleInputChange } />
                       { nameError && <p className="input-error">Por favor, colocá correctamente tu nombre</p>}                      
                    </div> 

                    <div className="cont-field">
                      <input type="text" name="phone" placeholder="Teléfono" onChange={ handleInputChange } />
                      { phoneError && <p className="input-error">Por favor, colocá tu número sin espacios en blanco</p>}                       
                    </div>

                    <div className="cont-field">
                      <input type="text" name="address" placeholder="Dirección" onChange={ handleInputChange } />
                      { addressError && <p className="input-error">Por favor, colocá tu dirección sin utilizar comas ni puntos</p>}                       
                    </div> 

                    <div className="cont-field">
                      <input type="text" name="postalCode" placeholder="Código Postal" onChange={ handleInputChange } />
                      { postalCodeError && <p className="input-error">El código postal ingresado es incorrecto</p>}                       
                    </div>

                    <div className="cont-field">
                      <input type="text" name="email" placeholder="E-mail" onChange={ handleInputChange } />
                      { emailError && <p className="input-error">Debes colocar correctamente tu email</p>}                      
                    </div> 
                    
                    <button type="submit">
                      { !generatingOrder ? <span>confirmar</span> : <img src={loaderCircle} alt="Generando orden..." /> }
                    </button>
                  
                  </form>               
                  
                </div>
              }              
              
              { paymentStep === 'error' &&
                <div className="fade-in">
                  <button onClick={ () => stepSelected('methods')} className="btn-s-checkout prev"><img src={prevIco} alt="volver a métodos de pago" /></button>                
                  <h4>No se ha podido procesar la orden</h4>                  
                  <p>Error: {orderError}</p>                
                </div>     
              }

              { paymentStep === 'finished' &&
                <div className="finished fade-in">    
                  <button onClick={ () => changeCheckoutClosed()} className="btn-s-checkout close"><img src={xIco} alt="volver al carrito" /></button>             
                  <h4>¡Compra realizada!</h4> 
                  <p>Dentro de las próximas 48 hs nos pondremos en contacto para coordinar el envío.</p>                 
                  <p>Copia el siguiente número de pedido, el cual será solicitado al momento de recibir la compra:</p>   
                  <p><span>{orderId}</span></p>           
                </div>     
              }       
            
            </div>

        </div>           
    );    
}

export default Checkout;