import {useState, useEffect} from "react"
import RegisteredPopup from "./RegisteredPopup"

const BASE_URL = `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}`

export default function NewUser(){
    
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    
    const [nameAvailable, setNameAvailable] = useState(true)
    const [passLongEnough, setPassLongEnough] = useState(false)
    const [passContainsNum, setPassContainsNum] = useState(false)
    const [passContainsLower, setPassContainsLower] = useState(false)
    const [passContainsUpper, setPassContainsUpper] = useState(false)
    const [passContainsSpecial, setPassContainsSpecial] = useState(false)
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    
    const [popup, setPopup] = useState(false)

    useEffect(()=>{

        setPassLongEnough(newPassword.length>=4)
        setPassContainsNum(/\d/.test(newPassword))
        setPassContainsLower(newPassword.toUpperCase() != newPassword)
        setPassContainsUpper(newPassword.toLowerCase() != newPassword)
        setPassContainsSpecial(/[!"#$%&'()*+,-./:;=?@[\]^_`|~]/.test(newPassword))

    },[newPassword])

    useEffect(()=>{
        setPasswordsMatch(newPassword===passwordConfirm)
    },[newPassword, passwordConfirm])

    async function loginUser(event){
        try {
            event.preventDefault();
            if(
                passLongEnough &&
                passContainsNum &&
                passContainsLower &&
                passContainsUpper &&
                passContainsSpecial &&
                passwordsMatch
            ){

                const response = await fetch(
                    `${BASE_URL}/users/register`, {
                    method: "POST",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    user: {
                        username: newUsername,
                        password: newPassword
                    }
                    })
                });
                const result = await response.json();
                console.log(result)

                if(result.success){
                    localStorage.setItem("token", result.data.token)
                    localStorage.setItem("user", newUsername)

                    setNameAvailable(true);
                    setPopup(true);
                    
                }else if(result.error.name==="UserExists"){
                    setNameAvailable(false)
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="form-container">
            <h2>Create an Account</h2>
            
            <form id="new-user-form" onSubmit={(event)=>loginUser(event)}>
        
                <div>
                    <input required type="text" id="newUsername" name = "newUsername" placeholder="username" value ={newUsername} onChange={(event)=>setNewUsername(event.target.value)} />
                    {nameAvailable?null:<div className="input-error">username not available</div>}
                </div>

                <div>
                    <input required type="password" id="newPassword" name="newPassword" placeholder="password" value ={newPassword} onChange={(event)=>setNewPassword(event.target.value)} />
                    {passLongEnough? null: <div className="input-error">must contain at least 4 characters</div>}
                    {passContainsNum? null: <div className="input-error" >must contain at least one number</div>}
                    {passContainsLower? null: <div className="input-error">must contain at least one lower case letter</div>}
                    {passContainsUpper? null: <div className="input-error">must contain at least one uppercase letter</div>}
                    {passContainsSpecial? null: <div className="input-error">must contain at least one special character (!"#$%&'()*+,-./:;=?@[\]^_`|~)</div>}
                </div>

                <div>
                    <input required type="password" id="passwordConfirm" name="passwordConfirm" placeholder="confirm password" value ={passwordConfirm} onChange={(event)=>setPasswordConfirm(event.target.value)} />
                    {passwordsMatch? null: <div className="input-error">passwords must match</div>}
                </div>

                <input type="submit" value="Register" className="button-1" />
            </form>
            <RegisteredPopup trigger={popup}/>
        </div>
        
    )
}