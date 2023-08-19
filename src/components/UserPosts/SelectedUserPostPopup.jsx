import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SelectedUserPostPopup({trigger, setTrigger, id, title, description, price, deliver, created, updated, location}) {
  
    function parseDateProp(dateProp){
        const monthProp = parseInt(dateProp.slice(5,7))
        const dayProp = parseInt(dateProp.slice(8,10))
        const hourProp = parseInt(dateProp.slice(11,13))
        const minuteProp = parseInt(dateProp.slice(14,16))
        
        return {month: monthProp, day: dayProp, hour: hourProp, minute: minuteProp}
    }

    function compareDates(date1, date2){
        let days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let difference = {
            month: date2.month - date1.month,
            day: date2.day - date1.day,
            hour: date2.hour - date1.hour,
            minute: date2.minute - date1.minute
        }

        if(difference.minute < 0){
            difference.minute += 60
            difference.hour -= 1
        }

        if(difference.hour < 0){
            difference.hour += 24
            difference.day -= 1
        }

        return difference.minute

    }

    const [currentGMT, setCurrentGMT]=useState(null)
    async function getCurrentGMT(){
        try{
            const response = await fetch("http://api.timezonedb.com/v2.1/get-time-zone?key=Z1CROW4937CK&format=json&by=zone&zone=Africa/Abidjan")
            const result = await response.json()
            // console.log(result.formatted)
            setCurrentGMT(result.formatted)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        if(trigger){
            getCurrentGMT()
        }
    },[trigger])

    // useEffect(()=>{
    //     if(trigger){
    //         const date = new Date()
    
    //         const dateCurr = {month: date.getMonth() + 1, day: date.getDate(), hour: date.getHours(), minute: date.getMinutes()}
    
    //         console.log(dateCurr)

    //         console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    //         console.log(date.getTimezoneOffset())
    //     }

    // },[])
    

    return (
        trigger?
            <div className="popup" onClick={()=>setTrigger(false)}>
                <Link to={id}>
                    <div className="popup-inner popup-neutral post-popup">
                        <div className='post-title'> {title}</div>
                        <div className='post-description'>{description}</div>
                        <div className='post-body'>
                            <div>Price: ${price}</div>
                            {deliver?<div>Will Deliver</div>:null}
                            <div>Created at: {created}</div>
                            <div>Updated at: {updated}</div>
                            <div>Location: {location}</div>
                            {currentGMT?<div>Current GMT: {compareDates(parseDateProp(created), parseDateProp(currentGMT))}</div>:null}
                        </div>
                    </div>
                </Link>
            </div>:null
    )
}

export default SelectedUserPostPopup
