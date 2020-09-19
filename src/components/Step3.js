import React, {useContext, useState} from "react";
import {StepContext} from "./Steps";
import bearBackground from "../assets/Background-Form.jpg";


function Step3({next,prev}) {
    let {dane, handleChange} = useContext(StepContext);

    const [from, setFrom] = useState("");
    const [toWhere, setToWhere] = useState("");
    const [place, setPlace] = useState("");

    const handleClickNext = () => {
        let object = {
            from: from,
            to: toWhere,
            place: place,
        }
        if (typeof handleChange === "function") {handleChange(object)}
        if (typeof next === "function") {next()}
    }

    const handleClickPrev = () => {
        if (typeof prev === "function") {prev()}
    }

    const handleChangeFrom = (ev) => {
        setFrom(ev.target.value)
        // dane={...dane, material: ev.target.value}
        console.log(dane)
    }

    const handleChangeToWhere = (ev) => {
        setToWhere(ev.target.value)
        // dane={...dane, material: ev.target.value}
        console.log(dane)
    }

    const handleChangePlace = (ev) => {
        setPlace(ev.target.value)
        // dane={...dane, material: ev.target.value}
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
            <h4> Krok 3/4 </h4>
            <h5> Lokalizacja, odbiór z:</h5>
            <label htmlFor="place"></label>
            <select id="place" name="place" onChange={handleChangeFrom}>
                <option value="Kraków">Kraków</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Poznań">Poznań</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Gdańsk">Gdańsk</option>
            </select>

            <h5> Komu chciałbyś pomóc:</h5>
            <label>
                <input type="radio" id={"dzieciom"} name={"komu"}
                       value={"dzieciom"} onChange={handleChangeToWhere}/>dzieciom
            </label>
            <label>
                <input type="radio" id={"samotnym_matkom"} name={"komu"}
                       value={"samotnym_matkom"} onChange={handleChangeToWhere}/>samotnym matkom
            </label>
            <label>
                <input type="radio" id={"bezdomnym"} name={"komu"}
                       value={"bezdomnym"} onChange={handleChangeToWhere}/>bezdomnym
            </label>
            <label>
                <input type="radio" id={"niepełnosprawnym"} name={"komu"}
                       value={"niepełnosprawnym"} onChange={handleChangeToWhere}/>niepełnosprawnym
            </label>
            <label>
                <input type="radio" id={"Starszym"} name={"komu"}
                       value={"Starszym"} onChange={handleChangeToWhere}/>Osobom starszym
            </label>

            <h5> Wpisz nazwę konkretnej instytucji (opcjonalnie):</h5>
            <label>
                <input onChange={handleChangePlace} value={place}/>
            </label>


            <div>
            <button onClick={handleClickPrev}>cofnij</button>
            <button onClick={handleClickNext}>dalej</button>
            </div>
            </div>
        </div>
    );
}

export default Step3;