import React, {useContext, useState} from "react";
import {StepContext} from "./Steps";
import bearBackground from "../assets/Background-Form.jpg";


function Step3({next,prev}) {
    let {dane, handleChange} = useContext(StepContext);

    const [from, setFrom] = useState(dane.from);
    const [toWhere, setToWhere] = useState(dane.to);
    const [place, setPlace] = useState(dane.place);

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
        dane={...dane, material: ev.target.value}
        console.log(dane)
    }

    const handleChangeToWhere = (ev) => {
        setToWhere(ev.target.value)
        dane={...dane, material: ev.target.value}
        console.log(dane)
    }

    const handleChangePlace = (ev) => {
        setPlace(ev.target.value)
        dane={...dane, material: ev.target.value}
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
            <label htmlFor="place" className={"place"}/>
            <select value={from} id="place" name="place" onChange={handleChangeFrom} className={"place_select"}>
                <option value="wybierz">wybierz</option>
                <option value="Kraków">Kraków</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Poznań">Poznań</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Gdańsk">Gdańsk</option>
            </select>

            <h5> Komu chciałbyś pomóc:</h5>
                <div className={"person_help"}>
            <label>
                <input type="checkbox" id={"dzieci"} name={"komu"}
                        value={"dzieci"} checked={toWhere === 'dzieci'} onChange={handleChangeToWhere}/><span className={"check_button"}>dzieciom</span>
            </label>
            <label>
                <input type="checkbox" id={"samotnych matek"} name={"komu"}
                       value={"samotnych matek"} checked={toWhere === 'samotnych matek'} onChange={handleChangeToWhere}/><span className={"check_button"}>samotnym matkom</span>
            </label>
            <label>
                <input type="checkbox" id={"bezdomnych"} name={"komu"}
                       value={"bezdomnych"} checked={toWhere === 'bezdomnych'} onChange={handleChangeToWhere}/><span className={"check_button"}>bezdomnym</span>
            </label>
            <label>
                <input type="checkbox" id={"niepełnosprawnych"} name={"komu"}
                       value={"niepełnosprawnych"} checked={toWhere === 'niepełnosprawnych'} onChange={handleChangeToWhere}/><span className={"check_button"}>niepełnosprawnym</span>
            </label>
            <label>
                <input type="checkbox" id={"osób starszych"} name={"komu"}
                       value={"osób starszych"} checked={toWhere === 'osób starszych'} onChange={handleChangeToWhere}/><span className={"check_button"}>Starszym</span>
            </label>
                </div>
            <h5> Wpisz nazwę konkretnej instytucji (opcjonalnie):</h5>
            <label className={"instytucja"}>
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