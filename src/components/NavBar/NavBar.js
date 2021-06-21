import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


function NavBar () {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        window.scrollY >= 40 ? setNavbar(true) : setNavbar(false)
    };


    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <Link to='/' className="logo">ROHE</Link>    
            <div className="selector-categorias">
                <NavLink to='/category/Sillas' activeClassName="currentCategory">Sillas</NavLink>    
                <NavLink to='/category/Sillones' activeClassName="currentCategory">Sillones</NavLink> 
                <NavLink to='/category/Sofás' activeClassName="currentCategory">Sofás</NavLink> 
                <p>Tiendas</p>
            </div>
            <CartWidget /> 
        </nav> 
    );
}

export default NavBar;
