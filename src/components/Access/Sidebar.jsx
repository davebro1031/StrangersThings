import { Link } from "react-router-dom";
import Search from "./Search";

export default function Sidebar() {

  return (
    <div id="side-bar">
      <ul style={{ listStyle: "none" }}>
        <li>
          <Search/>
        </li>
        
        {localStorage.getItem("user")?
        <li>
          <Link to="messages">My Messages</Link>
        </li>
        :
        null
        }
      </ul>
    </div>
  );
}
