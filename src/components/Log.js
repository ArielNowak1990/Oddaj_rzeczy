import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import decoration from '../assets/Decoration.svg';
import HomeHead from "./HomeHead";
import FirebaseContext from "./firebase/context"

function PageLog() {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [error, setError] = useState([])
    const firebase = useContext(FirebaseContext)
    console.log(firebase)

    function validate() {
        const re = /\S+@\S+\.\S+/;
        let isValidate = true;
        if (re.test(email) !== true) {
            setError({
                ...error,
                emailError: 'Email nieprawidłowy!',
                passError: ""
            })
            isValidate = false
        } else if (password.length < 6 ||
            password === ''){
            setError({
                emailError: '',
                passError: 'Hasło jest za krótkie!'
            })
            isValidate = false
        }
        return isValidate
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;

        firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(
                setEmail(""),
                setPassword(""),
                console.log("dziala")
            )
            .then(
                window.location.href="http://localhost:3001/steps"
            )
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <section className={"container"}>
            <HomeHead/>
            <div className={"LogSign_all"}>
                <div className={"LogSign"}>
                    <h3>Zaloguj</h3>
                    <img className={'decoration'} src={decoration} alt={'decoration'}/>
                    <form onSubmit={handleSubmit}>
                        <div>

                            <input type="text"
                                   value={email}
                                   placeholder={"Email"}
                                   onChange={e => setEmail(e.target.value)}
                            />
                            <ul className={"log_error"}>{error.emailError}</ul>
                        </div>
                        <div>
                            <input type="password"
                                   value={password}
                                   placeholder={"Haslo"}
                                   onChange={e => setPassword(e.target.value)}
                            />
                            <ul className={"log_error"}>{error.passError}</ul>
                        </div>
                        <div className={"LogSign_buttons"}>
                            <button type="submit" className={"button_main nonactive"}>ZALOGUJ</button>
                            <Link to='/signup'>
                                <button type="text" className={"button_main"}>ZAłÓŻ KONTO</button>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
}

export default PageLog;