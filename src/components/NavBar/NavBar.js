import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


function NavBar () {

    const [navbarBg, setNavbarBg] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [btnCategories, setBtnCategories] = useState(false);    
    const [categoriesWraper, setCategoriesWraper] = useState('initial');

    const changeBackground = () => {
        window.scrollY >= 40 ? setNavbarBg(true) : setNavbarBg(false)
    };

    window.addEventListener('scroll', changeBackground);

    const togglerCategories = () => {
        btnCategories ? setBtnCategories(false) : setBtnCategories(true);
        if (navbarOpen) {
            setTimeout(() => {
                setNavbarOpen(false);          
            }, 600);
        } else{
            setNavbarOpen(true);          
        }
              
        if (categoriesWraper === 'initial') {
            setCategoriesWraper('open')
        } else if (categoriesWraper === 'open') {
            setCategoriesWraper('close')
            setTimeout(() => {
                setCategoriesWraper('initial')
            }, 600); 
        } else if (categoriesWraper === 'close') {
            setCategoriesWraper('open')            
        }
    };
    
    const closeCategoriesMenu = () => {        
        setTimeout(() => {
            setCategoriesWraper('close')
            setBtnCategories(false)            
        }, 200); 
        setTimeout(() => {
            setCategoriesWraper('initial')
            setNavbarOpen(false)            
        }, 800); 
    }

    return(
        <>
            <nav className={`${navbarBg ? 'navbar active' : 'navbar'} ${navbarOpen ? 'open' : 'closed'}`}>
                <div className="btns-navbar">
                    <Link to='/' className="logo">ROHE</Link>
                        <button type="button" className={!btnCategories ? 'btn-view-categories' : 'btn-view-categories active'} onClick={ () => togglerCategories()} />                       
                    <CartWidget /> 
                </div>
                <div className={`${(categoriesWraper === 'initial') ? 'categories-wraper' : (categoriesWraper === 'open') ? 'categories-wraper open' : 'categories-wraper close'}`}>
                    <NavLink to='/category/Sillas' activeClassName="currentCategory" onClick={ () => closeCategoriesMenu()}>Sillas</NavLink>    
                    <NavLink to='/category/Sillones' activeClassName="currentCategory" onClick={ () => closeCategoriesMenu()}>Sillones</NavLink> 
                    <NavLink to='/category/Sofás' activeClassName="currentCategory" onClick={ () => closeCategoriesMenu()}>Sofás</NavLink> 
                    <div className="sections-demo">
                        <p>Empresa</p><p>Tiendas</p><p>Ayuda</p><p>Contacto</p>
                    </div>
                </div>
            </nav>            
        </>
    );
}

export default NavBar;