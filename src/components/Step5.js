import React, {useContext} from "react";
import {StepContext} from "./Steps";
import bearBackground from "../assets/Background-Form.jpg";
import log1 from "../assets/Icon-1.svg"
import log4 from "../assets/Icon-4.svg"


function Step5({next, prev}) {
    let {dane} = useContext(StepContext);
    console.log(dane)

    const handleClickNext = () => {
        if (typeof next === "function") {
            next()
        }
    }
    const handleClickPrev = () => {
        if (typeof prev === "function") {
            prev()
        }
    }

    return (
        <>
            <div>
                <div className={"yellow"}>
                    <h5>WAŻNE:</h5>
                    <p>Wszystkie rzeczy zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy
                        znajdziesz TUTAJ.</p>
                </div>
                <div className={"formularz"}>
                    <img src={bearBackground} alt="bearBackground" className={"bearBackground"}/>
                    <div className={"sum_first"}>
                        <h4> Podsumowanie Twojej darowizny:</h4>
                        <h5> Oddajesz:</h5>
                        <h5><img src={log1} alt="" className={"step5_img"}/><div> ilość worków: {dane.howMany}, zawierające: {dane.material}, dla: {dane.to}</div></h5>
                        <h5><img src={log4} alt="" className={"step5_img"}/><div> dla lokalizacji {dane.from}</div></h5>
                    </div>
                    <div className={"sum_container"}>
                        <div className={"sum_sec"}>
                            <h5>Adres odbioru:</h5>
                            <label> Ulica: <span>{dane.street}</span>
                            </label>
                            <label> Miasto: <span>{dane.city}</span>
                            </label>
                            <label> Kod pocztowy: <span>{dane.code}</span>
                            </label>
                            <label> Numer telefonu: <span>{dane.number}</span>
                            </label>
                        </div>
                        <div className={"sum_third"}>
                            <h5>Termin odbioru:</h5>
                            <label> Data: <span>{dane.date.slice(3,16)}</span>
                            </label>
                            <label> Godzina: <span>{dane.hour.slice(15,21)}</span>
                            </label>
                            <label> Uwagi dla kuriera: <span>{dane.information}</span>
                            </label>
                        </div>
                    </div>


                <div>
                    <button onClick={handleClickPrev}>cofnij</button>
                    <button onClick={handleClickNext}>dalej</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default Step5;