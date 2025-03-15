import React from 'react';
import "@fortawesome/fontawesome-free";


const Navbar = ({ onLoginClick }) => {
  return (
    <>
      <header>
        <div id="menu-bar" className="fas fa-bars"></div>

        <a href="/" className="logo">
          Jaipur_<span>T</span>ravels
        </a>

        <nav className="navbar">
          <a href="/">home</a>
        
          <a href="/packages">packages</a>
          <a href="/fecilitys">services</a>
          <a href="/gallery">gallery</a>
          <a href="/contact">contact</a>
        </nav>

        <div className="icons">
          <i className="fas fa-search" id="search-btn">
           
          </i>
          <i className="fas fa-user" id="login-btn" onClick={onLoginClick}>
          
          </i>
        </div>
      </header>
    </>
  );
};

export default Navbar;