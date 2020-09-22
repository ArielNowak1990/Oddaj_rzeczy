import React, {useContext, useState} from "react";
import {StepContext} from "./Steps";
import bearBackground from "../assets/Background-Form.jpg";


function Step2({next,prev}) {
    let {dane, handleChange} = useContext(StepContext);
    const [howMany,setHowMany] = useState(dane.howMany)

    const handleClickNext = () => {
        let object = {
            howMany: howMany
        }
        if (typeof handleChange === "function") {handleChange(object)}
        if (typeof next === "function") {next()}
    }
    const handleClickPrev = () => {
        if (typeof prev === "function") {prev()}
    }


    const handleChangeMaterial = (ev) => {
        setHowMany(ev.target.value)
        dane={...dane, howMany: ev.target.value}
        console.log(dane)
    }

    return (
        <div>
            <div className={"yellow"}>
                <h5>WAŻNE:</h5>
                <p>Wszystkie rzeczy zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className={"formularz"}>
                <img src={bearBackground} alt="bearBackground" className={"bearBackground"}/>
            <h4> Krok 2/4 </h4>
            <h3> Podaj liczbę 60l worków, w które spakowałeś rzeczy:</h3>
            <label htmlFor="worki"><h4>liczba 60l worków:</h4></label>
            <select className={"worki"} id="worki" name="ilosc" onChange={handleChangeMaterial}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
                <div>
            <button onClick={handleClickPrev}>cofnij</button>
            <button onClick={handleClickNext}>dalej</button>
                </div>
            </div>
        </div>
    );
}

export default Step2;