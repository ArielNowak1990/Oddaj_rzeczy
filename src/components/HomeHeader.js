import React from 'react';
import {Link} from "react-router-dom";
import {useState} from 'react'
import decoration from '../assets/Decoration.svg'
import headerBackground from '../assets/Home-Hero-Image.jpg'
import {Link as LinkScroll} from 'react-scroll';

function HomeHeader() {
    const [menuClick, setMenuClick] = useState(false)

    const handleMenuClick = () => setMenuClick(!menuClick);
    const handleMenuClose = () => setMenuClick(false);

    return (
        <section className={'main'}>
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
            <div className={'content__image'}>
                <img src={headerBackground} alt="HomeHero"/>
            </div>
            <div className={'content'}>
                <div className={'content__text'}>
                <h2 className={'content__title'}>Zacznij pomagać!</h2>
                <h2 className={'content__title'}>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img className={'decoration'} src={decoration} alt={'decoration'}/>
                <div className={'content__buttons'}>
                    <Link to={'/login'} className={'btn btn-big'}>Oddaj Rzeczy</Link>
                    <Link to={'/login'} className={'btn btn-big'}>Zorganizuj Zbiórkę</Link>
                </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeader;
