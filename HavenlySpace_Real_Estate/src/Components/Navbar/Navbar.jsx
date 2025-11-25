import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="/">Logo</a>
        </div>

        <button 
          className={`navbar__toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#agent">Agent</a></li>
          </ul>

          <div className="navbar__auth">
            <button className="navbar__btn navbar__btn--login">Login</button>
            <button className="navbar__btn navbar__btn--register">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;