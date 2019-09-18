import React from "react";

// A basic Jumbotron for the page
function Jumbotron(props) {
  return(
  <div className="jumbotron border border-dark text-center">
    <h1 className="display-4">Google Books Search</h1>
    <p className="lead">Search for and Save Books of Interest.</p>
  </div>);
}

export default Jumbotron