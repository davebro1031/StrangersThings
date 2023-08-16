import React from 'react'
import { useNavigate } from "react-router-dom"
import './Popup.css'


function RegisteredPopup(props) {
    const navigate = useNavigate();

    if(props.trigger){
        setTimeout(() => navigate("/login"), 2000)
    }

    return (
        <>
            {props.trigger?
    
                <div className='popup'>
                    <div className='popup-inner'>
                        Successfully registered!
                    </div>
                </div>:
                null
            }
        </>
    )
}

export default RegisteredPopup
