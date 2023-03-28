import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SevenDay = props => {

    const [ forcast, setForcast ] = useState()
    const [ days, setDays ] = useState(7)
    const [ chosenDays, setChosenDays ] = useState(7)

    useEffect(function loadSevenDayForcast(){
        axios.get(process.env.REACT_APP_SEVENDAY_URL)
        .then(result=>{
            setForcast(result.data.dataseries)
        })
        .catch(error=>console.lof(error))
    },[])

    const handleDaysChange = event => {
        setDays(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        setChosenDays(days)
    }
    
    return<>
        <h2>Seven Day Weather</h2>
        <form onSubmit={event=>handleFormSubmit(event)}>
            <label>
                Choose number of days to display:
                <input type="number" min="1" max="7" value={days} onChange={event=>handleDaysChange(event)}/>
            </label>
            <button>Submit your choice</button>
        </form>
        {forcast ?
        <ul>
            {forcast.slice(0, chosenDays).map(day=><li key={day.date}>
                <h3>{day.date}</h3>
                <div>Temperature: high {day.temp2m.max}, low {day.temp2m.min}</div>
                <div>Conditions: {day.weather} </div>
            </li>)}
        </ul>
        : <div>Updating...</div>
        }
    </>
}

export default SevenDay