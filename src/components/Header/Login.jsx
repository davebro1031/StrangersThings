import {useState} from "react"
import {Link, useNavigate, useLocation} from "react-router-dom"

const BASE_URL = `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}`


export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.pathname==="/login")


    return(
    
      <>
        
        <Link id="nav-login-link" className="button-1" to="/login">Log In</Link>

        <div id="nav-login-form">
          <label htmlFor="username">Username:</label>
          <input className="nav-input" type="text" name = "username" value ={username} onChange={(event)=>setUsername(event.target.value)} />

          <label htmlFor="password">Password:</label>
          <input className="nav-input" type="password" name="password" value ={password} onChange={(event)=>setPassword(event.target.value)} />

          <button className = "button-1" onClick={()=>navigate("/login", {state:{username: username, password:password}} ) } >Log In</button>
        </div>
      </>
      
    )
}