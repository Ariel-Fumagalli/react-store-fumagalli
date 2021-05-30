import './NavBar.css'
import carritoIcon from '../../assets/icons/carrito-ico.svg';

function NavBar () {
    return(
        <nav>
            <h1 className="logo">HOOK</h1>
            <ul>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Stories</li>
                <li>Lookbook</li>
            </ul>
            <img src={carritoIcon} alt="icono carrito de compras" height="36" width="36" className="carrito-ico"/>
        </nav> 
    );
}

export default NavBar;