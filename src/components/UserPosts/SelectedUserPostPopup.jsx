import React from 'react'

function SelectedUserPostPopup({trigger, setTrigger, id, title, description, price, deliver, created, updated, location}) {
  return (
    trigger?
        <div className="popup" onClick={()=>setTrigger(false)}>
            {/* <Link to="">  WE CAN TURN THIS INTO A LINK TO THE FULL POST PAGE THAT HAS MESSAGING OPTIONS ETC.*/}
            <div className="popup-inner popup-neutral">
                
                Popup with all the post details! 
                {id}   .
                {title}  . 
                {description}   .
                {price}   .
                {deliver}   .
                {created}   .
                {updated}   .
                {location}
            </div>
            {/* </Link> */}

        </div>:null
  )
}

export default SelectedUserPostPopup
