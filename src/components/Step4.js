import React, {useContext, useState} from "react";
import {StepContext} from "./Steps";
import bearBackground from "../assets/Background-Form.jpg";
import DatePicker from 'react-datepicker';


function Step4({next, prev}) {
    let {dane, handleChange} = useContext(StepContext);
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [code, setCode] = useState()
    const [number, setNumber] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [info, setInfo] = useState()

    let adress = {
            street: street,
            city: city,
            code: code,
            number: number,
            date: date,
            hour: hour,
            info: info
        }


    const handleClickNext = () => {

        if (typeof handleChange === "function") {
            handleChange(adress)
        }
        if (typeof next === "function") {
            next()
        }
    }
    const handleClickPrev = () => {
        if (typeof prev === "function") {
            prev()
        }
    }

    const handleChangeStreet = (ev) => {
        setStreet(ev.target.value)
        adress = {...adress, street: ev.target.value}
        dane={...dane, ...adress}
        console.log(dane)
    }
    const handleChangeCity = (ev) => {
        setCity(ev.target.value)
        adress = {...adress, city: ev.target.value}
        dane={...dane, ...adress}
        console.log(dane)
    }
    const handleChangeCode = (ev) => {
        setCode(ev.target.value)
        adress = {...adress, code: ev.target.value}
        dane={...dane, ...adress}
        console.log(dane)
    }
    const handleChangeNumber = (ev) => {
        setNumber(ev.target.value)
        adress = {...adress, number: ev.target.value}
        dane={...dane, ...adress}
        console.log(dane)
    }
    const handleChangeDate = (ev) => {
        setDate(ev.target.value)
        adress = {...adress, date: ev.target.value}
        dane={...dane, ...adress}
        console.log(dane)
    }
    const handleChangeHour = (ev) => {
        setHour(ev.target.value)
        adress = {...adress, hour: ev.target.value}
        dane={...dane, ...adress}
        console.log(dane)
    }
    const handleChangeInfo = (ev) => {
        setInfo(ev.target.value)
        adress = {...adress, infor: ev.target.value}
        dane={...dane, ...adress}
        console.log(dane)
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
                    <h4> Krok 4/4 </h4>
                    <h3> Lokalizacja:</h3>
                    <div className={"adresss"}>
                        <div className={"adresss_your"}>
                            <h5>Adres odbioru</h5>
                            <label> Ulica:
                                <input onChange={handleChangeStreet}/>
                            </label>
                            <label> Miasto:
                                <input onChange={handleChangeCity}/>
                            </label>
                            <label> Kod pocztowy:
                                <input onChange={handleChangeCode}/>
                            </label>
                            <label> Numer telefonu:
                                <input onChange={handleChangeNumber}/>
                            </label>
                        </div>
                        <div className={"adresss_info"}>
                            <h5>Termin odbioru</h5>
                            <label> Data:
                                <input onChange={handleChangeDate}/>
                            </label>
                            <label> Godzina:
                                <input onChange={handleChangeHour}/>
                            </label>
                            <label> Uwagi dla kuriera
                                <input onChange={handleChangeInfo}/>
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

            export default Step4;