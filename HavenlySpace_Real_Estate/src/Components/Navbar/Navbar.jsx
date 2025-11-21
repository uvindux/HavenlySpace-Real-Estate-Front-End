import React from 'react'
import './Navbar.scss'
function Navbar() {
  return (
    <nav>
          <div className="left">
            <a href="/">
            <img src="/logo.png" alt="" srcset="" />
            <span>HavenlySpace</span>
            </a>
            <a href="http://">Home</a>
            <a href="http://">About</a>
            <a href="http://">Contact</a>
            <a href="http://">Age</a>
          </div>
          <div className="right">

            <a href="http://">SIGN IN</a>
            <a href="http://">SIGN UP</a>
          </div>
    </nav>
  )
}

export default Navbar