import React, {useState, useContext} from "react";
import {StepContext} from "./Steps";
import bearBackground from "../assets/Background-Form.jpg"

function Step1({next}) {
    let {dane, handleChange} = useContext(StepContext);

    const [material,setMaterial] = useState(dane.material)

    const handleClickNext = () => {
        let object = {
            material: material
        }
        if (typeof handleChange === "function") {handleChange(object)}
        if (typeof next === "function") {next()}
    }

    const handleChangeMaterial = (ev) => {
        setMaterial(ev.target.value)
        dane={...dane, material: ev.target.value}
        console.log(dane)
    }

    return (
    <>
        <div>
            <div className={"yellow"}>
                <h5>WAŻNE:</h5>
                <p>Wszystkie rzeczy zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className={"formularz"}>
                <img src={bearBackground} alt="bearBackground" className={"bearBackground"}/>
            <h4> Krok 1/4 </h4>
            <h3> Zaznacz co chcesz oddać:</h3>
            <form>
                <label>
                    <input type="radio" id={"dobre_ubrania"} name={"przekazanie"}
                           value={"dobre_ubrania"} onChange={handleChangeMaterial}/>Ubrania, nadające się do ponownego użycia
                </label>
                <label>
                    <input type="radio" id={"zle_ubrania"} name={"przekazanie"}
                           value={"zle_ubrania"} onChange={handleChangeMaterial}/>Ubrania do wyrzucenia
                </label>
                <label>
                    <input type="radio" id={"zabawki"} name={"przekazanie"}
                           value={"zabawki"} onChange={handleChangeMaterial}/>Zabawki
                </label>
                <label>
                    <input type="radio" id={"ksiazki"} name={"przekazanie"}
                           value={"ksiazki"} onChange={handleChangeMaterial}/>Książki
                </label>
                <label>
                    <input type="radio" id={"inne"} name={"przekazanie"}
                           value={"inne"} onChange={handleChangeMaterial}/>Inne
                </label>
            </form>

            <button onClick={handleClickNext} >dalej</button>
        </div>
        </div>
    </>
    );
}

export default Step1;