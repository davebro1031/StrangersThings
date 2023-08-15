import {useState} from "react"

const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



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
    <form id="login" onSubmit={(event)=>loginUser(event)}>

        <label htmlFor="username">Username:</label>
        <input className="login-input" type="text" id="username" name = "username" value ={username} onChange={(event)=>setUsername(event.target.value)} />

        <label htmlFor="password">Password:</label>
        <input className="login-input" type="password" id="password" name="password" value ={password} onChange={(event)=>setPassword(event.target.value)} />

        <input id = "login-button" type="submit" value="login" />
    </form>
    )
}