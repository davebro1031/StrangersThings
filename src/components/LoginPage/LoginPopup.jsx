import React from 'react'
import { useNavigate } from "react-router-dom"
import '../../styles/Popup.css'


function LoginPopup(props) {

    const navigate = useNavigate();

    if(props.trigger){
        setTimeout(() => {
            if(props.path==="/login"){
                props.setPopup(false)
            }
            navigate(props.path)
        }, 1000)
    }

    return (
        <>
            {props.trigger?
                <div className="popup">
                    <div className={["popup-inner",props.messageType].join(" ")}>
                        {props.message}
                    </div>
                </div>:null        
            }
        </>

    )
}

export default LoginPopup
