import React, {useState} from "react";
// import {StepContext} from "./Steps";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

function Step() {
    const [count, setCount] = useState(1)

    const handleNext = () => {
        if (count < 6) setCount(prevState => prevState + 1)
    }

    const handlePrev = () => {
        if (count > 1) setCount(prevState => prevState - 1)
    }

    // let {dane, handleChange} = useContext(StepContext);


    if (count === 1){return <Step1 next={handleNext}/>}
    if (count === 2){return <Step2 next={handleNext} prev={handlePrev}/>}
    if (count === 3){return <Step3 next={handleNext} prev={handlePrev}/>}
    if (count === 4){return <Step4 next={handleNext} prev={handlePrev}/>}
    if (count === 5){return <Step5 next={handleNext} prev={handlePrev}/>}
    if (count === 6){return <Step6/>}
}

export default Step;