import React from 'react'
import './Navbar.scss'
function Navbar() {
  return (
    <nav>
          <div className="left">
            <a href="/"className="Logo">
            <img src="../../logo.png" alt="" srcset="" />
            <span>HavenlySpace</span>
            </a>
            <a href="http://">Home</a>
            <a href="http://">About</a>
            <a href="http://">Contact</a>
            <a href="http://">Age</a>
          </div>
          <div className="right">

            <a href="http://" className='LoginBtn'>Login</a>
            <a href="http://" className='RegisterBtn'>Registration</a>
          </div>
    </nav>
  )
}

export default Navbar