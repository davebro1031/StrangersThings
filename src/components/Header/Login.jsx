import {useState} from "react"
import {Link, useNavigate, useLocation} from "react-router-dom"

export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    return(
      location.pathname==="/login"? null:
      <>
        
        <Link id="header-login-link" className="button-1" to="/login">Log In</Link>

        <div id="header-login-form">
          <label htmlFor="username">Username:</label>
          <input className="header-input" type="text" name = "username" value ={username} onChange={(event)=>setUsername(event.target.value)} />

          <label htmlFor="password">Password:</label>
          <input className="header-input" type="password" name="password" value ={password} onChange={(event)=>setPassword(event.target.value)} />

          <button className = "button-1" onClick={()=>navigate("/login", {state:{username: username, password:password}} ) } >Log In</button>
        </div>
        <Link id="header-new-user" to="/newuser">New User</Link>

      </>
      
    )
}