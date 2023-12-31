import { Link } from "react-router-dom";
import Search from "./Search";
import { useLocation } from "react-router-dom";

export default function Sidebar({ query, setQuery }) {
  const location = useLocation();

  return (
    <>
      <div id="sidebar">
        <ul id="sidebar-list">
          <li>
            <Search query={query} setQuery={setQuery} />
          </li>

          <li>
            <Link to="">All Listings</Link>
          </li>

          {localStorage.getItem("user") ? (
            <>
              <li>
                <Link to="messages">My Messages</Link>
              </li>

              <li>
                <Link to="userposts">My Posts</Link>
              </li>

              {/* {!(location.pathname === "/makeposts") ? (
                <li>
                  <Link to="makeposts">Create New Post</Link>
                </li>
              ) : null} */}
              {!(location.pathname === "/postcreator") ? (
                <li>
                  <Link to="postcreator">Create New Post</Link>
                </li>
              ) : null}
            </>
          ) : null}
        </ul>
      </div>
    </>
  );
}
