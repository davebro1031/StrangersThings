import React from "react";
import App from "../../../App";

const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="NavBar">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="Stranger's Things">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Messages">
            Messages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="My Posts">
            My Posts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="All Listings">
            All Listings
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="NavBarDropDownMenu"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown link
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="Messages">
              Welcome to messages
            </a>
            <a className="dropdown-item" href="My Posts">
              Here are the Posts you've created
            </a>
            <a className="dropdown-item" href="All Listings">
              These are all available listings
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);
};
export default Navbar 