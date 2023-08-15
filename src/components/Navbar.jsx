import {Link} from "react-router-dom"
import Login from "./Login"

export default function Navbar(){
    return (
        <nav>
            <Link to="/">
                <div id="nav-logo">Stranger's Things</div>
            </Link>
            <div id="nav-content">
                <Login/>
                <Link to="/newuser">New User</Link>
            </div>
        </nav>
    )
}