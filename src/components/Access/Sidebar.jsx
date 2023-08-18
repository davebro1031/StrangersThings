import { Link } from "react-router-dom";
import Search from "./Search";
import { useLocation } from "react-router-dom";

export default function Sidebar({query, setQuery}) {

  const location = useLocation()

  return (
    <div id="sidebar">
      <ul id="sidebar-list">

        <li><Search query={query} setQuery={setQuery}/></li>

        {!(location.pathname==="/")?<li><Link to="">All Listings</Link></li>:null}
        
        {localStorage.getItem("user")?
        <>
          {!(location.pathname==="/messages")?<li><Link to="messages">My Messages</Link></li>:null}
          {!(location.pathname==="/userposts")?<li><Link to="userposts">My Posts</Link></li>:null}
        </>
        :
        null
        }
      </ul>
    </div>
  );
}
