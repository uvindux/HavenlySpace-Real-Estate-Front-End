import React from 'react'
import './AuthenticationPage.scss'
import { useState } from 'react';
import axios from 'axios';


function AuthenticationPage() {
                    const [isLogin, setIsLogin] = useState(false);
                    const [formData, setFormData] = useState({
                              username: '',
                              email: '',
                              password: ''
                    });

                    const handleInputChange = (e) => {
                              setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value
                              });
                    };

                    const handleSubmit = async(e) => {
                              e.preventDefault();
                              console.log('Form submitted:', formData);
                              // Add your form submission logic here
                              const username = formData.username;
                              const email = formData.email;
                              const password = formData.password;
                              try {
                                        const response = await axios.post("http://localhost:8800/api/auth/register", {
                                                  username,email,password
                                        });
                                        setIsLogin(true); 
                              } catch (err) {
                                        seterror(err.response.data.message);
                                        
                              }
                              // console.log(username, email, password);

                              }
                              
                 

                    const toggleForm = () => {
                              setIsLogin(!isLogin);
                              setFormData({ username: '', email: '', password: '' });
          };
          const [error, seterror] = useState("");

                    return (
                              <>
                                      

                                                  <div className="HomePage">
                                                            <div className="textContainer">

                                                                      <div className="auth-container">
                                                                                <div className="auth-card">
                                                                                          <h1 className="auth-title">
                                                                                                    {isLogin ? 'Login to Account' : 'Create an Account'}
                                                                                          </h1>

                                                                                          <form className="auth-form" onSubmit={handleSubmit}>
                                                                                                    {!isLogin && (
                                                                                                              <input
                                                                                                                        type="text"
                                                                                                                        name="username"
                                                                                                                        placeholder="Username"
                                                                                                                        className="auth-input"
                                                                                                                        value={formData.username}
                                                                                                                        onChange={handleInputChange}
                                                                                                                        required
                                                                                                              />
                                                                                                    )}

                                                                                                    <input
                                                                                                              type="email"
                                                                                                              name="email"
                                                                                                              placeholder="Email"
                                                                                                              className="auth-input"
                                                                                                              value={formData.email}
                                                                                                              onChange={handleInputChange}
                                                                                                              required
                                                                                                    />

                                                                                                    <input
                                                                                                              type="password"
                                                                                                              name="password"
                                                                                                              placeholder="Password"
                                                                                                              className="auth-input"
                                                                                                              value={formData.password}
                                                                                                              onChange={handleInputChange}
                                                                                                              required
                                                                                                    />

                                                                                                    <button type="submit" className="auth-button">
                                                                                                              {isLogin ? 'Login' : 'Register'}
                                                                                          </button>
                                                                                          {error && <p className="error-message">{error}</p>}
                                                                                          </form>

                                                                                          <p className="auth-toggle">
                                                                                                    {isLogin ? "Don't have an account? " : 'Do you have an account? '}
                                                                                                    <span onClick={toggleForm} className="auth-link">
                                                                                                              {isLogin ? 'Register' : 'Login'}
                                                                                                    </span>
                                                                                          </p>
                                                                                </div>
                                                                      </div>



                                                            </div>

                                                            <div className="imageContainer"><img src="/bg.png" alt="" srcset="" /></div>

                                                  </div>
                                      

                              </>
                    )
          }

          export default AuthenticationPage;          
