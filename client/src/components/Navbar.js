import React from "react";

// The navbar at the top of the page
function Navbar(props) {
  return(
    <nav className="navbar bg-dark navbar-dark mb-2">
      <a className="navbar-brand" href="/">Google Books</a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;