import React, {useState} from 'react';
import decoration from '../assets/Decoration.svg';

const API_URL = "https://fer-api.coderslab.pl/v1/portfolio/contact"

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error1, setError1] = useState([])
    const [error2, setError2] = useState([])


    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangeMessage = (event) => {
        setMessage(event.target.value)
    }



    const handleSubmit = (event) => {
        function validateEmail() {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        event.preventDefault();
        let arrayErrors = [];
        // let arrayError1 = [];
        // let arrayError2 = [];
        let contact = {
            name: name,
            email: email,
            message: message
        }

        if (!validateEmail === true) {
            setError1("błędny mail")
        }
        if ([...message].length < 120) {
            setError2("zbyt krótka wiadomość")
        }
        if (!validateEmail === true) {
            arrayErrors.push("błędny mail")
        }
        if ([...message].length < 120) {
            arrayErrors.push("zbyt krótka wiadomość")
        }
        if (arrayErrors.length < 1) {
            fetch(`${API_URL}`,
                {
                    method: 'POST',
                    body: JSON.stringify(contact),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(alert("200 - status: Success"))
                .then(
                    setName(""),
                    setMessage(""),
                    setEmail("")
                )
                .catch(error => console.log(error))
        }
    }


    return (
        <section className={'contact'} id={'contact'}>
            <div className={'backgroundFilter'}>
                <div className={'contact__section'}>
                    <h2 className={'contact__title'}>Skontaktuj się z nami</h2>
                    <img className={'decoration'} src={decoration} alt={'decoration'}/>
                    <form className={'contact__form'} onSubmit={handleSubmit}>
                        <div className={'contact__details'}>
                            <div className={'contact__wrapper'}>
                                <h3 className={'contact__subtitle'}>Wpisz swoje imię</h3>
                                <input type="text" value={name} onChange={handleChangeName}
                                       className={'contact__input contact__name'} placeholder={"Krzysztof"}/>
                            </div>
                            <div className={'contact__wrapper'}>
                                <h3 className={'contact__subtitle'}>Wpisz swój email</h3>
                                <input value={email} onChange={handleChangeEmail}
                                       className={'contact__input contact__email'} placeholder={"Krzysztof@mail.pl"}/>
                               <div className={"error"}>{error1}</div>
                            </div>
                        </div>

                        <div className={'contact__wrapper'}>
                            <h3 className={'contact__subtitle'}>Wpisz swoją wiadomosć</h3>
                            <textarea value={message} onChange={handleChangeMessage}
                                      className={'contact__input contact__message '}
                                      placeholder={'Lorem ipsum dolor sit amet, ' +
                                      'sed do eiusmod tempor incididunt ut labore. ' +
                                      'Ut enim ad minim veniam, ullamco laboris ' +
                                      'nisi ut aliquip ex ea commodo consequat.'}/>
                            <div className={"error"}>{error2}</div>
                        </div>

                        <button className={'btn btn-small btn-contact'}>Wyślij</button>
                    </form>
                </div>
                <footer className={'footer'}>
                    <p>Copyright by Coders Lab</p>
                    <div className={'footer__media'}>
                        <i className="fab fa-facebook-f"/>
                        <i className="fab fa-twitter"/>
                    </div>
                </footer>
            </div>

        </section>
    );
}

export default Contact;
