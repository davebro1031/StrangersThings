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
                    <input type="text" id="newUsername" name = "newUsername" placeholder="username" value ={newUsername} onChange={(event)=>setNewUsername(event.target.value)} />
                    <div className="input-error">not available</div>
                </div>

                <div>
                    <input type="password" id="newPassword" name="newPassword" placeholder="password" value ={newPassword} onChange={(event)=>setNewPassword(event.target.value)} />
                    <div>
                        <div className="input-error">must contain at least 4 characters</div>
                        <div className="input-error">must contain at least one uppercase letter</div>
                        <div className="input-error">must contain at least one lowercase letter</div>
                        <div className="input-error">must contain at least one special character (!"#$%&'()*+,-./:;=?@[\]^_`|~)</div>
                    </div>
                </div>

                <div>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="confirm password" value ={passwordConfirm} onChange={(event)=>setPasswordConfirm(event.target.value)} />
                    <div className="input-error">passwords must match</div>
                </div>

                <input type="submit" value="Register" id="register-user" />
            </form>
        </div>
        
    )
}