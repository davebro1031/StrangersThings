import React from 'react'
import { Link } from 'react-router-dom'

function SelectedUserPostPopup({trigger, setTrigger, id, title, description, price, deliver, created, updated, location}) {
  
    function parseDateProp(dateProp){
        const monthProp = parseInt(dateProp.slice(5,7))
        const dayProp = parseInt(dateProp.slice(8,10))
        const hourProp = parseInt(dateProp.slice(11,13))
        const minuteProp = parseInt(dateProp.slice(14,16))
        
        return {month: monthProp, day: dayProp, hour: hourProp, minute: minuteProp}
    }

    if(trigger){
        const date = new Date()

        const dateCurr = {month: date.getMonth() + 1, day: date.getDate(), hour: date.getHours(), minute: date.getMinutes()}

        console.log(dateCurr)
        console.log(parseDateProp(created))
        console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
        console.log(date.getTimezoneOffset())

    }
    

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
                            {/* <div>Current Time: {time}</div> */}
                        </div>
                    </div>
                </Link>
            </div>:null
    )
}

export default SelectedUserPostPopup
