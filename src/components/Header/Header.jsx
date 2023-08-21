import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
  const currentUser = localStorage.getItem("user");
  const navigate = useNavigate();

  function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <header>
      <Link to="/">
        <div id="header-logo">Stranger's Things</div>
      </Link>
      <div id="header-content">
        {currentUser ? (
          <>
            <h3>Hello, {capitalizeFirstLetter(currentUser)}</h3>
            <button
              className="button-1"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
                window.location.reload(true);
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <Login />
        )}
      </div>
    </header>
  );
}
