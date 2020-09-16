import React from 'react';
import {Link} from "react-router-dom";
import {useState} from 'react'
import {Link as LinkScroll} from 'react-scroll';

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
                    {(menuClick) ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
                </div>
                <ul className={menuClick ? 'menu menu__active' : 'menu'}>
                    <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose}>Start</a></li>
                    <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                                to={'steps'}
                                                                spy={true}
                                                                smooth={true}
                                                                duration={500}>o co chodzi?</LinkScroll></li>
                    <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                                to={'about'}
                                                                spy={true}
                                                                smooth={true}
                                                                duration={500}>O nas</LinkScroll></li>
                    <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                                to={'help'}
                                                                spy={true}
                                                                smooth={true}
                                                                duration={500}>Fundacje i organizacje</LinkScroll></li>
                    <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                                to={'contact'}
                                                                spy={true}
                                                                smooth={true}
                                                                duration={500}>Kontakt</LinkScroll></li>
                </ul>
            </header>
        </section>
    );
}

export default HomeHead;
