import React, { useState, useContext } from 'react';
import './AuthenticationPage.scss';
import apiRequest from '../../lib/apiRequest.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';

function AuthenticationPage() {
          const { updateUser } = useContext(AuthContext);
          const navigate = useNavigate();
          const [isLogin, setIsLogin] = useState(false);
          const [formData, setFormData] = useState({
                    username: '',
                    email: '',
                    password: ''
          });
          const [error, setError] = useState('');
          const [isLoading, setIsLoading] = useState(false);

          const handleInputChange = (e) => {
                    setFormData({
                              ...formData,
                              [e.target.name]: e.target.value
                    });
          };

          const handleSubmit = async (e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    setError('');

                    try {
                              if (!isLogin) {
                                        // Registration
                                        const { username, email, password } = formData;
                                        const response = await apiRequest.post('/auth/register', { username, email, password });
                                        console.log('Registration successful:', response.data);
                                        window.userDebug = response.data;
                                        updateUser(response.data);
                                        setIsLogin(true);
                              } else {
                                        // Login
                                        const { email, password } = formData;
                                        const response = await apiRequest.post('/auth/login', { email, password });
                                        console.log('Login successful:', response.data);
                                        window.userDebug = response.data;
                                        updateUser(response.data);
                                        // Redirect to user's profile page
                                        navigate('/profile');
                              }
                    } catch (err) {
                              setError(err.response?.data?.message || 'An error occurred');
                              console.error('Full error:', err);
                    } finally {
                              setIsLoading(false);
                    }
          };


          const toggleForm = () => {
                    setIsLogin(!isLogin);
                    setFormData({ username: '', email: '', password: '' });
                    setError('');
          };

          return (
                    <div className="HomePage">
                              <div className="textContainer">
                                        <div className="auth-container">
                                                  <div className="auth-card">
                                                            <h1 className="auth-title">{isLogin ? 'Login to Account' : 'Create an Account'}</h1>

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
                                                                                required={!isLogin}
                                                                      // disable email on login form (optional)
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

                                                                      <button type="submit" className="auth-button" disabled={isLoading}>
                                                                                {isLogin ? 'Login' : 'Register'}
                                                                      </button>

                                                                      {error && <p className="error-message">{error}</p>}
                                                            </form>

                                                            <p className="auth-toggle">
                                                                      {isLogin ? "Don't have an account? " : 'Do you have an account? '}
                                                                      <span onClick={toggleForm} className="auth-link" style={{ cursor: 'pointer' }}>
                                                                                {isLogin ? 'Register' : 'Login'}
                                                                      </span>
                                                            </p>
                                                  </div>
                                        </div>
                              </div>

                              <div className="imageContainer">
                                        <img src="/bg.png" alt="Background" />
                              </div>
                    </div>
          );
}

export default AuthenticationPage;
