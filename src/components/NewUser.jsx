import {useState} from "react"

const BASE_URL = `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}`

export default function NewUser(){
    
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    
    async function loginUser(event){
        try {
            event.preventDefault();
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
              return result
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
                    <ErrorNewUser newUsername={newUsername}/>
                </div>

                <div>
                    <input required type="password" id="newPassword" name="newPassword" placeholder="password" value ={newPassword} onChange={(event)=>setNewPassword(event.target.value)} />
                    <ErrorNewPass newPassword={newPassword}/>
                </div>

                <div>
                    <input required type="password" id="passwordConfirm" name="passwordConfirm" placeholder="confirm password" value ={passwordConfirm} onChange={(event)=>setPasswordConfirm(event.target.value)} />
                    <ErrorConfirmPass match={newPassword===passwordConfirm}/>
                </div>

                <input type="submit" value="Register" id="register-user" />
            </form>
        </div>
        
    )
}

function ErrorNewUser({newUsername}){
    return <div className="input-error">not available {newUsername}</div>

}

function ErrorNewPass({newPassword}){

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

function ErrorConfirmPass({match}){
    return <>{match? null: <div className="input-error">passwords must match</div>}</>
}