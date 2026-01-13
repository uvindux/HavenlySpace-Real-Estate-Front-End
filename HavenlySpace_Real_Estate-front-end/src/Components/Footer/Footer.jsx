import React from 'react'
import './Footer.scss'

function Footer() {
  return (
            <footer className="footer">
                      <div className="footer-content">
                                <div className="footer-section">
                                          <h3>Real Estate</h3>
                                          <p>Your trusted partner in finding the perfect property.</p>
                                </div>
                                <div className="footer-section">
                                          <h4>Quick Links</h4>
                                          <ul>
                                                    <li><a href="#home">Home</a></li>
                                                    <li><a href="#about">About</a></li>
                                                    <li><a href="#services">Services</a></li>
                                                    <li><a href="#contact">Contact</a></li>
                                          </ul>
                                </div>
                                <div className="footer-section">
                                          <h4>Services</h4>
                                          <ul>
                                                    <li><a href="#buy">Buy Property</a></li>
                                                    <li><a href="#sell">Sell Property</a></li>
                                                    <li><a href="#rent">Rent Property</a></li>
                                                    <li><a href="#manage">Property Management</a></li>
                                          </ul>
                                </div>
                                <div className="footer-section">
                                          <h4>Follow Us</h4>
                                          <div className="social-links">
                                                    <a href="#facebook">Facebook</a>
                                                    <a href="#twitter">Twitter</a>
                                                    <a href="#instagram">Instagram</a>
                                                    <a href="#linkedin">LinkedIn</a>
                                          </div>
                                </div>
                      </div>
                      <div className="footer-bottom">
                                <p>&copy; 2024 Real Estate. All rights reserved.</p>
                      </div>
            </footer>
  )
}

export default Footer
