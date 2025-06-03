import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#home">EventsForU</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#events">Events</a>
            <a className="nav-link" href="#contact">Contact</a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
