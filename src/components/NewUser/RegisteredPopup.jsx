import React from 'react'
import { useNavigate } from "react-router-dom"
import '../../styles/Popup.css'


function RegisteredPopup(props) {
    const navigate = useNavigate();

    if(props.trigger){
        setTimeout(() => navigate("/"), 1500)
    }

    return (
        <>
            {props.trigger?
    
                <div className='popup'>
                    <div className='popup-inner success'>
                        Successfully registered!
                    </div>
                </div>:
                null
            }
        </>
    )
}

export default RegisteredPopup
