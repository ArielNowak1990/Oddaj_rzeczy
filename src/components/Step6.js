import React from "react";
import bearBackground from "../assets/Background-Form.jpg";


function Step6() {

    return (
        <div>
            <div className={"yellow"}>
                <h5>WAŻNE:</h5>
                <p>Wszystkie rzeczy zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className={"formularz"}>
                <img src={bearBackground} alt="bearBackground" className={"bearBackground"}/>
                <h3> Dziękujemy ! </h3>
                <h3> że podzieliłeś się z najbardziej potrzebującymi !</h3>
                <div>
                    <button>Strona główna</button>
                </div>
            </div>
        </div>
    );
}

export default Step6;