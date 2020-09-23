import HomeHeads from "./HomeHeads";
import Contact from "./Contact";
import React, {createContext, useState} from "react";
import Step from "./Step";

const StepContext = createContext();

function Steps(props) {
    const [dane, setDane] = useState({
        material: "",
        howMany: "",
        from: "",
        to: "",
        place: "",
        adress: {
            street: "",
            city: "",
            code: "",
            number: "",
            date: "",
            hour: "",
            info: ""
        }
    })

    const handleChange = (object) => {
        setDane({...dane, ...object})
    }


    return (

        <div className="App">
            <StepContext.Provider value={{dane, handleChange}}>
                {props.children}
            <HomeHeads/>
                <Step/>
            <Contact/>
            </StepContext.Provider>
        </div>
    );
}

export  {Steps, StepContext};