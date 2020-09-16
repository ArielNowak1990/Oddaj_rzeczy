import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import decoration from '../assets/Decoration.svg';
import HomeHead from "./HomeHead";

import FirebaseContext from "./firebase/context"


function PageSign() {
    const [mail, setMail] = useState([])
    const [password, setPassword] = useState([])
    const [passwordRepeat, setPasswordRepeat] = useState([])
    const [error, setError]= useState([])

    const firebase = useContext(FirebaseContext)
    console.log(firebase)


    const validate = () => {
        const re = /\S+@\S+\.\S+/;
        let isValidate = true;
        if (re.test(mail) !== true) {
            setError({
                ...error,
                emailError: 'Email nieprawidłowy!'
            })
            isValidate = false
        } else if (password.length < 6 ||
            passwordRepeat === '' ||
            password === '' ||
            passwordRepeat !== password) {
            setError({
                ...error,
                passError: 'Hasło muszą conjamniej 6 znaków i być takie same'
            })
            isValidate = false
        }
        return isValidate
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        firebase
            .doCreateUserWithEmailAndPassword(mail, passwordRepeat)
            .then(authUser => {
                //create a user in Firebase realtime database
                return firebase
                    .user(authUser.user.uid)
                    .set({
                        email: mail
                    })
            })
            .then(
                setMail(""),
                setPassword(""),
                setPasswordRepeat("")
            )
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <section className={"container"}>
            <HomeHead/>
            <div className={"LogSign_all2"}>
                <div className={"LogSign"}>
                   <h3>Zarejestruj się:</h3>
                    <img className={'decoration'} src={decoration} alt={'decoration'}/>
                    <form onSubmit={handleSubmit} >
                        <div>
                            <input type="text"
                                   value={mail}
                                   placeholder={"Mail"}
                                   onChange={e => setMail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   value={password}
                                   placeholder={"Haslo"}
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   value={passwordRepeat}
                                   placeholder={"Powtórz hasło"}
                                   onChange={e => setPasswordRepeat(e.target.value)}
                            />
                        </div>
                        <div className={"LogSign_buttons"}>
                            <button type="submit" className={"button_main nonactive"}>REJESTRUJ!</button>
                            {error.length && error?.map( (element,index) => {return(<ul key={index}><li>{element}</li></ul>) })}
                            <Link to='/login'>
                                <button type="text" className={"button_main"}>ZALOGUJ SIĘ</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default PageSign;