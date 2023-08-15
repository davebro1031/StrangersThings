import {useState} from "react"
import {Link} from "react-router-dom"

const BASE_URL = `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}`


export default function LoginPage(){

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
    
    <div id="login-page">
        <h2>Login to Stranger's Things</h2>
        <form id="login-page-form" onSubmit={(event)=>loginUser(event)}>

            <div>
                <input className="login-input" type="text" id="username" name = "username" placeholder="username" value ={username} onChange={(event)=>setUsername(event.target.value)} />
                <div className="input-error">The username you entered isn't connected to an account.</div>
            </div>

            <div>
                <input className="login-input" type="password" id="password" name="password" placeholder="password" value ={password} onChange={(event)=>setPassword(event.target.value)} />
                <div className="input-error">The password you've entered is incorrect.</div>
            </div>

            <input id = "login-button" type="submit" value="Log In" />
        </form>
        <Link to="/newuser">Don't have an account?</Link>
    
    </div>
    )
}