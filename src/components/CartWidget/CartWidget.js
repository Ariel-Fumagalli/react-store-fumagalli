import React from 'react';
import carritoIcon from '../../assets/icons/carrito-ico.svg';

const CartWidget = () => {
    return(
        <div>
            <img src={carritoIcon} alt="icono carrito de compras" height="36" width="36" className="carrito-ico"/>
        </div>        
    );
}

export default CartWidget;

// prueba