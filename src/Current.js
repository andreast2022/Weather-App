import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Current = props => {

    const [ currentWeather, setCurrentWeather ] = useState()

    useEffect(function loadCurrentWeather(){
        const reload = ()=>{
            axios.get(process.env.REACT_APP_CURRENT_URL)
            .then(result=>{
                let time = new Date()
                setCurrentWeather({
                    ...result.data.dataseries[0],
                    time: `${time.getHours()}: ${time.getMinutes()} : ${time.getSeconds()}`
                })

            })
            .catch(error=>console.log(error))
        }
        let reloadTimer = setInterval(reload, 6000)
        reload()

        return function stopReloading(){
            clearInterval(reloadTimer)
        }
    },[])

    return<>
        <h2>Current Weather</h2>
        {currentWeather ? 
        <div>
            <div>Temperature: {currentWeather.temp2m} </div>
            <div>Time: {currentWeather.time} </div>

        </div> 
            : 
        <div>Updating...</div>}
    </>
}

export default Current