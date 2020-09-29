import React, {useContext, useState} from "react";
import {StepContext} from "./Steps";
import bearBackground from "../assets/Background-Form.jpg";
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import pl from "date-fns/locale/pl"
registerLocale("PL", pl);


function Step4({next, prev}) {
    let {dane, handleChange} = useContext(StepContext);

    const today = new Date();
    const [street, setStreet] = useState(dane.street)
    const [city, setCity] = useState(dane.city)
    const [code, setCode] = useState(dane.code)
    const [number, setNumber] = useState(dane.number)
    const [dates, setDate] = useState(dane.date)
    const [hour, setHour] = useState(dane.hour)
    const [info, setInfo] = useState(dane.information)
    const [startDate, setStartDate] = useState(today);
    const [startDate2, setStartDate2] = useState(today.getHours());
    today.toLocaleDateString('pl-PL');
    today.toLocaleTimeString('pl-PL', {hour12: false});
    let adress = {
            street: street,
            city: city,
            code: code,
            number: number,
            date: `${startDate}`,
            hour: `${startDate2}`,
            information: info
        }


    const handleClickNext = () => {
        handleChangeDate();
        // handleChangeHour();


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
    const handleChangeDate = () => {
        setDate(`${startDate}`)
        console.log(`${startDate}`)
        // adress = {...adress, date: startDate}
        // dane={...dane, ...adress}
    }
    const handleChangeHour = () => {
        setHour(startDate2)
        adress = {...adress, hour: startDate2}
        dane={...dane, ...adress}
        console.log(dane)
    }
    const handleChangeInfo = (ev) => {
        setInfo(ev.target.value)
        adress = {...adress, information: ev.target.value}
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
                                <input onChange={handleChangeStreet} value={street}/>
                            </label>
                            <label> Miasto:
                                <input onChange={handleChangeCity} value={city}/>
                            </label>
                            <label> Kod pocztowy:
                                <input onChange={handleChangeCode} value={code}/>
                            </label>
                            <label> Numer telefonu:
                                <input onChange={handleChangeNumber} value={number}/>
                            </label>
                        </div>
                        <div className={"adresss_info"}>
                            <h5>Termin odbioru</h5>
                            <label className={"datapickers"}> <div className={"datapickers_div"} >Data:</div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    withPortal
                                    dateFormat="yyyy-MM-dd"

                                />
                            </label>
                            <label className={"change_index datapickers"}> <div className={"datapickers_div"}>Godzina:</div>
                                <DatePicker
                                    selected={startDate2}
                                    onChange={date => {setStartDate2(date)}}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    dateFormat="HH:mm"

                               />
                            </label>
                            <label className={"textarea change_index datapickers"}> <div className={"datapickers_div"}>Uwagi dla kuriera:</div>
                                <input onChange={handleChangeInfo} value={info}/>
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