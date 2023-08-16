import {useState} from "react"
import {Link} from "react-router-dom"

const BASE_URL = `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}`


export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function loginUser(event){
        try {
            event.preventDefault();
            const response = await fetch(`${BASE_URL}/users/login`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                user: {
                  username: username,
                  password: password
                }
              })
            });
            const result = await response.json();
            console.log(result);

            localStorage.setItem("token", result.data.token)
            localStorage.setItem("user", username)

            return result
          } catch (err) {
            console.error(err);
          }
    }

    return(
    
    <>
        <Link id="nav-login-link" to="/login">Log In</Link>
        <form id="nav-login-form" onSubmit={(event)=>loginUser(event)}>

            <label htmlFor="username">Username:</label>
            <input className="login-input" type="text" id="username" name = "username" value ={username} onChange={(event)=>setUsername(event.target.value)} />

            <label htmlFor="password">Password:</label>
            <input className="login-input" type="password" id="password" name="password" value ={password} onChange={(event)=>setPassword(event.target.value)} />

            <input id = "login-button" type="submit" value="Log In" />
        </form>
    
    </>
    )
}