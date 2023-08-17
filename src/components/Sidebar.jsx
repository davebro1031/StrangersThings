import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div id="side-bar">
      Side bar - we can use this space for links like a searchbar, filters, and
      messages/inbox if you're logged in
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="messages">My Messages</Link>
        </li>
      </ul>
    </div>
  );
}
