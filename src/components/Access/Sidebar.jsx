import { Link } from "react-router-dom";
import Search from "./Search";

export default function Sidebar() {

  return (
    <div id="side-bar">
      Side bar - we can use this space for links like a searchbar, filters, and
      messages/inbox if you're logged in
      <ul style={{ listStyle: "none" }}>
        {localStorage.getItem("user")?
        <li>
          <Search/>
          <Link to="messages">My Messages</Link>
        </li>
        :
        null
        }
      </ul>
    </div>
  );
}
