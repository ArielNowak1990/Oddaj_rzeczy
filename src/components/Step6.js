import React from "react";
import bearBackground from "../assets/Background-Form.jpg";
import decoration from "../assets/Decoration.svg"


function Step6() {

    return (
        <div>
            <div className={"yellow"}>
                <h5>WAŻNE:</h5>
                <p>Wszystkie rzeczy zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className={"formularz"}>
                <img src={bearBackground} alt="bearBackground" className={"bearBackground"}/>
                <div className={"last_form"}>
                <h3> Dziękujemy !</h3>
                <h3> że podzieliłeś się z najbardziej potrzebującymi !</h3>
                <img src={decoration} alt="decor" className={"last_decor"}/>
                <div>

                    <a href="http://localhost:3001/"><button>Strona główna</button></a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Step6;