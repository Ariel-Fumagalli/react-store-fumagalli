import './NavBar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar () {

    return(
        <nav>
            <Link to='/' className="logo">ROHE</Link>    
            <div className="selector-categorias">
                <NavLink to='/category/Sillas'>Sillas</NavLink>    
                <NavLink to='/category/Sillones'>Sillones</NavLink> 
                <NavLink to='/category/Sofás'>Sofás</NavLink> 
                <p>Tiendas</p>
            </div>
            <CartWidget /> 
        </nav> 
    );
}

export default NavBar;
