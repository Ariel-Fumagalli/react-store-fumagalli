import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

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
            <CartWidget /> 
        </nav> 
    );
}

export default NavBar;
