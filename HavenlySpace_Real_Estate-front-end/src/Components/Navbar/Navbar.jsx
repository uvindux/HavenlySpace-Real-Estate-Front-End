import React, { useState, useContext } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src="/logo.png" alt="Logo" className="navbar__img" />
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
              <li><a href="/" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>

            <div className="navbar__auth">
              {currentUser ? (
                <div className="user">
                  <img
                    src={
                      currentUser.profilePic ||
                      currentUser.avatar ||
                      currentUser.user?.avatar ||
                      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                    }
                    alt="User"
                    className="navbar__user-img"
                  />
                  <Link to="/profile">
                    <span className="navbar__user-name">{currentUser.username || currentUser.user?.username || currentUser.name || 'User'}</span>
                  </Link>

                  <button className="profile">
                    <div className="notification">3</div>
                    <Link to="/profile"><span>Profile</span></Link>
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <button className="navbar__btn navbar__btn--login">
                      Login
                    </button>
                  </Link>

                  <Link to="/register">
                    <button className="navbar__btn navbar__btn--register">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="navbar__overlay"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
