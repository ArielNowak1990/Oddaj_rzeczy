import React from 'react';
import {Link} from "react-router-dom";
import decoration from '../assets/Decoration.svg';
import HomeHead from "./HomeHead";

function PageLogOut() {


    return (
        <section className={"container"}>
            <HomeHead/>
            <div className={"LogSign_all"}>
                <div className={"LogSign"}>
                    <h4>Wylogowanie nastąpiło pomyślnie</h4>
                    <img className={'decoration'} src={decoration} alt={'decoration'}/>

                            <Link to='/'>
                                <button className={"button_main"}>Strona Główna</button>
                            </Link>
                        </div>
                </div>
        </section>
    );
}

export default PageLogOut;