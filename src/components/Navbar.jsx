import {Link} from "react-router-dom"
import Login from "./Login"

export default function Navbar({currentToken, currentUser, setCurrentToken, setCurrentUser}){
    return (
        <nav>
            <Link to="/">
                <div id="nav-logo">Stranger's Things</div>
            </Link>
            <div id="nav-content">
                {currentUser?
                    <>
                        <h3>{currentUser}</h3>
                        <button className="button-1" 
                            onClick={()=>{
                                setCurrentToken(null)
                                setCurrentUser(null)
                                localStorage.removeItem("token")
                                localStorage.removeItem("user")
                            }}>
                            Log Out
                        </button>
                    </>
                    :
                    <>
                        <Login/>
                        <Link id="nav-new-user" to="/newuser">New User</Link>
                    </>
                }
            </div>
        </nav>
    )
}