import React from 'react';
import {Link} from "react-router-dom";
import {useState} from 'react'
import times from "../assets/times-solid.svg";
import bars from "../assets/bars-solid.svg";
// import {Link as LinkScroll} from 'react-scroll';

function HomeHead() {
    const [menuClick, setMenuClick] = useState(false)

    const handleMenuClick = () => setMenuClick(!menuClick);
    const handleMenuClose = () => setMenuClick(false);

    return (
        <section className={'main_other'}>
            <header className={'header'}>
                <div className={'logIn'}>
                    <Link to={'/login'} className={'btn btn-small'}>Zaloguj</Link>
                    <Link to={'/signup'} className={'btn btn-small'}>Zarejestruj</Link>
                </div>
                <div className={'menu-icon'} onClick={handleMenuClick}>
                    {menuClick? <img src={times} alt="times"/> : <img src={bars} alt="bars"/>}
                </div>
                <ul className={menuClick ? 'menu menu__active' : 'menu'}>
                    <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose} href={'http://localhost:3001'}>Start</a></li>
                    <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose} href={'http://localhost:3001/#steps'}>o co chodzi?</a></li>
                    <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose} href={'http://localhost:3001/#about'}>O nas</a></li>
                    <li className={'menu__element'}><a href={'http://localhost:3001/#help'} className={'menu__link'} onClick={handleMenuClose}>Fundacje i organizacje</a></li>
                    <li className={'menu__element'}><a href={'http://localhost:3001/#contact'} className={'menu__link'} onClick={handleMenuClose}>Kontakt</a></li>
                </ul>
            </header>
        </section>
    );
}

export default HomeHead;
