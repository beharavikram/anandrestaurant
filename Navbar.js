import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Restaurant Name</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;