import React from 'react';
import {Link} from "react-router-dom";
import {useState} from 'react'
import {Link as LinkScroll} from 'react-scroll';
import decoration from "../assets/Decoration.svg";
import background from "../assets/Form-Hero-Image.jpg"
import times from "../assets/times-solid.svg";
import bars from "../assets/bars-solid.svg";

function HomeHeads() {
    const [menuClick, setMenuClick] = useState(false)

    const handleMenuClick = () => setMenuClick(!menuClick);
    const handleMenuClose = () => setMenuClick(false);

    return (
        <section className={'main_others'}>
            <img src={background} alt="tlo" className={'tlo'}/>
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

            <div className={'summary'}>
                <h2 className={'summary_title'}>Oddaj rzeczy których już nie chcesz !</h2>
                <h2 className={'summary_title'}>POTRZEBUJĄCYM</h2>
                <img className={'decoration'} src={decoration} alt={'decoration'}/>
                <h3 className={'box_title'}>Wystarczą 4 proste kroki:</h3>
                <div className={"four_step"}>
                    <div className={"box"}>
                        <p>1</p>
                        <p>wybierz rzeczy</p>
                    </div>
                    <div className={"box"}>
                        <p>2</p>
                        <p>Spakuj je w worki</p>
                    </div>
                    <div className={"box"}>
                        <p>3</p>
                        <p>wybierz fundacje</p>
                    </div>
                    <div className={"box"}>
                        <p>4</p>
                        <p>zamów kuriera</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeads;
