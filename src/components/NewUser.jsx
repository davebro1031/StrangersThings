import {useState} from "react"

const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

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
        <form onSubmit={(event)=>loginUser(event)}>
        
            <h3>New User</h3>

            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name = "newUsername" value ={newUsername} onChange={(event)=>setNewUsername(event.target.value)} />
            <br/>

            <label htmlFor="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" value ={newPassword} onChange={(event)=>setNewPassword(event.target.value)} />
            <br/>

            <label htmlFor="passwordConfirm">Password:</label>
            <input type="password" id="passwordConfirm" name="passwordConfirm" value ={passwordConfirm} onChange={(event)=>setPasswordConfirm(event.target.value)} />
            <br/>

            <input type="submit" value="submit" />
        </form>
    )
}