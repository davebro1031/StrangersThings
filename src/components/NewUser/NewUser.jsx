import {useState} from "react"
import RegisteredPopup from "./RegisteredPopup"

const BASE_URL = `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}`

export default function NewUser(){
    
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [nameAvailable, setNameAvailable] = useState(true)
    const [popup, setPopup] = useState(false)
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [confirmCheck, setConfirmCheck] = useState(false)

    async function loginUser(event){
        try {
            event.preventDefault();
            if(passwordCheck && confirmCheck){

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
        <div id="new-user-page">
            <h2>Create an Account</h2>
            
            <form id="new-user-form" onSubmit={(event)=>loginUser(event)}>
        
                <div>
                    <input required type="text" id="newUsername" name = "newUsername" placeholder="username" value ={newUsername} onChange={(event)=>setNewUsername(event.target.value)} />
                    <ErrorNewUser nameAvailable={nameAvailable}/>
                </div>

                <div>
                    <input required type="password" id="newPassword" name="newPassword" placeholder="password" value ={newPassword} onChange={(event)=>setNewPassword(event.target.value)} />
                    <ErrorNewPass newPassword={newPassword} setPasswordCheck={setPasswordCheck}/>
                </div>

                <div>
                    <input required type="password" id="passwordConfirm" name="passwordConfirm" placeholder="confirm password" value ={passwordConfirm} onChange={(event)=>setPasswordConfirm(event.target.value)} />
                    <ErrorConfirmPass match={newPassword===passwordConfirm} setConfirmCheck={setConfirmCheck}/>
                </div>

                <input type="submit" value="Register" id="register-user" />
            </form>
            <RegisteredPopup trigger={popup}/>
        </div>
        
    )
}

function ErrorNewUser({nameAvailable}){
    return <>{nameAvailable?null:<div className="input-error">username not available</div>}</>
}

function ErrorNewPass({newPassword, setPasswordCheck}){

    function containsNumber(str){
        return /\d/.test(str)
    }

    function containsLowercase(str){
        return str.toUpperCase() != str;
    }

    function containsUppercase(str){
        return str.toLowerCase() != str;
    }

    function containsSpecial(str){
        let special = /[!"#$%&'()*+,-./:;=?@[\]^_`|~]/
        return special.test(str)
    }

    setPasswordCheck(
        newPassword.length>=4 &&
        containsLowercase(newPassword) &&
        containsUppercase(newPassword) &&
        containsNumber(newPassword) &&
        containsSpecial(newPassword)
    )

    return (
        <div>
            {newPassword.length>=4?null:<div className="input-error">must contain at least 4 characters</div>}
            {containsLowercase(newPassword)?null:<div className="input-error">must contain at least one lowercase letter</div>}
            {containsUppercase(newPassword)?null:<div className="input-error">must contain at least one uppercase letter</div>}
            {containsNumber(newPassword)?null:<div className="input-error">must contain at least one number</div>}
            {containsSpecial(newPassword)?null:<div className="input-error">must contain at least one special character (!"#$%&'()*+,-./:;=?@[\]^_`|~)</div>}
        </div>
    )
}

function ErrorConfirmPass({match, setConfirmCheck}){
    setConfirmCheck(match)
    return <>{match? null: <div className="input-error">passwords must match</div>}</>
}