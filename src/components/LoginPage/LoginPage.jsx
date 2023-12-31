import {useState, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"
import LoginPopup from "./LoginPopup"

const BASE_URL = `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}`


export default function LoginPage(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [popup, setPopup] = useState(false)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const [path, setPath] = useState("")
    const [fire, setFire] = useState(false)

    const location = useLocation()

    useEffect(()=>{
      if(location.state){
        setUsername(location.state.username)
        setPassword(location.state.password)
        setFire(true)
      }
    },[])

    useEffect(()=>{
      if(fire){
        loginUser()
      }
    },[fire])

    async function loginUser(){
        try {
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

            setPopup(true)
            if(result.success){
              localStorage.setItem("token", result.data.token)
              localStorage.setItem("user", username)

              setMessage("Login Successful!")
              setMessageType("success")
              setPath("/")

            }else if(result.error.name==="InvalidCredentials"){
              console.log(username)
              setMessage("Username and password do not match")
              setMessageType("fail")
              setPath("/login")
            }

          } catch (err) {
            console.error(err);
          }
    }

    return(
    
    <div className="form-container">
        <h2>Login to Stranger's Things</h2>
        <form className="form" onSubmit={(event)=>{event.preventDefault();loginUser()}}>

            <div>
                <input required className="login-input" type="text" name = "username" placeholder="username" value ={username} onChange={(event)=>setUsername(event.target.value)} />
            </div>

            <div>
                <input required className="login-input" type="password" name="password" placeholder="password" value ={password} onChange={(event)=>setPassword(event.target.value)} />
            </div>

            <input className = "button-1" type="submit" value="Log In" />
        </form>
        <Link to="/newuser">Don't have an account?</Link>
        <LoginPopup 
          trigger={popup} 
          message={message} 
          messageType={messageType} 
          path={path}
          setPopup={setPopup}
        />
    </div>
    )
}