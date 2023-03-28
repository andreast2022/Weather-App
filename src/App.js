import React from 'react';
import { useState } from 'react'
import Current from './Current.js'
import SevenDay from './SevenDay.js'

const App = props => {

    const [type, setType] = useState()

    const handleChange = weatherType => {
        setType(weatherType)
    }

    let forcast
    if ( type === "current") {
        forcast = <Current />
    }else if ( type === "7-day") {
        forcast = <SevenDay />
    }


    return (<>
        <h1>Weather Forecast!</h1>
        <form>
            <fieldset>
                <legend>Choose weather forcast type </legend>
                <label>
                    Current real-time weather
                    <input type="radio" name="type" onChange={()=>handleChange("current")} />
                </label>
                <label>
                    7-day Forecast
                    <input type="radio" name="type" onChange={()=>handleChange("7-day")} />
                </label>
            </fieldset>
        </form>
        {forcast}
    </>);
}

export default App;