import React from "react";

export default function Navbar() {
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="NavBar">
      NavBar
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
        <li className="Messages">
          <a className="nav-link" href="Messages">
            Messages
          </a>
        </li>
        <li className="my Posts">
          <a className="nav-link" href="My Posts">
            My Posts
          </a>
        </li>
        <li className="All Listings">
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
            <a className="dropdown-item" href="Drop down Messages">
             
            </a>
            <a className="dropdown-item" href="Drop down My Posts">
              
            </a>
            <a className="dropdown-item" href="Drop down All Listings">
            
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  );
}
